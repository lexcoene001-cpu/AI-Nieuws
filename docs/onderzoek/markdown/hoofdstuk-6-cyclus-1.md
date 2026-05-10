---
title: "Hoofdstuk 6 — Cyclus 1: Eerste prototype (april 2026)"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.1-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

# 6. Cyclus 1 — Eerste prototype (april 2026)

## 6.1 Probleemanalyse

In het voorjaar van 2026 werd binnen de opleiding Ondernemen en Retail Management (ORM) van de Hanzehogeschool Groningen een terugkerend signaal zichtbaar: docenten ervoeren het bijhouden van AI-ontwikkelingen voor hun vakgebied als een steeds zwaardere taak. Drie waarnemingen lagen aan de basis van het ontwerptraject:

1. **De snelheid van AI-ontwikkelingen overstijgt het reguliere informatie-tempo van docenten.** Generatieve AI-tools (ChatGPT, Claude, Copilot, Gemini, DeepSeek) komen in een hoog tempo met nieuwe versies, toepassingen en use-cases die direct relevant zijn voor het werkveld van retail, marketing en ondernemerschap (Coene, 2026).
2. **Bestaand aanbod sluit niet aan.** Algemene AI-nieuwssites zijn breed en internationaal; vakspecifieke nieuwsbrieven richten zich op IT-professionals; Nederlandstalig nieuws over AI in retail of MKB-context is verspreid over tientallen bronnen die individueel oppakken niet haalbaar maakt.
3. **De tijd van docenten is beperkt.** Naast onderwijstaken, begeleiding, toetsontwerp en bestuurlijke verplichtingen ontbreekt de ruimte om dagelijks meerdere bronnen te scannen, te selecteren en te interpreteren.

Deze drie waarnemingen vormen samen een ontwerpprobleem dat zich leent voor een toegepast ontwerpgericht onderzoek (DBR; McKenney & Reeves, 2018): een concrete oplossing ontwerpen, in praktijk testen, evalueren en herontwerpen, met als bijproduct een verzameling generaliseerbare ontwerpprincipes voor vergelijkbare contexten.

De urgentie van het probleem is bovendien niet beperkt tot de ORM-opleiding. Bredere ontwikkelingen in het Nederlandse hbo — een dalend studentengagement, een veranderend studentenbrein en een toenemende inzet van AI door studenten zonder dat docenten daarvan weten — versterken de noodzaak voor docenten om zelf AI-geletterd te worden (Coene, 2026; Schep et al., 2025; Stuvia, 2025). Een tool die docenten helpt om dagelijks bij te blijven, draagt indirect bij aan hun vermogen om studenten te begeleiden in verantwoord AI-gebruik.

## 6.2 Ontwerpkeuzes en hun verantwoording

Het eerste prototype is opgezet in april 2026 op basis van een aantal expliciete ontwerpkeuzes. Deze keuzes worden hier verantwoord vanuit het uitgangspunt dat het systeem moet werken als *scaffold voor docenten* — een ondersteunende structuur die het denkwerk niet overneemt, maar het mogelijk maakt (zie hoofdstuk 3.4 voor de theoretische verankering).

### 6.2.1 Progressive Web App (PWA) in plaats van native app

De keuze voor een PWA in plaats van een native iOS- of Android-applicatie is gebaseerd op vier overwegingen:

- **Drempelloze installatie**: een PWA is in één URL te delen, vereist geen App Store- of Google Play-flow en geen account.
- **Cross-platform**: dezelfde codebase werkt op iPhone, iPad, Android, Windows en macOS.
- **Onderhoudslast**: één enkele codebase, geen platform-specifieke build- of releaseprocedures.
- **Schaalbaar binnen Hanze-context**: voor een tool die in eerste instantie binnen één opleiding wordt uitgerold, weegt de eenvoud van publicatie zwaarder dan de native gebruikerservaring.

Een PWA biedt verder de mogelijkheid om als 'app' op het beginscherm geïnstalleerd te worden, waardoor de drempel om dagelijks te openen vergelijkbaar wordt met die van een native app — zonder de complicaties van app-stores.

### 6.2.2 Native Node.js zonder npm-dependencies

De backend (`server.js`) is geschreven in native Node.js zonder externe npm-pakketten. Deze keuze is bewust en heeft drie redenen:

- **Minimaal onderhoud**: geen `node_modules` van honderden megabytes, geen wekelijkse security-updates van transitieve dependencies.
- **Snelle deployability**: op elke machine met Node.js 18+ draait de applicatie zonder voorafgaande installatie.
- **Educatief perspectief**: voor de doelgroep (docenten, ontwerper-onderzoeker zelf) is een leesbare, ontwikkelbare codebase een didactisch waardevolle eigenschap.

De prijs is iets meer code (handmatige HTTP-routing, eigen `.env`-parser), maar voor de huidige schaal acceptabel.

### 6.2.3 Vier-tab-structuur

Het dashboard kent vier hoofdtabs voor nieuws plus een tab voor opgeslagen artikelen:

- **🏪 ORM** — opent automatisch bij start; nieuws over ondernemerschap, retail, e-commerce en startups.
- **🌐 Algemeen** — breed AI-nieuws over alle sectoren.
- **🎓 Onderwijs** — AI in het hoger onderwijs (lesvoorbereiding, beleid).
- **🔬 Mijn vakgebied** — gepersonaliseerd: gebruiker vult eigen specialisatie in.
- **⭐ Opgeslagen** — bookmarks via `localStorage`.

Deze structuur volgt het didactische principe van *concentrische cirkels*: de meest specifieke context (ORM) staat als startpunt; de gebruiker kan stap voor stap verbreden (algemeen) of zijn eigen vakgebied invullen (gepersonaliseerd). Dit is een toepassing van het scaffold-principe op informatie-architectuur: de structuur biedt een ingang die direct relevant is, maar laat de gebruiker zelf bepalen hoe diep en breed verder te gaan.

### 6.2.4 Claude Haiku voor samenvatting en chat

Voor het samenvatten van artikelen en de chat-functie is gekozen voor Claude Haiku 4.5 (Anthropic) als large language model. De argumenten:

- **Kostenbewust**: ongeveer een vierde van Sonnet, voor deze use-case kwalitatief vergelijkbaar.
- **Snelheid**: lage latency past bij dagelijks gebruik waarbij gebruikers snel willen scannen.
- **Nederlandstalige output**: Haiku 4.5 produceert kwalitatief goede Nederlandse samenvattingen, wat essentieel is voor de doelgroep.

De keuze voor één LLM-aanbieder is een bewuste afweging: meerdere modellen ondersteunen verhoogt complexiteit zonder dat de huidige use-case daarbij wint.

### 6.2.5 NewsAPI gecombineerd met RSS-feeds

Voor het verzamelen van nieuws is gekozen voor twee bronnen:

- **NewsAPI** (free tier, 100 calls/dag) voor brede coverage met queryable parameters.
- **~30 RSS-feeds** als aanvulling én als fallback bij quotum-uitputting.

Deze hybride aanpak verzekert robuustheid: als NewsAPI faalt of zijn limiet bereikt, blijven de RSS-feeds artikelen leveren. De RSS-feeds zijn bovendien de bron voor de meer niche-vakbladen die NewsAPI niet of slecht indexeert.

### 6.2.6 LocalStorage voor gebruikersstate

Opgeslagen artikelen, dark-mode-voorkeur en gelezen-status worden in `localStorage` van de browser bewaard, zonder server-side database. Argumenten:

- **Geen accountflow nodig**: drempelloos gebruik.
- **Privacy-vriendelijk**: geen verzameling van persoonsgegevens.
- **Schaalbaar**: geen DB-onderhoud bij groei.

De prijs is dat gebruikers hun opgeslagen artikelen verliezen bij wissen van browserdata of bij wisselen van apparaat. Voor de gebruikscontext (incidentele bookmarks per docent op één primair apparaat) is dit acceptabel.

### 6.2.7 In-memory cache met 15-min TTL

De server houdt opgehaalde nieuwsresultaten gedurende 15 minuten in een in-memory cache. Dit voorkomt rate-limit-problemen op NewsAPI bij refresh-spam tijdens testen, en versnelt de responstijd voor opeenvolgende fetches binnen het cache-venster. Bij serverherstart is de cache leeg; voor de huidige schaal (klein aantal docenten) volstaat deze eenvoud.

## 6.3 Implementatie en eerste deploy

Het prototype is binnen ongeveer twee weken (15 t/m 29 april 2026) opgebouwd door de auteur, met inzet van Claude Code (Anthropic) als programmeerassistent. Deze inzet is conform de richtlijnen voor verantwoorde AI-gebruik die zijn vastgelegd in de eigen handleiding *Zeker Toetsen in AI-tijden* (Coene, 2025): elke aanzet door AI is door de auteur kritisch beoordeeld, getest en aangepast voordat het in productie is gegaan. De broncode is beschikbaar in een publieke GitHub-repository, waarmee de ontwerpkeuzes en hun iteraties transparant en verifieerbaar zijn.

De productieversie draait op het Render-platform, dat automatische deploys vanuit de `main`-branch op GitHub uitvoert. Bij elke push naar `main` wordt de nieuwe versie binnen één tot twee minuten live gezet.

## 6.4 Eerste tester-ronde (29 april 2026)

Op 29 april 2026 is het prototype ter beoordeling rondgestuurd naar collega-docenten binnen de opleiding ORM. De eerste ronde bestond uit:

- Een **mail met een korte introductie** en de URL van de productieversie.
- **Installatie-instructies** voor het 'als app' toevoegen aan het beginscherm op iPhone (Safari) en Android (Chrome).
- **Een open uitnodiging om te reageren** met opmerkingen, suggesties en problemen.

In deze cyclus is bewust geen gestructureerde vragenlijst meegestuurd. De keuze voor open feedback past bij de explorerende fase van DBR (McKenney & Reeves, 2018, hoofdstuk 4): in een vroege ontwerpcyclus is de waarde van kwalitatieve, ongelimiteerde feedback hoger dan die van gesloten vragen, omdat de relevante dimensies van de gebruikerservaring zich nog moeten openbaren.

De feedback uit deze ronde was overwegend positief op de basisfunctionaliteit en de Nederlandstalige presentatie. Verbeterpunten betroffen voornamelijk usability-aspecten, die in cyclus 2 systematisch zijn opgepakt via een TAM-georiënteerde code-review (zie hoofdstuk 7).

## 6.5 Reflectie op cyclus 1

De eerste cyclus levert drie observaties op die als input dienen voor de vervolgcycli:

1. **De keuze voor een minimale, leesbare codebase betaalt zich uit in iteratiesnelheid.** Aanpassingen op basis van tester-feedback kunnen binnen uren worden doorgevoerd en gepubliceerd, wat past bij het iteratieve karakter van DBR.
2. **De vier-tab-structuur biedt voldoende context-flexibiliteit voor de doelgroep.** In de eerste tester-ronde werd de structuur niet als belemmering ervaren — een belangrijk signaal voor de keuze om in vervolgcycli vooral de inhoudelijke kwaliteit per tab aan te pakken in plaats van de structuur te wijzigen.
3. **Open feedback in een vroege fase legt onverwachte aspecten bloot.** Verbeterpunten die niet vooraf waren voorzien (zoals onduidelijke chat-labels) kwamen alleen naar voren door de ongelimiteerde uitnodiging tot reageren — een methodische bevestiging van de DBR-keuze om in vroege cycli niet te snel naar gesloten instrumenten te grijpen.

Deze observaties leggen de basis voor cyclus 2, waarin de usability systematisch wordt aangepakt via een TAM-georiënteerde code-review (Davis, 1989).
