---
title: "Hoofdstuk 7 — Cyclus 1: Claude Code-herbouw en tweede tester-iteratie (half april – 29 april 2026)"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.2-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

# 7. Cyclus 1 — Claude Code-herbouw en tweede tester-iteratie (half april – 29 april 2026)

## 7.1 Aansluiting op cyclus 0

In de tweede week van april 2026 begon de fundamentele herbouw die in cyclus 0 was besloten (zie hoofdstuk 6 §6.6). Het oorspronkelijke prototype in Google AI Studio bleek architectonisch niet geschikt om de werkende koppeling tussen samenvatting en bron te garanderen — een fundamentele functionele eis voor een nieuws-curatie-tool. De keuze voor Claude Code (Anthropic) als nieuwe ontwikkelomgeving bood twee voordelen: volledige controle over de codebase, en een Git-gebaseerde workflow die past bij de DBR-vereisten van transparantie en versiebeheer.

De cyclus 1 die in dit hoofdstuk wordt beschreven is in feite de eerste cyclus van *gestructureerde* DBR-werkwijze met directe terugkoppeling van een tester. De pre-Claude-fase (cyclus 0) was richting-zoekend; vanaf cyclus 1 wordt het traject systematisch gedocumenteerd via Git-commits en projectlog.

## 7.2 Ontwerpkeuzes en hun verantwoording

Het herbouwde dashboard is opgezet op basis van een aantal expliciete ontwerpkeuzes. Deze keuzes worden hier verantwoord vanuit het uitgangspunt dat het systeem moet werken als *scaffold voor docenten* — een ondersteunende structuur die het denkwerk niet overneemt, maar het mogelijk maakt (zie hoofdstuk 3.3 voor de theoretische verankering).

### 7.2.1 Progressive Web App (PWA) in plaats van native app

De keuze voor een PWA in plaats van een native iOS- of Android-applicatie is gebaseerd op vier overwegingen:

- **Drempelloze installatie**: een PWA is in één URL te delen, vereist geen App Store- of Google Play-flow en geen account.
- **Cross-platform**: dezelfde codebase werkt op iPhone, iPad, Android, Windows en macOS.
- **Onderhoudslast**: één codebase, geen platformspecifieke build- of releaseprocedures.
- **Schaalbaar binnen Hanze-context**: voor een tool die in eerste instantie binnen één opleiding wordt uitgerold, weegt de eenvoud van publicatie zwaarder dan de native gebruikerservaring.

Een PWA biedt verder de mogelijkheid om als 'app' op het beginscherm geïnstalleerd te worden, waardoor de drempel om dagelijks te openen vergelijkbaar wordt met die van een native app — zonder de complicaties van app-stores.

### 7.2.2 Native Node.js zonder npm-dependencies

De backend (`server.js`) is geschreven in native Node.js zonder externe npm-pakketten. Deze keuze is bewust en heeft drie redenen:

- **Minimaal onderhoud**: geen `node_modules` van honderden megabytes, geen wekelijkse security-updates van transitieve dependencies.
- **Snelle deployability**: op elke machine met Node.js 18+ draait de applicatie zonder voorafgaande installatie.
- **Educatief perspectief**: voor de doelgroep en de auteur als ontwerper-onderzoeker is een leesbare, ontwikkelbare codebase een didactisch waardevolle eigenschap.

De prijs is iets meer code (handmatige HTTP-routing, eigen `.env`-parser), maar voor de huidige schaal acceptabel.

### 7.2.3 Vier-tab-structuur

Het dashboard kent vier hoofdtabs voor nieuws plus een tab voor opgeslagen artikelen:

- **🏪 ORM** — opent automatisch bij start; nieuws over ondernemerschap, retail, e-commerce en startups.
- **🌐 Algemeen** — breed AI-nieuws over alle sectoren.
- **🎓 Onderwijs** — AI in het hoger onderwijs.
- **🔬 Mijn vakgebied** — gepersonaliseerd: gebruiker vult eigen specialisatie in.
- **⭐ Opgeslagen** — bookmarks via `localStorage`.

Deze structuur volgt het didactische principe van *concentrische cirkels*: de meest specifieke context (ORM) staat als startpunt; de gebruiker kan stap voor stap verbreden (algemeen) of zijn eigen vakgebied invullen (gepersonaliseerd). Dit is een toepassing van het scaffold-principe op informatie-architectuur.

### 7.2.4 Claude Haiku voor samenvatting en chat

Voor het samenvatten van artikelen en de chat-functie is gekozen voor Claude Haiku 4.5 (Anthropic). De argumenten: kostenbewust (ongeveer een vierde van Sonnet), lage latency, en kwalitatief goede Nederlandse output.

### 7.2.5 NewsAPI gecombineerd met RSS-feeds

Voor het verzamelen van nieuws is gekozen voor twee bronnen: NewsAPI (free tier, 100 calls/dag) voor brede coverage met queryable parameters, en circa 30 RSS-feeds als aanvulling én als fallback bij quotum-uitputting. Deze hybride aanpak verzekert robuustheid.

### 7.2.6 LocalStorage voor gebruikersstate

Opgeslagen artikelen, dark-mode-voorkeur en gelezen-status worden in `localStorage` van de browser bewaard, zonder server-side database. Dit voorkomt accountflow, is privacy-vriendelijk en houdt het systeem eenvoudig.

### 7.2.7 In-memory cache met 15-min TTL

De server houdt opgehaalde nieuwsresultaten gedurende 15 minuten in een in-memory cache, om rate-limit-problemen op NewsAPI tijdens testen te voorkomen.

### 7.2.8 Werkende koppeling samenvatting → bron als kernvereiste

Een specifieke ontwerpeis — direct ontleend aan de cyclus 0-bevinding (zie hoofdstuk 6 §6.5) — is dat de doorklik-koppeling vanuit elke samenvatting naar de oorspronkelijke bron in alle gevallen werkt. In de Claude Code-architectuur is deze koppeling expliciet getest in elke cyclus, met geautomatiseerde controles op URL-validiteit waar mogelijk. Dit voorkomt herhaling van het patroon dat in AI Studio tot opheffing van het prototype leidde.

## 7.3 Implementatie en eerste deploy

De herbouw werd in de tweede week van april 2026 uitgevoerd, met inzet van Claude Code (Anthropic) als programmeerassistent. Deze inzet is conform de richtlijnen voor verantwoorde AI-gebruik die zijn vastgelegd in de eigen handleiding *Zeker Toetsen in AI-tijden* (Coene, 2025): elke aanzet door AI is door de auteur kritisch beoordeeld, getest en aangepast voordat het in productie is gegaan. De broncode is beschikbaar in een publieke GitHub-repository.

De productieversie draait op het Render-platform op de publieke URL [https://ai-nieuws.onrender.com/](https://ai-nieuws.onrender.com/). Render voert automatische deploys uit vanuit de `main`-branch op GitHub; bij elke push naar `main` wordt de nieuwe versie binnen één tot twee minuten live gezet. De volledige broncode is beschikbaar in een publieke GitHub-repository op [github.com/lexcoene001-cpu/AI-Nieuws](https://github.com/lexcoene001-cpu/AI-Nieuws).

## 7.4 Tweede tester-iteratie van Ties (15 april 2026)

Op 15 april 2026 reageerde Ties de Boer voor de tweede maal — deze keer op de Claude Code-versie:

> *"Interessant platform en de koppeling met de artikelen lijkt goed te staan. Ik kom bij iedere samenvatting makkelijk bij het achterliggende artikel. Ik twijfel nog een beetje aan de selectie die de website maakt bij de verschillende categorieën. Zo zie ik bij 'AI in het onderwijs' ook wel nieuws staan over ontwikkelingen die niet aansluiten bij het onderwijs."*
> — Ties de Boer, mailreactie, 15 april 2026

Twee observaties springen eruit. Ten eerste is de fundamentele functionaliteits-eis uit cyclus 0 — werkende koppeling tussen samenvatting en bron — opgelost. Ten tweede komt een nieuw, inhoudelijk-curationeel probleem ter sprake: de selectie per categorie is niet scherp genoeg.

Methodisch interessant is dat dit *exact hetzelfde patroon* is dat later (cyclus 3, hoofdstuk 9) op grotere schaal terugkomt onder de noemer "te breed". In cyclus 1 betrof het de Onderwijs-tab; in cyclus 3 de ORM-tab. Het onderliggende mechanisme blijkt structureel: een filter dat alleen een themaverwante term vereist, zonder ook een AI-context-term te eisen, levert ongewenst brede resultaten op.

In cyclus 1 is op deze observatie nog niet diep ingegaan — de tweede tester-feedback diende vooral als validatie dat de Claude Code-architectuur functioneerde en als signaal dat de selectie-kwaliteit aandacht behoefde. Het inhoudelijke probleem werd opgepakt in cycli 3 en 4, op een moment dat de bredere tester-uitnodiging meer signalen leverde.

## 7.5 Brede tester-uitnodiging (eind april 2026)

Op 29 april 2026 is de Claude Code-versie ter beoordeling rondgestuurd naar collega-docenten binnen de opleiding ORM. De uitnodiging bestond uit een mail met een korte introductie, de URL van de productieversie, en installatie-instructies voor het 'als app' toevoegen aan het beginscherm op iPhone (Safari) en Android (Chrome).

In deze ronde is bewust geen gestructureerde vragenlijst meegestuurd. De keuze voor open feedback past bij de explorerende fase van DBR (McKenney & Reeves, 2018, hoofdstuk 4): in een vroege ontwerpcyclus is de waarde van kwalitatieve, ongelimiteerde feedback hoger dan die van gesloten vragen, omdat de relevante dimensies van de gebruikerservaring zich nog moeten openbaren.

De feedback uit deze ronde was overwegend positief op de basisfunctionaliteit en de Nederlandstalige presentatie. Verbeterpunten betroffen voornamelijk usability-aspecten, die in cyclus 2 systematisch zijn opgepakt via een TAM-georiënteerde code-review (zie hoofdstuk 8).

## 7.6 Reflectie op cyclus 1

De eerste cyclus van gestructureerde DBR-werkwijze levert vier observaties op die als input dienen voor de vervolgcycli:

1. **De keuze voor een minimale, leesbare codebase betaalt zich uit in iteratiesnelheid.** Aanpassingen op basis van tester-feedback kunnen binnen uren worden doorgevoerd en gepubliceerd, wat past bij het iteratieve karakter van DBR.

2. **De vier-tab-structuur biedt voldoende context-flexibiliteit voor de doelgroep.** In de tester-rondes werd de structuur niet als belemmering ervaren — een belangrijk signaal voor de keuze om in vervolgcycli vooral de inhoudelijke kwaliteit per tab aan te pakken in plaats van de structuur te wijzigen.

3. **Open feedback in een vroege fase legt onverwachte aspecten bloot.** Verbeterpunten die niet vooraf waren voorzien (zoals onduidelijke chat-labels) kwamen alleen naar voren door de ongelimiteerde uitnodiging tot reageren — een methodische bevestiging van de DBR-keuze om in vroege cycli niet te snel naar gesloten instrumenten te grijpen.

4. **Hetzelfde structurele filterprobleem (te brede selectie per categorie) verschijnt al in cyclus 1 — maar wordt pas in cycli 3 en 4 fundamenteel aangepakt.** Achteraf bezien had snellere actie op Ties' tweede feedback wellicht de "te breed"-discussie in cyclus 3 voorkomen. Dat is een leerpunt voor toekomstige DBR-trajecten: tester-feedback die al vroeg een mechanisme blootlegt verdient onmiddellijke architecturele heroverweging, niet uitstel tot de grotere groep hetzelfde signaal afgeeft. Dit punt komt terug in de reflectie (hoofdstuk 15).

Deze observaties leggen de basis voor cyclus 2, waarin de usability systematisch wordt aangepakt via een TAM-georiënteerde code-review (Davis, 1989).
