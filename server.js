const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || '';
const NEWS_API_KEY = process.env.NEWS_API_KEY || '';

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
        content: `Vat deze nieuwsartikelen samen in het Nederlands. ${topicFilter} Geef een JSON-array terug met voor elk relevant artikel: titel (Nederlandse vertaling), bron (originele bronnaam), url (originele URL exact overnemen), datum (publicatiedatum leesbaar), samenvatting (2 zinnen Nederlands), regio ("nl" als over Nederland/Belgie, anders "intl").\n\n${tekst}`
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

  if (req.method === 'GET' && req.url === '/') {
    const html = fs.readFileSync(path.join(__dirname, 'index.html'));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
    return;
  }

  if (req.method === 'POST' && req.url === '/api/chat') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const { message, tab, vakgebied, history } = JSON.parse(body);
        console.log('Chat request — tab:', tab, 'message:', message);

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
            max_tokens: 800,
            system: `Je bent een vriendelijke en deskundige AI-assistent op een Nederlands AI-nieuwsdashboard. De gebruiker bekijkt de "${tab}" tab${vakgebied ? ` (vakgebied: ${vakgebied})` : ''}.

Je kunt vrijuit praten over alles rondom kunstmatige intelligentie: concepten uitleggen (zoals machine learning, LLMs, neural networks), AI-trends bespreken, ethische kwesties behandelen, toepassingen in vakgebieden toelichten, tools vergelijken (ChatGPT, Gemini, Copilot, etc.) — volledig onafhankelijk van of er nieuws geladen is.

Reageer altijd in het Nederlands, conversationeel en vriendelijk. Geef informatieve, toegankelijke antwoorden.

Geef je antwoord als een JSON-object (geen markdown, geen tekst erbuiten) met:
- "reply": jouw volledige antwoord in het Nederlands
- "nlQuery": (optioneel) een Nederlandse NewsAPI zoekterm met "AI" als vereiste term
- "enQuery": (optioneel) een Engelse NewsAPI zoekterm met "AI" als vereiste term

Voeg nlQuery en enQuery ALLEEN toe als de gebruiker expliciet vraagt om nieuws te zoeken of artikelen te laden. Bij alle andere vragen — uitleg, discussie, vergelijking, advies — geef je uitsluitend "reply".`,
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

        let rawArticles = [];
        let topic = null;

        if (nlQuery && enQuery) {
          const [nlA, enA] = await Promise.all([
            fetchNews(nlQuery, 'nl'),
            fetchNews(enQuery, 'en')
          ]);
          rawArticles = [...nlA, ...enA];
        } else if (tab === 'algemeen') {
          const [nlA, enA, deA, nosRSS, nuRSS, guardianA, bbcRSS, tcRSS] = await Promise.all([
            fetchNews('"AI" OR "kunstmatige intelligentie" OR "machine learning" OR "ChatGPT"', 'nl'),
            fetchNews('"artificial intelligence" OR "machine learning" OR "ChatGPT" OR "AI model"', 'en'),
            fetchNews('"KI" OR "künstliche Intelligenz" OR "Machine Learning"', 'de', 5),
            fetchRSS('https://nos.nl/rss/tech', 'NOS'),
            fetchRSS('https://www.nu.nl/rss/tech', 'NU.nl'),
            fetchGuardian('artificial intelligence'),
            fetchRSS('https://feeds.bbci.co.uk/news/technology/rss.xml', 'BBC Technology'),
            fetchRSS('https://techcrunch.com/category/artificial-intelligence/feed/', 'TechCrunch AI')
          ]);
          console.log('[NL SOURCES] NewsAPI nl:', nlA.length, '| NOS RSS:', nosRSS.length, '| NU.nl RSS:', nuRSS.length);
          console.log('[NL SOURCES] NewsAPI nl titles:', nlA.map(a => a.title).join(' | ') || '(geen)');
          console.log('[NL SOURCES] NOS titles:', nosRSS.map(a => a.title).join(' | ') || '(geen)');
          console.log('[NL SOURCES] NU.nl titles:', nuRSS.map(a => a.title).join(' | ') || '(geen)');
          rawArticles = [...nlA, ...enA, ...deA, ...nosRSS, ...nuRSS, ...guardianA, ...bbcRSS, ...tcRSS];
        } else if (tab === 'onderwijs') {
          topic = 'onderwijs';
          const eduTerms = /onderwijs|school|universit|student|docent|leren|education|classroom|learn|teach/i;
          const [nlA, enA, deA, frA, nosRSS, nuRSS, guardianA, bbcRSS] = await Promise.all([
            fetchNews('"AI in het onderwijs" OR "AI op school" OR "AI universiteit" OR "AI docent"', 'nl'),
            fetchNews('"AI in education" OR "AI in schools" OR "AI university" OR "AI classroom"', 'en'),
            fetchNews('"KI im Unterricht" OR "KI Schule" OR "KI Bildung"', 'de', 5),
            fetchNews('"IA école" OR "IA éducation" OR "intelligence artificielle enseignement"', 'fr', 5),
            fetchRSS('https://nos.nl/rss/tech', 'NOS'),
            fetchRSS('https://www.nu.nl/rss/tech', 'NU.nl'),
            fetchGuardian('artificial intelligence education', 5),
            fetchRSS('https://feeds.bbci.co.uk/news/technology/rss.xml', 'BBC Technology')
          ]);
          const rssEduFilter = a => eduTerms.test(a.title || '') || eduTerms.test(a.description || '');
          rawArticles = [...nlA, ...enA, ...deA, ...frA,
            ...nosRSS.filter(rssEduFilter), ...nuRSS.filter(rssEduFilter),
            ...guardianA, ...bbcRSS.filter(rssEduFilter)];
        } else if (tab === 'vakgebied') {
          topic = vakgebied;
          const [nlA, enA, deA, frA, esA, guardianA] = await Promise.all([
            fetchNews(`AI ${vakgebied}`, 'nl'),
            fetchNews(`"artificial intelligence" ${vakEn}`, 'en'),
            fetchNews(`AI ${vakEn}`, 'de', 5),
            fetchNews(`IA ${vakEn}`, 'fr', 5),
            fetchNews(`IA ${vakEn}`, 'es', 5),
            fetchGuardian(`artificial intelligence ${vakEn}`, 5)
          ]);
          rawArticles = [...nlA, ...enA, ...deA, ...frA, ...esA, ...guardianA];
        }

        const aiTerms = /\bai\b|ai[-\s]|chatgpt|gpt-|llm\b|artificial intelligence|machine learning|neural network|künstliche intelligenz|intelligence artificielle|inteligencia artificial|kunstmatige intelligentie/i;
        const aiFilter = a => aiTerms.test(a.title || '') || aiTerms.test(a.description || '');
        const deduped = dedup(rawArticles);
        const filtered = deduped.filter(aiFilter);
        const rejected = deduped.filter(a => !aiFilter(a));
        console.log('Raw:', rawArticles.length, '| After dedup:', deduped.length, '| Pass aiFilter:', filtered.length, '| Rejected:', rejected.length);
        if (rejected.length) {
          console.log('[REJECTED by aiFilter]', rejected.map(a => `[${a.source?.name}] ${a.title}`).join('\n  '));
        }
        const alle = filtered.slice(0, 16);

        if (!alle.length) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ articles: [], error: 'Geen artikelen gevonden via NewsAPI' }));
          return;
        }

        const samengevat = await summarize(alle, topic);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ articles: samengevat }));
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
