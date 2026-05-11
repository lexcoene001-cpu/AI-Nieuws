---
title: "Hoofdstuk 15 — Conclusie en aanbevelingen"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.2-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

# 14. Conclusie en aanbevelingen

## 14.1 Beantwoording van de onderzoeksvraag

De hoofdvraag van dit onderzoek luidde:

> *Hoe kan een gefilterd, AI-ondersteund nieuwsdashboard zo ontworpen worden dat het docenten van een hbo-opleiding helpt om relevant AI-nieuws bij te houden, en welke ontwerpprincipes zijn daarbij overdraagbaar naar vergelijkbare onderwijscontexten?*

Op basis van de uitgevoerde DBR-cycli (hoofdstukken 7 t/m 11) en de daaruit afgeleide synthese (hoofdstuk 12) kan deze vraag tweeledig worden beantwoord.

### 14.1.1 Het ontworpen artefact

ORM AI Nieuws is in vier voltooide ontwerpcycli (april–mei 2026) ontwikkeld tot een functioneel Progressive Web App-dashboard dat docenten van de opleiding ORM in staat stelt om dagelijks relevant AI-nieuws bij te houden zonder zelf te hoeven zoeken. Het dashboard combineert:

- **Geautomatiseerde curatie** uit ~30 Nederlandstalige en internationale bronnen, gefilterd via een gelaagde architectuur (regex + LLM-pas);
- **AI-gebaseerde samenvattingen** in het Nederlands via Claude Haiku;
- **Een vakgebied-personaliseerbare interface** met vier thematische tabs;
- **Een chatfunctie** voor verdiepende vragen aan een AI-assistent.

De vijfde cyclus — brede uitrol naar vakverantwoordelijken met gestructureerde feedback-verzameling — is op het moment van schrijven in uitvoering en zal in v1.0 van dit rapport worden gedocumenteerd.

### 14.1.2 De gegenereerde ontwerpkennis

Het onderzoek heeft negen generaliseerbare ontwerpprincipes opgeleverd (hoofdstuk 12.4), die te clusteren zijn in drie thematische groepen:

1. **Curatie-architectuur**: gelaagde filtering met regex en LLM (Principe 1), expliciete mix-eisen (Principe 7), vakblad-redacteurs als voor-curators (Principe 9).
2. **LLM-promptdesign**: constraints werken beter dan suggestions (Principe 2), expliciete mix-instructies (Principe 7).
3. **Ontwerp- en evaluatieproces**: TAM-simulatie als legitieme tussenstap (Principe 4), één tester-feedback kan diepgaande herziening triggeren (Principe 6), platform-restricties vroeg testen (Principe 3), PWA-cache-discipline (Principe 5), en — als overkoepelend normatief principe — scaffold-ontwerp boven shortcut-ontwerp (Principe 8).

Het meest theoretisch substantiële resultaat is de transpositie van het *AI als scaffold, niet als shortcut*-principe (Kosmyna et al., 2025; Chen et al., 2025; Coene, 2026) van studenten naar docenten. Het ontwerp van ORM AI Nieuws functioneert als concrete operationalisering van dit principe in een professionele tool-context.

## 14.2 Aanbevelingen voor de Hanzehogeschool Groningen

### 14.2.1 Implementatie binnen ORM consolideren

Voor de opleiding ORM wordt aanbevolen het dashboard structureel beschikbaar te houden voor alle vakverantwoordelijken en docenten, gekoppeld aan de bredere AI-portfolio van de opleiding (waaronder de handleiding *Zeker Toetsen in AI-tijden*; Coene, 2025). Specifieke aanbevelingen:

- **Periodieke evaluatie** (twee keer per jaar) van de kwaliteit van de filter-output via TAM-vragenlijst onder gebruikers.
- **Onderhoud van de bron-RSS-feeds**, omdat vakblad-feeds wijzigen en nieuwe relevante bronnen ontstaan. Concreet: kwartaal-check op feed-validiteit en aanvulling.
- **Integratie in onboarding** van nieuwe docenten als onderdeel van AI-geletterdheid-introductie.

### 14.2.2 Verbreden naar andere opleidingen

Voor het bredere College van Hanzehogeschool wordt aanbevolen om het ontwerp-paradigma — niet noodzakelijkerwijs de specifieke implementatie — te verbreden naar andere opleidingen waar AI-relevantie hoog is (bijvoorbeeld Communicatie, Informatica, Bedrijfskunde, Verpleegkunde). De negen ontwerpprincipes (hoofdstuk 12.4) bieden hiervoor een handelingskader.

Concreet voorstel: een Hanze-breed *AI-tools voor docenten*-platform onder regie van een lectoraat (bijvoorbeeld het lectoraat van Harald Pol), waarin per opleiding een vergelijkbare scaffold-georiënteerde tool wordt ontwikkeld met gedeelde technische infrastructuur en gedeelde ontwerprichtlijnen.

### 14.2.3 Verankering van AI-geletterdheid in BKO-traject

Aansluitend bij de bredere literatuur (UvA & VU, 2025; UNESCO, 2024; Ayan et al., 2025) en aan Coene (2026) wordt aanbevolen om AI-geletterdheid expliciet te verankeren in het BKO-traject voor docenten — niet als losse workshop, maar als competentieonderdeel dat over meerdere modules ontwikkeld wordt. Tools als ORM AI Nieuws kunnen daarin functioneren als praktijkvoorbeeld en oefenmateriaal.

## 14.3 Aanbevelingen voor andere hbo-instellingen

Voor instellingen die overwegen een vergelijkbare tool te ontwikkelen, gelden de negen ontwerpprincipes (H11.4) als startpunt. Drie generieke aanbevelingen, te lezen voorafgaand aan de specifieke principes:

1. **Begin smal, breid uit op basis van iteratieve evaluatie**. De grootste effectgrootte in dit onderzoek werd behaald in cyclus 3, waarin het ontwerp werd aangescherpt op tester-feedback. Begin niet met een breed-mikkende generieke AI-nieuwstool, maar met een vakspecifieke implementatie waarvan de iteraties een verdiept beeld opleveren van de gebruiksbehoefte.

2. **Investeer vroeg in platform-compatibiliteit-tests**. Zoals dit onderzoek heeft laten zien, zijn restricties van de organisatie-IT (Outlook-mailto-blokkades, vergelijkbare browser- of beveiligingsbeperkingen) ontwerpbepalend. Test deze in cyclus 1, niet in cyclus 5.

3. **Behandel docenten als reflectieve professionals, niet als consumenten**. Het scaffold-principe (zie §13.1.2 en H11 §11.3) is niet vrijblijvend: het bepaalt of de tool bijdraagt aan AI-geletterdheid van de doelgroep of juist tot cognitieve uitbesteding leidt.

## 14.4 Aanbevelingen voor vervolgonderzoek

Vier richtingen voor vervolgonderzoek volgen uit dit onderzoek.

### 14.4.1 Replicatie in andere opleidingen

De ontwerpprincipes uit hoofdstuk 12 zijn geformuleerd op basis van één opleiding. Replicatie in andere opleidingscontexten — bijvoorbeeld een tweede ORM-vergelijkbare retail/marketing-opleiding aan een andere hogeschool, of een verschillend vakgebied binnen Hanze — zou de overdraagbaarheid van de principes kunnen toetsen.

### 14.4.2 Longitudinaal effect op docent-AI-geletterdheid

Een centrale hypothese uit hoofdstuk 13.2.2 is dat scaffold-georiënteerde tools de AI-geletterdheid van docenten over tijd verhogen, met een didactische dubbele winst (eigen geletterdheid + begeleidingscapaciteit voor studenten). Een longitudinaal onderzoek over één tot twee jaar zou deze hypothese kunnen toetsen door pre/post-metingen van AI-geletterdheid bij actieve gebruikers van de tool, in vergelijking met een controlegroep.

### 14.4.3 Kwantitatieve TAM-validatie met grotere N

Het huidige onderzoek gebruikt TAM primair als kwalitatief inspectie-kader (cyclus 2) en zal in cyclus 5b een eerste kwantitatieve toepassing krijgen. Een vervolgstudie met een grotere populatie (bijvoorbeeld over meerdere opleidingen heen) zou structural equation modelling-analyses mogelijk maken zoals beschreven door Scherer, Siddiq en Tondeur (2019).

### 14.4.4 Vergelijking met shortcut-georiënteerde alternatieven

Het scaffold-perspectief is in dit onderzoek normatief gepositioneerd op basis van de literatuur (Kosmyna et al., 2025; Chen et al., 2025) en deductief uitgewerkt. Een vervolgstudie zou empirisch kunnen onderzoeken of scaffold-georiënteerde docent-tools daadwerkelijk leiden tot betere uitkomsten (zowel adoptie als didactisch effect) dan shortcut-georiënteerde alternatieven die hetzelfde domein bedienen.

## 14.5 Slotwoord

ORM AI Nieuws is in essentie een klein artefact: een PWA met enkele tabs, een gefilterde nieuwsstroom en een chatfunctie. De waarde ervan ligt niet in technische complexiteit maar in een bewuste set ontwerpkeuzes die het positioneren als scaffold voor docenten in een tijd waarin AI hun werkveld snel verandert. Het onderzoek demonstreert dat zelfs een klein artefact, mits zorgvuldig ontworpen en iteratief geëvalueerd, een bron van overdraagbare ontwerpkennis kan zijn — en dat de transpositie van didactische principes (AI als scaffold) van student-context naar professional-context een vruchtbare onderzoeksrichting opent voor het bredere vakgebied van AI-toepassingen in het hoger onderwijs.
