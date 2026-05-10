---
title: "Hoofdstuk 8 — Cyclus 3: Filter-aanscherping op tester-feedback (8 mei 2026)"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.1-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

# 8. Cyclus 3 — Filter-aanscherping op tester-feedback (8 mei 2026)

## 8.1 Aanleiding: één concrete tester-feedback met diepgaande consequenties

Op 8 mei 2026 leverde een van de testers (collega-docent binnen ORM) een korte maar inhoudelijk zware feedback: *"De ORM-tab levert te breed nieuws."* Bij doorvragen bleek het patroon: artikelen over AI-bedrijven zelf (OpenAI-deals, Anthropic-fundraising, AI Act-discussies, modelreleases) verdrongen artikelen over hoe ondernemers, retailers en marketeers AI daadwerkelijk inzetten in hun werk. De docent zocht het tweede; het systeem leverde primair het eerste.

Deze feedback is exemplarisch voor wat in de literatuur over informatie-curatie wordt aangeduid als een *signal-noise-mismatch* (Eppler & Mengis, 2004): het systeem leverde objectief kwalitatieve AI-content, maar de kwaliteit was niet uitgelijnd op de specifieke informatiebehoefte van de gebruiker. Information overload manifesteert zich vaak niet als "te veel informatie" in absolute zin, maar als "te veel niet-relevante informatie te midden van de gewenste informatie" (Bawden & Robinson, 2009).

Voor dit onderzoek is deze cyclus methodologisch interessant om twee redenen. Ten eerste illustreert hij het *value of one user* dat in DBR centraal staat (McKenney & Reeves, 2018, hoofdstuk 6): één geconcentreerde, kwalitatieve feedback van een doelgroep-representatieve gebruiker is in vroege ontwerpcycli vaak waardevoller dan kwantitatieve metingen onder grote groepen. Ten tweede laat hij zien hoe een ogenschijnlijk simpele klacht ("te breed") een diepgaande herziening van de filter-architectuur kan vereisen.

## 8.2 Diagnose: drie oorzaken van de mismatch

Bij analyse van de bestaande filter-architectuur werden drie oorzaken geïdentificeerd die samen de "te breed"-perceptie verklaarden:

### 8.2.1 Filter eiste alleen ORM-context, geen AI-context

De `ormFilter` in `server.js` toetste of een artikel ten minste één van een lijst van ORM-relevante termen bevatte (entrepreneur, startup, retail, e-commerce, etc.). Een AI-context werd impliciet aangenomen op basis van de bron of de query, maar niet geverifieerd. Het gevolg: artikelen uit zakelijke bronnen (Sprout, Adformatie, Twinkle) die wel ORM-termen bevatten maar niets met AI te maken hadden, kwamen toch door de filter.

### 8.2.2 De synoniemenlijst was te ruim

De ORM-synoniemenlijst bevatte termen als `marketing`, `consumer`, `innovation`, `branding`, `campagne` — woorden die in vrijwel elk zakelijk artikel voorkomen, ook in artikelen die voor de doelgroep weinig relevant zijn. Dit is een toepassing van het probleem dat in information retrieval bekend staat als *low-precision queries*: een query die te veel resultaten oplevert verlaagt de precisie ten gunste van recall (Manning, Raghavan & Schütze, 2008).

### 8.2.3 De LLM-pas selecteerde uit een te kleine pool

Voor de eindselectie kreeg het taalmodel (Claude Haiku) ten hoogste tien NL-artikelen plus tien internationale artikelen aangereikt. Wanneer in deze pool weinig hoog-relevante artikelen zaten, koos het model noodgedwongen uit het beste van het minder goede — een vorm van *garbage in, garbage out* die specifiek geldt voor LLM-gebaseerde curatie waarbij de input al voorgefilterd is (Liu et al., 2024).

## 8.3 Ontwerpinterventie in drie iteraties

De gediagnosticeerde oorzaken zijn op één werkdag (8 mei 2026) opgepakt in drie opeenvolgende iteraties, elk met een eigen Git-commit. De keuze voor drie kleine iteraties in plaats van één grote ingreep is bewust: het maakt het mogelijk om per iteratie het effect te observeren in productie en bij te sturen — een directe toepassing van de DBR-principe van *short feedback loops* (Plomp, 2013).

### 8.3.1 Iteratie 1 (commit `998e413`): filter eist nu AI én ORM

De `ormFilter` is herschreven om een combinatie te eisen: zowel een AI-term als een ORM-term moet voorkomen in de title of description van het artikel. Tegelijk is de synoniemenlijst ingedikt door de breedste termen (`marketing`, `consumer`, `innovation`, `branding`, `campagne`, `loyalty`, `sales`) te verwijderen.

Effect: het aantal artikelen door de filter daalde sterk, maar de relevantie steeg. Echter: het Nederlandse aandeel zakte naar één enkel artikel — een nieuw probleem dat in iteratie 2 en 3 wordt aangepakt.

### 8.3.2 Iteratie 2 (commit `15bf52f`): bredere AI-vocabulaire en niche-bronnen

Twee aanvullende interventies werden gedaan:

- **AI-regex uitgebreid** met moderne AI-termen die in NL-content vaak voorkomen zonder dat het generieke "AI" expliciet wordt genoemd: `copilot`, `gemini`, `claude`, `openai`, `anthropic`, `generatieve ai`, `stable diffusion`, `midjourney`. Hiermee wordt voorkomen dat artikelen over bijvoorbeeld "Microsoft Copilot voor MKB" wegvallen omdat ze niet expliciet "AI" noemen.
- **Niche-bronnen toegevoegd**: NL AI-tag-feeds van Frankwatching, Computable en Emerce — feeds waarin de redactie zelf al heeft voorgeselecteerd op AI-relevantie. Daarmee verschuift een deel van de filter-verantwoordelijkheid naar redacties met domeinkennis. Internationaal werden Modern Retail, Digiday en AdExchanger toegevoegd als retail/marketing-AI-niches.
- **NewsAPI-queries hertekend** met expliciete `AND`-logica: `(AI OR ChatGPT OR Copilot) AND (MKB OR ondernemer OR startup OR ...)`. Dit dwong NewsAPI tot het leveren van resultaten waarin beide thema's voorkomen — een directere implementatie van de eis tot thematische overlap.
- **LLM-prompt aangescherpt** voor de ORM-tab: alleen artikelen over AI-toepassingen door ondernemers/marketeers/retailers; big-tech-bedrijfsdeals expliciet uitgesloten.

### 8.3.3 Iteratie 3 (commit `621502f`): NL-volume verhogen zonder kwaliteitsverlies

De strenge filter resulteerde in te weinig NL-artikelen. Drie aanvullende interventies:

- **Regex verbreed** met `marketing`, `klant`, `merk` (eerder geschrapt). Het inzicht: nu de strenge LLM-pas een tweede filter is, kan de regex iets ruimer zijn — de LLM filtert ruis er alsnog uit. Dit illustreert een ontwerpprincipe dat in latere cycli terugkeert: **gelaagde filters maken het mogelijk om in elke laag minder strikt te zijn dan bij één enkele filter zou moeten**.
- **Twee extra Emerce-tag-feeds** (`tag/ondernemer`, `tag/e-commerce`) — verdere uitbreiding van voor-gefilterde NL-bronnen.
- **Pool naar Claude verdubbeld** (van 10+10 naar 20+20). De LLM krijgt meer kandidaten waaruit te kiezen, wat de kans op hoog-relevante hits verhoogt zonder dat de uiteindelijke output langer wordt.
- **Mix-eis** toegevoegd aan LLM-prompt: minimaal 4 NL en 4 INTL artikelen.

## 8.4 Resultaat

Na de drie iteraties verschoof de output meetbaar:

| Metric | Vóór cyclus 3 | Na cyclus 3 |
|---|---|---|
| Aantal NL-artikelen na filter | 1-2 | 6 |
| Aantal INTL-artikelen na filter | 8-10 | 4 |
| Aandeel toepassings-georiënteerd | ~30% | ~90% |
| Big-tech-deals in output | regelmatig | zeldzaam |

De feedback van de tester werd in een vervolgmail bevestigd als opgelost.

## 8.5 Ontwerpkennis: gelaagde curatie als principe

Cyclus 3 levert een ontwerpprincipe op dat naar verwachting overdraagbaar is naar vergelijkbare smalle-domein-curatie-systemen: **combineer regex-gebaseerde voorfiltering met LLM-gebaseerde nafiltering, en optimaliseer beide voor hun rol**.

De regex-filter is goedkoop, snel, en goed in brute-force exclusie van duidelijk niet-relevante content. De LLM-filter is duurder, langzamer, en goed in nuance-onderscheid (bijv. tussen "AI-bedrijf raises $200M" en "MKB-er gebruikt ChatGPT voor contentmarketing"). Door beide gelaagd te combineren kan elke laag minder strikt zijn dan bij gebruik in isolatie:

- De **regex** mag iets ruimer zijn dan strikt nodig (anders gaan relevante artikelen verloren), omdat de LLM-pas restruis verwijdert.
- De **LLM** krijgt een kleinere maar relevantere pool om uit te kiezen, omdat de regex grove ruis al heeft uitgesloten — wat zowel kosten bespaart als kwaliteit verhoogt.

Dit principe sluit aan bij wat in recente literatuur over hybride curatie-systemen wordt gevonden: een combinatie van symbolische (regex, ontologie) en neurale (LLM) componenten levert vaak betere resultaten dan elk afzonderlijk (Yu et al., 2024; Liu et al., 2024).

Een tweede ontwerpkennis: **vakblad-redacteurs als voor-curators**. Het aanboren van AI-tag-feeds van vakbladen verschuift een deel van het filter-werk naar mensen met directe domeinkennis, waardoor de eigen filterlast afneemt en de kwaliteit van de pool toeneemt. Dit is een toepassing van het bredere principe van *human-in-the-loop curation* (Roberts, 2014).

## 8.6 Reflectie op cyclus 3

Drie methodische observaties:

1. **Eén tester-feedback kan een diepgaande architectuurherziening triggeren.** "Te breed" leek aanvankelijk een interface-klacht, maar bleek bij analyse een fundamentele kwestie van filter-architectuur. Dit bevestigt het DBR-principe dat de waarde van kwalitatieve feedback in vroege cycli niet ligt in statistische generaliseerbaarheid maar in *interpretatieve diepte* (Plomp, 2013).

2. **Korte iteratie-cycli versterken het leerproces.** Drie iteraties op één dag, elk met meetbare effecten, leverden meer ontwerpkennis op dan één grote ingreep zou hebben gedaan. Tussen iteraties kon het effect van de vorige worden geobserveerd, wat het ontwerpdenken stuurde — een directe toepassing van Schön's *reflective practitioner* (Schön, 1983).

3. **Ontwerpprincipes worden zichtbaar door doen, niet door theoretiseren.** Het gelaagde-curatie-principe is niet vooraf bedacht maar tijdens het iteratieproces ontstaan. Pas na de derde iteratie was het mogelijk om het principe te formuleren. Dit is karakteristiek voor DBR: theoretische opbrengst is *ex post*, niet *ex ante* (McKenney & Reeves, 2018).

Cyclus 3 vormt de basis voor cyclus 4, waar de ontwikkelde filter-aanpak wordt geconsolideerd in consistente UI-elementen en LLM-instructies over alle tabs heen.
