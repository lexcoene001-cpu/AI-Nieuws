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
- **Instellingen** — preferenties, dark mode, etc. (alleen via wieltje-icoon in de header, niet als tabblad)

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
- **Public URL:** [https://ai-nieuws.onrender.com/](https://ai-nieuws.onrender.com/)
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

**Beta-tester-ronde afgerond (2026-05-09):** beta-tester gaf akkoord, geen kritische opmerkingen meer.

**Eerste concrete feedback (2026-05-08):** ORM-tab leverde te breed nieuws — algemeen AI-bedrijfsnieuws (AI Act, big-tech-deals) i.p.v. AI-toepassingen voor ondernemers/retailers/marketeers. Aangepakt in commits `998e413`, `15bf52f`, `621502f` (zie sectie 7 → "ORM-tab te brede selectie").

**Brede uitrol naar vakverantwoordelijken (2026-05-10):** Lex en Ties de Boer hebben een gecombineerde mail verzonden met twee thema's: (1) verzoek om de handleiding *"Zeker Toetsen in AI-tijden"* (Lex, april 2025) toe te passen via de checklijst en het werkdocument — reactie uiterlijk 1 juli aan Lex; (2) introductie van het ORM AI Nieuws-dashboard. De feedback-knop op het dashboard is bewust nog niet gebouwd; dat komt in de tweede ronde (na 1 juli) zodat collega's eerst gebruikservaring kunnen opbouwen.

> 🟡 Concrete tester-feedback wordt nog niet centraal verzameld — komt binnen via mail / gesprek. Voor de tweede ronde (juli/augustus): Google Form via header-knop (zie [sectie 8](#8-open-punten--to-dos)).

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

### Markdown in chat-antwoorden werd als platte tekst getoond (commit `159bf48`)
**Probleem:** Claude's antwoorden bevatten Markdown (`**bold**`, `-` bullets, `###` headers) die letterlijk werd weergegeven met sterretjes en streepjes — slecht leesbaar voor docenten.
**Opgelost:** `renderMarkdown` in `index.html` uitgebreid: `**bold**`, `-`/`*` bullets, `1.` genummerde lijsten, `#…######` headers en inline `` `code` ``. CSS toegevoegd voor `.md-p`, `.md-h`, `.md-list` en `code` binnen `.chat-msg-assistant` voor nette spacing in de bubble.
**Geleerd:** LLM's gebruiken Markdown by default in conversationele output; een systeem-prompt-instructie om het te vermijden werkt onbetrouwbaar — een lichtgewicht renderer in de frontend is robuuster.

### Auto-scroll na chat-zoekopdracht duwde chatbox uit beeld
**Probleem:** `grid.scrollIntoView({block: 'start'})` na een chat-zoekopdracht scrollde de chat-sectie te ver uit beeld — gebruikers landden midden in de artikellijst, zonder context van wat ze net hadden gevraagd. Een tussenoplossing met berekende positie (~55% viewport) was nog steeds te agressief.
**Opgelost:** auto-scroll volledig verwijderd. De suffix-regel "📰 N artikelen staan hieronder ↓" met expliciet ↓-pijltje is al voldoende uitnodiging; de gebruiker scrollt zelf met intentie naar de grid.
**Geleerd:** een tekstuele aanwijzing met richtingspijl is vaak een betere UX-oplossing dan automatisch scrollen — laat de gebruiker zelf de viewport bewegen.

### Chat-prompt mengde uitleg en zoekopdracht — leverde links in chat én artikelen in grid op
**Probleem:** de chat-prompt liet de AI inline artikel-links opnemen ook bij zoekvragen, en zelfs vragen "wil je dat ik er meer voor je zoek?" terwijl de frontend de zoekopdracht direct uitvoerde. Resultaat: dubbele/tegenstrijdige output (1 link in chat, 13 artikelen in grid).
**Opgelost:** prompt in `/api/chat` herschreven met expliciet onderscheid: bij ZOEKVRAAG geeft de AI alleen een korte bevestiging + nlQuery/enQuery, geen artikel-titels of -links in de reply. Bij andere vragen mag wel met markdown-links naar context-artikelen verwezen worden.
**Geleerd:** wanneer de UI twee actiepaden kent (chat-only antwoord vs. grid-trigger), moet de prompt die paden expliciet benoemen — anders leunt het LLM standaard naar "alles in de chat".

### Chat-zoekopdracht verving grid stilletjes — teller en context bleven achter
**Probleem:** Als de gebruiker via de chat om artikelen vroeg ("zoek artikelen over X"), werd de artikelgrid onder de chat vervangen, maar de teller (totaal/NL/Intl) en het tijdstempel bleven op de oorspronkelijke fetch staan. De gebruiker zag niet dat de selectie was vervangen, en de chat-respons zelf vermeldde niet dat de artikelen onder de chat te vinden waren.
**Opgelost:** stats-/timestamp-update geëxtraheerd naar helper `updateNewsStats(tab, articles)` en aangeroepen vanuit zowel `fetchNews` als `sendChat`. Na een chat-zoekopdracht wordt aan de assistant-respons "📰 N artikelen staan hieronder ↓" toegevoegd, en de pagina scrollt automatisch naar de grid.
**Geleerd:** wanneer een chat-actie state buiten de chat verandert (grid, teller), moet die verandering expliciet worden teruggekoppeld in de chat — anders lijkt het of er niets gebeurd is.

### ORM-tab te brede selectie n.a.v. tester-feedback (commits `998e413`, `15bf52f`, `621502f`)
**Probleem:** ORM-tab toonde algemeen AI-bedrijfsnieuws (AI Act, big-tech-deals, AI-modeluitrol) i.p.v. AI-toepassingen door ondernemers/retailers/marketeers. Twee oorzaken: (1) regex-filter eiste enkel ORM-termen, geen AI-context — broeden bronnen als Sprout/Adformatie kwamen ongefilterd binnen; (2) ORM-synoniemen waren te ruim ("marketing", "consumer", "innovation", "branding", "campagne").
**Opgelost in drie iteraties:**
1. ORM-filter vereist nu AI **én** ORM (gecombineerde regex-test in `ormFilter`). Synoniemen ingedikt; alle NL-bronnen lopen via dezelfde filter.
2. Niche-bronnen toegevoegd: AG Connect, Computable, Techzine, Dutchcowboys, Nu.nl Tech (NL); Modern Retail, Digiday, AdExchanger (INTL); plus AI-tag-feeds van Frankwatching/Computable/Emerce. Drie kapotte URLs (The Drum, Marketing Brew, Insider Intelligence) ge-skipt.
3. AI-regex uitgebreid met moderne AI-namen (`copilot`, `gemini`, `claude`, `openai`, `anthropic`, `generatieve ai`, `stable diffusion`, `midjourney`). NewsAPI-queries hertekend met expliciete AND-logica `(AI/ChatGPT/Copilot) AND (MKB/ondernemer/retail/...)`. LLM-selectie-prompt aangescherpt voor de ORM-tab specifiek: alleen artikelen over AI-toepassingen door ondernemers/marketeers, big-tech-deals expliciet uitgesloten. Mix-eis: minimaal 4 NL én 4 INTL.
4. NL-volume verhoogd: regex verbreed met `marketing`/`klant`/`merk` (LLM-pas filtert ruis); twee Emerce-tag-feeds (`tag/ondernemer`, `tag/e-commerce`); pool naar Claude verdubbeld (10+10 → 20+20); Guardian-window naar 60 dagen (NewsAPI blijft op 30, free-plan-limiet).

**Resultaat:** van 1-2 NL-artikelen (allemaal raak maar te weinig) naar 6 NL + 4 INTL na drie deploys, allemaal toepassings-georiënteerd.
**Geleerd:** voor smalle thema's (zoals AI×ORM-onderwijs) is een combinatie van strenge filterlagen nodig — regex voor brute-force exclusie, LLM-pas voor nuance, plus expliciet vragen om mix in de prompt om extreme uitkomsten ("alles NL" of "alles INTL") te voorkomen.

### Stats-bar ontbrak op onderwijs/vakgebied (commit `ce30c22`)
**Probleem:** teller (totaal/NL/INTL) was alleen aanwezig op de tabs Algemeen en ORM. Op Onderwijs en Mijn vakgebied stond het aantal niet zichtbaar — gebruikers konden niet zien hoeveel artikelen ze keken.
**Opgelost:** stats-bar HTML toegevoegd aan beide tabs (`stats-onderwijs`, `stats-vakgebied`). `updateNewsStats` herschreven naar prefix-map zodat alle 4 tabs uniform werken. SW-cache-versie van `v2` → `v3` om de frontend-wijziging naar geïnstalleerde PWA's door te zetten.
**Geleerd:** UI-componenten die op één tab staan zijn niet automatisch consistent op andere tabs — bij een nieuw component altijd checken of het op alle relevante plekken hoort.

### Algemene tabs trokken scheef naar alleen NL bij selectie (commit `dc037dc`)
**Probleem:** in tabs Algemeen en Onderwijs koos Claude soms maar 1 internationaal artikel — overige plekken werden door NL-content gevuld. Voor ORM was de mix-eis al opgelost (ORM-specifieke prompt), maar voor Algemeen en Onderwijs (waar `topic = null` is) kreeg Claude geen mix-instructie.
**Opgelost:** mix-instructie verplaatst van ORM-specifiek naar generieke `mixHint`-string die altijd aan de Claude-prompt wordt toegevoegd. Tekst aangescherpt van "Streef naar..." (zacht) naar "MINIMAAL 4 NL EN MINIMAAL 4 INTL, mits beschikbaar in de input" (hard). Geldt voor alle 4 tabs.
**Resultaat:** Onderwijs van 1 INTL → 5 INTL; Algemeen van 1 → 5; ORM blijft op 5; Vakgebied analoog.
**Geleerd:** LLM-instructies met "Streef naar" worden vaak genegeerd; "MINIMAAL X" met expliciet aantal werkt veel beter. En generieke prompt-onderdelen verdienen één centrale plek, geen kopie per tab.

---

## 8. Open punten / to-do's

### Tester-uitnodigingen
- [x] Ties en Nico om feedback vragen
- [x] URL mailen naar de overige testers
- [x] Beta-tester-akkoord (2026-05-09 — geen kritische opmerkingen)
- [x] Brede uitrol naar vakverantwoordelijken (2026-05-10 — gecombineerd met handleiding "Zeker Toetsen in AI-tijden", deadline reactie 1 juli)
- [ ] **Na 1 juli:** ingevulde werkdocumenten beoordelen (samen met Ties), CUCO-bespreking voorbereiden (Google Calendar reminder gezet voor 2 juli 09:00)

### Tester-feedback structureren
- [ ] **Plan voor tweede ronde** (besloten 2026-05-09, herzien 2026-05-10): één "💬 Feedback" knop in de header die opent in nieuwe tab → Google Form (Lex maakt het Form, ik bouw de knop). Reden: `mailto:`-deeplinks worden door Hanze-omgeving geblokkeerd (zie sectie 7 → "e-mail digest knop verwijderd"); een form werkt overal en houdt alle responses op één plek. **Bewust uitgesteld:** eerste collega-mail (2026-05-10) bevat géén feedback-knop — aandacht ligt nu op de toetsing-handleiding + kennismaking met de app. Feedback-knop komt aan de orde in de tweede mail (juli/augustus), dan hebben collega's al gebruikservaring opgebouwd.

### Mogelijke uitbreidingen (post-feedback)
- [ ] Eigen RSS-feeds toevoegbaar door gebruiker (in plaats van hardcoded in server.js)
- [ ] Email-digest — dagelijkse mail met top-3 artikelen
- [ ] Bookmark-export — opgeslagen artikelen exporteren naar Markdown of e-mail

### Onderhoud / hygiëne
- [x] Tabblad "Instellingen" verwijderen — wieltje-icoon in de header dekt al dezelfde functie (afgehandeld 2026-05-02)
- [ ] Service worker cache-version (huidige: `'ai-nieuws-v3'` in `sw.js`) ophogen bij elke significante frontend-wijziging om stale cache te vermijden bij gebruikers
- [ ] Anthropic-keys splitsen tussen ZIT en AI-Nieuws zodra ZIT naar TestFlight gaat — voor schone per-project billing en geïsoleerde rotatie. Doen vóór TestFlight-build (gepland donderdag 7 mei 2026 voor ZIT).

---

## 9. Werklog

Eén regel per sessie. Hoofdpunten, geen volledige geschiedenis (commits zijn de bron).

- **2026-05-10** — Beta-tester gaf akkoord (geen verdere opmerkingen). Brede uitrol-mail naar vakverantwoordelijken samengesteld door Lex en Ties de Boer en verstuurd: gecombineerde mail met (1) verzoek om handleiding *"Zeker Toetsen in AI-tijden"* (Lex, april 2025) toe te passen via checklijst en werkdocument — reactie aan Lex uiterlijk 1 juli; (2) introductie van het ORM AI Nieuws-dashboard. Feedback-knop bewust uitgesteld naar tweede ronde. Google Calendar reminder gezet voor donderdag 2 juli 09:00 om reacties te verwerken en fase 2 (feedback-knop + tweede mail) te starten.
- **2026-05-09 (vervolg)** — Mix-eis (min 4 NL + min 4 INTL) verplaatst van ORM-specifiek naar generieke Claude-prompt en aangescherpt van "Streef naar" → "MINIMAAL". Reden: Algemeen en Onderwijs hadden `topic = null` en kregen geen mix-instructie, met als gevolg dat Claude maar 1 INTL koos. Lokaal: alle tabs nu 5+ INTL.
- **2026-05-09** — Stats-bar (totaal/NL/INTL) toegevoegd aan tabs Onderwijs en Mijn vakgebied (stond alleen op Algemeen en ORM). `updateNewsStats` herschreven naar prefix-map. Algemene `aiTerms`-regex uitgebreid met moderne AI-namen (Copilot/Gemini/Claude/OpenAI/Anthropic/etc.) zodat alle tabs profiteren. SW-cache-versie v2 → v3. Beta-tester gemaild met vraag om laatste opmerkingen; brede uitrol naar collega's wacht op zijn reactie.
- **2026-05-08 (vervolg 2)** — ORM-tab NL-volume verhoogd: regex verbreed met `marketing`/`klant`/`merk` (LLM-pas filtert ruis), twee Emerce-tag-feeds (`tag/ondernemer`, `tag/e-commerce`), Claude-pool verdubbeld (10+10 → 20+20), Guardian op 60 dagen, LLM-prompt vraagt expliciet om mix (min 4 NL + 4 INTL). Lokaal van 1-2 NL naar 6 NL + 4 INTL, allemaal AI-toepassings-content.
- **2026-05-08 (vervolg)** — ORM-tab toepassings-focus: NL AI-tag-feeds toegevoegd (Frankwatching/Computable/Emerce), AI-regex verruimd met moderne AI-namen (Copilot/Gemini/Claude/OpenAI/Anthropic/etc.), NewsAPI-queries hertekend met AND-logica, LLM-selectie-prompt aangescherpt — alleen toepassing van AI door ondernemers/retailers, geen big-tech-deals.
- **2026-05-08** — ORM-tab strenger gemaakt n.a.v. tester-feedback "te breed": filter vereist nu AI **én** ORM (was: alleen ORM), synoniemenlijst ingedikt (marketing/consumer/innovation/etc. geschrapt), 8 niche-bronnen toegevoegd (AG Connect, Computable, Techzine, Dutchcowboys, Nu.nl Tech, Modern Retail, Digiday, AdExchanger). Drie kapotte URLs (The Drum, Marketing Brew, Insider Intelligence) overgeslagen.
- **2026-05-02 (vervolg 4)** — Auto-scroll na chat-zoekopdracht volledig verwijderd. Eerste poging (scrollIntoView) was te agressief, tweede poging (~55% viewport-anker) ook nog steeds. De suffix "📰 N artikelen staan hieronder ↓" met richtingspijl is voldoende — gebruiker scrollt zelf.
- **2026-05-02 (vervolg 3)** — Chat-prompt herschreven: expliciet onderscheid tussen ZOEKVRAAG (korte bevestiging + nlQuery/enQuery, geen inline links) en uitleg-vraag (volledig antwoord, mag wel inline links naar context-artikelen). Voorkomt dubbele output (link in chat én artikelen in grid).
- **2026-05-02 (vervolg 2)** — Chat-zoekopdracht koppelt nu duidelijk terug naar de grid: teller (totaal/NL/Intl) en tijdstempel worden bijgewerkt na een chat-trigger, assistant-respons krijgt "📰 N artikelen staan hieronder ↓" als suffix, pagina scrollt automatisch naar de grid. Stats-update geëxtraheerd naar `updateNewsStats` helper.
- **2026-05-02 (vervolg)** — Markdown-rendering in chat-antwoorden gefixed: `renderMarkdown` parseert nu `**bold**`, bullets, genummerde lijsten, headers en inline-code in plaats van alleen links. CSS voor de chat-bubble aangepast voor nette spacing. Geverifieerd in preview met voorbeeldbericht.
- **2026-05-02** — Tabblad "Instellingen" verwijderd uit de tabs-rij; wieltje-icoon in de header opent nu het enige toegangspunt. Tab-indexering veiliger gemaakt zodat showTab('instellingen') geen JS-error gooit. Eén item uit Apple-notitie verwerkt en afgevinkt.
- **2026-05-01 (vervolg 3)** — TAM-analyse gedaan, 7 usability-fixes doorgevoerd, e-mail digest + deeloptie + "Markeer alles" verwijderd, chat-label en vakgebied empty state verbeterd, terminal-workflow + project-aliassen (`ainieuw`, `meditatie`) aangemaakt in `.bash_profile`.
- **2026-05-01** — Projectlog aangemaakt (`docs/projectlog.md`) en `CLAUDE.md` toegevoegd met instructie om dit log proactief bij te houden. Project-historie en architectuur gedocumenteerd op basis van bestaande memory + repo-inspectie. Hosting-vraag en gedeelde-key-vraag gemarkeerd als open punten.
- **2026-05-01 (vervolg)** — Hosting-vraag beantwoord (Render publiek, gedeeld account met ZIT-coach), Anthropic-key gedeeld met ZIT (splitsen vóór ZIT-TestFlight), NewsAPI free-plan met RSS-fallback bevestigd. Twee tester-uitnodigingsitems uit Apple-notitie *"To do AI nieuws site"* geconsolideerd naar sectie 8.
- **2026-05-01 (vervolg 2)** — Memory uitgebreid met gedragsregel "eigen ideeën eerst voorstellen" (n.a.v. drie speculatieve uitbreiding-suggesties die ik bij projectlog-creatie zelf had bedacht zonder te vragen — Lex liet ze staan, regel voorkomt herhaling). Identieke regel ook in ZIT-memory.
- **2026-04-30** — Productiesite op Render werkte niet (code nooit gepusht na fixes). Gepusht naar GitHub, Render auto-deployed. Cache teruggezet op 15 min. Gelezen-doorstreping werkt nu direct zonder paginaload.
- **2026-04-29** — Datumfilter, servercache en `.env`-loader bijgewerkt (commit `9e6b6fa`). App rondgestuurd naar ORM-collega's voor feedback.
- **2026-04-27 / 28** — UX-verbeteringen: scroll-naar-chat, voorbeeldvragen-chips, "uitleggen"-feature, prompt-toonaanpassing.
- **2026-04-15** — Eerste versie van het dashboard opgezet (begin van het project).
