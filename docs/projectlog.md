# AI-Nieuws Projectlog

> **Instructie voor Claude Code:** Dit is Lex' persoonlijke referentie-document voor AI-Nieuws. Aan het einde van elke werksessie waarin we iets aan AI-Nieuws hebben gedaan, update je dit document automatisch:
>
> 1. Voeg toevoegingen op de juiste thematische sectie toe (architectuur, beslissingen, setup, bugs, etc.) — niet als chronologisch dagboek
> 2. Voeg in sectie 9 (Werklog) één korte regel toe met datum en hoofdpunten
> 3. Push het bijgewerkte document naar GitHub als onderdeel van de sessie-afsluiting
> 4. Voeg nooit secrets, API-keys of wachtwoorden toe aan dit document — alleen verwijzingen naar waar ze staan
> 5. Schrijf in het Nederlands en houd het scanbaar
> 6. Het projectlog is een **kaart, niet een atlas** — overzicht, geen handleiding. Concrete commando's en uitgebreide procedures horen in dedicated docs.

---

## 1. Inhoudsopgave

- [2. Architectuur op hoog niveau](#2-architectuur-op-hoog-niveau)
- [3. Externe diensten](#3-externe-diensten)
- [4. Belangrijke beslissingen](#4-belangrijke-beslissingen)
- [5. Setup & monitoring](#5-setup--monitoring)
- [6. Tests & validaties](#6-tests--validaties)
- [7. Opgeloste bugs & valkuilen](#7-opgeloste-bugs--valkuilen)
- [8. Open punten / to-do's](#8-open-punten--to-dos)
- [9. Werklog](#9-werklog)

---

## 2. Architectuur op hoog niveau

AI-Nieuws is een PWA (Progressive Web App) — een nieuwsdashboard voor ORM-docenten van de Hanzehogeschool Groningen. Doel: dagelijks AI-nieuws verzameld en samengevat krijgen, zodat docenten niet meer zelf hoeven te zoeken.

### Stack — minimal en bewust

| Laag | Wat |
|---|---|
| **Backend** | `server.js` — native Node.js `http`-module, **geen npm-dependencies** |
| **Frontend** | Eén `index.html` met inline CSS/JS — tabs, chat, opslaan, dark mode |
| **PWA** | `sw.js` (service worker) + `manifest.json` voor installeerbaarheid en offline-cache |
| **AI** | Anthropic Claude Haiku (`claude-haiku-4-5-20251001`) — samenvatten + chat |
| **Nieuwsbronnen** | NewsAPI + ~30 RSS-feeds |
| **Cache** | In-memory in `server.js`, 15 minuten TTL |
| **Frontend-state** | `localStorage` (geen DB) — opgeslagen artikelen, dark mode, gelezen-status |

### Tabs / hoofdfuncties
- **ORM** — Ondernemerschap & Retail (default-tab, laadt automatisch bij start)
- **Algemeen AI-nieuws**
- **AI in Onderwijs** — hoger onderwijs, docenten
- **Mijn Vakgebied** — gebruiker vult eigen specialisatie in
- **Opgeslagen** — bookmarked artikelen via localStorage
- **Instellingen** — preferenties, dark mode, etc.

### API-endpoints (`server.js`)
- `GET /api/versie` — toont serverversie
- `POST /api/nieuws` — haalt + filtert nieuws (NewsAPI/RSS), Claude Haiku maakt samenvattingen
- `POST /api/chat` — conversational chatbot met nieuwscontext

---

## 3. Externe diensten

### GitHub
- **Repo:** [`lexcoene001-cpu/AI-Nieuws`](https://github.com/lexcoene001-cpu/AI-Nieuws)
- **Backup:** automatische nightly rclone-sync naar Google Drive om 02:10 (zie ZIT-projectlog of `~/Projecten/meditatie-app/docs/backup-en-restore.md` voor de volledige sync-config)

### Anthropic
- **Model:** `claude-haiku-4-5-20251001` (kostenbewust gekozen i.p.v. Sonnet)
- **API-key:** in `~/Projecten/AI-Nieuws/.env` als `ANTHROPIC_API_KEY` — wordt automatisch ingeladen bij serverstart
- **Console:** [console.anthropic.com](https://console.anthropic.com), login via Google SSO
- **Gedeelde key met ZIT-coach** — voor nu prima, splitsen zodra ZIT naar TestFlight gaat (zie sectie 8 → Onderhoud)

### NewsAPI
- **Plan:** free
- **API-key:** in `.env` als `NEWS_API_KEY`
- **Dashboard:** [newsapi.org](https://newsapi.org)
- **Fallback bij quota uitputting:** server schakelt automatisch over op andere gratis bronnen (zie de RSS-feeds hieronder + de fallback-logica in `server.js`)

### RSS-feeds
- ~30 feeds gedefinieerd in `server.js`. Geen externe service nodig — pure HTTP-fetches. Vangen ook op als NewsAPI op zijn quotum zit.

### Hosting — Render
- **Public URL:** _(VUL IN: precieze .onrender.com-URL — zie Render dashboard)_
- **Plan:** zelfde Render-account als de ZIT-coach
- **Auto-deploy:** vanuit GitHub `main` (Render detecteert Node.js automatisch, draait `node server.js`)
- **Env-vars op Render:** `ANTHROPIC_API_KEY` en `NEWS_API_KEY`
- **Dashboard:** [dashboard.render.com](https://dashboard.render.com)

---

## 4. Belangrijke beslissingen

### Geen npm-dependencies
Native Node.js `http` + ingebouwde modules. Reden: minimaal onderhoud, geen kwetsbaarheden van transitives, snelle installatie op willekeurige machine. Kost iets meer code (handmatig HTTP-routing), maar voor dit kleine project ruim acceptabel. **Niet wijzigen** zonder bewuste afweging.

### Datumfilter: alleen vanaf 2025-01-01
In `fetchNews`, `fetchRSS` en als vangnet voor `summarize`. Datum wordt door Node.js geformatteerd via `formatDatum()` — Claude heeft daar geen invloed op. Reden: voorkomt verouderd nieuws + voorkomt hallucinaties van datums door het model.

### In-memory cache, 15 min TTL
Voorkomt rate-limits op NewsAPI bij refresh-spam tijdens testen. Cache leeft alleen zolang `server.js` draait — bij restart leeg. Voor de huidige schaal (klein aantal docenten) prima.

### Claude Haiku i.p.v. Sonnet
Samenvatten en kort chatten zijn taken waar Haiku snel genoeg + goedkoop genoeg is. Sonnet zou kosten verviervoudigen zonder dat de kwaliteit per saldo merkbaar beter is voor deze use-case.

### PWA i.p.v. native app
Installeerbaar op iPhone/iPad/desktop, offline lezen via service worker, geen App Store-flow nodig. Voor een interne tool voor een handvol docenten is dit verreweg de simpelste route.

### `.env` met API-keys, niet in Git
`.gitignore` staat `.env`. Inladen gebeurt door een tiny custom parser bovenin `server.js` (geen `dotenv`-package conform "geen npm-deps").

### Gelezen artikelen via localStorage, niet server-side
Geen account, geen DB. Houdt het systeem stateless en privacy-vriendelijk.

### Anthropic-key voorlopig gedeeld met ZIT-coach
Eén key voor twee projecten — simpeler, één spending-limit, één rotatie-procedure. Splitsen pas als ZIT naar TestFlight gaat: dan is per-project usage-zicht en geïsoleerde billing belangrijker dan operationele eenvoud. Open punt staat in sectie 8.

### NewsAPI free + RSS-fallback
Free-plan dekt het huidige tester-volume. Als de quotum-grens wordt geraakt, neemt de RSS-laag het automatisch over — geen harde uitval voor de gebruiker.

---

## 5. Setup & monitoring

### Lokaal draaien
```bash
cd ~/Projecten/AI-Nieuws
node server.js
```
Server luistert default op `http://localhost:3000`.

### Vereisten
- Node.js ≥ 18
- `.env` met `ANTHROPIC_API_KEY` en `NEWS_API_KEY`

### Monitoring
Niets ingericht — schaal is klein, geen externe afhankelijkheid bovenop wat al gemonitord wordt voor ZIT (Anthropic spending limit dekt beide projecten via dezelfde key).

> 🟡 **Open vraag:** wordt dezelfde Anthropic-key gebruikt voor ZIT-coach én AI-Nieuws, of zijn het aparte keys? Relevant voor billing-attributie.

---

## 6. Tests & validaties

### Collega-feedback (vanaf 29 april 2026)
App is rondgestuurd naar ORM-collega's voor feedback. Loopt momenteel.

> 🟡 Concrete tester-feedback wordt nog niet centraal verzameld — komt binnen via mail / gesprek. Volgende ronde: kanaliseren via een feedback-formulier of ingebouwde flow (zie [sectie 8](#8-open-punten--to-dos)).

### Geautomatiseerde tests
Geen — bewust voor deze schaal en projectfase. Bij groei eventueel toevoegen.

---

## 7. Opgeloste bugs & valkuilen

### Usability-fixes n.a.v. code-review als TAM-simulatie (commits `c16c327`–`d1da4dc`)
**Problemen:** 7 usability-issues gevonden via grondige code-review.
**Opgelost:** onboarding-banner ID + sluitknop gefixed, misleidende empty state tekst, "Opnieuw proberen" zonder force=true, "Leg uit" toonde volledige prompt zichtbaar in inputveld, chat-label onzichtbaar als ingeklapt, ESC sloot modal niet.
**Verwijderd:** e-mail digest knop (Hanze-beveiliging blokkeert Outlook deeplinks), e-mail deel-optie in share-modal, "Markeer alles" knop (geen meerwaarde dagelijks gebruik).
**Verbeterd:** chat-label verduidelijkt, empty state Mijn vakgebied uitnodigender gemaakt.
**Geleerd:** per-artikel delen via ↗ is voldoende. E-mail deeplinks werken niet in Hanze-omgeving.

### `.env` niet automatisch ingeladen (commit `9e6b6fa`)
**Probleem:** API-keys werden niet gelezen omdat er geen `dotenv` was.
**Opgelost:** kleine custom parser bovenin `server.js` die `.env` regel voor regel parst en environment variables zet.
**Geleerd:** voor "geen npm-deps"-project ben je je eigen ecosysteem — kleine helpers schrijf je zelf.

### Server-cache tijdelijk verwijderd, daarna hersteld (commit `9e6b6fa`)
**Probleem:** server-side cache leverde stale resultaten op tijdens testen.
**Opgelost:** cache verwijderd voor debuggen, daarna teruggezet op 15 min TTL voor productie.
**Geleerd:** cache uitschakelen is handig bij debuggen, maar 15 min is voor productie de juiste balans tussen snelheid en versheid.

### Datumfilter consistent maken (commit `9e6b6fa`)
**Probleem:** Claude formatteerde soms datums verkeerd, oude nieuwsberichten kwamen door de filter.
**Opgelost:** datum-formatting verplaatst naar Node.js (`formatDatum()`) en filter toegepast in `fetchNews`, `fetchRSS` en als vangnet in `summarize`.
**Geleerd:** voor kritieke logica (datums, filters) is deterministische code (Node.js) altijd beter dan een LLM.

### "Uitleggen"-prompt zonder artikel-context (commit `af9e682`)
**Probleem:** als gebruiker op "uitleggen" klikte, kreeg Claude alleen de vraag, niet de artikel-samenvatting.
**Opgelost:** samenvatting toegevoegd aan de prompt zodat Claude context heeft.
**Geleerd:** chat-knoppen die over een specifiek artikel gaan moeten dat artikel in hun prompt-context meenemen.

### Toon-aanpassing (commit `ca3a393`)
**Probleem:** "Uitleggen"-antwoorden waren neerbuigend van toon.
**Opgelost:** prompt herschreven zonder veronderstellingen over het kennisniveau van de docent.
**Geleerd:** voor een doelgroep van docenten is de standaard "uitleg-toon" van een LLM misplaatst — assumeer expertise.

### Scroll-naar-chat na klik op "uitleggen" (commit `9666f7e`)
**Probleem:** chat scrollde niet automatisch in beeld bij activeren van "uitleggen", waardoor gebruikers de respons misten.
**Opgelost:** scroll-naar-chat ingebouwd op klik.
**Geleerd:** voor PWA's op kleine schermen (mobiel) is scroll-management explicit nodig.

---

## 8. Open punten / to-do's

### Tester-uitnodigingen
- [x] Ties en Nico om feedback vragen
- [x] URL mailen naar de overige testers

### Tester-feedback structureren
- [ ] In-app feedback-knop overwegen — vergelijkbaar met ZIT, met paar gerichte vragen
- [ ] Of: lichte alternatief — een dedicated mail-link per tab "wat miste je hier?"

### Mogelijke uitbreidingen (post-feedback)
- [ ] Eigen RSS-feeds toevoegbaar door gebruiker (in plaats van hardcoded in server.js)
- [ ] Email-digest — dagelijkse mail met top-3 artikelen
- [ ] Bookmark-export — opgeslagen artikelen exporteren naar Markdown of e-mail

### Onderhoud / hygiëne
- [ ] Service worker cache-version (`'ai-nieuws-v2'` in `sw.js`) ophogen bij elke significante frontend-wijziging om stale cache te vermijden bij gebruikers
- [ ] Anthropic-keys splitsen tussen ZIT en AI-Nieuws zodra ZIT naar TestFlight gaat — voor schone per-project billing en geïsoleerde rotatie. Doen vóór TestFlight-build (gepland donderdag 7 mei 2026 voor ZIT).

---

## 9. Werklog

Eén regel per sessie. Hoofdpunten, geen volledige geschiedenis (commits zijn de bron).

- **2026-05-01 (vervolg 3)** — TAM-analyse gedaan, 7 usability-fixes doorgevoerd, e-mail digest + deeloptie + "Markeer alles" verwijderd, chat-label en vakgebied empty state verbeterd, terminal-workflow + project-aliassen (`ainieuw`, `meditatie`) aangemaakt in `.bash_profile`.
- **2026-05-01** — Projectlog aangemaakt (`docs/projectlog.md`) en `CLAUDE.md` toegevoegd met instructie om dit log proactief bij te houden. Project-historie en architectuur gedocumenteerd op basis van bestaande memory + repo-inspectie. Hosting-vraag en gedeelde-key-vraag gemarkeerd als open punten.
- **2026-05-01 (vervolg)** — Hosting-vraag beantwoord (Render publiek, gedeeld account met ZIT-coach), Anthropic-key gedeeld met ZIT (splitsen vóór ZIT-TestFlight), NewsAPI free-plan met RSS-fallback bevestigd. Twee tester-uitnodigingsitems uit Apple-notitie *"To do AI nieuws site"* geconsolideerd naar sectie 8.
- **2026-05-01 (vervolg 2)** — Memory uitgebreid met gedragsregel "eigen ideeën eerst voorstellen" (n.a.v. drie speculatieve uitbreiding-suggesties die ik bij projectlog-creatie zelf had bedacht zonder te vragen — Lex liet ze staan, regel voorkomt herhaling). Identieke regel ook in ZIT-memory.
- **2026-04-30** — Productiesite op Render werkte niet (code nooit gepusht na fixes). Gepusht naar GitHub, Render auto-deployed. Cache teruggezet op 15 min. Gelezen-doorstreping werkt nu direct zonder paginaload.
- **2026-04-29** — Datumfilter, servercache en `.env`-loader bijgewerkt (commit `9e6b6fa`). App rondgestuurd naar ORM-collega's voor feedback.
- **2026-04-27 / 28** — UX-verbeteringen: scroll-naar-chat, voorbeeldvragen-chips, "uitleggen"-feature, prompt-toonaanpassing.
- **2026-04-15** — Eerste versie van het dashboard opgezet (begin van het project).
