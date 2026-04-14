const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || '';
const NEWS_API_KEY = process.env.NEWS_API_KEY || '';

async function fetchNews(query, language) {
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=${language}&sortBy=publishedAt&pageSize=5&apiKey=${NEWS_API_KEY}`;
  console.log('Fetching:', url.replace(NEWS_API_KEY, 'KEY'));
  const resp = await fetch(url);
  const data = await resp.json();
  console.log('NewsAPI status:', data.status, 'total:', data.totalResults);
  if (data.status !== 'ok') {
    console.error('NewsAPI error:', data.message, data.code);
    return [];
  }
  return (data.articles || []).filter(a => a.title && a.title !== '[Removed]' && a.url);
}

async function summarize(articles) {
  if (!articles.length) return [];
  
  const tekst = articles.map((a, i) =>
    `${i+1}. Titel: ${a.title}\nBron: ${a.source?.name || 'Onbekend'}\nURL: ${a.url}\nOmschrijving: ${a.description || 'Geen omschrijving'}`
  ).join('\n\n');

  console.log('Sending to Claude, articles:', articles.length);

  const resp = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': ANTHROPIC_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2000,
      system: 'Geef ALLEEN een geldige JSON-array terug. Geen tekst ervoor of erna. Geen markdown. Alleen de JSON array startend met [ en eindigend met ].',
      messages: [{
        role: 'user',
        content: `Vat deze nieuwsartikelen samen in het Nederlands. Geef een JSON-array terug met voor elk artikel: titel (Nederlandse vertaling), bron (originele bronnaam), url (originele URL exact overnemen), datum (publicatiedatum leesbaar), samenvatting (2 zinnen Nederlands), regio ("nl" als over Nederland/Belgie, anders "intl").\n\n${tekst}`
      }]
    })
  });

  const claude = await resp.json();
  console.log('Claude response type:', claude.type, 'stop_reason:', claude.stop_reason);
  
  const tekst2 = (claude.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  console.log('Claude text (first 200):', tekst2.substring(0, 200));
  
  const start = tekst2.indexOf('[');
  const end = tekst2.lastIndexOf(']');
  if (start === -1 || end === -1) {
    console.error('No JSON array found in Claude response');
    return [];
  }
  return JSON.parse(tekst2.slice(start, end + 1));
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

  if (req.method === 'POST' && req.url === '/api/nieuws') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const { tab, vakgebied } = JSON.parse(body);
        console.log('Request tab:', tab, 'vakgebied:', vakgebied);

        let nlArtikels = [], intlArtikels = [];

        if (tab === 'algemeen') {
          [nlArtikels, intlArtikels] = await Promise.all([
            fetchNews('kunstmatige intelligentie', 'nl'),
            fetchNews('artificial intelligence', 'en')
          ]);
        } else if (tab === 'onderwijs') {
          [nlArtikels, intlArtikels] = await Promise.all([
            fetchNews('AI onderwijs', 'nl'),
            fetchNews('AI education', 'en')
          ]);
        } else if (tab === 'vakgebied') {
          [nlArtikels, intlArtikels] = await Promise.all([
            fetchNews(`AI ${vakgebied}`, 'nl'),
            fetchNews(`AI ${vakgebied}`, 'en')
          ]);
        }

        const alle = [...nlArtikels.slice(0, 4), ...intlArtikels.slice(0, 4)];
        console.log('Total articles to summarize:', alle.length);

        if (!alle.length) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ articles: [], error: 'Geen artikelen gevonden via NewsAPI' }));
          return;
        }

        const samengevat = await summarize(alle);
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
