const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || '';
const NEWS_API_KEY = process.env.NEWS_API_KEY || '';

// In-memory cache: avoid hitting API rate limits on repeated requests
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes
const newsCache = new Map();
function getCached(key) {
  const entry = newsCache.get(key);
  if (entry && Date.now() - entry.ts < CACHE_TTL) return entry.data;
  return null;
}
function setCached(key, data) {
  newsCache.set(key, { data, ts: Date.now() });
}

async function fetchNews(query, language, pageSize = 10) {
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=${language}&sortBy=publishedAt&pageSize=${pageSize}&apiKey=${NEWS_API_KEY}`;
  console.log('Fetching:', url.replace(NEWS_API_KEY, 'KEY'));
  const resp = await fetch(url);
  const data = await resp.json();
  console.log('NewsAPI status:', data.status, 'total:', data.totalResults, 'returned:', (data.articles || []).length);
  if (data.status !== 'ok') {
    console.error('NewsAPI error — code:', data.code, '| message:', data.message);
    return [];
  }
  const filtered = (data.articles || []).filter(a => a.title && a.title !== '[Removed]' && a.url);
  console.log(`NewsAPI filtered articles (${language}/${query}):`, filtered.length);
  return filtered;
}

const DUTCH_DOMAINS = ['nos.nl', 'tweakers.net', 'nu.nl', 'nrc.nl', 'volkskrant.nl', 'telegraaf.nl', 'ad.nl', 'rtlnieuws.nl', 'demorgen.be', 'knack.be'];
const INTL_DOMAINS = ['bbc.co.uk', 'sciencedaily.com', 'techcrunch.com', 'theguardian.com', 'computerweekly.com'];

function fixRegio(articles) {
  return articles.map(a => {
    if (!a.url) return a;
    try {
      const hostname = new URL(a.url).hostname;
      if (INTL_DOMAINS.some(d => hostname.includes(d))) return { ...a, regio: 'intl' };
      if (DUTCH_DOMAINS.some(d => hostname.includes(d))) return { ...a, regio: 'nl' };
    } catch {}
    return a;
  });
}

function dedup(articles) {
  const seen = new Set();
  return articles.filter(a => {
    if (seen.has(a.url)) return false;
    seen.add(a.url);
    return true;
  });
}

async function fetchRSS(url, sourceName) {
  try {
    console.log('Fetching RSS:', url);
    const resp = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 AI-Nieuws RSS Reader' } });
    if (!resp.ok) { console.error(`RSS ${sourceName} status ${resp.status}`); return []; }
    const xml = await resp.text();

    const articles = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null) {
      const item = match[1];

      const getField = (tag) => {
        const cdata = item.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`));
        if (cdata) return cdata[1].trim();
        const plain = item.match(new RegExp(`<${tag}[^>]*>([^<]*)<\\/${tag}>`));
        return plain ? plain[1].trim() : '';
      };

      const title = getField('title');
      const description = getField('description');
      const pubDate = getField('pubDate');
      let link = getField('link') || getField('guid');

      if (title && link) {
        articles.push({ title, url: link, description, publishedAt: pubDate, source: { name: sourceName } });
      }
    }

    console.log(`RSS ${sourceName}: ${articles.length} articles`);
    return articles;
  } catch (e) {
    console.error(`RSS fetch error for ${url}:`, e.message);
    return [];
  }
}

async function fetchGuardian(query, pageSize = 10) {
  try {
    const url = `https://content.guardianapis.com/search?q=${encodeURIComponent(query)}&api-key=test&page-size=${pageSize}&show-fields=trailText&order-by=newest`;
    console.log('Fetching Guardian:', query);
    const resp = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 AI-Nieuws' } });
    if (!resp.ok) { console.error(`Guardian status ${resp.status}`); return []; }
    const data = await resp.json();
    if (data.response?.status !== 'ok') { console.error('Guardian error:', data.response?.message); return []; }
    const articles = (data.response?.results || []).map(r => ({
      title: r.webTitle,
      url: r.webUrl,
      description: r.fields?.trailText || '',
      publishedAt: r.webPublicationDate,
      source: { name: 'The Guardian' }
    }));
    console.log(`Guardian: ${articles.length} articles`);
    return articles;
  } catch (e) {
    console.error('Guardian fetch error:', e.message);
    return [];
  }
}

async function summarize(articles, topic = null) {
  if (!articles.length) return [];

  const tekst = articles.map((a, i) =>
    `${i+1}. Titel: ${a.title}\nBron: ${a.source?.name || 'Onbekend'}\nURL: ${a.url}\nOmschrijving: ${a.description || 'Geen omschrijving'}`
  ).join('\n\n');

  console.log('Sending to Claude, articles:', articles.length, 'topic:', topic);

  const topicFilter = topic
    ? `Neem ALLEEN artikelen op die echt en direct over "${topic}" gaan in combinatie met AI. Sla artikelen over die slechts zijdelings of niet echt over "${topic}" gaan — ook al bevatten ze wel het woord AI.`
    : '';

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4000,
      system: 'Geef ALLEEN een geldige JSON-array terug. Geen tekst ervoor of erna. Geen markdown. Alleen de JSON array startend met [ en eindigend met ].',
      messages: [{
        role: 'user',
        content: `Vat deze nieuwsartikelen samen in het Nederlands. ${topicFilter} Geef een JSON-array terug met voor elk relevant artikel de volgende velden:\n- titel: ALTIJD vertalen naar het Nederlands, ook als het origineel in het Engels is. Nooit de Engelse titel overnemen.\n- bron: originele bronnaam exact overnemen\n- url: originele URL exact overnemen, nooit aanpassen\n- datum: publicatiedatum leesbaar in het Nederlands\n- samenvatting: 2 zinnen in het Nederlands\n- regio: "nl" als het artikel over Nederland of België gaat, anders "intl"\n\n${tekst}`
      }]
    })
  });

  const claude = await resp.json();
  console.log('Claude response type:', claude.type, 'stop_reason:', claude.stop_reason);
  if (claude.stop_reason === 'max_tokens') {
    console.error('Claude hit max_tokens — response truncated, JSON will be incomplete');
  }
  if (claude.error) {
    console.error('Claude API error:', claude.error.type, claude.error.message);
    return [];
  }

  const tekst2 = (claude.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  console.log('Claude text (first 300):', tekst2.substring(0, 300));

  const start = tekst2.indexOf('[');
  const end = tekst2.lastIndexOf(']');
  if (start === -1 || end === -1) {
    console.error('No JSON array found in Claude response. Full text:', tekst2);
    return [];
  }
  try {
    return JSON.parse(tekst2.slice(start, end + 1));
  } catch (e) {
    console.error('JSON.parse failed:', e.message);
    console.error('Attempted to parse:', tekst2.slice(start, end + 1).substring(0, 500));
    return [];
  }
}

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  const staticFiles = {
    '/': { file: 'index.html', type: 'text/html; charset=utf-8' },
    '/index.html': { file: 'index.html', type: 'text/html; charset=utf-8' },
    '/manifest.json': { file: 'manifest.json', type: 'application/manifest+json' },
    '/sw.js': { file: 'sw.js', type: 'application/javascript' },
    '/icon-192.png': { file: 'icon-192.png', type: 'image/png' },
    '/icon-512.png': { file: 'icon-512.png', type: 'image/png' },
    '/hanze-logo.png': { file: 'hanze-logo-cropped.png', type: 'image/png' },
  };

  if (req.method === 'GET' && staticFiles[req.url]) {
    const { file, type } = staticFiles[req.url];
    const content = fs.readFileSync(path.join(__dirname, file));
    res.writeHead(200, { 'Content-Type': type });
    res.end(content);
    return;
  }

  if (req.method === 'POST' && req.url === '/api/chat') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const { message, tab, vakgebied, history } = JSON.parse(body);
        console.log('Chat request — tab:', tab, 'message:', message);

        // Haal artikelen op als achtergrondcontext (gebruik cache als beschikbaar)
        const contextKey = `chat-context:${tab}:${vakgebied || ''}`;
        let contextArtikelen = getCached(contextKey);
        if (!contextArtikelen) {
          try {
            const [nlA, enA, nosRSS, tweakersRSS, guardianA, bbcRSS, tcRSS] = await Promise.all([
              fetchNews('kunstmatige intelligentie OR AI-systeem OR ChatGPT OR machine learning', 'nl', 10),
              fetchNews('"artificial intelligence" OR "machine learning" OR "ChatGPT" OR "AI model"', 'en', 10),
              fetchRSS('https://feeds.nos.nl/nosnieuwstech', 'NOS'),
              fetchRSS('https://tweakers.net/feeds/nieuws.xml', 'Tweakers'),
              fetchGuardian('artificial intelligence', 5),
              fetchRSS('https://feeds.bbci.co.uk/news/technology/rss.xml', 'BBC Technology'),
              fetchRSS('https://techcrunch.com/category/artificial-intelligence/feed/', 'TechCrunch AI')
            ]);
            const aiTerms = /\bai\b|chatgpt|artificial intelligence|machine learning|llm/i;
            contextArtikelen = dedup([...nlA, ...nosRSS, ...tweakersRSS, ...enA, ...guardianA, ...bbcRSS, ...tcRSS])
              .filter(a => aiTerms.test(a.title || '') || aiTerms.test(a.description || ''))
              .slice(0, 20);
            setCached(contextKey, contextArtikelen);
            console.log('Chat context: fetched', contextArtikelen.length, 'articles');
          } catch (e) {
            console.error('Chat context fetch error:', e.message);
            contextArtikelen = [];
          }
        } else {
          console.log('Chat context: cache hit,', contextArtikelen.length, 'articles');
        }

        const contextTekst = contextArtikelen.length > 0
          ? `\n\nActuele AI-nieuwsartikelen als achtergrondcontext (gebruik deze als het relevant is):\n` +
            contextArtikelen.map((a, i) =>
              `${i+1}. ${a.title} (${a.source?.name || 'Onbekend'}) — ${a.url}`
            ).join('\n')
          : '';

        const messages = [
          ...(history || []).map(h => ({ role: h.role, content: h.content })),
          { role: 'user', content: message }
        ];

        const resp = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': ANTHROPIC_KEY,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-haiku-4-5-20251001',
            max_tokens: 1200,
            system: `Je bent een vriendelijke en deskundige AI-assistent op een Nederlands AI-nieuwsdashboard. De gebruiker bekijkt de "${tab}" tab${vakgebied ? ` (vakgebied: ${vakgebied})` : ''}.

Je kunt vrijuit praten over alles rondom kunstmatige intelligentie: concepten uitleggen (zoals machine learning, LLMs, neural networks), AI-trends bespreken, ethische kwesties behandelen, toepassingen in vakgebieden toelichten, tools vergelijken (ChatGPT, Gemini, Copilot, etc.).

Als je verwijst naar een nieuwsartikel, gebruik dan altijd een markdown link in dit formaat: [Titel van het artikel](https://url-van-artikel). Gebruik alleen URLs die je kent uit de context — verzin geen URLs.

Reageer altijd in het Nederlands, conversationeel en vriendelijk. Geef informatieve, toegankelijke antwoorden.

Geef je antwoord als een JSON-object (geen markdown, geen tekst erbuiten) met:
- "reply": jouw volledige antwoord in het Nederlands (mag markdown links bevatten)
- "nlQuery": (optioneel) een Nederlandse NewsAPI zoekterm met "AI" als vereiste term
- "enQuery": (optioneel) een Engelse NewsAPI zoekterm met "AI" als vereiste term

Voeg nlQuery en enQuery ALLEEN toe als de gebruiker expliciet vraagt om nieuws te zoeken of artikelen te laden. Bij alle andere vragen geef je uitsluitend "reply".${contextTekst}`,
            messages
          })
        });

        const claude = await resp.json();
        if (claude.error) throw new Error(claude.error.message);

        const text = (claude.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
        const start = text.indexOf('{');
        const end = text.lastIndexOf('}');
        if (start === -1) throw new Error('Onverwacht antwoord van Claude');

        const result = JSON.parse(text.slice(start, end + 1));
        console.log('Chat result:', result);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch (e) {
        console.error('Chat error:', e.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/api/nieuws') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const { tab, vakgebied, vakgebiedEn, nlQuery, enQuery } = JSON.parse(body);
        const vakEn = vakgebiedEn || vakgebied;
        console.log('Request tab:', tab, 'vakgebied:', vakgebied, 'vakgebiedEn:', vakEn, 'custom queries:', !!nlQuery);

        // Return cached result if available
        const cacheKey = tab === 'vakgebied' ? `vakgebied:${vakgebied || ''}` : nlQuery ? `custom:${nlQuery}` : tab;
        const cached = getCached(cacheKey);
        if (cached) {
          console.log('[CACHE] HIT for', cacheKey);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(cached));
          return;
        }
        console.log('[CACHE] MISS for', cacheKey);

        let dutchRaw = [], intlRaw = [];
        let topic = null;
        let activeFilter = null; // per-tab override for aiFilter

        if (nlQuery && enQuery) {
          const [nlA, enA] = await Promise.all([
            fetchNews(nlQuery, 'nl'),
            fetchNews(enQuery, 'en')
          ]);
          dutchRaw = nlA;
          intlRaw = enA;
        } else if (tab === 'algemeen') {
          const [nlA, enA, deA, nosRSS, tweakersRSS, guardianA, bbcRSS, tcRSS, nuRSS, emerceRSS, vergeRSS, vbRSS, mitRSS, wiredRSS, agRSS, frankRSS, dcRSS, techzineRSS, computableRSS, securityRSS] = await Promise.all([
            fetchNews('kunstmatige intelligentie OR AI-systeem OR ChatGPT OR machine learning', 'nl'),
            fetchNews('"artificial intelligence" OR "machine learning" OR "ChatGPT" OR "AI model"', 'en'),
            fetchNews('"KI" OR "künstliche Intelligenz" OR "Machine Learning"', 'de', 5),
            fetchRSS('https://feeds.nos.nl/nosnieuwstech', 'NOS'),
            fetchRSS('https://tweakers.net/feeds/nieuws.xml', 'Tweakers'),
            fetchGuardian('artificial intelligence'),
            fetchRSS('https://feeds.bbci.co.uk/news/technology/rss.xml', 'BBC Technology'),
            fetchRSS('https://techcrunch.com/category/artificial-intelligence/feed/', 'TechCrunch AI'),
            fetchRSS('https://www.nu.nl/rss/Tech', 'Nu.nl Tech'),
            fetchRSS('https://www.emerce.nl/feed', 'Emerce'),
            fetchRSS('https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', 'The Verge AI'),
            fetchRSS('https://venturebeat.com/category/ai/feed/', 'VentureBeat AI'),
            fetchRSS('https://www.technologyreview.com/feed/', 'MIT Tech Review'),
            fetchRSS('https://www.wired.com/feed/tag/artificial-intelligence/rss', 'Wired AI'),
            fetchRSS('https://www.agconnect.nl/rss', 'AG Connect'),
            fetchRSS('https://www.frankwatching.com/feed/', 'Frankwatching'),
            fetchRSS('https://www.dutchcowboys.nl/rss', 'Dutchcowboys'),
            fetchRSS('https://www.techzine.nl/feed/', 'Techzine'),
            fetchRSS('https://www.computable.nl/feed/', 'Computable'),
            fetchRSS('https://www.security.nl/rss/headlines.xml', 'Security.nl')
          ]);
          console.log('[NL SOURCES] NewsAPI nl:', nlA.length, '| NOS:', nosRSS.length, '| Tweakers:', tweakersRSS.length, '| Nu.nl:', nuRSS.length, '| Emerce:', emerceRSS.length, '| AG Connect:', agRSS.length, '| Frankwatching:', frankRSS.length, '| Techzine:', techzineRSS.length, '| Computable:', computableRSS.length);
          dutchRaw = [...nlA, ...nosRSS, ...tweakersRSS, ...nuRSS, ...emerceRSS, ...agRSS, ...frankRSS, ...dcRSS, ...techzineRSS, ...computableRSS, ...securityRSS];
          intlRaw = [...enA, ...deA, ...guardianA, ...bbcRSS, ...tcRSS, ...vergeRSS, ...vbRSS, ...mitRSS, ...wiredRSS];
        } else if (tab === 'onderwijs') {
          topic = null;
          // Gericht op hoger onderwijs voor docenten — striktere filter dan voorheen
          const eduTerms = /hoger onderwijs|universit|hogeschool|\bhbo\b|\bwo\b|lector|professor|docent|\bstudent\b|\bclassroom\b|\beducation\b|\bteacher\b|\blearning\b|\bcurriculum\b|\bacadem\b|onderwijsinstell|faculty|higher education|college|campus/i;
          const [nlA, enA, deA, frA, nosRSS, tweakersRSS, guardianA, bbcRSS, kennisnetRSS, scienceDailyRSS, tcRSS, vergeRSS, mitRSS, emerceRSS, agRSS, frankRSS, techzineRSS, computableRSS, surfRSS, edsurgeRSS, elearningRSS, insidehigheredRSS] = await Promise.all([
            fetchNews('AI hoger onderwijs OR universiteit OR hogeschool OR docent OR HBO OR WO', 'nl', 20),
            fetchNews('"artificial intelligence" "higher education" OR university OR college OR professor OR faculty OR classroom', 'en', 20),
            fetchNews('KI Hochschule OR Universität OR Bildung OR Studenten', 'de', 10),
            fetchNews('"intelligence artificielle" université OR enseignement supérieur', 'fr', 10),
            fetchRSS('https://feeds.nos.nl/nosnieuwstech', 'NOS'),
            fetchRSS('https://tweakers.net/feeds/nieuws.xml', 'Tweakers'),
            fetchGuardian('artificial intelligence higher education university', 10),
            fetchRSS('https://feeds.bbci.co.uk/news/technology/rss.xml', 'BBC Technology'),
            fetchRSS('https://www.kennisnet.nl/rss/', 'Kennisnet'),
            fetchRSS('https://www.sciencedaily.com/rss/computers_math/artificial_intelligence.xml', 'ScienceDaily AI'),
            fetchRSS('https://techcrunch.com/category/artificial-intelligence/feed/', 'TechCrunch AI'),
            fetchRSS('https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', 'The Verge AI'),
            fetchRSS('https://www.technologyreview.com/feed/', 'MIT Tech Review'),
            fetchRSS('https://www.emerce.nl/feed', 'Emerce'),
            fetchRSS('https://www.agconnect.nl/rss', 'AG Connect'),
            fetchRSS('https://www.frankwatching.com/feed/', 'Frankwatching'),
            fetchRSS('https://www.techzine.nl/feed/', 'Techzine'),
            fetchRSS('https://www.computable.nl/feed/', 'Computable'),
            fetchRSS('https://www.surf.nl/rss', 'SURF'),
            fetchRSS('https://edsurge.com/news.rss', 'EdSurge'),
            fetchRSS('https://elearningindustry.com/feed', 'eLearning Industry'),
            fetchRSS('https://www.insidehighered.com/rss.xml', 'Inside Higher Ed')
          ]);
          const eduFilter = a => {
            const text = (a.title || '') + ' ' + (a.description || '');
            return eduTerms.test(text);
          };
          activeFilter = eduFilter;
          // SURF, EdSurge, eLearning Industry en Inside Higher Ed zijn al onderwijs-specifiek — geen filter nodig
          dutchRaw = [...nlA, ...nosRSS.filter(eduFilter), ...tweakersRSS.filter(eduFilter), ...kennisnetRSS, ...surfRSS, ...emerceRSS.filter(eduFilter), ...agRSS.filter(eduFilter), ...frankRSS.filter(eduFilter), ...techzineRSS.filter(eduFilter), ...computableRSS.filter(eduFilter)];
          intlRaw = [...enA, ...deA, ...frA, ...guardianA.filter(eduFilter), ...bbcRSS.filter(eduFilter), ...scienceDailyRSS.filter(eduFilter), ...tcRSS.filter(eduFilter), ...vergeRSS.filter(eduFilter), ...mitRSS.filter(eduFilter), ...edsurgeRSS, ...elearningRSS, ...insidehigheredRSS];
        } else if (tab === 'orm') {
          topic = 'ondernemerschap en retail';
          const ormTerms = /ondernem|startup|scale-up|mkb|zzp|retailer|winkel|e-commerce|ecommerce|entrepreneur|commerce|consumer|shopping|ondernemer|innovati|venture|founder|groeistrateg/i;
          const ormFilter = a => ormTerms.test((a.title || '') + ' ' + (a.description || ''));
          const [nlA, enA, guardianA,
            sproutRSS, emerceRSS, frankRSS, nuRSS,
            entrepreneurRSS, incRSS, fastcoRSS, retaildiveRSS, retaildetailRSS, tcStartupsRSS
          ] = await Promise.all([
            fetchNews('AI ondernemerschap OR startup OR retail OR e-commerce OR MKB OR ondernemer', 'nl', 20),
            fetchNews('"artificial intelligence" entrepreneur OR startup OR retail OR "e-commerce" OR "small business"', 'en', 20),
            fetchGuardian('artificial intelligence entrepreneur startup retail', 10),
            fetchRSS('https://www.sprout.nl/feed', 'Sprout'),
            fetchRSS('https://www.emerce.nl/feed', 'Emerce'),
            fetchRSS('https://www.frankwatching.com/feed/', 'Frankwatching'),
            fetchRSS('https://www.nu.nl/rss/Economie', 'Nu.nl Economie'),
            fetchRSS('https://feeds.feedburner.com/entrepreneur/latest', 'Entrepreneur'),
            fetchRSS('https://www.inc.com/rss/', 'Inc.com'),
            fetchRSS('https://www.fastcompany.com/rss', 'Fast Company'),
            fetchRSS('https://www.retaildive.com/feeds/news/', 'Retail Dive'),
            fetchRSS('https://www.retaildetail.eu/nl/rss.xml', 'RetailDetail'),
            fetchRSS('https://techcrunch.com/category/startups/feed/', 'TechCrunch Startups')
          ]);
          activeFilter = ormFilter;
          dutchRaw = [...nlA, ...sproutRSS, ...emerceRSS.filter(ormFilter), ...frankRSS.filter(ormFilter), ...nuRSS.filter(ormFilter), ...retaildetailRSS];
          intlRaw = [...enA, ...guardianA.filter(ormFilter), ...entrepreneurRSS, ...incRSS, ...fastcoRSS, ...retaildiveRSS, ...tcStartupsRSS.filter(ormFilter)];
        } else if (tab === 'vakgebied') {
          topic = vakgebied;
          // Synonym map for common vakgebieden (Dutch → related English/Dutch terms)
          const VAK_SYNONYMS = {
            'marketing': ['advertising', 'advertis', 'brand', 'campaign', 'social media', 'consumer', 'reclame'],
            'gezondheidszorg': ['health', 'medical', 'hospital', 'patient', 'clinical', 'healthcare', 'diagnosis', 'treatment'],
            'onderwijs': ['education', 'school', 'university', 'learning', 'classroom', 'teacher', 'student', 'training'],
            'financiën': ['finance', 'financial', 'banking', 'investment', 'fintech', 'payment', 'insurance', 'trading'],
            'finance': ['financial', 'banking', 'investment', 'fintech', 'payment', 'insurance', 'trading', 'financiën'],
            'juridisch': ['legal', 'law', 'court', 'regulation', 'compliance', 'legislation', 'attorney'],
            'logistiek': ['logistics', 'supply chain', 'shipping', 'warehouse', 'transport', 'delivery', 'freight'],
            'hr': ['human resources', 'recruitment', 'hiring', 'talent', 'employee', 'workforce', 'personnel'],
            'human resources': ['recruitment', 'hiring', 'talent', 'employee', 'workforce', 'personnel', 'hr'],
            'productie': ['manufacturing', 'factory', 'production', 'industrial', 'automation', 'industry'],
            'manufacturing': ['factory', 'production', 'industrial', 'automation', 'productie'],
            'landbouw': ['agriculture', 'farming', 'crop', 'farm', 'harvest', 'agri'],
            'agriculture': ['farming', 'crop', 'farm', 'harvest', 'landbouw'],
            'beveiliging': ['security', 'cybersecurity', 'privacy', 'threat', 'fraud', 'surveillance', 'cyber'],
            'security': ['cybersecurity', 'privacy', 'threat', 'fraud', 'surveillance', 'cyber', 'beveiliging'],
            'ondernemerschap': ['entrepreneur', 'startup', 'mkb', 'zzp', 'ondernemer', 'scale-up', 'venture', 'innovatie', 'innovation', 'business model', 'founder', 'groeistrategie'],
            'entrepreneurship': ['entrepreneur', 'startup', 'mkb', 'zzp', 'scale-up', 'venture', 'innovation', 'business model', 'founder', 'ondernemerschap'],
            'retail': ['ecommerce', 'e-commerce', 'shopping', 'consumer', 'sales', 'commerce', 'winkel', 'retailer', 'winkelier'],
            'energie': ['energy', 'electricity', 'solar', 'renewable', 'power', 'grid', 'carbon'],
            'energy': ['electricity', 'solar', 'renewable', 'power', 'grid', 'carbon', 'energie'],
            'bouw': ['construction', 'building', 'architecture', 'infrastructure', 'real estate'],
            'construction': ['building', 'architecture', 'infrastructure', 'real estate', 'bouw'],
            'media': ['journalism', 'news', 'content', 'publishing', 'broadcasting', 'entertainment'],
            'transport': ['mobility', 'autonomous', 'self-driving', 'vehicle', 'logistics', 'traffic', 'vervoer'],
            'vervoer': ['mobility', 'autonomous', 'self-driving', 'vehicle', 'logistics', 'traffic', 'transport'],
          };
          // Escape regex special chars in topic terms
          const vakEnEsc = vakEn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const vakNlEsc = vakgebied.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          // Build combined regex: vakgebied terms + synonyms for RSS filtering
          const vakKey = vakgebied.toLowerCase();
          const synonyms = VAK_SYNONYMS[vakKey] || VAK_SYNONYMS[vakEn.toLowerCase()] || [];
          const allTerms = [vakEnEsc, vakNlEsc, ...synonyms.map(s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))];
          const vakRegex = new RegExp(allTerms.join('|'), 'i');
          const vakFilter = a => {
            const text = (a.title || '') + ' ' + (a.description || '');
            return vakRegex.test(text);
          };
          const [nlA, enA, deA, frA, esA, guardianA,
            bbcRSS, tcRSS, scienceDailyRSS, vergeRSS, vbRSS, mitRSS, wiredRSS,
            statRSS, healthitRSS, lawfareRSS, hrexecRSS, mktAiRSS,
            krebsRSS, darkreadingRSS, zdnetRSS, infoworldRSS, canaryRSS,
            sproutRSS, entrepreneurRSS, incRSS, fastcoRSS, retaildiveRSS, retaildetailRSS
          ] = await Promise.all([
            fetchNews(`AI ${vakgebied}`, 'nl'),
            fetchNews(`"artificial intelligence" ${vakEn}`, 'en'),
            fetchNews(`AI ${vakEn}`, 'de', 5),
            fetchNews(`IA ${vakEn}`, 'fr', 5),
            fetchNews(`IA ${vakEn}`, 'es', 5),
            fetchGuardian(`artificial intelligence ${vakEn}`, 10),
            fetchRSS('https://feeds.bbci.co.uk/news/technology/rss.xml', 'BBC Technology'),
            fetchRSS('https://techcrunch.com/category/artificial-intelligence/feed/', 'TechCrunch AI'),
            fetchRSS('https://www.sciencedaily.com/rss/computers_math/artificial_intelligence.xml', 'ScienceDaily AI'),
            fetchRSS('https://www.theverge.com/rss/ai-artificial-intelligence/index.xml', 'The Verge AI'),
            fetchRSS('https://venturebeat.com/category/ai/feed/', 'VentureBeat AI'),
            fetchRSS('https://www.technologyreview.com/feed/', 'MIT Tech Review'),
            fetchRSS('https://www.wired.com/feed/tag/artificial-intelligence/rss', 'Wired AI'),
            fetchRSS('https://www.statnews.com/feed/', 'STAT News'),
            fetchRSS('https://www.healthcareitnews.com/rss.xml', 'Health IT News'),
            fetchRSS('https://www.lawfaremedia.org/feed', 'Lawfare'),
            fetchRSS('https://hrexecutive.com/feed/', 'HR Executive'),
            fetchRSS('https://www.marketingaiinstitute.com/blog/rss.xml', 'Marketing AI Institute'),
            fetchRSS('https://krebsonsecurity.com/feed/', 'Krebs on Security'),
            fetchRSS('https://www.darkreading.com/rss.xml', 'Dark Reading'),
            fetchRSS('https://www.zdnet.com/topic/artificial-intelligence/rss.xml', 'ZDNet AI'),
            fetchRSS('https://www.infoworld.com/category/artificial-intelligence/index.rss', 'InfoWorld AI'),
            fetchRSS('https://www.canarymedia.com/feed', 'Canary Media'),
            fetchRSS('https://www.sprout.nl/feed', 'Sprout'),
            fetchRSS('https://feeds.feedburner.com/entrepreneur/latest', 'Entrepreneur'),
            fetchRSS('https://www.inc.com/rss/', 'Inc.com'),
            fetchRSS('https://www.fastcompany.com/rss', 'Fast Company'),
            fetchRSS('https://www.retaildive.com/feeds/news/', 'Retail Dive'),
            fetchRSS('https://www.retaildetail.eu/nl/rss.xml', 'RetailDetail')
          ]);
          activeFilter = vakFilter;
          const [nlExtra, agRSS, frankRSS, dcRSS, techzineRSS, computableRSS, securityRSS] = await Promise.all([
            fetchNews(`AI ${vakgebied}`, 'nl', 5),
            fetchRSS('https://www.agconnect.nl/rss', 'AG Connect'),
            fetchRSS('https://www.frankwatching.com/feed/', 'Frankwatching'),
            fetchRSS('https://www.dutchcowboys.nl/rss', 'Dutchcowboys'),
            fetchRSS('https://www.techzine.nl/feed/', 'Techzine'),
            fetchRSS('https://www.computable.nl/feed/', 'Computable'),
            fetchRSS('https://www.security.nl/rss/headlines.xml', 'Security.nl')
          ]);
          dutchRaw = [...nlA, ...nlExtra, ...[...agRSS, ...frankRSS, ...dcRSS, ...techzineRSS, ...computableRSS, ...securityRSS, ...sproutRSS, ...retaildetailRSS].filter(vakFilter)];
          const rssPool = [
            ...bbcRSS, ...tcRSS, ...scienceDailyRSS, ...vergeRSS, ...vbRSS, ...mitRSS, ...wiredRSS,
            ...statRSS, ...healthitRSS, ...lawfareRSS, ...hrexecRSS, ...mktAiRSS,
            ...krebsRSS, ...darkreadingRSS, ...zdnetRSS, ...infoworldRSS, ...canaryRSS,
            ...entrepreneurRSS, ...incRSS, ...fastcoRSS, ...retaildiveRSS
          ];
          const rssVakFiltered = rssPool.filter(vakFilter);
          console.log('[VAKGEBIED] NewsAPI nl:', nlA.length, 'en:', enA.length, '| Guardian:', guardianA.length, '| RSS pool:', rssPool.length, '| RSS filtered:', rssVakFiltered.length);
          intlRaw = [...enA, ...deA, ...frA, ...esA, ...guardianA, ...rssVakFiltered];
        }

        const aiTerms = /\bai\b|ai[-\s]|chatgpt|gpt-|llm\b|artificial intelligence|machine learning|neural network|künstliche intelligenz|intelligence artificielle|inteligencia artificial|kunstmatige intelligentie/i;
        const defaultFilter = a => aiTerms.test(a.title || '') || aiTerms.test(a.description || '');
        const filterFn = activeFilter || defaultFilter;
        const dutchFiltered = dedup(dutchRaw).filter(filterFn);
        const intlFiltered = dedup(intlRaw).filter(filterFn);
        console.log('Dutch pass filter:', dutchFiltered.length, '| Intl pass filter:', intlFiltered.length);
        let alle;
        if (tab === 'onderwijs') {
          const dutchSlice = dutchFiltered.slice(0, 7);
          const intlNeeded = Math.max(15 - dutchSlice.length, 8);
          alle = [...dutchSlice, ...intlFiltered.slice(0, intlNeeded)];
          console.log('[ONDERWIJS] Dutch:', dutchSlice.length, '| Intl:', Math.min(intlFiltered.length, intlNeeded), '| Total:', alle.length);
        } else if (tab === 'vakgebied') {
          // Neem zoveel mogelijk, minimum 10 totaal
          const dutchSlice = dutchFiltered.slice(0, 10);
          const intlNeeded = Math.max(10 - dutchSlice.length, 5);
          alle = [...dutchSlice, ...intlFiltered.slice(0, Math.max(intlNeeded, 10))];
          // Als we onder de 10 zitten, voeg ongefilterde intl-artikelen toe als aanvulling
          if (alle.length < 10) {
            const extra = dedup(intlRaw).filter(a => !alle.includes(a)).slice(0, 10 - alle.length);
            alle = [...alle, ...extra];
          }
          console.log('[VAKGEBIED] Dutch:', dutchSlice.length, '| Intl:', alle.length - dutchSlice.length, '| Total:', alle.length);
        } else {
          alle = [...dutchFiltered.slice(0, 8), ...intlFiltered.slice(0, 8)];
        }

        if (!alle.length) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ articles: [], error: 'Geen artikelen gevonden via NewsAPI' }));
          return;
        }

        const samengevat = fixRegio(await summarize(alle, topic));
        const result = { articles: samengevat };
        setCached(cacheKey, result);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch (e) {
        console.error('Server error:', e.message, e.stack);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, () => console.log(`Server op poort ${PORT}`));
