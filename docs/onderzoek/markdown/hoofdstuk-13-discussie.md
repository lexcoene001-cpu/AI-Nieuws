---
title: "Hoofdstuk 14 — Discussie"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.2-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

# 13. Discussie

In dit hoofdstuk worden de resultaten en de daaruit afgeleide ontwerpprincipes (hoofdstuk 12) in breder perspectief geplaatst. Eerst wordt de positionering ten opzichte van de bestaande literatuur uitgewerkt (§12.1), gevolgd door de implicaties van het scaffold-perspectief voor docent-AI-tools in bredere zin (§12.2). Vervolgens worden de beperkingen van het onderzoek geëxpliciteerd (§12.3) en wordt afgesloten met een reflectie op de overdraagbaarheid van de bevindingen (§12.4).

## 13.1 Verhouding tot bestaande literatuur

### 13.1.1 TAM in een DBR-context — bevestiging en uitbreiding

De adoptie-literatuur rondom TAM (Davis, 1989; Granić & Marangunić, 2019; Scherer, Siddiq & Tondeur, 2019) is overwegend gebaseerd op kwantitatieve studies met grote N en gestandaardiseerde vragenlijsten. Het huidige onderzoek voegt hieraan twee nuances toe.

Ten eerste laat het zien dat TAM ook bruikbaar is als *kwalitatief inspectie-kader* in vroege ontwerpfasen (cyclus 2; H7). Dit is methodologisch nieuw: TAM wordt typisch gebruikt om *bestaande* technologie te evalueren, niet om *toekomstige* technologie te vormgeven. De TAM-simulatie demonstreert dat de twee TAM-dimensies (PEOU en PU) zich lenen voor heuristische evaluatie van design-artefacten vóór gebruikerstest. Voor kleine ontwerpteams biedt dit een kosten-bewuste tussenoplossing tussen heuristic evaluation (Nielsen, 1994) en formele user testing.

Ten tweede bevestigt het onderzoek de bevinding van Scherer, Siddiq en Tondeur (2019) dat docenten in het bijzonder gevoelig zijn voor PEOU-issues. De zes PEOU-issues uit cyclus 2 (H7 §7.3.1) bleken alle empirisch te bevestigen issues, hoewel ze door een heuristic walkthrough door de auteur zelf werden gevonden. Dit suggereert dat de auteur — als zelf-docent — een relevant intern model van docent-PEOU-perceptie hanteert. Voor toekomstige replicatie zou expliciet moeten worden onderzocht of niet-docent-ontwerpers vergelijkbare resultaten zouden vinden, of dat hier een vorm van *empathische ontwerper-onderzoeker-bias* in het spel is — een methodische kwestie die ook door McKenney en Reeves (2018, hoofdstuk 4) als generieke DBR-uitdaging wordt benoemd.

### 13.1.2 Scaffold-perspectief: van student naar docent

De literatuur over AI als scaffold versus shortcut (Kosmyna et al., 2025; Chen, Wang & Liu, 2025; Ma et al., 2025; Karaman & Bahar, 2025) richt zich vrijwel uitsluitend op AI-gebruik door studenten. Het huidige onderzoek transponeert het principe naar AI-gebruik door docenten — een transpositie die in de literatuur tot dusver zelden expliciet is gemaakt.

Deze transpositie heeft consequenties voor zowel het ontwerp als de evaluatie. Voor het ontwerp betekent het: tools voor docenten moeten *eveneens* zo worden ingericht dat de docent als *tweede denker* functioneert ten opzichte van de AI-output, niet als passief consument. Voor de evaluatie betekent het: in het geval van docent-tools is de relevante variabele niet "leerwinst" (zoals bij studenten), maar "AI-geletterdheid" en "didactische kwaliteit" — variabelen die zich anders laten meten.

In de huidige studie is deze transpositie tot ontwerpprincipe geëxpliciteerd (Principe 8, H11 §11.4). Het is een te toetsen hypothese voor vervolgonderzoek dat scaffold-georiënteerde docent-tools meer bijdragen aan *AI-geletterdheid* van docenten dan shortcut-georiënteerde alternatieven.

### 13.1.3 Bijdrage aan curatie- en prompt-engineering-literatuur

De ontwerpprincipes 1, 2 en 9 (H11 §11.4) leveren empirische ondersteuning voor recente claims in de curatie- en prompt-engineering-literatuur (Sahoo et al., 2024; Liu et al., 2024). Het belang ervan is gradueel: ze bevestigen wat in de literatuur al wordt gesuggereerd, maar leveren een concrete real-world casus waarin het effect zichtbaar wordt op meetbare uitkomsten (cf. tabel 11.1).

Voor de vakgebieden curatie en information overload (Eppler & Mengis, 2004; Bawden & Robinson, 2009) is de bijdrage van het onderzoek vooral het demonstreren dat het *signal-noise-mismatch*-probleem ook in vakspecifieke contexten oplosbaar is via gelaagde filtering — niet alleen in algemene nieuwsstromen.

## 13.2 Implicaties voor docent-AI-tools

### 13.2.1 Een ontwerpparadigma voor docent-AI-tools

De combinatie van resultaten en ontwerpprincipes suggereert een ontwerpparadigma voor toekomstige AI-tools voor docenten dat zich kenmerkt door drie eigenschappen:

1. **Scaffold-georiënteerd**: tools die structuur bieden zonder oordeel over te nemen, in de geest van Kosmyna's (2025) "tweede denker".
2. **Vakspecifiek-gefilterd**: tools die met menselijke en algoritmische voor-curatie de informatie afstemmen op het vakgebied.
3. **Lichtgewicht-geïntegreerd**: tools die als PWA of vergelijkbaar drempelloos in de bestaande digitale omgeving van de docent passen.

Dit paradigma onderscheidt zich van de meer dominante stroom in het AI-tools-aanbod, die vaak gericht is op *productiviteitswinst door automatisering* (laat AI taken overnemen) in plaats van op *cognitieve ondersteuning door scaffolding* (laat AI denken faciliteren). Het scaffold-paradigma sluit beter aan bij de specifieke positie van de docent als reflectieve professional (Schön, 1983).

### 13.2.2 Didactische dubbele winst

Een tweede implicatie betreft de relatie tussen docent-AI-geletterdheid en student-AI-geletterdheid. Wanneer docenten zelf via een scaffold-georiënteerde tool werken aan hun AI-geletterdheid, ontstaat een didactische dubbele winst: de docent wordt zelf bekwamer in het beoordelen van AI-output, en zij of hij wordt daardoor ook bekwamer in het begeleiden van studenten in verantwoord AI-gebruik. Deze koppeling is theoretisch onderbouwd in Coene (2026, hoofdstuk 8.5) en Schep et al. (2025), die beide wijzen op de noodzaak van docent-professionalisering als voorwaarde voor verantwoorde AI-integratie in het onderwijs.

In de huidige studie kon deze dubbele winst niet empirisch worden gemeten — daarvoor is een longitudinaal vervolgonderzoek nodig dat zowel docent- als student-AI-geletterdheid over tijd volgt. Het is echter een sterke hypothese die uit het onderzoek voortvloeit.

## 13.3 Beperkingen

Het onderzoek kent vier samenhangende beperkingen die de interpretatie van de bevindingen begrenzen.

### 13.3.1 Eén opleiding, één instelling

De bevindingen zijn gebaseerd op één opleiding (ORM) binnen één hbo-instelling (Hanzehogeschool Groningen). Hoewel DBR de externe validiteit op andere wijze adresseert dan klassiek experimenteel onderzoek (door middel van *theorie van middel-niveau* en herhaling in andere contexten; McKenney & Reeves, 2018, hoofdstuk 8), blijft het een beperking dat de ontwerpprincipes uit dit onderzoek nog niet zijn gerepliceerd in andere opleidingen of instellingen.

### 13.3.2 Drievoudige rol van de auteur

De auteur fungeert tegelijkertijd als ontwerper, ontwikkelaar en onderzoeker. Deze rol-combinatie is in DBR vrijwel onvermijdelijk (McKenney & Reeves, 2018, hoofdstuk 4) maar laat ruimte voor blinde vlekken: ontwerpkeuzes kunnen onbewust worden bevoordeeld in de evaluatie, en feedback kan onbewust worden geïnterpreteerd in de richting van bevestiging van eigen overtuigingen. Mitigaties (transparantie via Git en projectlog, externe peer-review, member checking) verminderen dit risico maar elimineren het niet.

### 13.3.3 Inzet van AI in het onderzoek zelf

Zowel het ontwerp van de tool als de rapportage zijn ondersteund met inzet van een AI-assistent (Claude Code, Anthropic). Deze inzet wordt in hoofdstuk 15 (reflectie) expliciet verantwoord. Methodisch is dit een nieuw vraagstuk waarvoor nog geen breed gedragen academische conventies bestaan; het rapport hanteert daarom de richtlijnen die in Coene (2025) zijn geformuleerd voor AI-verantwoording in onderwijscontext.

### 13.3.4 Cyclus 5-data nog niet beschikbaar in v0.1

De grootste empirische beperking van de huidige rapportversie (v0.1) is dat de bevindingen uit cyclus 5 (brede uitrol, gestructureerde feedback) nog niet beschikbaar zijn. Het rapport zal pas in v1.0 — voorzien voor september 2026 — een volledig beeld kunnen geven van de adoptie en daadwerkelijk gebruik van het dashboard door de bredere docent-populatie. Voor de inhoudelijke discussie met lector Harald Pol op basis van v0.1 betekent dit dat aanbevelingen rond TAM-validatie en gebruikspatronen voorlopige status hebben.

## 13.4 Overdraagbaarheid

De ontwerpprincipes uit hoofdstuk 12.4 zijn geformuleerd als *theorie van middel-niveau* (Plomp, 2013) — geen universele wetmatigheden, maar wel breder toepasbare richtlijnen dan alleen de specifieke ORM-context. De vraag is: welke condities bepalen of een principe overdraagbaar is?

Op basis van het scaffold-perspectief en de cycli-analyse worden vier condities voorgesteld waaronder de principes naar verwachting overdraagbaar zijn:

1. **Doelgroep van expert-gebruikers** met beperkte tijd voor breed informatiezoekwerk (zoals docenten, beleidsmedewerkers, professionals in de zorg of het bedrijfsleven).
2. **Vakspecifiek thematisch venster** waarbinnen relevante informatie zich onderscheidt van een breder informatie-aanbod.
3. **Iteratief ontwerpproces** met directe terugkoppeling van gebruikers — het scaffold-principe is moeilijk in één keer te ontwerpen.
4. **Bereidheid tot gelaagde technische architectuur** (regex + LLM + UI-conventies + platform-bewustzijn) in plaats van vertrouwen op één enkele technische oplossing.

Buiten deze condities — bijvoorbeeld bij brede consumenten-tools, bij eenmalige ontwerpprojecten, of bij contexten waar PEOU geen primair issue is — verliezen sommige principes hun voorspellende kracht. Het meest robuust generaliseerbaar is naar verwachting Principe 8 (scaffold-ontwerp boven shortcut-ontwerp), omdat dit principe niet contextafhankelijk is maar een normatief uitgangspunt is gebaseerd op breed onderbouwde literatuur over cognitieve effecten van AI-gebruik (Kosmyna et al., 2025; Chen et al., 2025).

In de conclusie (hoofdstuk 14) wordt deze overdraagbaarheid vertaald naar concrete aanbevelingen voor de Hanzehogeschool, voor andere hbo-instellingen, en voor vervolgonderzoek.
