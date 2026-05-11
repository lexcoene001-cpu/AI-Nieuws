---
title: "Hoofdstuk 3 — Theoretisch kader"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.1-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

# 3. Theoretisch kader

Het theoretisch kader van dit onderzoek bouwt op vier samenhangende perspectieven: (1) Design-Based Research als overkoepelende onderzoeksmethodologie, (2) het Technology Acceptance Model als kader voor adoptie- en gebruiksevaluatie, (3) AI-geletterdheid en het scaffold-perspectief op AI-inzet als didactische verankering, en (4) curatie en informatie-overload als ontwerptheoretische context voor het specifieke artefact. Aan het einde van dit hoofdstuk wordt het conceptueel raamwerk geschetst dat deze vier perspectieven integreert.

## 3.1 Design-Based Research

### 3.1.1 Oorsprong en definitie

Design-Based Research (DBR) is in het laatste decennium van de twintigste eeuw ontstaan vanuit de behoefte aan onderzoeksmethodologie die zich verhoudt tot de complexiteit van het onderwijs in de praktijk (Brown, 1992; Collins, 1992). Klassiek experimenteel onderzoek isoleert variabelen en zoekt causale relaties onder gecontroleerde condities — een aanpak die in een onderwijssituatie vaak ofwel onmogelijk is (de praktijk laat zich niet isoleren) ofwel resulteert in bevindingen waarvan de externe validiteit beperkt is.

DBR neemt een andere positie in: het onderzoekt het effect van *ontwerpinterventies* in hun natuurlijke context, in iteratieve cycli waarin ontwerp en analyse elkaar afwisselen. Het levert twee soorten opbrengst tegelijk: een werkend artefact (bijvoorbeeld een leeromgeving, een tool of een didactisch model) én generaliseerbare ontwerpkennis ("design principles") die ook bruikbaar is buiten de specifieke context (Wang & Hannafin, 2005; McKenney & Reeves, 2018).

In de Nederlandse context werd DBR onder andere uitgewerkt door Plomp (2013) als methodologisch raamwerk voor curriculum-ontwerp en onderwijsinnovatie. Plomp onderscheidt drie hoofdfasen: een voorbereidende analysefase, een prototypingsfase met meerdere iteraties, en een evaluatiefase. Binnen deze fasering passen de vijf cycli van het huidige onderzoek (zie hoofdstukken 6 t/m 10).

### 3.1.2 Karakteristieken van DBR

DBR onderscheidt zich van andere onderzoeksvormen door vier karakteristieken (McKenney & Reeves, 2018, hoofdstuk 1):

1. **Iteratief**: meerdere cycli van ontwerpen-implementeren-evalueren-herontwerpen, waarbij de ontwerper-onderzoeker leert door doen.
2. **Interventionistisch**: het onderzoek grijpt actief in op de praktijk; het is geen observatie van een bestaande situatie maar de constructie van een nieuwe.
3. **Procesgericht én productgericht**: zowel het ontwerpproces als het resulterende artefact zijn onderzoeksonderwerp.
4. **Theoretisch en praktisch georiënteerd**: opbrengst is zowel een werkend ontwerp als generaliseerbare ontwerpkennis.

### 3.1.3 DBR in technologie-rijke contexten

Voor onderzoek dat een digitaal artefact als ontwerpobject heeft, is DBR bijzonder geschikt. Wang en Hannafin (2005) beschrijven DBR specifiek voor *technology-enhanced learning environments* en wijzen erop dat de iteratieve aard van DBR aansluit bij de iteratieve aard van software-ontwikkeling. Beide disciplines werken met cycli van prototype-test-aanpassing; DBR voegt daaraan de academische rigueur en de generalisering naar ontwerpprincipes toe.

In het huidige onderzoek wordt deze synergie volledig benut: elke ontwerpiteratie is in Git-commits gedocumenteerd (transparant en verifieerbaar), elke cyclus is in het projectlog geregistreerd (chronologisch), en de generaliseerbare lessen worden in dit rapport geëxpliciteerd als ontwerpkennis (zie hoofdstuk 11).

## 3.2 Technology Acceptance Model

### 3.2.1 Oorspronkelijke formulering

Het Technology Acceptance Model (TAM) is in 1989 ontwikkeld door Fred Davis als verklaring voor waarom sommige technologieën door gebruikers worden omarmd en andere niet (Davis, 1989). De kern van het model is parsimonisch: twee variabelen verklaren samen het grootste deel van de variantie in *intention to use*:

- **Perceived usefulness (PU)**: de mate waarin een gebruiker gelooft dat het gebruik van de technologie hem of haar zal helpen beter te presteren.
- **Perceived ease of use (PEOU)**: de mate waarin een gebruiker verwacht dat het gebruik weinig moeite kost.

Beide variabelen beïnvloeden de attitude van de gebruiker, die op zijn beurt de gedragsintentie en uiteindelijk het werkelijk gebruik bepaalt. PEOU heeft bovendien een directe invloed op PU: een tool die makkelijk te gebruiken is, wordt ook als nuttiger ervaren.

### 3.2.2 Uitbreidingen: TAM2, TAM3, UTAUT, UTAUT2

In de drie decennia na Davis is TAM uitgebreid en verfijnd. TAM2 (Venkatesh & Davis, 2000) voegt sociale invloed en cognitieve processen toe als determinanten van PU. TAM3 (Venkatesh & Bala, 2008) integreert eerdere uitbreidingen tot een meer omvattend model.

Een belangrijke parallel-ontwikkeling is UTAUT — de *Unified Theory of Acceptance and Use of Technology* (Venkatesh, Morris, Davis & Davis, 2003). UTAUT integreert acht eerdere modellen (waaronder TAM, de Theory of Planned Behavior, en het Innovation Diffusion model) tot één unified raamwerk. UTAUT2 (Venkatesh, Thong & Xu, 2012) breidt UTAUT uit met consumenten-georiënteerde constructen zoals hedonic motivation, prijs-waarde en gewoonte.

Voor het huidige onderzoek is TAM in zijn oorspronkelijke vorm pragmatisch het meest bruikbaar, om twee redenen. Ten eerste is de tweepuntige structuur (PU + PEOU) eenvoudig te operationaliseren in zowel kwalitatieve evaluaties (zoals de TAM-simulatie van cyclus 2) als kwantitatieve vragenlijsten (geplande feedback-Form van cyclus 5b). Ten tweede zijn de uitbreidingen primair relevant in contexten met een grotere N en meer demografische variatie; voor een onderzoek binnen één opleiding met een homogene doelgroep voegen TAM2/UTAUT2 meer complexiteit toe dan voorspellende waarde.

### 3.2.3 TAM in onderwijscontext

TAM is breed toegepast in onderzoek naar adoptie van educatieve technologie. Granić en Marangunić (2019) voerden een systematische literatuurreview uit van TAM-toepassingen in het onderwijs en concludeerden dat het model robuust en bruikbaar is voor educatieve contexten, met name voor het verklaren van docenten- en studentenadoptie van leeromgevingen, e-learning systemen en specifieke tools.

Specifiek voor docent-adoptie van digitale technologie voerden Scherer, Siddiq en Tondeur (2019) een meta-analyse uit van structural equation modelling-studies. Zij vinden dat zowel PEOU als PU significante voorspellers zijn van docenten-adoptie, met PEOU als sterkere directe voorspeller van PU dan in de oorspronkelijke Davis-data — een aanwijzing dat docenten in het bijzonder gevoelig zijn voor gebruiksgemak.

Deze bevinding is direct relevant voor het huidige ontwerp: de doelgroep bestaat uit docenten met beperkte tijd; PEOU-issues hebben naar verwachting onevenredig grote impact op PU en daarmee op intention to use.

## 3.3 AI-geletterdheid en het scaffold-perspectief

### 3.3.1 AI-geletterdheid als kerncompetentie

De adoptie van een AI-tool door docenten is niet alleen een functie van TAM-variabelen; ze is ook een functie van de mate waarin docenten überhaupt de capaciteit hebben om AI-output te interpreteren, beoordelen en kritisch te benutten. Deze capaciteit wordt in toenemende mate aangeduid als *AI literacy* of AI-geletterdheid (Long & Magerko, 2020; Ng et al., 2021; Ayan, Demir & Yildiz, 2025).

Long en Magerko (2020) definieerden AI-geletterdheid als "een set van competenties die mensen in staat stelt AI-technologieën kritisch te evalueren, effectief te communiceren en samen te werken met AI, en AI te gebruiken als hulpmiddel online, thuis en op het werk". De definitie verdeelt AI-geletterdheid in vijftien competenties verdeeld over vier hoofdthema's: wat AI is, wat AI doet, hoe AI werkt, en hoe AI gebruikt moet worden.

In de context van het hoger onderwijs heeft UNESCO (2024) een AI Competency Framework for Teachers gepubliceerd dat vijf competentiegebieden onderscheidt — van *human-centered* denken tot ethiek en didactische integratie — verdeeld over drie progressie-niveaus. Het kader benadrukt dat AI-geletterdheid bij docenten niet uitsluitend technisch is, maar didactisch en ethisch verankerd moet zijn (Coene, 2026).

In Nederland is hieraan invulling gegeven via de *AI Maturity in Education Scan* (AIMES; Universiteit van Amsterdam & Vrije Universiteit Amsterdam, 2025), een zelfevaluatie-instrument voor docenten en opleidingsbestuurders gebaseerd op de EU-vereisten voor *Trustworthy AI*. AIMES en het UNESCO-kader zijn complementair: AIMES biedt een meetinstrument, het UNESCO-kader een normatief referentiekader.

### 3.3.2 AI als scaffold, niet als shortcut — de rode draad

Een centraal thema in de recente literatuur over AI in het hoger onderwijs is het onderscheid tussen AI als *shortcut* (denkwerk uitbesteden) en AI als *scaffold* (denkwerk ondersteunen). Dit onderscheid is empirisch onderbouwd, didactisch genuanceerd en vormt de rode draad voor de positionering van het ontwerp in dit onderzoek.

#### Empirische onderbouwing: cognitive debt en scaffolded design

Kosmyna et al. (2025) onderzochten in een neurowetenschappelijke studie de cognitieve effecten van AI-gebruik bij essay-schrijven. Drie groepen studenten werden vergeleken: een groep zonder hulpmiddelen, een groep met zoekmachine, en een groep met ChatGPT. De groep zonder hulpmiddelen vertoonde de breedste hersenconnectiviteit; de ChatGPT-groep de laagste neurale activiteit. De onderzoekers introduceren de term *cognitive debt* voor het patroon dat ontstaat wanneer denkwerk structureel wordt uitbesteed: een opstapeling van niet-gedaan cognitief werk dat zich op den duur uit in verminderde zelfstandigheid.

Cruciaal in dezelfde studie was een vierde conditie: studenten die *eerst* zonder AI hadden gewerkt en *daarna* AI inzetten, vertoonden een sterkere hersenactivatie dan elk van de andere groepen. Dit suggereert dat de **volgorde** van AI-inzet bepalend is: AI als *eerste denker* leidt tot cognitieve passiviteit; AI als *tweede denker* — als sparringpartner na eigen werk — kan juist cognitieve activatie versterken.

Dit empirische beeld wordt onderbouwd door bredere literatuur. Een meta-analyse van 51 studies door Guo et al. (2025) toont dat ChatGPT een groot positief effect kan hebben op leerprestaties (Hedges' g = 0.867), maar ook kan leiden tot technologische afhankelijkheid en afname van kritisch denken; het effect wordt sterk gemodereerd door wijze van inzet, type opdracht en didactisch model. Een systematische review van 67 studies door Chen, Wang en Liu (2025) concludeert dat AI cognitieve ontwikkeling ondersteunt wanneer het is ingebed in *scaffolded instructieontwerpen* — leerprocessen met tussenstappen, metacognitieve reflectie en argumentatief redeneren — maar dat AI als pure productiegenerator deze processen juist uitschakelt.

#### Didactisch perspectief: AI als denkpartner

De didactische invulling van het scaffold-principe is recent uitgewerkt in twee samenhangende publicaties. Ma et al. (2025) analyseerden meer dan 10.000 dialoglogs tussen studenten en AI-assistenten en pleiten voor AI-systemen die studenten niet direct het antwoord geven, maar via hints en gerichte vragen het eigen redeneren stimuleren — AI als *denkpartner* in plaats van vervanger. Karaman en Bahar (2025) onderzochten via een bibliometrische review van 135 artikelen hoe AI-tools steeds vaker worden gepositioneerd als *co-regulatoren* van leerprocessen, waarbij de nadruk verschuift van individuele reflectie naar gedistribueerde cognitie.

#### Positionering in het Nederlandse hoger onderwijs

De toepassing van het scaffold-perspectief op het Nederlandse hbo is uitgewerkt in Coene (2026a). In dit essay wordt het scaffold-principe vertaald naar vijf concrete aanbevelingen voor instellingen en docenten, waarvan de eerste — *zet AI in als tweede denker, niet als eerste* — de essentie van het principe vat. De aanbevelingen zijn gebaseerd op Kosmyna et al. (2025) en Chen et al. (2025), en worden binnen de context van de bredere "studeercrisis" geplaatst (Dekker, 2026; Jolles, 2026; Hornstra, 2026): docenten staan onder druk en hebben zelf scaffolding nodig om AI verantwoord te kunnen begeleiden bij studenten.

#### Toepassing op studentniveau binnen ORM (Coene, 2026b)

Het scaffold-principe heeft binnen het AI-portfolio van de auteur ook een toepassing op studentniveau. In *AI als leercoach: Claude Enterprise in het onderwijs* (Coene, 2026b) wordt het principe geconcretiseerd als *"AI als coach, niet als antwoordmachine"* — een didactische uitwerking voor het onderwijs aan studenten. Wanneer een student bijvoorbeeld om de oorzaken van een historische gebeurtenis vraagt, geeft de tool in de zogeheten *Learning mode* niet direct het antwoord, maar stelt eerst een tegenvraag die de student helpt zelf te redeneren. Deze studentengerichte invulling van het scaffold-principe — uitgewerkt voor de Claude Enterprise-omgeving binnen onderwijsinstellingen — is complementair aan de docentgerichte invulling die in dit onderzoek wordt ontwikkeld via ORM AI Nieuws.

#### Toepassing in dit onderzoek

Voor het ontwerp van het ORM AI Nieuws-dashboard heeft het scaffold-principe een directe ontwerpvertaling. Het systeem is bewust ontworpen als scaffold *voor docenten* — niet voor studenten, en niet als shortcut. Het neemt geen denkwerk over (curatie, samenvatting, chat) maar biedt een ondersteunende structuur waardoor docenten zelf hun AI-geletterdheid kunnen ontwikkelen en bijhouden. De docent leest de gefilterde artikelen, oordeelt over relevantie, en integreert het materiaal in lesvoorbereiding of beleidsdiscussies.

Daarmee vormt ORM AI Nieuws — samen met de toetsing-handleiding *Zeker Toetsen in AI-tijden* (Coene, 2025) en de notitie *AI als leercoach* (Coene, 2026b) — een drieluik in het AI-portfolio van de auteur, waarin het scaffold-principe op meerdere niveaus consequent wordt toegepast: docent-bijhouden (dit onderzoek), docent-toetsontwerp (Coene, 2025) en student-leerproces (Coene, 2026b). Deze positionering wordt expliciet uitgewerkt in hoofdstuk 12.3 aan de hand van de feitelijke ontwerpkeuzes.

## 3.4 Curatie en informatie-overload

Het specifieke ontwerpprobleem — docenten kunnen AI-ontwikkelingen niet bijhouden naast hun reguliere taken — is in de literatuur over informatie-overload uitgebreid bestudeerd. Eppler en Mengis (2004) beschrijven informatie-overload als een situatie waarin de hoeveelheid relevante informatie de verwerkingscapaciteit overstijgt; cruciaal is dat overload zich vaak niet manifesteert als "te veel informatie" in absolute zin, maar als "te veel niet-relevante informatie te midden van de gewenste informatie" (Bawden & Robinson, 2009).

In de literatuur over content-curatie is een aantal designstrategieën beschreven om dit probleem te adresseren. Drie zijn relevant voor het huidige onderzoek:

- **Voor-curatie door domeinexperts**. Door menselijke redacties die zelf domeinkennis hebben (vakblad-redacties) als bron te gebruiken, wordt een deel van het filter-werk gedelegeerd naar wie er de juiste expertise voor heeft (Roberts, 2019).
- **Algoritmische filtering met meerdere lagen**. Klassieke information retrieval onderscheidt voorfiltering (boolean queries, regex), ranking (relevantie-scores) en post-processing (Manning, Raghavan & Schütze, 2008). Recent is hieraan toegevoegd: hybride symbolisch-neurale systemen waarin regelgebaseerde voorfiltering en LLM-gebaseerde nafiltering worden gecombineerd voor hogere precision zonder onevenredig recall-verlies.
- **Personalisering binnen vakcontext**. Door de gebruiker zijn eigen vakgebied te laten specificeren (zoals in de tab "Mijn vakgebied"), kan de filtering specifieker worden afgestemd zonder dat de tool voor elke gebruiker een eigen versie nodig heeft.

In het ontwerp van ORM AI Nieuws zijn alle drie de strategieën toegepast: AI-tag-feeds van vakbladen (voor-curatie), gelaagde filtering met regex + LLM (meerdere lagen), en gebruikersgestuurde vakgebiedinvoer (personalisering). Hoofdstukken 8 en 11 werken uit hoe deze strategieën in de iteratieve cycli zijn ontwikkeld en welke ontwerpkennis ze hebben opgeleverd.

## 3.5 Conceptueel raamwerk

De vier perspectieven samen vormen het conceptueel raamwerk van dit onderzoek. Elk perspectief vervult een eigen functie:

- **DBR** is het *proceskader*: hoe verloopt het onderzoek, in welke cycli, met welke methoden van dataverzameling per cyclus.
- **TAM** is het *adoptie-kader*: hoe wordt evalueerd of het ontwerp daadwerkelijk wordt gebruikt en als nuttig ervaren.
- **AI als scaffold** is het *didactische kader*: hoe is het ontwerp normatief gepositioneerd binnen de literatuur over verantwoorde AI-inzet in het onderwijs.
- **Curatie en information overload** is het *artefact-theoretische kader*: welke ontwerpstrategieën zijn beschikbaar voor het oplossen van het specifieke probleem en welke zijn toegepast.

Deze vier kaders zijn niet hiërarchisch geordend maar complementair: DBR bepaalt hoe het onderzoek wordt uitgevoerd, TAM hoe het wordt geëvalueerd, AI-als-scaffold waarom dit ontwerp didactisch verantwoord is, en curatie-theorie wat de ontwerpopties zijn. Samen vormen ze de basis waarop in hoofdstuk 5 (methodologie) de concrete onderzoeksopzet wordt gefundeerd, en op basis waarvan in hoofdstuk 11 (resultaten) de generaliseerbare ontwerpkennis wordt geformuleerd.
