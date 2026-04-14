const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY || '';
const NEWS_API_KEY = process.env.NEWS_API_KEY || '';

async function fetchNewsFromAPI(query, language) {
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=${language}&sortBy=publishedAt&pageSize=6&apiKey=${NEWS_API_KEY}`;
  const resp = await fetch(url);
  const data = await resp.json();
  if (data.status !== 'ok') throw new Error(data.message || 'NewsAPI fout');
  return data.articles.filter(a => a.title && a.title !== '[Removed]');
}

async function summarizeWithClaude(articles) {
  const artikelTekst = articles.map((a, i) =>
    `${i+1}. Titel: ${a.title}\nBron: ${a.source?.name || 'Onbekend'}\nURL: ${a.url}\nBeschrijving: ${a.description || ''}`
  ).join('\n\n');

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
      system: 'Je bent een AI-nieuwsassistent. Geef ALLEEN een geldige JSON-array terug, zonder markdown of uitleg.',
      messages: [{
        role: 'user',
        content: `Maak van deze nieuwsartikelen een Nederlandse samenvatting. Geef een JSON-array terug met deze velden: titel (vertaal naar Nederlands), bron, url (originele URL exact overnemen!), datum (publicatiedatum als leesbare string), samenvatting (2 zinnen in het Nederlands), regio ("nl" als het over Nederland/Belgie gaat, anders "intl").\n\nArtikelen:\n${artikelTekst}`
      }]
    })
  });

  const data = await resp.json();
  const tekst = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  const start = tekst.indexOf('[');
  const end = tekst.lastIndexOf(']');
  return JSON.parse(tekst.slice(start, end + 1));
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

        let nlArtikels = [], intlArtikels = [];

        if (tab === 'algemeen') {
          [nlArtikels, intlArtikels] = await Promise.all([
            fetchNewsFromAPI('kunstmatige intelligentie AI', 'nl'),
            fetchNewsFromAPI('artificial intelligence AI', 'en')
          ]);
        } else if (tab === 'onderwijs') {
          [nlArtikels, intlArtikels] = await Promise.all([
            fetchNewsFromAPI('AI onderwijs educatie school', 'nl'),
            fetchNewsFromAPI('AI education school learning', 'en')
          ]);
        } else if (tab === 'vakgebied') {
          [nlArtikels, intlArtikels] = await Promise.all([
            fetchNewsFromAPI(`AI ${vakgebied}`, 'nl'),
            fetchNewsFromAPI(`artificial intelligence ${vakgebied}`, 'en')
          ]);
        }

        const alleArtikels = [...nlArtikels.slice(0, 4), ...intlArtikels.slice(0, 4)];
        const samengevat = await summarizeWithClaude(alleArtikels);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ articles: samengevat }));
      } catch (e) {
        console.error(e);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, () => console.log(`Server draait op poort ${PORT}`));
