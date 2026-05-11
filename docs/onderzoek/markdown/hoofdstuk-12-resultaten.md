---
title: "Hoofdstuk 13 — Resultaten en ontwerpkennis"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.2-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

# 12. Resultaten en ontwerpkennis

Dit hoofdstuk synthetiseert de bevindingen uit de afzonderlijke cycli (hoofdstukken 7 t/m 11) tot vier soorten opbrengst: meetbare resultaten (§11.1), kwalitatieve patronen (§11.2), de positionering van het ontwerp binnen de literatuur over AI als scaffold (§11.3), en generaliseerbare ontwerpprincipes (§11.4). Samen vormen deze de basis voor de discussie en conclusie in de volgende hoofdstukken.

## 12.1 Meetbare resultaten per cyclus

Tabel 11.1 vat de belangrijkste meetbare effecten per cyclus samen. Waar relevant zijn pre/post-iteratie-vergelijkingen opgenomen.

| Cyclus | Meetbare verandering | Vóór | Na | Bron |
|---|---|---|---|---|
| 1 | Functioneel prototype operationeel | — | dashboard met 5 tabs | H6 |
| 2 | Aantal usability-issues opgelost | — | 7 fixes + 3 verwijderingen + 2 verbeteringen | H7 |
| 3 | NL-artikelen na filter (ORM-tab) | 1-2 | 6 | H8 §8.4 |
| 3 | Aandeel toepassings-georiënteerd (ORM-tab) | ~30% | ~90% | H8 §8.4 |
| 3 | Big-tech-deals in output (ORM-tab) | regelmatig | zeldzaam | H8 §8.4 |
| 4 | INTL-artikelen na mix-eis (Algemeen-tab) | 1 | 5 | H9 §9.4 |
| 4 | INTL-artikelen na mix-eis (Onderwijs-tab) | 1 | 5 | H9 §9.4 |
| 4 | Stats-bar zichtbaar op tabs | 2 van 4 | 4 van 4 | H9 §9.4 |
| 5 | *Te verzamelen na 1 juli 2026* | n.v.t. | n.v.t. | H10 |

De observatie dat de grootste effectgrootten zijn behaald in cyclus 3 — een cyclus die door slechts één tester-feedback ("te breed") is geïnitieerd — is methodologisch significant. Ze ondersteunt de DBR-stelling dat in vroege cycli kwalitatieve diepte (één gerichte feedback van een doelgroep-representant) waardevoller kan zijn dan kwantitatieve breedte (statistisch significante feedback van vele gebruikers) (McKenney & Reeves, 2018, hoofdstuk 7; Plomp, 2013).

## 12.2 Kwalitatieve patronen

De feedback en observaties uit de cycli tonen drie terugkerende patronen die boven het niveau van enkelvoudige issues uitstijgen.

### 12.2.1 Het verschil tussen "AI-content" en "AI-toepassings-content"

In cyclus 1 en het begin van cyclus 3 was de impliciete aanname dat alle AI-gerelateerde nieuws relevant was voor een AI-nieuwsdashboard. De tester-feedback ("te breed") legde bloot dat deze aanname niet aansloot bij wat de doelgroep zocht: docenten ORM zochten niet *AI-as-fenomeen* (modelreleases, big-tech-deals, regulering) maar *AI-as-toepassing* (concrete inzet door ondernemers, retailers, marketeers). Deze conceptuele scheiding bleek zowel didactisch relevant (sluit aan bij scaffold-perspectief: laat zien hoe anderen AI verantwoord inzetten) als technisch consequent (vereist AND-logica in queries en filters in plaats van OR).

Dit patroon is vermoedelijk niet uniek voor ORM. Voor elke vakspecifieke AI-tool geldt waarschijnlijk dat het onderscheid tussen *fenomeen* en *toepassing* relevant is. De vakgebieden bepalen welke kant op getrokken moet worden — voor een AI-tool voor IT-professionals zou het juist het fenomeen kunnen zijn.

### 12.2.2 Platform-restricties bepalen ontwerp-paden

Door alle cycli heen kwamen platform-restricties van de Hanze-omgeving terug als ontwerpbepalend. In cyclus 2 leidde de Hanze-Outlook-blokkade van `mailto:`-deeplinks tot het verwijderen van de e-mail digest-knop. In cyclus 5 leidde dezelfde blokkade tot de keuze voor een Google Form in plaats van een ingebouwd feedback-formulier. Beide cycli laten zien: restricties van de gebruiksomgeving zijn structureel ontwerpbeperkend en dwingen tot creatieve omwegen die soms leiden tot betere oplossingen dan de oorspronkelijke conventie.

### 12.2.3 LLM-prompts vereisen expliciete constraints, niet suggesties

Cycli 3 en 4 toonden onafhankelijk van elkaar aan dat zachte hints in LLM-prompts ("streef naar een mix") vaak worden genegeerd, terwijl harde constraints met expliciete getallen ("MINIMAAL 4 NL EN MINIMAAL 4 INTL") wel worden gevolgd. Dit patroon sluit aan bij recente prompt-engineering-literatuur (Sahoo et al., 2024) en is generaliseerbaar voorbij dit specifieke ontwerp.

## 12.3 AI-Nieuws als scaffold voor docenten — terugkoppeling op het theoretisch kader

De rode draad uit hoofdstuk 3.3 — *AI als scaffold, niet als shortcut* — wordt hier expliciet teruggekoppeld op de feitelijke ontwerpkeuzes en hun cumulatieve effect. De stelling van dit onderzoek is dat ORM AI Nieuws functioneert als een *gespiegelde toepassing* van Kosmyna's (2025) "tweede denker"-principe: terwijl Kosmyna et al. dit principe formuleren voor AI-inzet door studenten in essay-schrijven, transponeert dit onderzoek het naar AI-inzet door docenten in nieuws-curatie.

### 12.3.1 Het systeem neemt geen denkwerk over

Drie eigenschappen van het ontwerp ondersteunen deze claim:

1. **Curatie zonder oordeel**: het systeem selecteert artikelen op basis van inhoud (filter) en relevantie (LLM-pas), maar levert ze ongekleurd af. De docent leest, beoordeelt en bepaalt zelf wat relevant is voor het eigen onderwijs.
2. **Samenvatting zonder interpretatie**: de Claude-samenvattingen zijn beschrijvend, niet adviserend. Ze vatten samen wat het artikel zegt, niet wat de docent ermee zou moeten.
3. **Chat als sparringpartner, niet als orakel**: de chat-functie nodigt uit tot vragen stellen, met de mogelijkheid tot "uitleg" — een *Socratische* invulling waarin het systeem niet de waarheid presenteert maar context biedt.

### 12.3.2 Het systeem biedt scaffolding

Tegelijkertijd biedt het systeem actief structuur die de docent in staat stelt om eigen denkwerk te doen dat zonder de tool veel meer tijd zou kosten:

1. **Concentrische tabstructuur** (ORM → Algemeen → Onderwijs → Vakgebied): didactisch ondersteunende informatie-architectuur die de docent uitnodigt om vanuit specifiek naar breed te bewegen.
2. **Voor-gefilterde pool**: de docent hoeft niet zelf 30+ bronnen te scannen; de tool levert een vooraf gefilterde, gevarieerde selectie aan.
3. **Bookmark-functie**: docenten kunnen artikelen opslaan voor latere reflectie of integratie in lesmateriaal — ondersteunt het transformatieproces van *consumptie* naar *gebruik*.

### 12.3.3 Het systeem versterkt AI-geletterdheid

Een minder direct, maar belangrijk effect: door dagelijks contact met AI-output (samenvattingen, chat-antwoorden) ontwikkelen docenten zelf een gevoel voor wat AI wel en niet betrouwbaar doet. Wanneer een samenvatting de essentie mist, wanneer de chat een ongepast antwoord geeft, wanneer de filter een belangrijk artikel laat liggen — al deze observaties bouwen impliciete AI-geletterdheid op. Dit is een toepassing van het bredere principe dat AI-geletterdheid het beste wordt opgebouwd door *kritisch gebruik in context* (Long & Magerko, 2020; Ng et al., 2021), in plaats van door losse trainingen over AI-theorie.

In cyclus 5b kan deze claim worden getoetst door in de feedback-vragenlijst expliciet te vragen naar zelfgeobserveerde verandering in AI-vaardigheid sinds gebruik van de tool.

## 12.4 Generaliseerbare ontwerpprincipes

Op basis van de cycli en de bovenstaande synthese worden negen ontwerpprincipes geformuleerd. Elk principe is *theorie van middel-niveau* (Plomp, 2013): geen universele wetmatigheid, maar wel breder toepasbaar dan de specifieke context van ORM AI Nieuws. Elk principe is gekoppeld aan de cyclus waarin het is ontstaan, met een korte verantwoording van het bredere toepassingsdomein.

### Principe 1 — Combineer regex en LLM voor smalle thema's
*"Voor curatie binnen smalle thematische domeinen levert een gelaagd filter (regex voor brute-force exclusie + LLM voor nuance-onderscheid) betere resultaten dan elke laag afzonderlijk. Beide lagen mogen iets ruimer zijn dan strikt nodig, omdat de andere laag corrigeert."*

**Oorsprong:** cyclus 3 (H8 §8.5).
**Toepassingsdomein:** elke applicatie die curatie of klassificatie doet binnen een specifiek thematisch venster, waarbij precision belangrijker is dan recall.

### Principe 2 — LLM-instructies werken beter als constraints dan als suggestions
*"Voor LLM-promptdesign loont het om expliciet, getalsmatig en in dwingende toon te formuleren wat het model moet doen, in plaats van wat gewenst is. 'MINIMAAL X' wordt gevolgd; 'streef naar X' wordt vaak genegeerd."*

**Oorsprong:** cyclus 4 (H9 §9.5.2).
**Toepassingsdomein:** alle prompt-engineering, maar in het bijzonder waar deterministisch gedrag van een LLM gewenst is (volume-eisen, format-eisen, mix-eisen).

### Principe 3 — Platform-restricties zijn vroeg te identificeren
*"Test platform-restricties van de gebruiksomgeving zo vroeg mogelijk in de ontwerpcyclus. Restricties die later worden ontdekt, hebben langlopende gevolgen voor de ontwerp-architectuur."*

**Oorsprong:** cyclus 2 (H7 §7.4.1) en cyclus 5 (H10 §10.4.1).
**Toepassingsdomein:** alle ontwerptrajecten in een organisatorische context met IT-restricties (overheid, onderwijs, gezondheidszorg).

### Principe 4 — TAM-simulatie is een legitieme tussenstap
*"Een gestructureerde inspectie via het TAM-kader is in vroege cycli een kosten-bewuste tussenstap tussen open kwalitatieve feedback en gestructureerde gebruikerstests. Het vindt PEOU- en PU-issues die anders pas later opkomen, maar is geen vervanging voor empirische evaluatie."*

**Oorsprong:** cyclus 2 (H7 §7.6).
**Toepassingsdomein:** kleine ontwerpteams zonder budget voor grootschalige user testing in vroege fasen.

### Principe 5 — PWA-cache-versies altijd bumpen bij significante UI-wijzigingen
*"Bij elke significante frontend-wijziging in een Progressive Web App moet de service-worker-cache-versie worden opgehoogd. Anders zien geïnstalleerde gebruikers de wijziging niet, en denken ze dat het project stilstaat."*

**Oorsprong:** cyclus 4 (H9 §9.5.3).
**Toepassingsdomein:** alle PWA-projecten met geïnstalleerde gebruikers.

### Principe 6 — Eén tester-feedback kan diepgaande architectuurherziening triggeren
*"In vroege ontwerpcycli kan één gerichte feedback van een doelgroep-representatieve gebruiker leiden tot fundamentele herzieningen. Luister naar de richting van de feedback ('te breed', 'te traag', 'te ingewikkeld') en interpreteer deze als signaal van een dieperliggend probleem in plaats van een specifieke wens."*

**Oorsprong:** cyclus 3 (H8 §8.6).
**Toepassingsdomein:** alle DBR-trajecten met kleine tester-groepen.

### Principe 7 — Mix-eisen voorkomen LLM-extremiteiten
*"Wanneer een LLM uit verschillende categorieën moet kiezen (taal, regio, type), expliciteer dan de gewenste verdeling als constraint. Anders tendeert het model naar één extreme zonder dat duidelijk is waarom."*

**Oorsprong:** cyclus 4 (H9 §9.3.2).
**Toepassingsdomein:** elke LLM-toepassing met meerdere onderling te verdelen categorieën.

### Principe 8 — Scaffold-ontwerp boven shortcut-ontwerp
*"Bij AI-tools voor professionals: ontwerp expliciet zo dat de eindgebruiker de denkverantwoordelijkheid behoudt. De tool levert structuur, materiaal en context, maar laat oordeel en integratie aan de gebruiker over. Dit voorkomt cognitieve uitbesteding en bouwt impliciet AI-geletterdheid op."*

**Oorsprong:** cumulatief, geëxpliciteerd in §11.3.
**Toepassingsdomein:** elke AI-tool voor expert-gebruikers in onderwijs, gezondheidszorg, professionele dienstverlening.

### Principe 9 — Vakblad-redacteurs als voor-curators
*"Door AI-tag-feeds van vakbladen op te nemen in de bronpool wordt een deel van de filter-verantwoordelijkheid gedelegeerd aan redacteurs met directe domeinkennis. Dit verhoogt de pool-kwaliteit zonder eigen extra filterwerk."*

**Oorsprong:** cyclus 3 (H8 §8.5).
**Toepassingsdomein:** alle curatie-systemen die zich richten op een specifiek beroepsdomein waarbinnen actieve vakbladen bestaan.

## 12.5 Verhouding tot het theoretisch kader

De negen ontwerpprincipes bevestigen, nuanceren of vullen aan op het theoretisch kader (hoofdstuk 3) op de volgende manieren:

- **Principes 1, 7, 9** dragen bij aan de literatuur over curatie en information overload (§3.4) door empirisch te tonen hoe gelaagde curatie en menselijke voor-curatie samenwerken.
- **Principes 2, 7** dragen bij aan de prompt-engineering-literatuur door te bevestigen dat constraint-style prompting beter werkt dan suggestion-style — en door dit principe specifiek te demonstreren in een real-world curatie-context.
- **Principe 8** sluit direct aan bij de "AI als scaffold"-rode draad (§3.3.2) en breidt deze uit naar het ontwerp van professionele tools, niet alleen naar didactische scenario's met studenten.
- **Principes 3, 5** zijn primair pragmatisch-technisch en vullen aan op de bestaande software-engineering-literatuur over PWA's en organisatie-IT.
- **Principes 4, 6** zijn methodisch-DBR-georiënteerd en sluiten aan bij McKenney & Reeves (2018) en Plomp (2013) over de waarde van inspectiemethoden en kwalitatieve diepte in vroege cycli.

In de discussie (hoofdstuk 13) wordt deze verhouding verder uitgewerkt en worden de bevindingen gerelateerd aan eerdere studies in vergelijkbare contexten.
