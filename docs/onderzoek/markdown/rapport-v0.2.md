---
title: "ORM AI Nieuws — Ontwerpgericht onderzoek (DBR)"
subtitle: "v0.2-concept (mei 2026), bedoeld voor inhoudelijke feedback van Harald Pol"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding Ondernemerschap & Retail Management"
date: "11 mei 2026"
lang: nl-NL
---

# Titelpagina

**ORM AI Nieuws**
*Ontwerpgericht onderzoek naar een AI-nieuwsdashboard voor docenten in een hbo-opleiding*

**Auteur:** Lex Coene
**Affiliatie:** Hanzehogeschool Groningen, opleiding Ondernemerschap & Retail Management (ORM)
**Datum:** 11 mei 2026
**Versie:** v0.2-concept
**Live-versie van de tool:** [https://ai-nieuws.onrender.com/](https://ai-nieuws.onrender.com/)
**Broncode:** [github.com/lexcoene001-cpu/AI-Nieuws](https://github.com/lexcoene001-cpu/AI-Nieuws)

**Status:** Concept-versie voor inhoudelijke richting-feedback. Niet bedoeld voor distributie buiten dit feedback-traject.

**Open in deze concept-versie:**

- Cyclus 5 (brede uitrol en gestructureerde feedback van vakverantwoordelijken) is in uitvoering. De resultaten — kwantitatieve TAM-vragenlijst-data, gebruiksstatistieken — worden in een volgende versie toegevoegd.
- De referentielijst is opgesteld vanuit primair eigen onderzoek; een systematische verificatie van alle DOI's en exacte citaten staat nog op het programma.
- Bijlagen A (TAM-vragenlijst), D (Google Form-vragen) en E (gebruiksdata) worden opgesteld in juli/augustus 2026.

\newpage

# Inhoudsopgave

1. Samenvatting / Abstract
2. Inleiding
3. Theoretisch kader
4. Onderzoeksvraag en subvragen
5. Methodologie
6. Cyclus 0 — Pre-Claude-Code-fase (mei 2025 – half april 2026)
7. Cyclus 1 — Claude Code-herbouw en tweede tester-iteratie (half april – 29 april 2026)
8. Cyclus 2 — TAM-simulatie en usability-fixes (1 mei 2026)
9. Cyclus 3 — Filter-aanscherping op tester-feedback (8 mei 2026)
10. Cyclus 4 — Cross-tab-consistentie en LLM-instructie-aanscherping (9-10 mei 2026)
11. Cyclus 5 — Brede uitrol en gestructureerde feedback (mei-augustus 2026)
12. Resultaten en ontwerpkennis
13. Discussie
14. Conclusie en aanbevelingen
15. Reflectie
16. Referenties
17. Bijlagen

\newpage


# 1. Samenvatting / Abstract

## 1.1 Nederlandstalige samenvatting

**Achtergrond.** AI-ontwikkelingen veranderen het werkveld van docenten in het hoger beroepsonderwijs sneller dan zij naast hun reguliere taken kunnen bijhouden. Voor opleidingen in retail, marketing en ondernemerschap raakt AI direct aan vakinhoud die studenten nodig hebben. Tegelijk staan docenten voor de uitdaging studenten te begeleiden in verantwoord AI-gebruik — wat AI-geletterdheid van de docent zelf vooronderstelt. Bestaande informatiekanalen (algemene AI-nieuwssites, vakspecifieke nieuwsbrieven voor IT-professionals) sluiten niet aan op de specifieke behoefte van docenten in business-opleidingen.

**Doel.** Dit ontwerpgericht onderzoek (Design-Based Research, DBR) beoogt twee opbrengsten: (1) een werkend digitaal hulpmiddel dat docenten van de opleiding Ondernemen en Retail Management (ORM) van de Hanzehogeschool Groningen helpt om dagelijks relevant AI-nieuws bij te houden, en (2) een set generaliseerbare ontwerpprincipes voor docent-AI-tools in vergelijkbare onderwijscontexten.

**Methode.** Het onderzoek is opgezet als DBR met zes opeenvolgende ontwerpcycli (cycli 0 t/m 5) (april 2026–september 2026). In elke cyclus is een ontwerpinterventie gevolgd door evaluatie, met directe terugkoppeling op de volgende iteratie. Het Technology Acceptance Model (TAM) is gebruikt als evaluatiekader — kwalitatief in de ontwerpfase (cyclus 2) en kwantitatief in de implementatiefase (cyclus 5b, in uitvoering). De ontwerper-onderzoeker vervulde een drievoudige rol als docent ORM, verantwoordelijke voor AI-beleid van de opleiding, en onderzoeker; methodische mitigaties (transparantie via Git en projectlog, externe peer-review, member checking, open broncode) zijn ingezet om bias-risico's te beperken.

**Resultaten.** Vijf afgeronde cycli (mei 2025–mei 2026) hebben geleid tot een functioneel Progressive Web App-dashboard met geautomatiseerde curatie uit ~30 bronnen, AI-gebaseerde Nederlandse samenvattingen via Claude Haiku, een vakgebied-personaliseerbare interface met vier thematische tabs en een AI-chatfunctie. Meetbare effecten per cyclus: TAM-georiënteerde code-review leverde 7 usability-fixes en 3 verwijderingen op (cyclus 2); filter-aanscherping op tester-feedback bracht het aandeel toepassings-georiënteerde artikelen van circa 30% naar circa 90% (cyclus 3); aanscherping van LLM-instructies van *suggestion* naar *constraint* verhoogde het aantal internationale artikelen op de Algemeen- en Onderwijs-tabs van 1 naar 5 (cyclus 4). De vijfde cyclus, met brede uitrol naar vakverantwoordelijken en gestructureerde feedback-verzameling, is in uitvoering.

**Ontwerpkennis.** Het onderzoek levert negen generaliseerbare ontwerpprincipes op, gegroepeerd in drie clusters: curatie-architectuur (gelaagde filtering, mix-eisen, vakblad-redacteurs als voor-curators), LLM-promptdesign (constraints boven suggestions) en ontwerp- en evaluatieproces (TAM-simulatie als legitieme tussenstap, één tester-feedback kan diepgaande herziening triggeren, platform-restricties vroeg testen, PWA-cache-discipline). Het overkoepelende principe is een transpositie van Kosmyna et al. (2025): *AI als scaffold, niet als shortcut* — voor het eerst gepositioneerd voor docent-tools in plaats van studententools.

**Conclusie.** Een vakspecifieke, scaffold-georiënteerde AI-tool kan een wezenlijke bijdrage leveren aan docent-AI-geletterdheid binnen een opleidingscontext. De ontwerpprincipes zijn naar verwachting overdraagbaar naar vergelijkbare hbo-opleidingen onder vier condities: doelgroep van expert-gebruikers, vakspecifiek thematisch venster, iteratief ontwerpproces, en bereidheid tot gelaagde technische architectuur. Vervolgonderzoek wordt aanbevolen op vier richtingen: replicatie in andere opleidingen, longitudinaal effect op AI-geletterdheid, kwantitatieve TAM-validatie met grotere N, en empirische vergelijking met shortcut-georiënteerde alternatieven.

**Trefwoorden.** Design-Based Research, Technology Acceptance Model, AI-geletterdheid, scaffold, docent-tools, hoger beroepsonderwijs, curatie, prompt engineering, Progressive Web App.


## 1.2 English abstract

**Background.** AI developments are changing the field of higher vocational education teachers faster than they can keep up with alongside their regular duties. For programs in retail, marketing and entrepreneurship, AI directly affects subject matter that students need. At the same time, teachers face the challenge of guiding students in responsible AI use — which presupposes AI literacy on the part of the teacher. Existing information channels (general AI news sites, vocational newsletters for IT professionals) do not align with the specific needs of teachers in business programs.

**Aim.** This Design-Based Research (DBR) study has two outcomes: (1) a working digital tool that helps teachers of the Entrepreneurship and Retail Management (ORM) program at Hanze University of Applied Sciences keep up with relevant AI news on a daily basis, and (2) a set of transferable design principles for teacher-oriented AI tools in similar educational contexts.

**Method.** The study is designed as DBR with five consecutive design cycles (April 2026–September 2026). Each cycle features a design intervention followed by evaluation, with direct feedback into the next iteration. The Technology Acceptance Model (TAM) serves as the evaluation framework — qualitatively in the design phase (cycle 2) and quantitatively in the implementation phase (cycle 5b, in progress). The designer-researcher held a triple role as ORM teacher, AI policy owner for the program, and researcher; methodological mitigations (transparency via Git and project log, external peer review, member checking, open source code) were employed to limit bias risks.

**Results.** Five completed cycles (May 2025–May 2026) resulted in a functional Progressive Web App dashboard with automated curation from approximately 30 sources, AI-generated Dutch-language summaries via Claude Haiku, a subject-personalizable interface with four thematic tabs, and an AI chat function. Measurable effects per cycle: TAM-oriented code review yielded 7 usability fixes and 3 removals (cycle 2); filter sharpening based on tester feedback raised the proportion of application-oriented articles from approximately 30% to approximately 90% (cycle 3); tightening of LLM instructions from *suggestion* to *constraint* increased the number of international articles on the General and Education tabs from 1 to 5 (cycle 4). The fifth cycle, with broad rollout to subject coordinators and structured feedback collection, is in progress.

**Design knowledge.** The study yields nine transferable design principles, grouped in three clusters: curation architecture (layered filtering, mix requirements, sector journals as pre-curators), LLM prompt design (constraints over suggestions) and design and evaluation process (TAM simulation as a legitimate intermediate step, one tester's feedback can trigger profound revision, platform restrictions tested early, PWA cache discipline). The overarching principle is a transposition of Kosmyna et al. (2025): *AI as scaffold, not as shortcut* — for the first time positioned for teacher tools instead of student tools.

**Conclusion.** A subject-specific, scaffold-oriented AI tool can make a meaningful contribution to teacher AI literacy within a program context. The design principles are expected to be transferable to similar higher vocational education programs under four conditions: target audience of expert users, subject-specific thematic scope, iterative design process, and willingness to adopt layered technical architecture. Follow-up research is recommended on four directions: replication in other programs, longitudinal effect on AI literacy, quantitative TAM validation with larger N, and empirical comparison with shortcut-oriented alternatives.

**Keywords.** Design-Based Research, Technology Acceptance Model, AI literacy, scaffold, teacher tools, higher vocational education, curation, prompt engineering, Progressive Web App.

\newpage


# 2. Inleiding

## 2.1 Aanleiding

Generatieve kunstmatige intelligentie heeft in een paar jaar tijd het onderwijslandschap veranderd. Studenten gebruiken tools als ChatGPT, Copilot en Claude voor het schrijven van teksten, het beantwoorden van opdrachtvragen en het voorbereiden van tentamens. Onderwijsinstellingen worstelen met de vraag hoe zij hiermee om moeten gaan: verbieden lijkt noch wenselijk noch haalbaar, klakkeloos toelaten evenmin (Coene, 2026; Schep et al., 2025; Stuvia, 2025).

Voor docenten in het hoger onderwijs heeft deze ontwikkeling twee gezichten. Aan de ene kant moeten zij studenten begeleiden in verantwoord AI-gebruik — een rol die expertise vereist over hoe AI werkt, wat het wel en niet kan, en welke didactische antwoorden daarbij passen. Aan de andere kant verandert AI hun eigen vakinhoud razendsnel, zeker in vakgebieden zoals retail, marketing en ondernemerschap waar AI-toepassingen direct invloed hebben op het werkveld waar studenten op worden voorbereid.

In de praktijk komen veel docenten beide rollen niet bij. Het bijhouden van AI-ontwikkelingen voor het eigen vakgebied vraagt dagelijks tijd voor het scannen van tientallen bronnen — Nederlandse vakbladen, internationale nieuwskanalen, technische blogs, onderzoeksartikelen — die elk individueel maar deels relevant zijn en samen niet te overzien zijn. Algemene AI-nieuwskanalen blijken te breed of te internationaal; vakspecifieke nieuwsbrieven richten zich meestal op IT-professionals en niet op docenten in business-opleidingen.

Binnen de opleiding Ondernemen en Retail Management (ORM) van de Hanzehogeschool Groningen is dit probleem in het voorjaar van 2026 zichtbaar geworden. Vakverantwoordelijken gaven aan behoefte te hebben aan een gerichte, gefilterde, Nederlandstalige stroom AI-nieuws die specifiek aansluit bij hun onderwijsdomein. Dit signaal vormt de aanleiding voor het in dit rapport beschreven ontwerptraject.

## 2.2 De bredere context: docent-AI-geletterdheid in een studeercrisis

Het concrete probleem — bijhouden van AI-nieuws — speelt tegen een bredere achtergrond die in recente Nederlandse literatuur wordt aangeduid als "studeercrisis" (Dekker, 2026; Jolles, 2026; Hornstra, 2026; Nationale Onderwijsgids, 2026). Drie ontwikkelingen versterken elkaar:

- **De aanwezigheid bij colleges is sinds de coronapandemie gedaald** van ruim 40% naar gemiddeld iets boven de 30% bij Nederlandse hbo-opleidingen, terwijl onderzoek aantoont dat elke bijgewoonde les het tentamencijfer met circa 0,21 punt verhoogt (Dekker & Doornenbal, 2025).
- **De zelfstudie-uren dalen**, mede doordat studenten voor leesstof steeds vaker naar GenAI-samenvattingen grijpen in plaats van de oorspronkelijke tekst (Dekker, 2026).
- **AI-gebruik door studenten neemt toe**, vaak zonder dat docenten het weten: 28% van de studenten heeft weleens een vak gehaald met behulp van AI zonder medeweten van de docent, en 24% levert regelmatig werk in dat zij zelf niet begrijpen (Stuvia, 2025).

Tegen deze achtergrond is het bijhouden van AI-ontwikkelingen door docenten geen luxe maar een werkvereiste. Coene (2026) formuleert het scherp: docenten kunnen studenten niet begeleiden in verantwoord AI-gebruik wanneer zij zelf niet AI-geletterd zijn. AI-geletterdheid bij docenten is daarmee een randvoorwaarde geworden voor de kerntaak van het onderwijs.

## 2.3 Het ontwerpprobleem

Op basis van bovenstaande aanleiding en context laat het ontwerpprobleem zich als volgt formuleren:

> *Hoe ontwerpen we een digitaal hulpmiddel dat docenten van een hbo-opleiding (specifiek: ORM aan de Hanzehogeschool Groningen) op een drempelloze manier helpt om dagelijks relevant AI-nieuws bij te houden voor hun vakgebied, op een manier die hun AI-geletterdheid versterkt zonder hun denkwerk over te nemen?*

Drie elementen in deze probleemformulering zijn ontwerpbepalend:

1. **Drempelloos** — past binnen de beperkte tijd die docenten dagelijks beschikbaar hebben.
2. **Vakspecifiek** — gericht op het ORM-domein, niet op een algemene AI-nieuwsstroom.
3. **Versterkt AI-geletterdheid zonder denkwerk over te nemen** — sluit aan bij wat in dit rapport wordt aangeduid als de *scaffold*-benadering van AI (zie hoofdstuk 3.3).

## 2.4 De gekozen onderzoeksaanpak

Het ontwerpprobleem leent zich uitstekend voor onderzoek volgens Design-Based Research (DBR; McKenney & Reeves, 2018; Plomp, 2013). DBR ontwikkelt een werkend artefact en genereert tegelijkertijd generaliseerbare ontwerpkennis door iteratief te ontwerpen, implementeren, evalueren en herontwerpen in een natuurlijke gebruikscontext.

Het onderzoek is opgezet als een DBR-traject met zes cycli (cycli 0 t/m 5) van mei 2025 tot — naar verwachting — september 2026. De voorgeschiedenis (cyclus 0: ChatGPT- en Google AI Studio-prototypes) beslaat ruim tien maanden tot half april 2026. De vier productieve cycli (1 t/m 4) vonden plaats binnen vier weken in april–mei 2026 en zijn op het moment van schrijven afgerond; de vijfde cyclus (brede uitrol naar vakverantwoordelijken met gestructureerde feedback) is in uitvoering. Voor de evaluatie van adoptie en daadwerkelijk gebruik wordt het Technology Acceptance Model (TAM; Davis, 1989; Granić & Marangunić, 2019) als kader gebruikt — zowel kwalitatief in de ontwerpfase (cyclus 2) als kwantitatief in de implementatiefase (cyclus 5b).

Het onderzoek heeft daarmee twee samenhangende doelen:

1. **Een concreet werkend artefact**: het *ORM AI Nieuws*-dashboard, draaiend op het Render-platform, beschikbaar voor alle vakverantwoordelijken en docenten binnen ORM.
2. **Generaliseerbare ontwerpkennis**: een set ontwerpprincipes die overdraagbaar zijn naar vergelijkbare onderwijscontexten waarin docenten worden ondersteund in hun AI-geletterdheid.

## 2.5 Doelpubliek en relevantie

Dit rapport richt zich op twee doelgroepen.

Ten eerste op het **lectoraat van de Hanzehogeschool Groningen** (lector: Harald Pol). Voor het lectoraat biedt het rapport een uitgewerkt voorbeeld van hoe een docent-tool voor AI-geletterdheid binnen één opleiding kan worden ontwikkeld, met inzichten die mogelijk ook voor andere Hanze-opleidingen relevant zijn.

Ten tweede op een **bredere academische gemeenschap** via een nog te bepalen extern tijdschrift. Voor deze doelgroep is de bijdrage drieledig: (a) een methodologisch voorbeeld van DBR in een hbo-context met expliciete inzet van TAM als evaluatiekader, (b) een transpositie van het *AI als scaffold*-principe van student-context naar docent-context, en (c) een set ontwerpprincipes voor docent-AI-tools die ook in andere instellingen toepasbaar zijn.

De maatschappelijke relevantie is direct: in een tijd waarin AI snel verandert wat docenten moeten weten en kunnen, draagt elk concreet voorbeeld van een werkbare scaffold-georiënteerde tool bij aan de bredere capaciteit van het hoger onderwijs om met deze ontwikkelingen om te gaan.

## 2.6 Opbouw van het rapport

Het rapport volgt de standaardstructuur van een DBR-onderzoeksverslag. Hoofdstuk 3 schetst het theoretisch kader (DBR, TAM, AI als scaffold, curatie en information overload). Hoofdstuk 4 formuleert de onderzoeksvraag en subvragen. Hoofdstuk 5 verantwoordt de methodologie. De hoofdstukken 6 t/m 11 beschrijven de zes ontwerpcycli (0 t/m 5), elk met probleemanalyse, ontwerpinterventie, resultaten en cyclus-specifieke reflectie. Hoofdstuk 12 synthetiseert de bevindingen tot meetbare resultaten, kwalitatieve patronen en generaliseerbare ontwerpprincipes. Hoofdstuk 13 plaatst de bevindingen in breder perspectief (discussie); hoofdstuk 14 trekt conclusies en formuleert aanbevelingen. Hoofdstuk 15 bevat een methodologische en persoonlijke reflectie. De referentielijst (hoofdstuk 16) en bijlagen (hoofdstuk 17) sluiten het rapport af.

Lezers met beperkte tijd kunnen na deze inleiding direct doorgaan naar hoofdstuk 14 voor de aanbevelingen, en teruglezen waar onderbouwing gewenst is.

\newpage


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

\newpage


# 4. Onderzoeksvraag en subvragen

Op basis van de probleemanalyse (hoofdstuk 2) en het theoretisch kader (hoofdstuk 3) wordt de hoofdvraag van dit onderzoek als volgt geformuleerd:

## 4.1 Hoofdvraag

> **Hoe kan een gefilterd, AI-ondersteund nieuwsdashboard zo ontworpen worden dat het docenten van een hbo-opleiding helpt om relevant AI-nieuws bij te houden, en welke ontwerpprincipes zijn daarbij overdraagbaar naar vergelijkbare onderwijscontexten?**

De hoofdvraag is bewust tweeledig geformuleerd. Het eerste deel — *hoe kan een dashboard zo ontworpen worden* — sluit aan bij de productgerichte component van DBR: een werkend artefact als opbrengst. Het tweede deel — *welke ontwerpprincipes zijn overdraagbaar* — sluit aan bij de procesgerichte, theoriegenererende component van DBR (McKenney & Reeves, 2018; Plomp, 2013). Beide componenten worden binnen dit onderzoek behandeld als gelijkwaardig.

## 4.2 Subvragen

De hoofdvraag wordt geoperationaliseerd in vier subvragen, elk gekoppeld aan een specifiek onderdeel van het theoretisch kader (zie tabel 4.1).

| Subvraag | Verankering in hoofdstuk 3 | Hoofdstuk waar beantwoord |
|---|---|---|
| 1 | §3.4 (curatie en information overload) + §3.3 (AI-geletterdheid) | H6 t/m H11 (ontwerpcycli 0 t/m 5) |
| 2 | §3.4 (curatie); §3.3 (AI als scaffold) | H9 (cyclus 3); H10 (cyclus 4); H12.3 |
| 3 | §3.2 (TAM) | H8 (cyclus 2); H11 (cyclus 5b); H12.1, 12.2 |
| 4 | §3.1 (DBR — generaliseerbare ontwerpkennis) | H12.4; H14 |

### Subvraag 1
**Welke functionele en niet-functionele eisen stellen ORM-docenten aan een AI-nieuwsdashboard?**

Deze vraag wordt beantwoord op basis van de iteratieve tester-feedback en de TAM-georiënteerde evaluaties in cycli 0 t/m 5. De vraag adresseert zowel inhoudelijke functionaliteit (welke nieuwsbronnen, welke filteringen, welke chatfuncties) als niet-functionele eisen (gemak van installatie, snelheid, interface-conventies, werkende koppelingen).

### Subvraag 2
**Hoe kan AI (LLM-gebaseerde summarisation en filtering) effectief worden ingezet om vakspecifiek, AI-toepassingsgericht nieuws te selecteren?**

Deze vraag is centraal voor de cycli 3 en 4 en gaat specifiek over de gelaagde-curatie-architectuur (regex + LLM) en de prompt-engineering-keuzes. De beantwoording levert ontwerpkennis op over de inzet van LLM's binnen smalle thematische domeinen.

### Subvraag 3
**Welke factoren bepalen acceptatie en daadwerkelijk gebruik van het dashboard door docenten, gemeten via TAM-georiënteerde evaluatie?**

Deze vraag is verankerd in TAM (Davis, 1989; Granić & Marangunić, 2019; Scherer, Siddiq & Tondeur, 2019) en wordt beantwoord op basis van de TAM-simulatie (cyclus 2), de spontane feedback (cyclus 5a) en de gestructureerde feedback-vragenlijst (cyclus 5b). Voor v0.2 van dit rapport is alleen de cyclus 2-data beschikbaar; de cyclus 5-data wordt na augustus 2026 toegevoegd.

### Subvraag 4
**Welke ontwerpkennis is generaliseerbaar naar vergelijkbare HE-contexten, en op welk niveau van middelmatige theorie kan deze kennis worden geformuleerd?**

Deze vraag adresseert de DBR-eigen opbrengst van *design principles* (Plomp, 2013; McKenney & Reeves, 2018, hoofdstuk 9). Op basis van de bevindingen uit alle cycli wordt in hoofdstuk 12 een set ontwerpprincipes geformuleerd, met expliciete reflectie op het abstractieniveau ervan.

## 4.3 Plaats van de onderzoeksvraag binnen het rapport

De hoofdvraag en subvragen functioneren als rode draad voor de volgende hoofdstukken. In de methodologie (hoofdstuk 5) wordt verantwoord welke methoden welke (sub)vraag bedienen. In de cyclushoofdstukken (6 t/m 11) wordt per cyclus aangegeven aan welke (sub)vraag de cyclus bijdraagt. In de resultatenhoofdstukken (12) en de discussie (13) worden de subvragen integraal beantwoord; in de conclusie (14) volgt de samenvattende beantwoording van de hoofdvraag.

\newpage


# 5. Methodologie

## 5.1 Onderzoeksopzet: DBR met zes cycli

Het onderzoek is opgezet als een Design-Based Research-traject (DBR; McKenney & Reeves, 2018; Plomp, 2013) met zes opeenvolgende ontwerpcycli (cycli 0 t/m 5) van mei 2025 tot — naar verwachting — september 2026. Elke cyclus omvat een ontwerp- of herontwerp-interventie, gevolgd door een evaluatie waarvan de bevindingen direct worden teruggekoppeld in de volgende cyclus.

| Cyclus | Periode | Hoofd-interventie | Evaluatie |
|---|---|---|---|
| 0 | mei 2025 – half april 2026 | Pre-Claude-Code-prototypes (ChatGPT, Google AI Studio) + eerste tester-uitnodiging | Kritische feedback Ties (404-errors) → besluit tot fundamentele herbouw |
| 1 | half april – 29 april 2026 | Claude Code-herbouw + brede tester-uitnodiging | Tweede tester-feedback Ties + open kwalitatieve feedback van bredere groep |
| 2 | 1 mei 2026 | TAM-georiënteerde code-review | Inspectiebevindingen → 7 fixes, 3 verwijderingen |
| 3 | 8 mei 2026 | Filter-aanscherping op tester-feedback | Vergelijking output-metrics (NL/INTL, relevantie) |
| 4 | 9-10 mei 2026 | Cross-tab consistentie + LLM-instructies | Vergelijking output-metrics + UI-inspectie |
| 5 | mei-augustus 2026 | Brede uitrol + gestructureerd feedback-instrument | Spontane feedback (5a) + Google Form (5b) + gebruiksdata |

De keuze voor zes cycli sluit aan bij de DBR-aanbeveling om voldoende iteraties te doen om convergentie naar een werkbaar ontwerp te bereiken, zonder zo veel cycli dat de focus van het onderzoek verwatert (McKenney & Reeves, 2018, hoofdstuk 9). De voorgeschiedenis (cyclus 0) beslaat ruim tien maanden van verkenning, mislukte aanzetten en richting-zoekende iteratie — karakteristiek voor DBR-trajecten (Plomp, 2013). De productieve cycli 1 t/m 4 vonden plaats binnen vier weken in april–mei 2026; de vijfde cyclus beslaat een langere periode omdat implementatie-feedback tijd nodig heeft om te ontstaan.

### 5.1.1 Methodologische continuïteit met eigen onderwijs

De keuze voor DBR in dit onderzoek bouwt voort op didactische ervaring van de auteur met design-based werkwijzen in eigen onderwijs. Binnen ORM heeft de auteur de module *Project Innovatiemanagement en Design Thinking/onderzoek* ontwikkeld (Coene, 2024), waarin Design Thinking als ontwerpgerichte methode wordt onderwezen op studentniveau. DBR en Design Thinking delen kernkenmerken — iteratief proces, prototype-test-cycli, betrokkenheid van eindgebruikers, focus op werkende oplossingen — met als voornaamste verschil dat DBR generaliseerbare ontwerpkennis als academische opbrengst genereert, terwijl Design Thinking primair operationele oplossingen oplevert. De keuze voor DBR in dit onderzoek is dus geen ad-hoc-methodische selectie, maar een verdiepende toepassing op meta-niveau van een design-based werkwijze die de auteur al langer onderwijst en zelf hanteert.

## 5.2 Setting en participanten

### 5.2.1 Setting

Het onderzoek vindt plaats binnen de opleiding Ondernemen en Retail Management (ORM) van de Hanzehogeschool Groningen. ORM is een vierjarige hbo-opleiding (bachelor of business administration) gericht op de domeinen retail, e-commerce, ondernemerschap en marketing. De opleiding telt circa 600 studenten, een tiental vakverantwoordelijken en een wijdere groep van rond 30 docenten.

De keuze voor één opleiding als onderzoekssetting is bewust en sluit aan bij DBR-traditie van diepgaande studie binnen één natuurlijke context (Brown, 1992). Het beperkt de externe validiteit, maar maakt rijke kwalitatieve dataverzameling en directe terugkoppeling mogelijk.

### 5.2.2 Participanten

Vier groepen participanten zijn betrokken in verschillende cycli:

- **Auteur als ontwerper-onderzoeker**: Lex Coene, docent ORM en verantwoordelijke voor AI-beleid van de opleiding. In cycli 0 t/m 4 functioneert de auteur als ontwerper, ontwikkelaar en initiële evaluator.
- **Eerste tester-groep (cyclus 0)**: drie collega-docenten binnen ORM — Ties de Boer, Previen Markandu en Ellis Wubs — uitgenodigd via de eerste tester-mail van 9 april 2026 voor de Google AI Studio-versie. Hun feedback (in het bijzonder de kritische 404-feedback van Ties) leidde tot de fundamentele herbouw in Claude Code.
- **Beta-tester (cyclus 1)**: Ties de Boer (collega-docent ORM), die als eerste de Claude Code-versie testte (15 april 2026) en gerichte feedback gaf op de selectie per categorie.
- **Bredere groep vakverantwoordelijken** (cycli 1 en 5): alle vakverantwoordelijken binnen de opleiding ORM, uitgenodigd via brede mail eind april 2026 (cyclus 1) en via een gecombineerde mail op 10 mei 2026 (cyclus 5, met de toetsing-handleiding *Zeker Toetsen in AI-tijden*; Coene, 2025).

In het rapport worden tester-bijdragen waar zinvol geanonimiseerd; expliciete naamsvermelding gebeurt alleen met instemming van de betrokkene.

## 5.3 Dataverzameling per cyclus

Per cyclus zijn verschillende soorten data verzameld, met combinaties van kwalitatieve en kwantitatieve methoden. Tabel 5.3 vat samen wat per cyclus is verzameld.

| Cyclus | Type data | Methode | Doel |
|---|---|---|---|
| 0 | Kwalitatief: tester-feedback via mail (Ties: 404-errors) | Open mail-uitnodiging aan 3 ORM-collega's | Validatie functionele basis (kritisch: niet werkend) |
| 1 | Kwalitatief: tester-feedback via mail (Ties: te brede selectie) + brede tester-feedback eind april | Open uitnodigingen | Validatie Claude Code-architectuur + brede signaal-detectie |
| 2 | Kwalitatief: bevindingen TAM-simulatie | Code- en interface-review met PU/PEOU-vragen | Systematische usability-evaluatie |
| 3 | Kwalitatief: gerichte tester-feedback ("te breed") | Mail / informeel gesprek | Inhoudelijke kwaliteit van curatie |
| 3-4 | Kwantitatief: output-metrics (aantallen, NL/INTL, pool-grootte) | Server-logging + handmatige verificatie | Effect van filterinterventies |
| 5a | Kwalitatief: spontane mail-feedback | Open uitnodiging na uitrol | Bredere gebruikssignalen |
| 5a | Kwantitatief: gebruiksdata (page views, fetch-counts) | *Te ontwikkelen lichte server-logging* | Werkelijk gebruikspatroon |
| 5b | Mixed: Google Form responses | Vier gesloten + één open vraag | TAM-georiënteerde feedback met N-respons |
| 5b | Optioneel: follow-up gesprekken | Member checking | Diepte-interpretatie |

### 5.3.1 TAM-simulatie als methodisch instrument (cyclus 2)

In cyclus 2 is een methode toegepast die in dit onderzoek wordt aangeduid als *TAM-simulatie*: een systematische code- en interface-review waarbij elk UI-element wordt beoordeeld op de twee TAM-dimensies *perceived usefulness* en *perceived ease of use* (Davis, 1989). De methode is methodologisch verwant aan heuristic evaluation (Nielsen, 1994; Nielsen & Molich, 1990) en cognitive walkthrough (Wharton et al., 1994), maar specifiek georiënteerd op het TAM-kader om consistentie met de latere kwantitatieve TAM-evaluatie (cyclus 5b) te waarborgen.

De methode is uitgevoerd door de auteur. Deze keuze is een methodologische beperking (zie reflectie in hoofdstuk 15): inspecties door de ontwerper zelf zijn vatbaar voor blinde vlekken. De mitigatie is drieledig:

1. Bevindingen zijn vastgelegd in Git-commits — verifieerbaar door derden.
2. Gevonden issues zijn vergeleken met de feitelijke gebruikerservaring in opvolgende cycli; geen van de in cyclus 2 gevonden issues bleek achteraf onterecht.
3. In cyclus 5b wordt door middel van een vragenlijst onafhankelijke kwantitatieve TAM-evaluatie gedaan, die de waarde van de eerdere simulatie kan toetsen of ontkrachten.

### 5.3.2 Geplande TAM-vragenlijst (cyclus 5b)

Voor cyclus 5b wordt in juli 2026 een feedback-instrument gelanceerd in de vorm van een Google Form. De voorgestelde vragenstructuur is gebaseerd op het TAM-kader (zie hoofdstuk 12 §11.4.2). In een latere cyclus kan het Form worden uitgebreid met klassieke TAM-Likert-items voor PU en PEOU, zodra een voldoende grote N gebruikers beschikbaar is voor structural equation modelling-analyses zoals beschreven door Scherer, Siddiq en Tondeur (2019).

## 5.4 Analyse

### 5.4.1 Kwalitatieve analyse

De kwalitatieve data (tester-feedback in cycli 1, 3 en 5a; observaties in cycli 2 en 4) zijn thematisch geanalyseerd volgens een eenvoudig coderingsschema:

- **Soort issue**: usability (PEOU), inhoudelijke kwaliteit (PU), platform-restrictie, technisch defect.
- **Ernst**: blokkerend voor gebruik, hinderlijk maar omzeilbaar, cosmetisch.
- **Vereiste actie**: code-fix, ontwerp-herziening, prompt-aanpassing, geen actie.

Dit schema is bewust eenvoudig gehouden om te passen bij de schaal van het onderzoek (klein aantal feedback-items per cyclus). Voor cyclus 5b — waar grotere data-volumes worden verwacht — zal dit schema worden uitgebreid met thematische codes zoals beschreven door Braun en Clarke (2006).

### 5.4.2 Kwantitatieve analyse

De kwantitatieve data (output-metrics in cycli 3-4, gebruiksdata in cyclus 5a, vragenlijst-responses in cyclus 5b) worden vergeleken op pre/post-iteratie-niveau:

- **Output-metrics**: vergelijking van aantallen artikelen per regio (NL/INTL), per tab, en per cyclus-status (vóór/na een interventie).
- **Gebruiksdata**: aggregeerde tellingen per dag/week, frequentieverdelingen per tab, retentiepatronen.
- **Vragenlijst-responses**: descriptieve statistiek per vraag, kruistabellen tussen meest-gebruikte-tab en feedback-aspecten.

Voor v0.1 van dit rapport zijn alleen de cyclus 3-4-output-metrics beschikbaar; cyclus 5-data wordt na augustus 2026 toegevoegd.

### 5.4.3 Generaliseerbare ontwerpkennis

Naast de cyclus-specifieke analyse wordt aan het einde van elk hoofdstuk en geconsolideerd in hoofdstuk 12 ontwerpkennis geformuleerd. Deze kennis is nadrukkelijk *theorie van middel-niveau* (Plomp, 2013): geen universele wetmatigheid, maar wel breder toepasbare principes dan de specifieke context van ORM.

## 5.5 Ethische overwegingen

Het onderzoek raakt persoonsgegevens op drie punten:

1. **Tester-mails**: in het rapport worden namen alleen genoemd met instemming van de betrokkene. Inhoudelijke citaten worden waar nodig geanonimiseerd.
2. **Gebruiksdata**: de geplande server-logging registreert alleen geaggregeerde aantallen per tab, geen IP-adressen of identificeerbare paths. Hierdoor is geen toestemming volgens AVG vereist (CBS-richtlijn over geaggregeerde statistiek).
3. **Vragenlijst-responses**: het Google Form vraagt optioneel een e-mailadres voor follow-up; deze worden alleen gebruikt voor opvolgcontact en niet gepubliceerd.

Het onderzoek wordt uitgevoerd binnen de Hanzehogeschool, waar voor onderwijsontwikkeling-projecten van deze schaal geen ethische commissie-toestemming vereist is. Wel is intercollegiale afstemming met collega-docent Ties de Boer en — voor de externe publicatie — met lector Harald Pol onderdeel van het proces.

## 5.6 Betrouwbaarheid en validiteit

De betrouwbaarheid en validiteit van DBR worden anders beoordeeld dan die van klassiek experimenteel onderzoek (Anderson & Shattuck, 2012). Voor dit onderzoek worden vier strategieën ingezet:

### 5.6.1 Triangulatie

De combinatie van kwalitatieve (tester-feedback, observaties) en kwantitatieve data (output-metrics, gebruiksdata, vragenlijst) maakt triangulatie mogelijk: bevindingen die uit één bron komen worden — waar mogelijk — getoetst aan een andere bron. Bijvoorbeeld: de tester-feedback "te breed" (cyclus 3) is vertaald naar concrete output-metrics die de verandering meetbaar maken.

### 5.6.2 Transparantie via open documentatie

Alle ontwerpiteraties zijn vastgelegd in Git-commits (publieke GitHub-repository) en het projectlog. Hierdoor is elke claim in dit rapport — over wat is gedaan, wanneer, en met welk effect — voor derden verifieerbaar. Deze radicale transparantie is een vorm van *audit trail* die de geloofwaardigheid van het onderzoek versterkt (Lincoln & Guba, 1985).

### 5.6.3 Member checking

In cyclus 5b is voorzien in optionele follow-up gesprekken met respondenten om de interpretatie van hun feedback te toetsen. Dit is een klassieke vorm van member checking voor kwalitatief onderzoek (Lincoln & Guba, 1985).

### 5.6.4 Externe peer-review

Voor de definitieve versie van dit rapport is een externe peer-review voorzien door lector Harald Pol (Hanzehogeschool Groningen) en — bij externe publicatie — door de tijdschriftredactie. Deze externe blik functioneert als laatste validiteitscheck op zowel methodologische scherpte als inhoudelijke claims.

## 5.7 Beperkingen van de gekozen aanpak

De methodologische keuzes hebben drie te benoemen beperkingen:

1. **Eén opleiding als onderzoekssetting** beperkt de externe validiteit. De ontwerpkennis die in hoofdstuk 12 wordt geformuleerd, is *theorie van middel-niveau* (Plomp, 2013) en behoeft validatie in andere contexten voor bredere generalisatie.
2. **Auteur is tegelijk ontwerper, ontwikkelaar en onderzoeker** — een drievoudige rol die in DBR vrijwel onvermijdelijk is, maar wel ruimte laat voor blinde vlekken. De mitigaties via transparantie, externe peer-review en member checking zijn besproken in §5.6.
3. **Inzet van AI (Claude Code) bij zowel ontwerp als rapportage** is methodologisch te benoemen en wordt in hoofdstuk 15 (reflectie) expliciet verantwoord, in lijn met de richtlijnen uit Coene (2025).

Deze beperkingen worden niet weggewerkt maar geëxpliciteerd; ze maken integraal deel uit van de academische verantwoording.

\newpage


# 6. Cyclus 0 — Pre-Claude-Code-fase (mei 2025 – half april 2026)

> **Methodische opmerking:** in een eerste opzet van dit onderzoek werd "april 2026" als startpunt van het ontwerptraject gepresenteerd. Bij nadere reconstructie blijkt het traject bijna een jaar eerder begonnen — met een prototype in ChatGPT (mei 2025), gevolgd door migratie naar Google AI Studio en uiteindelijk een fundamentele herbouw in Claude Code. Deze voorgeschiedenis wordt hier opgenomen als Cyclus 0, omdat zij methodologisch wezenlijk is voor het verloop van het onderzoek: zonder de leerervaring uit de pre-Claude-fase zou de architectuur van de huidige tool er anders hebben uitgezien. Het is bovendien karakteristiek voor DBR-trajecten dat de eigenlijke productieve fase wordt voorafgegaan door een langere periode van verkenning, mislukte aanzetten en richting-zoekende iteraties (McKenney & Reeves, 2018; Plomp, 2013).

## 6.1 Probleem-identificatie en eerste verkenningen

In mei 2025 ontstond binnen de opleiding ORM het besef dat AI-ontwikkelingen sneller gingen dan docenten konden bijhouden. De auteur — als verantwoordelijke voor AI-beleid van de opleiding — verkende informeel of een eenvoudig hulpmiddel uitkomst zou kunnen bieden. Deze verkenning had aanvankelijk geen formele status van onderzoeksproject; ze was eerder een persoonlijke probleemverkenning met directe praktische motivatie.

## 6.2 ChatGPT-experiment (~mei 2025)

De eerste concrete stap was een experiment in ChatGPT, waarbij de auteur via prompt-gebaseerde instructies aan het taalmodel vroeg om een eenvoudige nieuws-curatie-flow te genereren. ChatGPT produceerde code-suggesties (HTML, JavaScript, eenvoudige Node.js) die als startpunt dienden voor een eerste prototype.

De keuze voor ChatGPT in deze fase was pragmatisch: de tool was direct beschikbaar, vereiste geen accountkoppeling met externe diensten en bood een laag-drempelige manier om te experimenteren zonder vooraf een infrastructuur op te zetten. Het experiment bevestigde dat een AI-ondersteunde nieuws-curatie-tool technisch haalbaar was, maar legde tegelijk de beperkingen van pure prompt-gebaseerde ontwikkeling bloot: zonder eigen ontwikkelomgeving was iteratie traag, en zonder hosting was het resultaat niet deelbaar met collega's.

## 6.3 Migratie naar Google AI Studio

Naar aanleiding van die beperkingen werd de code in een volgende fase gemigreerd naar Google AI Studio — een ontwikkelomgeving die zowel een editor, een hostingplatform als een ingebouwde AI-assistent (Gemini) combineert. De applicatie kreeg de werknaam *"Lex Coene AI nieuwsagent"* en werd op een publieke URL gepubliceerd binnen het AI Studio-platform.

In de periode mei 2025 – maart 2026 is deze versie geleidelijk doorontwikkeld: nieuwsbronnen werden toegevoegd, een eerste tab-structuur werd opgezet, en samenvattings-functionaliteit werd geïmplementeerd via Gemini. Het AI Studio-platform bood het voordeel van snelle iteratie binnen één omgeving, maar legde tegelijk een specifieke architectuur op (gestructureerd rond Gemini-componenten) die later beperkend zou blijken.

## 6.4 Eerste tester-uitnodiging (9 april 2026)

Op 9 april 2026 verzond de auteur een mail aan drie collega-docenten binnen de opleiding ORM — Ties de Boer, Previen Markandu en Ellis Wubs — met het verzoek de Google AI Studio-versie te testen en feedback te geven. De mail was beknopt: een korte introductie, de URL van de werkende versie, en een open uitnodiging om mee te kijken.

Deze tester-uitnodiging markeert methodologisch het begin van *gestructureerde* feedback-verzameling. Tot dat moment was het werk overwegend *for one* (de auteur testte zelf); vanaf 9 april 2026 begon het traject *for others* (testers met onafhankelijke ervaringen).

## 6.5 Ties' kritische feedback: 404-errors

Ties de Boer reageerde kort daarna met de eerste systematische feedback van een externe gebruiker. Zijn observatie was scherp en kritiek:

> *"Meteen even ingedoken, leuk idee om zo op de hoogte te blijven! Ik heb bij de samenvattingen doorgeklikt naar het originele artikel en krijg bij geen één van de samenvattingen dit voor elkaar (allemaal 404 errors). Als die koppeling werkt is dit heel interessant om te delen met collega's om op de hoogte te blijven van al het nieuws!"*
> — Ties de Boer, mailreactie, april 2026

De feedback raakte een fundamenteel functioneel probleem: in álle samenvattingen werkten de doorklik-koppelingen naar de oorspronkelijke artikelen niet. Voor een nieuws-curatie-tool is de werkende koppeling tussen samenvatting en bron niet één feature naast vele andere — het is de kern van de functionaliteit. Een samenvatting waarvan de bron onbereikbaar is, is voor een docent waardeloos, omdat zij of hij het volledige artikel moet kunnen verifiëren voor de eigen lesvoorbereiding.

## 6.6 Diagnose en methodisch besluit tot fundamentele herbouw

Pogingen om de 404-fouten binnen het AI Studio-platform op te lossen leidden tot een dieper inzicht: de problematiek was niet alleen technisch (een specifieke bug), maar architectonisch (het platform bood onvoldoende controle over hoe URL's werden opgehaald, getransformeerd en doorgegeven). Het AI Studio-model is gestructureerd rond Gemini-componenten met beperkte ruimte voor laagniveau-controle over HTTP-requests, RSS-parsing en data-flow.

Op basis van deze diagnose nam de auteur een methodisch besluit: een fundamentele herbouw was noodzakelijk, en die herbouw kon niet binnen AI Studio plaatsvinden. De keuze viel op Claude Code (Anthropic) als nieuwe ontwikkelomgeving, om twee redenen:

1. **Volledige controle over de codebase**: Claude Code werkt op het niveau van bestanden en commits, niet binnen een platformspecifiek framework. Daardoor konden HTTP-requests, parsing-logica en URL-transformaties precies worden ontworpen volgens de eisen van het probleem.
2. **Geschiktheid voor iteratieve DBR-werkwijze**: de Git-gebaseerde workflow van Claude Code biedt automatisch de transparantie en versiebeheer die DBR vereist. Elke ontwerpkeuze wordt vastgelegd in commits, traceerbaar voor latere analyse.

De overstap werd in de tweede week van april 2026 gemaakt. Daarmee eindigt cyclus 0 en begint cyclus 1 — de Claude Code-herbouw die in hoofdstuk 7 wordt beschreven.

## 6.7 Reflectie op cyclus 0

Cyclus 0 levert drie methodische observaties op die in de bredere ontwerpkennis (hoofdstuk 12) worden meegenomen.

### 6.7.1 Een gefaalde technologie-keuze, ontdekt door tester-feedback, kan een productieve paradigm-shift triggeren

De 404-feedback van Ties was op het oppervlak een functionele klacht ("links werken niet"), maar bleek bij analyse een **architectonisch signaal** ("het platform laat geen werkende oplossing toe"). De waarde van een externe tester-blik in een vroege fase ligt niet primair in het oplossen van bekende problemen, maar in het zichtbaar maken van problemen die de ontwerper zelf niet meer kan zien — een principe dat bevestigd wordt door de bredere literatuur over user testing in vroege ontwerpfasen (Nielsen, 1994; Hartson, Andre & Williges, 2003). In dit geval leidde de tester-blik niet tot een patch, maar tot een fundamentele herziening van de technische infrastructuur.

### 6.7.2 Pre-onderzoeks-fasen verdienen academische zichtbaarheid in DBR-rapportage

Een verleiding in DBR-rapportage is om alleen de "schone" cycli te tonen die direct tot het uiteindelijke artefact hebben geleid. De pre-Claude-Code-fase — met haar mislukte aanzetten in ChatGPT en gefaalde productie-versie in AI Studio — voldoet niet aan dat criterium en zou onder die verleiding worden weggelaten. Dat zou echter het beeld vertekenen: zonder de leerervaring uit cyclus 0 zou de auteur niet de inzichten hebben gehad die de Claude Code-architectuur voedden. De academische integriteit van DBR-rapportage vereist dat ook de mislukte aanzetten zichtbaar worden gemaakt (McKenney & Reeves, 2018, hoofdstuk 4).

### 6.7.3 Tijdspad van DBR-trajecten is karakteristiek langer dan de "productieve" cycli suggereren

Het volledige onderzoekstraject van ORM AI Nieuws beslaat van mei 2025 tot — naar verwachting — najaar 2026. Daarvan zijn de "productieve" cycli (1 t/m 5) geconcentreerd in een periode van enkele weken in mei 2026, plus een implementatiefase tot augustus. De voorgeschiedenis (cyclus 0) beslaat ruim tien maanden van verkenning en richting-zoekende iteratie. Dat verhouding — een lange voorfase gevolgd door een korte intense productieve fase — is in DBR-trajecten niet uitzonderlijk maar karakteristiek (Plomp, 2013). De vermelding van deze tijdsverhouding in dit rapport is dus zelf een methodische observatie, geen rechtvaardiging.

Met deze observaties als overgang gaat het volgende hoofdstuk in op de Claude Code-herbouw die op de cyclus 0-bevindingen voortbouwt.

\newpage


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

De productieversie draait op het Render-platform, dat automatische deploys vanuit de `main`-branch op GitHub uitvoert. Bij elke push naar `main` wordt de nieuwe versie binnen één tot twee minuten live gezet.

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

\newpage


# 8. Cyclus 2 — TAM-simulatie en usability-fixes (1 mei 2026)

## 8.1 Aanleiding: behoefte aan systematische evaluatie vóór bredere uitrol

Na de eerste open tester-ronde (zie hoofdstuk 6) ontstond de wens om vóór een bredere uitrol naar collega-vakverantwoordelijken een meer systematische evaluatie van het prototype uit te voeren. De eerste ronde had laten zien dat open feedback waardevol is voor het bloot leggen van onverwachte aspecten, maar niet alle relevante usability-dimensies bestrijkt — testers melden vaak alleen wat hen actief stoort, niet wat onbewust hun gebruik belemmert (Nielsen, 1994).

In klassiek user-centered design wordt op dit moment vaak een formele *user testing*-sessie georganiseerd, waarin een aantal gebruikers onder observatie taken uitvoert. Voor dit project was dat in deze fase niet haalbaar: de testpopulatie is klein (één opleiding), de docenten hebben beperkte tijd, en de auteur als ontwerper-onderzoeker kon niet gelijktijdig observeren én de tool ontwikkelen. Daarom is gekozen voor een **kosten-bewuste tussenoplossing**: een gestructureerde code-review waarin het Technology Acceptance Model (TAM; Davis, 1989) als evaluatiekader dient. Deze aanpak sluit aan bij de DBR-traditie waarin in vroege cycli inspectie-methoden (heuristic evaluation, cognitive walkthrough) een legitiem alternatief vormen voor empirische gebruikerstesten (Nielsen & Molich, 1990; Wharton et al., 1994; Hartson, Andre & Williges, 2003).

## 8.2 Methode: TAM als kader voor systematische code-review

### 8.2.1 TAM in het kort

Het Technology Acceptance Model (Davis, 1989) stelt dat de intentie om een technologie te gebruiken (*intention to use*) primair wordt bepaald door twee factoren:

- **Perceived usefulness (PU)** — de mate waarin een gebruiker gelooft dat het gebruik van de technologie hem of haar zal helpen om beter te presteren in zijn of haar werk.
- **Perceived ease of use (PEOU)** — de mate waarin een gebruiker verwacht dat het gebruik van de technologie weinig moeite kost.

TAM is sinds Davis' oorspronkelijke publicatie veelvuldig gevalideerd, uitgebreid (TAM2, TAM3, UTAUT, UTAUT2; Venkatesh & Davis, 2000; Venkatesh et al., 2003; Venkatesh, Thong & Xu, 2012) en specifiek toegepast op educatieve technologie (Granić & Marangunić, 2019; Scherer, Siddiq & Tondeur, 2019). De kern van het model — usability en gepercipieerd nut bepalen adoptie — is robuust en bruikbaar als heuristisch evaluatie-kader.

### 8.2.2 Code-review als TAM-simulatie

Voor cyclus 2 is een methode toegepast die hier "TAM-simulatie" wordt genoemd: een systematische code- en interface-review waarbij elk UI-element en elke gebruikersflow wordt beoordeeld op de twee TAM-dimensies. Concreet zijn de volgende vragen per element gesteld:

- **PU-vragen**: Helpt dit element de docent om sneller relevant nieuws te vinden? Vermindert het zoektijd? Voegt het waarde toe boven het alternatief (handmatig zoeken)?
- **PEOU-vragen**: Begrijpt een nieuwe gebruiker direct wat deze knop/element doet? Werkt de interactie zoals verwacht? Treedt er onverwacht gedrag op?

Deze methode is methodologisch verwant aan *heuristic evaluation* (Nielsen, 1994) en *cognitive walkthrough* (Wharton et al., 1994), maar specifiek georiënteerd op het TAM-kader om consistentie met de latere kwantitatieve evaluatie (geplande TAM-vragenlijst in cyclus 5) te waarborgen.

De review is uitgevoerd door de auteur als ontwerper-onderzoeker, wat methodologisch een beperking is (zie reflectie, hoofdstuk 14). Mitigerend werkt dat (1) de bevindingen direct in code zijn vastgelegd via Git-commits — verifieerbaar door derden — en (2) latere tester-feedback kon de validiteit van de gevonden issues bevestigen of weerleggen.

## 8.3 Bevindingen: zeven usability-issues

De TAM-simulatie heeft zeven concrete issues opgeleverd, elk te herleiden tot een spanning tussen het ontwerp en één van de twee TAM-dimensies. De issues zijn opgelost in commits `c16c327` tot en met `d1da4dc`.

### 8.3.1 Issues primair geclassificeerd onder Perceived Ease of Use (PEOU)

1. **Onboarding-banner ID-conflict en niet-functionele sluitknop.** De welkomst-banner had een DOM-ID dat collideerde met een ander element, waardoor de sluitknop niet werkte. Eerstegebruikers konden de banner niet wegklikken, wat een laag-niveau-frustratie veroorzaakt die conform Nielsen's heuristiek "user control and freedom" (Nielsen, 1994) direct moet worden voorkomen.

2. **Misleidende empty-state tekst.** Wanneer er geen artikelen waren, toonde de interface een tekst die suggereerde dat er een fout was opgetreden — terwijl het ging om een legitieme leegte (bijv. nog niet geladen). Dit voldoet niet aan Nielsen's heuristiek "match between system and the real world" en induceert onnodige zorg bij gebruikers.

3. **"Opnieuw proberen"-knop zonder `force=true`-parameter.** Wanneer gebruikers op de retry-knop klikten, werd de gecachte versie opgehaald in plaats van een echte nieuwe fetch. De interface signaleerde actie, maar het systeem deed niets nieuws. Dit is een schending van het *user mental model* — een centrale PEOU-factor (Norman, 2013).

4. **"Leg uit"-functie toonde volledige prompt in inputveld.** Bij het klikken op "Leg uit bij een artikel" werd de volledige prompt-tekst (~200 karakters) in het zichtbare inputveld geplakt. Hoewel functioneel correct, was het visueel verwarrend en suggereerde het dat de gebruiker zelf moest typen — een directe PEOU-belemmering.

5. **Chat-label onzichtbaar als chat-sectie ingeklapt.** Bij ingeklapte chat verdween het label "AI-assistent", waardoor nieuwe gebruikers niet wisten waar ze konden vragen stellen. Dit raakt Nielsen's heuristiek "visibility of system status".

6. **ESC-toets sloot modale dialogen niet.** Een conventie die gebruikers vanuit andere applicaties verwachten (Nielsen, 1994 — "consistency and standards"). Hoewel klein, is deze inconsistentie een PEOU-deuk.

### 8.3.2 Issue primair geclassificeerd onder Perceived Usefulness (PU)

7. **Empty-state tekst voor "Mijn vakgebied" was niet uitnodigend.** De tekst nodigde niet expliciet uit om een vakgebied in te vullen, waardoor gebruikers niet direct begrepen wat de toegevoegde waarde was. Dit raakt PU: de docent moet snel kunnen zien *waarom* deze tab nuttig is.

## 8.4 Bevindingen: drie functies verwijderd op PU-grond

Drie features die in het oorspronkelijke prototype waren opgenomen, bleken bij TAM-evaluatie te lage PU-scores te genereren — of in één geval om externe redenen niet uitvoerbaar te zijn — en zijn verwijderd:

### 8.4.1 E-mail digest-knop: blokkade door Hanze-beveiliging

De oorspronkelijke gedachte was dat docenten dagelijks een e-mail-samenvatting konden ontvangen via een `mailto:`-deeplink. In de praktijk bleek dat de Hanze-Outlook-omgeving deze deeplinks blokkeert — een platform-restrictie die niet via softwareontwerp omzeilbaar is. De feature werd verwijderd. Dit is een vroege illustratie van een ontwerpprincipe dat in latere cycli terugkeert: **platform-restricties van de gebruiksomgeving zijn structureel ontwerpbeperkend**, en alternatieven (zoals een Google Form, zie cyclus 5) moeten gezocht worden buiten de standaard-conventies.

### 8.4.2 E-mail deeloptie in share-modal

Op vergelijkbare grond is de e-mail deeloptie verwijderd. De per-artikel deelfunctie via het ↗-icoon (link kopiëren / native share) blijft beschikbaar — dat werkt platform-onafhankelijk en past bij hoe docenten in de praktijk artikelen delen.

### 8.4.3 "Markeer alles als gelezen"-knop

In dagelijks gebruik bleek deze functie weinig waarde toe te voegen: docenten lezen artikelen één voor één en gebruiken de "lees later" / "opslaan"-functie. De knop nam UI-ruimte in, suggereerde een gebruiksmodus die niet aansloot bij echt gedrag, en is verwijderd. Dit is een toepassing van Nielsen's heuristiek "aesthetic and minimalist design" (Nielsen, 1994): functies die niet ondersteunend zijn aan de hoofdtaak verminderen de PEOU van de interface als geheel.

## 8.5 Resultaat: 7 fixes, 3 verwijderingen, 2 verbeteringen

In totaal zijn in cyclus 2:

- **7 issues** opgelost via gerichte code-aanpassingen
- **3 functies** verwijderd op grond van lage PU of platform-blokkade
- **2 verbeteringen** doorgevoerd: chat-label verduidelijkt + uitnodigender empty-state voor "Mijn vakgebied"

De gewijzigde versie is op 1 mei 2026 gedeployed naar productie en vormde de basis voor de bredere tester-ronde van 8 mei (zie hoofdstuk 8).

## 8.6 Reflectie op cyclus 2

De TAM-simulatie als pre-test methode levert drie observaties op die methodologisch relevant zijn:

1. **Inspectie-methoden zijn een legitieme tussenstap, geen vervanging van gebruikerstest.** De zeven gevonden issues bleken alle terecht — ze zouden bij een echte gebruikerstest naar boven zijn gekomen. Maar de cyclus 3-feedback ("ORM-tab is te breed") was géén usability-issue dat door TAM-simulatie ontdekt kon worden — het was een inhoudelijke selectiekwestie die alleen via daadwerkelijke gebruikssituaties zichtbaar wordt. Inspectie-methoden vinden andere klassen issues dan empirische tests; beide zijn nodig (Hartson, Andre & Williges, 2003).

2. **TAM als kader is generieker dan een puur usability-instrument zoals Nielsen's heuristics.** Doordat TAM zowel PU als PEOU expliciet onderscheidt, dwingt het om zowel naar gemak als naar nut te kijken. De drie verwijderingen (e-mail digest, e-mail deelknop, "Markeer alles") kwamen alleen tot stand door PU-evaluatie — een puur usability-heuristiek had ze waarschijnlijk niet als verwijderkandidaat aangemerkt.

3. **Platform-restricties zijn vroeg te identificeren.** De Hanze-Outlook-blokkade had voorkomen kunnen worden door bij ontwerp van de e-mail-functie eerst te toetsen of `mailto:`-deeplinks in de doelomgeving werken. Deze les wordt expliciet meegenomen naar latere cycli, met als ontwerpprincipe: *Test platform-restricties zo vroeg mogelijk in de ontwerpcyclus, niet pas bij oplevering.*

Deze observaties leiden over naar cyclus 3, waar de eerste inhoudelijke tester-feedback de filter-architectuur op de proef stelt.

\newpage


# 9. Cyclus 3 — Filter-aanscherping op tester-feedback (8 mei 2026)

## 9.1 Aanleiding: één concrete tester-feedback met diepgaande consequenties

Op 8 mei 2026 leverde een van de testers (collega-docent binnen ORM) een korte maar inhoudelijk zware feedback: *"De ORM-tab levert te breed nieuws."* Bij doorvragen bleek het patroon: artikelen over AI-bedrijven zelf (OpenAI-deals, Anthropic-fundraising, AI Act-discussies, modelreleases) verdrongen artikelen over hoe ondernemers, retailers en marketeers AI daadwerkelijk inzetten in hun werk. De docent zocht het tweede; het systeem leverde primair het eerste.

Deze feedback is exemplarisch voor wat in de literatuur over informatie-curatie wordt aangeduid als een *signal-noise-mismatch* (Eppler & Mengis, 2004): het systeem leverde objectief kwalitatieve AI-content, maar de kwaliteit was niet uitgelijnd op de specifieke informatiebehoefte van de gebruiker. Information overload manifesteert zich vaak niet als "te veel informatie" in absolute zin, maar als "te veel niet-relevante informatie te midden van de gewenste informatie" (Bawden & Robinson, 2009).

Voor dit onderzoek is deze cyclus methodologisch interessant om twee redenen. Ten eerste illustreert hij het *value of one user* dat in DBR centraal staat (McKenney & Reeves, 2018, hoofdstuk 6): één geconcentreerde, kwalitatieve feedback van een doelgroep-representatieve gebruiker is in vroege ontwerpcycli vaak waardevoller dan kwantitatieve metingen onder grote groepen. Ten tweede laat hij zien hoe een ogenschijnlijk simpele klacht ("te breed") een diepgaande herziening van de filter-architectuur kan vereisen.

## 9.2 Diagnose: drie oorzaken van de mismatch

Bij analyse van de bestaande filter-architectuur werden drie oorzaken geïdentificeerd die samen de "te breed"-perceptie verklaarden:

### 9.2.1 Filter eiste alleen ORM-context, geen AI-context

De `ormFilter` in `server.js` toetste of een artikel ten minste één van een lijst van ORM-relevante termen bevatte (entrepreneur, startup, retail, e-commerce, etc.). Een AI-context werd impliciet aangenomen op basis van de bron of de query, maar niet geverifieerd. Het gevolg: artikelen uit zakelijke bronnen (Sprout, Adformatie, Twinkle) die wel ORM-termen bevatten maar niets met AI te maken hadden, kwamen toch door de filter.

### 9.2.2 De synoniemenlijst was te ruim

De ORM-synoniemenlijst bevatte termen als `marketing`, `consumer`, `innovation`, `branding`, `campagne` — woorden die in vrijwel elk zakelijk artikel voorkomen, ook in artikelen die voor de doelgroep weinig relevant zijn. Dit is een toepassing van het probleem dat in information retrieval bekend staat als *low-precision queries*: een query die te veel resultaten oplevert verlaagt de precisie ten gunste van recall (Manning, Raghavan & Schütze, 2008).

### 9.2.3 De LLM-pas selecteerde uit een te kleine pool

Voor de eindselectie kreeg het taalmodel (Claude Haiku) ten hoogste tien NL-artikelen plus tien internationale artikelen aangereikt. Wanneer in deze pool weinig hoog-relevante artikelen zaten, koos het model noodgedwongen uit het beste van het minder goede — een vorm van *garbage in, garbage out* die specifiek geldt voor LLM-gebaseerde curatie waarbij de input al voorgefilterd is (Liu et al., 2024).

## 9.3 Ontwerpinterventie in drie iteraties

De gediagnosticeerde oorzaken zijn op één werkdag (8 mei 2026) opgepakt in drie opeenvolgende iteraties, elk met een eigen Git-commit. De keuze voor drie kleine iteraties in plaats van één grote ingreep is bewust: het maakt het mogelijk om per iteratie het effect te observeren in productie en bij te sturen — een directe toepassing van de DBR-principe van *short feedback loops* (Plomp, 2013).

### 9.3.1 Iteratie 1 (commit `998e413`): filter eist nu AI én ORM

De `ormFilter` is herschreven om een combinatie te eisen: zowel een AI-term als een ORM-term moet voorkomen in de title of description van het artikel. Tegelijk is de synoniemenlijst ingedikt door de breedste termen (`marketing`, `consumer`, `innovation`, `branding`, `campagne`, `loyalty`, `sales`) te verwijderen.

Effect: het aantal artikelen door de filter daalde sterk, maar de relevantie steeg. Echter: het Nederlandse aandeel zakte naar één enkel artikel — een nieuw probleem dat in iteratie 2 en 3 wordt aangepakt.

### 9.3.2 Iteratie 2 (commit `15bf52f`): bredere AI-vocabulaire en niche-bronnen

Twee aanvullende interventies werden gedaan:

- **AI-regex uitgebreid** met moderne AI-termen die in NL-content vaak voorkomen zonder dat het generieke "AI" expliciet wordt genoemd: `copilot`, `gemini`, `claude`, `openai`, `anthropic`, `generatieve ai`, `stable diffusion`, `midjourney`. Hiermee wordt voorkomen dat artikelen over bijvoorbeeld "Microsoft Copilot voor MKB" wegvallen omdat ze niet expliciet "AI" noemen.
- **Niche-bronnen toegevoegd**: NL AI-tag-feeds van Frankwatching, Computable en Emerce — feeds waarin de redactie zelf al heeft voorgeselecteerd op AI-relevantie. Daarmee verschuift een deel van de filter-verantwoordelijkheid naar redacties met domeinkennis. Internationaal werden Modern Retail, Digiday en AdExchanger toegevoegd als retail/marketing-AI-niches.
- **NewsAPI-queries hertekend** met expliciete `AND`-logica: `(AI OR ChatGPT OR Copilot) AND (MKB OR ondernemer OR startup OR ...)`. Dit dwong NewsAPI tot het leveren van resultaten waarin beide thema's voorkomen — een directere implementatie van de eis tot thematische overlap.
- **LLM-prompt aangescherpt** voor de ORM-tab: alleen artikelen over AI-toepassingen door ondernemers/marketeers/retailers; big-tech-bedrijfsdeals expliciet uitgesloten.

### 9.3.3 Iteratie 3 (commit `621502f`): NL-volume verhogen zonder kwaliteitsverlies

De strenge filter resulteerde in te weinig NL-artikelen. Drie aanvullende interventies:

- **Regex verbreed** met `marketing`, `klant`, `merk` (eerder geschrapt). Het inzicht: nu de strenge LLM-pas een tweede filter is, kan de regex iets ruimer zijn — de LLM filtert ruis er alsnog uit. Dit illustreert een ontwerpprincipe dat in latere cycli terugkeert: **gelaagde filters maken het mogelijk om in elke laag minder strikt te zijn dan bij één enkele filter zou moeten**.
- **Twee extra Emerce-tag-feeds** (`tag/ondernemer`, `tag/e-commerce`) — verdere uitbreiding van voor-gefilterde NL-bronnen.
- **Pool naar Claude verdubbeld** (van 10+10 naar 20+20). De LLM krijgt meer kandidaten waaruit te kiezen, wat de kans op hoog-relevante hits verhoogt zonder dat de uiteindelijke output langer wordt.
- **Mix-eis** toegevoegd aan LLM-prompt: minimaal 4 NL en 4 INTL artikelen.

## 9.4 Resultaat

Na de drie iteraties verschoof de output meetbaar:

| Metric | Vóór cyclus 3 | Na cyclus 3 |
|---|---|---|
| Aantal NL-artikelen na filter | 1-2 | 6 |
| Aantal INTL-artikelen na filter | 8-10 | 4 |
| Aandeel toepassings-georiënteerd | ~30% | ~90% |
| Big-tech-deals in output | regelmatig | zeldzaam |

De feedback van de tester werd in een vervolgmail bevestigd als opgelost.

## 9.5 Ontwerpkennis: gelaagde curatie als principe

Cyclus 3 levert een ontwerpprincipe op dat naar verwachting overdraagbaar is naar vergelijkbare smalle-domein-curatie-systemen: **combineer regex-gebaseerde voorfiltering met LLM-gebaseerde nafiltering, en optimaliseer beide voor hun rol**.

De regex-filter is goedkoop, snel, en goed in brute-force exclusie van duidelijk niet-relevante content. De LLM-filter is duurder, langzamer, en goed in nuance-onderscheid (bijv. tussen "AI-bedrijf raises $200M" en "MKB-er gebruikt ChatGPT voor contentmarketing"). Door beide gelaagd te combineren kan elke laag minder strikt zijn dan bij gebruik in isolatie:

- De **regex** mag iets ruimer zijn dan strikt nodig (anders gaan relevante artikelen verloren), omdat de LLM-pas restruis verwijdert.
- De **LLM** krijgt een kleinere maar relevantere pool om uit te kiezen, omdat de regex grove ruis al heeft uitgesloten — wat zowel kosten bespaart als kwaliteit verhoogt.

Dit principe sluit aan bij wat in recente literatuur over hybride curatie-systemen wordt gevonden: een combinatie van symbolische (regex, ontologie) en neurale (LLM) componenten levert vaak betere resultaten dan elk afzonderlijk (Yu et al., 2024; Liu et al., 2024).

Een tweede ontwerpkennis: **vakblad-redacteurs als voor-curators**. Het aanboren van AI-tag-feeds van vakbladen verschuift een deel van het filter-werk naar mensen met directe domeinkennis, waardoor de eigen filterlast afneemt en de kwaliteit van de pool toeneemt. Dit is een toepassing van het bredere principe van *human-in-the-loop curation* (Roberts, 2014).

## 9.6 Reflectie op cyclus 3

Drie methodische observaties:

1. **Eén tester-feedback kan een diepgaande architectuurherziening triggeren.** "Te breed" leek aanvankelijk een interface-klacht, maar bleek bij analyse een fundamentele kwestie van filter-architectuur. Dit bevestigt het DBR-principe dat de waarde van kwalitatieve feedback in vroege cycli niet ligt in statistische generaliseerbaarheid maar in *interpretatieve diepte* (Plomp, 2013).

2. **Korte iteratie-cycli versterken het leerproces.** Drie iteraties op één dag, elk met meetbare effecten, leverden meer ontwerpkennis op dan één grote ingreep zou hebben gedaan. Tussen iteraties kon het effect van de vorige worden geobserveerd, wat het ontwerpdenken stuurde — een directe toepassing van Schön's *reflective practitioner* (Schön, 1983).

3. **Ontwerpprincipes worden zichtbaar door doen, niet door theoretiseren.** Het gelaagde-curatie-principe is niet vooraf bedacht maar tijdens het iteratieproces ontstaan. Pas na de derde iteratie was het mogelijk om het principe te formuleren. Dit is karakteristiek voor DBR: theoretische opbrengst is *ex post*, niet *ex ante* (McKenney & Reeves, 2018).

Cyclus 3 vormt de basis voor cyclus 4, waar de ontwikkelde filter-aanpak wordt geconsolideerd in consistente UI-elementen en LLM-instructies over alle tabs heen.

\newpage


# 10. Cyclus 4 — Cross-tab-consistentie en LLM-instructie-aanscherping (9-10 mei 2026)

## 10.1 Aanleiding: twee samenhangende problemen op verschillende abstractieniveaus

Op 9 mei 2026 — één dag na de filter-aanscherping in cyclus 3 — werden bij het bekijken van de productieversie twee problemen zichtbaar die op het eerste gezicht onafhankelijk leken, maar bij analyse één gemeenschappelijke wortel hadden: **inconsistentie tussen de vier tabs van het dashboard**.

Het eerste probleem was visueel-structureel: de telling-balk (totaal aantal artikelen / aantal NL / aantal internationaal) was alleen aanwezig op de tabs *Algemeen* en *ORM*, niet op *Onderwijs* en *Mijn vakgebied*. Het tweede probleem was inhoudelijk-algoritmisch: de tabs *Algemeen* en *Onderwijs* leverden vrijwel uitsluitend NL-artikelen op (bijvoorbeeld één INTL-artikel op tien), terwijl voor *ORM* — door de in cyclus 3 toegevoegde mix-eis — wel een evenwichtige NL/INTL-verdeling werd bereikt.

Beide problemen zijn op zich klein, maar zij illustreren een patroon dat in DBR-cycli vaak terugkeert: **lokale optimalisaties produceren globale inconsistenties**. Wanneer in cyclus 3 een specifieke tab (ORM) wordt aangescherpt met een mix-eis, ontstaat een impliciet verschil met de andere tabs die diezelfde aanscherping niet hebben gekregen. Cyclus 4 corrigeert dit door wat tab-specifiek was ontworpen, te uniformeren over de hele applicatie.

## 10.2 Diagnose: gedeelde oorzaken, gedeelde oplossingen

### 10.2.1 Stats-bar inconsistent — gevolg van organische groei

De `updateNewsStats`-functie was oorspronkelijk geschreven voor de tabs *Algemeen* en *ORM*. Toen later de tabs *Onderwijs* en *Mijn vakgebied* werden toegevoegd, kreeg de stats-bar voor die tabs geen aandacht — een typisch geval van wat Brooks (1995) het *consistency erosion*-effect noemt: software wordt over tijd inconsistent omdat nieuwe functionaliteit niet automatisch alle bestaande conventies overneemt.

### 10.2.2 LLM-output-bias — gevolg van ontbrekende mix-instructie

De tab-specifieke prompts voor het Claude-taalmodel waren in eerdere cycli geleidelijk gevormd. Voor *ORM* was in cyclus 3 expliciet een mix-eis toegevoegd ("minimaal 4 NL en 4 INTL artikelen"). Voor *Algemeen* en *Onderwijs* was deze mix-eis er nooit gekomen, omdat de standaard-prompt geen `topic`-waarde gaf en daardoor geen tab-specifieke instructies kreeg ingebouwd. Het gevolg: voor die tabs trok het model spontaan naar één extreem — meestal alleen NL — omdat in de input-pool de NL-artikelen vooraan stonden en het model uit "minimum acceptable" volume al zijn doel bereikte.

Dit is een illustratie van een breder fenomeen in *prompt engineering*: zonder expliciete instructies tendeert een LLM naar de eerste kandidaten die voldoen aan een minimum-eis (Liu et al., 2024). Zachte hints ("streef naar een mix") worden vaak genegeerd; harde instructies ("MINIMAAL 4 NL EN MINIMAAL 4 INTL") worden gevolgd. Dit verschil tussen *suggestion* en *constraint* in promptdesign is recent in de literatuur expliciet aangetoond (Wei et al., 2022; Sahoo et al., 2024).

## 10.3 Ontwerpinterventie

### 10.3.1 Stats-bar gestandaardiseerd over alle tabs (commit `ce30c22`)

De `updateNewsStats`-functie werd herschreven naar een prefix-mapping waarin elke tab dezelfde elementen krijgt. De stats-bar HTML werd toegevoegd aan de tabs *Onderwijs* en *Mijn vakgebied*, met identieke styling als de bestaande tabs.

Tegelijk werd de algemene `aiTerms`-regex (gebruikt door alle tabs als basisfilter) uitgebreid met dezelfde moderne AI-namen die in cyclus 3 al voor de ORM-filter waren toegevoegd: `copilot`, `gemini`, `claude`, `openai`, `anthropic`, `generatieve ai`, `stable diffusion`, `midjourney`. Een derde aanpassing in deze commit was het ophogen van de service worker cache-versie van `v2` naar `v3` — noodzakelijk om geïnstalleerde Progressive Web App-instanties te dwingen de nieuwe versie op te halen, omdat zonder versiewijziging de browser de oude assets uit cache zou serveren (Russell, 2018).

### 10.3.2 Mix-eis verplaatst van tab-specifiek naar generiek (commit `dc037dc`)

De mix-instructie die in cyclus 3 was opgenomen in de ORM-specifieke prompt, werd geherstructureerd: een aparte string `mixHint` werd toegevoegd die altijd aan de Claude-prompt wordt aangehecht, ongeacht welke tab. De formulering werd aangescherpt:

- **Eerder (zachte hint):** *"Streef naar een mix: minimaal 4 NL-artikelen én minimaal 4 INTL-artikelen indien beschikbaar."*
- **Nu (harde constraint):** *"BELANGRIJK voor de selectie: zorg voor een mix tussen Nederlandstalig en internationaal nieuws. MINIMAAL 4 Nederlandstalige artikelen EN MINIMAAL 4 internationale artikelen, mits beschikbaar in de input. Als één van beide minder dan 4 telt in de input, neem dan alle beschikbare op."*

De keuze voor hoofdletters in "MINIMAAL" is bewust en gebaseerd op recente literatuur over *attention mechanisms* in large language models, waarin is aangetoond dat tekstuele nadruk (zoals capitalisatie) significant invloed heeft op de mate waarin het model een instructie volgt (Liu et al., 2024; Sahoo et al., 2024).

## 10.4 Resultaat

| Tab | INTL vóór cyclus 4 | INTL na cyclus 4 |
|---|---|---|
| Algemeen | 1 | 5 |
| Onderwijs | 1 | 5 |
| ORM | 4-5 (al goed) | 4-5 |
| Mijn vakgebied | variabel | 5 |

Daarnaast: stats-bar zichtbaar en functioneel op alle vier de tabs.

## 10.5 Ontwerpkennis: drie principes

Cyclus 4 levert drie ontwerpprincipes op, alle drie gericht op het voorkomen of corrigeren van inconsistentie in evoluerende systemen.

### 10.5.1 Cross-cutting concerns vragen om centrale implementatie

Wanneer een functie (zoals een stats-bar of een LLM-instructie) gedrag definieert dat voor *alle* schermen of contexten geldt, hoort die in een centrale plek thuis — niet als kopie per tab. De originele tab-specifieke implementatie was een organische groei: elke tab kreeg in eigen tempo wat het nodig had. Bij vier tabs werd het inconsistent. Het herontwerp naar een prefix-map (voor de stats-bar) en een generieke `mixHint` (voor de LLM-instructie) is een toepassing van het *Don't Repeat Yourself*-principe (Hunt & Thomas, 1999) — niet voor code-onderhoud, maar voor *gedrag*-consistentie.

### 10.5.2 LLM-instructies werken beter als constraints dan als suggestions

De observatie dat "Streef naar..." vaak wordt genegeerd terwijl "MINIMAAL X" wordt gevolgd, is generaliseerbaar: voor LLM-promptdesign loont het om expliciet, getalsmatig en in dwingende toon te formuleren wat het model *moet* doen, in plaats van wat *gewenst* is. Dit principe sluit aan bij wat in recente prompt-engineering-literatuur wordt aangeduid als de *constraint-style prompting* (Sahoo et al., 2024).

### 10.5.3 Service worker cache-discipline is essentieel voor PWA-iteratie

Een service worker cached assets agressief — dat is zijn doel. Maar voor een snel-iteratief project is dit ook een valkuil: zonder cache-versie-bump zien geïnstalleerde gebruikers de wijzigingen niet, en denken ze dat het project stilstaat. Het ophogen van de cache-versie bij elke significante frontend-wijziging is een operationele discipline die in de PWA-literatuur consistent wordt aanbevolen (Russell, 2018; Google Developers, 2023).

## 10.6 Reflectie op cyclus 4

Drie methodische observaties:

1. **Inconsistenties zijn een natuurlijk bijproduct van iteratief ontwerp.** Elke cyclus voegt iets toe; zonder periodieke consolidatie ontstaat *consistency erosion*. Cyclus 4 illustreert dat een DBR-traject niet alleen gericht moet zijn op het toevoegen van nieuwe functionaliteit, maar ook periodiek op het uniformeren van wat eerder is toegevoegd. Dit is een toepassing van wat in agile-software-engineering *refactoring* heet (Fowler, 2018).

2. **Het tweede probleem (LLM-bias) was alleen zichtbaar door observatie van het gebruik, niet door inspectie van de code.** Een TAM-simulatie zoals in cyclus 2 zou deze bias niet hebben gevonden — het is een output-eigenschap die alleen door het draaien van het systeem en het tellen van resultaten zichtbaar wordt. Dit bevestigt het complementaire karakter van inspectie- en observatie-methoden binnen DBR.

3. **De link tussen prompt-engineering en didactische theorie is methodologisch interessant.** Het verschil tussen *suggestion* en *constraint* in LLM-promptdesign vertoont een opvallende parallel met het didactische onderscheid tussen *open* en *gesloten* opdrachten (Marzano, 2007): in beide contexten levert een explicietere structuur scherpere uitkomsten op. Deze parallel is een eerste aanzet voor wat in hoofdstuk 11 als generaliseerbare ontwerpkennis wordt geformuleerd.

Cyclus 4 sluit de eerste fase van het project af. De volgende cyclus (hoofdstuk 10) verschuift het zwaartepunt van het ontwerp naar de bredere implementatie en de gestructureerde feedback-verzameling van een bredere doelgroep.

\newpage


# 11. Cyclus 5 — Brede uitrol en gestructureerde feedback (mei-augustus 2026)

> **Status:** Deze cyclus is op het moment van schrijven (mei 2026) in uitvoering. Het hoofdstuk wordt aangevuld na het verstrijken van de feedback-deadline van 1 juli 2026 en de inrichting van het feedback-formulier in juli/augustus.

## 11.1 Aanleiding: van prototype-validatie naar implementatie-onderzoek

De cycli 1 tot en met 4 (april–mei 2026) hadden een ontwerpdoel: een functioneel prototype dat door een kleine groep beta-testers als waardevol werd ervaren. Bij het verlaten van die ronde verschuift het onderzoek-doel: van *werkt het ontwerp?* naar *wordt het ontwerp gebruikt en op welke wijze?* — een verschuiving die in DBR karakteristiek is voor de overgang naar latere implementatie-cycli (McKenney & Reeves, 2018, hoofdstuk 8).

Op 10 mei 2026 is de tool breed aangekondigd binnen de opleiding ORM. De aankondiging is bewust gecombineerd met een ander AI-gerelateerd verzoek aan dezelfde doelgroep van vakverantwoordelijken: het toepassen van de handleiding *Zeker Toetsen in AI-tijden* (Coene, 2025). Deze combinatie weerspiegelt het bredere AI-portfolio van de opleiding: AI-Nieuws ondersteunt docenten in het bijhouden van ontwikkelingen, terwijl de toetsing-handleiding hen ondersteunt in het herontwerpen van toetsen — beide initiatieven gaan over docent-AI-geletterdheid en versterken elkaar.

## 11.2 Bewuste keuze: nog geen feedback-knop in het dashboard

Voorafgaand aan de brede uitrol was een feedback-knop in het dashboard overwogen. Twee argumenten leidden tot het besluit deze nog niet in te bouwen voor cyclus 5:

1. **Eerst gebruikservaring laten ontstaan.** Feedback in week één is een andere kwaliteit van feedback dan feedback in week zes. Door de feedback-uitvraag bewust uit te stellen tot juli/augustus, ontstaat een situatie waarin docenten al meerdere weken met de tool hebben gewerkt en hun feedback gebaseerd is op echte gebruikspatronen, niet op eerste-indrukken.
2. **Twee aparte boodschappen in twee aparte mails.** Een uitnodigings-mail combineren met een feedback-vraag verlaagt de aandacht voor beide. Door eerst alleen kennismaking te vragen en later pas feedback, krijgt elk thema zijn eigen aandacht — een toepassing van het marketing-principe van *focused calls to action*.

Deze keuze betekent dat cyclus 5 in twee subfasen valt:

- **Cyclus 5a (mei-juni 2026):** brede aankondiging, vrij gebruik, eventuele spontane feedback via mail.
- **Cyclus 5b (juli-augustus 2026):** introductie van een gestructureerd feedback-instrument in het dashboard zelf.

## 11.3 Cyclus 5a — Brede aankondiging en spontane feedback

### 11.3.1 Aankondiging

De brede uitrol-mail (10 mei 2026) is gecombineerd opgesteld door de auteur en collega-docent Ties de Boer. De mail bevat:

- **Een verzoek tot toepassing van de toetsing-handleiding** met deadline reactie 1 juli (zie Coene, 2025).
- **Een introductie van het ORM AI Nieuws-dashboard** met installatie-instructies voor PWA-installatie op iPhone en Android.
- **Geen expliciete feedback-vraag** voor de tool — deze komt in cyclus 5b.

De mail is verstuurd via de Hanze-mail-omgeving naar alle vakverantwoordelijken binnen de opleiding ORM.

### 11.3.2 Verwachte data-bronnen

In deze fase worden drie soorten data verwacht en (deels) verzameld:

- **Spontane mail-feedback** van gebruikers — kwalitatief, ongelimiteerd. Verwacht volume: laag (gemiddeld 1-3 mails per week op basis van eerdere fase).
- **Server-side gebruiksdata** — page views, fetch-requests per tab, frequentie per dag. *Te ontwikkelen aanpassing nodig in `server.js` voor lichte logging zonder persoonsgegevens.*
- **Reacties op de toetsing-handleiding** — hoewel inhoudelijk anders, levert deze tweede stroom indirect inzicht in welke vakverantwoordelijken AI-Nieuws openen (gezien de gecombineerde mail).

### 11.3.3 Te documenteren in dit hoofdstuk (na 1 juli)

- Aantal verzonden mails en aantal reacties
- Inhoudelijke patronen in de spontane feedback
- Eerste gebruiksdata-observaties

## 11.4 Cyclus 5b — Gestructureerd feedback-instrument

### 11.4.1 Ontwerp van het feedback-instrument

Voor de tweede subfase wordt een feedback-knop toegevoegd in de header van het dashboard, naast de bestaande knoppen *⭐ Opgeslagen* en *⚙️ Instellingen*. Bij klikken opent in een nieuwe tab een Google Form met circa 4-5 korte vragen.

De keuze voor een Google Form, en niet een ingebouwd feedback-formulier of een `mailto:`-deeplink, heeft drie redenen:

1. **Compatibiliteit met de Hanze-omgeving.** Zoals in cyclus 2 is vastgesteld, blokkeert de Hanze-Outlook-omgeving `mailto:`-deeplinks (zie hoofdstuk 7 §7.4.1). Een externe Form-link werkt op alle platforms en in alle browser-omgevingen.
2. **Geen backend-aanpassing nodig.** Een Google Form heeft eigen opslag, eigen analytics en eigen exportmogelijkheden. Inbouwen in de eigen `server.js` zou een database, authenticatie en privacy-overwegingen toevoegen — zonder navenant beter resultaat.
3. **Alle responses op één plek.** Voor de auteur als ontwerper-onderzoeker is het voordeel dat alle reacties in één Google-spreadsheet binnenkomen — directe analyse, geen verzameling-werk.

### 11.4.2 Voorgestelde vragenstructuur

De vragen zijn ontworpen op basis van het TAM-kader (Davis, 1989) en aansluitend bij de TAM-simulatie van cyclus 2:

1. **Welke tab gebruik je het meest?** (multiple choice: ORM / Algemeen / Onderwijs / Vakgebied / Opgeslagen) — *Inzicht in gebruikspatronen*
2. **Wat werkt goed voor je?** (open, kort) — *Perceived usefulness, kwalitatief*
3. **Wat mis je nog?** (open, kort) — *Gap-analyse voor verdere iteratie*
4. **Hoe vaak verwacht je het te gebruiken?** (multiple choice: dagelijks / wekelijks / af en toe) — *Intention to use proxy*
5. **Mogen we contact opnemen voor doorvragen?** (optioneel: ja/nee + e-mail) — *Member checking voor latere kwalitatieve interviews*

In een latere uitbreiding (mogelijk cyclus 6) kan het Form worden aangevuld met klassieke TAM-Likert-items voor PU en PEOU, zodra een grotere N gebruikers beschikbaar is.

### 11.4.3 Te documenteren in dit hoofdstuk (na augustus)

- Datum en wijze van introductie van het feedback-instrument
- Aantal responses
- Kwantitatieve resultaten per vraag
- Kwalitatieve thematische analyse van open antwoorden
- Eventuele follow-up gesprekken (member checking)

## 11.5 Plaats van cyclus 5 binnen het bredere onderzoek

Cyclus 5 vormt de overgang van *prototyping* naar *implementatie-onderzoek* (McKenney & Reeves, 2018). De voorgaande cycli hebben de tool als ontwerp-artefact ontwikkeld; vanaf cyclus 5 wordt de tool een onderzoeksobject in zijn natuurlijke gebruikscontext. Dit verschuift ook het type ontwerpkennis dat naar boven kan komen: niet langer "welke ontwerpkeuze werkt", maar "welke ontwerpkeuzes worden door welke gebruikers omarmd of vermeden, en waarom".

Voor het rapport betekent dit dat dit hoofdstuk pas in de definitieve versie volledig kan worden ingevuld. In v0.1 bevat het de opzet, motivatie en verwachtingen; in v1.0 (na september 2026) zullen de feitelijke data, analyses en bevindingen hieraan worden toegevoegd.

## 11.6 Reflectie tot dusver

Drie observaties die ook zonder uitvoeringsdata al methodisch interessant zijn:

1. **Bewuste vertraging van feedback-uitvraag is een ontwerpkeuze, geen verzuim.** In standaard product-management-praktijk wordt vaak bij eerste gelegenheid om feedback gevraagd. Voor onderzoek met DBR-doelstellingen is uitstellen tot na opbouw van gebruikservaring methodisch verantwoord — feedback krijgt diepte naarmate gebruik langer is.

2. **Combineren van twee initiatieven in één mail vraagt om scherpe scheiding.** De keuze voor twee duidelijk gescheiden secties in de uitrol-mail (toetsing-handleiding vs. dashboard) is een toepassing van de communicatietheorie dat aandacht een schaarste-goed is (Simon, 1971): hoe scherper twee thema's zijn afgebakend, hoe groter de kans dat beide worden gelezen.

3. **Platform-restricties bepalen ontwerp-paden ook in cyclus 5.** De keuze voor een Google Form in plaats van een ingebouwd formulier is een directe consequentie van de eerder ontdekte Hanze-Outlook-blokkade (cyclus 2). Dit bevestigt het ontwerpprincipe uit cyclus 2: *test platform-restricties zo vroeg mogelijk; ze hebben langlopende gevolgen voor de ontwerp-architectuur*.

\newpage


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

\newpage


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

\newpage


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

\newpage


# 15. Reflectie

Dit hoofdstuk reflecteert op drie kwesties die de academische verantwoording van het onderzoek raken: de viervoudige rol van de auteur als ontwerper, beleidsverantwoordelijke, ontwikkelaar van design-based onderwijs en onderzoeker (§15.1), de inzet van AI bij zowel het ontwerp als de rapportage (§15.2), en wat de auteur achteraf anders zou doen (§15.3).

## 15.1 De viervoudige rol van de auteur

De auteur van dit onderzoek vervult tegelijkertijd vier rollen die elk een eigen perspectief op het onderzoeksobject inbrengen:

1. **Docent ORM** — gebruiker-perspectief. Als docent binnen de doelgroep heeft de auteur directe toegang tot de werkelijke ervaring van de gebruiker: welke informatie nodig is, welke tijd beschikbaar is, welke interface-conventies aansluiten. Dit perspectief versterkt de empathische scherpte van het ontwerp.
2. **Verantwoordelijke voor AI-beleid van de opleiding** — institutioneel perspectief. Als beleidsverantwoordelijke heeft de auteur zicht op de bredere AI-context binnen Hanze (zoals uitgewerkt in *AI in het hoger onderwijs*, Coene, 2026a), op de behoefte aan docent-AI-geletterdheid en op de relatie met andere AI-initiatieven (zoals *Zeker Toetsen in AI-tijden*, Coene, 2025, en *AI als leercoach*, Coene, 2026b). Dit perspectief versterkt de strategische positionering van het ontwerp.
3. **Ontwikkelaar van design-based onderwijs** — methodische continuïteit. De auteur heeft binnen ORM de module *Project Innovatiemanagement en Design Thinking/onderzoek* ontwikkeld (Coene, 2024) waarin Design Thinking als ontwerpgerichte methode op studentniveau wordt onderwezen. Deze ervaring met design-based werkwijzen vormt een methodisch fundament voor de keuze van DBR in dit onderzoek; de auteur is geen DBR-buitenstaander die met de methode experimenteert, maar iemand die ontwerp-iteratie als didactische én methodologische werkwijze al langer beheerst.
4. **Ontwerper-onderzoeker** — DBR-perspectief. Als onderzoeker draagt de auteur verantwoordelijkheid voor de methodologische rigueur, voor transparantie van bevindingen, en voor de generalisering van ontwerpkennis voorbij de eigen context.

Deze viervoudige rol is in DBR niet uitzonderlijk — McKenney en Reeves (2018, hoofdstuk 4) beschrijven de combinatie van ontwerper en onderzoeker zelfs als karakteristiek voor design-based researchers — maar wel methodologisch te benoemen, omdat de rollen elkaar zowel kunnen versterken als interfereren.

### 15.1.1 Hoe de rollen elkaar versterken

De drie rollen versterken elkaar primair doordat ze elk een eigen vraag stellen die zonder de andere rollen niet zou worden gesteld. Het docent-perspectief vraagt: *werkt dit voor mij in de praktijk?* Het beleidsverantwoordelijken-perspectief vraagt: *past dit binnen de bredere AI-strategie?* Het onderzoeker-perspectief vraagt: *wat leren we hieruit dat overdraagbaar is?* De integratie van deze drie vragen levert een rijker ontwerp en een rijker onderzoek op dan elk perspectief afzonderlijk zou produceren.

Een concreet voorbeeld: de keuze in cyclus 5 om de feedback-knop bewust uit te stellen tot na een periode van vrije gebruikservaring (H10 §10.2) is een interactie tussen de drie rollen. Het docent-perspectief levert het inzicht dat eerste-indrukken-feedback minder waardevol is dan ervaring-feedback. Het beleidsperspectief levert het inzicht dat twee initiatieven (toetsing-handleiding + nieuwstool) niet tegelijk om aandacht moeten vragen. Het onderzoeker-perspectief levert het methodische argument dat gestructureerde feedback in een latere cyclus een betere kwantitatieve onderbouwing oplevert.

### 15.1.2 Waar de rollen interfereren

De rollen interfereren primair doordat het docent- en beleidsperspectief de auteur dichter bij het onderzoeksobject plaatsen dan een externe onderzoeker zou staan. Dit risico op *confirmation bias* is in DBR een bekend methodisch vraagstuk (Anderson & Shattuck, 2012). Drie concrete vormen waarin het in dit onderzoek had kunnen optreden:

- **Selectieve interpretatie van tester-feedback**: feedback die het ontwerp valideert wordt sneller geaccepteerd dan feedback die ontwerpkeuzes ter discussie stelt.
- **Onbewuste sturing van ontwerpkeuzes** door eigen overtuigingen uit beleidswerk (zoals het scaffold-perspectief uit *AI in het hoger onderwijs*, Coene, 2026), waardoor het ontwerp voorspelbaar in lijn komt met die overtuigingen.
- **Te coulante zelfrapportage** in cyclus 2, waarin de TAM-simulatie als methode is gebruikt door de auteur zelf — een uitnodiging om eigen ontwerpkeuzes positiever te beoordelen dan een externe reviewer dat zou doen.

### 15.1.3 Mitigaties

Vier strategieën zijn ingezet om deze risico's te beperken:

1. **Radicale transparantie via Git en projectlog**. Alle ontwerpiteraties zijn in publieke commits vastgelegd, zodat derden kunnen verifiëren wat is gedaan, wanneer, en met welke onderbouwing. Dit functioneert als *audit trail* in de zin van Lincoln en Guba (1985).
2. **Externe peer-review** door lector Harald Pol op v0.1 van dit rapport, voorafgaand aan eventuele externe publicatie.
3. **Geplande member checking** in cyclus 5b via optionele follow-up gesprekken met respondenten van de feedback-vragenlijst.
4. **Open broncode** zodat onafhankelijke derden de implementatie kunnen toetsen en zo nodig de resultaten kunnen reproduceren.

Deze mitigaties elimineren de bias-risico's niet, maar maken ze controleerbaar — en daarmee falsifieerbaar in de zin die past bij DBR-traditie.

## 15.2 De inzet van AI in dit onderzoek

Een tweede te reflecteren kwestie is de inzet van AI bij zowel het ontwerp als de rapportage van dit onderzoek. Voor de geloofwaardigheid van het rapport — zeker een rapport over AI-tools voor docenten — is expliciete verantwoording op zijn plaats.

### 15.2.1 AI bij het ontwerp

Bij de ontwikkeling van het dashboard is gebruik gemaakt van Claude Code (Anthropic) als programmeerassistent. Concreet betekent dit:

- **Code-suggesties en -implementaties** zijn vaak voorgesteld door Claude Code, maar door de auteur in alle gevallen kritisch beoordeeld, getest en — waar nodig — aangepast voordat ze in de codebase werden opgenomen.
- **Architectuurkeuzes** zijn door de auteur genomen, niet door Claude. Voorbeelden: keuze voor PWA boven native app, keuze voor geen npm-dependencies, keuze voor Claude Haiku boven Sonnet, keuze voor gelaagde filtering met regex en LLM.
- **Tester-feedback-interpretatie** en de daaruit volgende ontwerpkeuzes zijn door de auteur gemaakt, met Claude Code als sparringpartner over implementatie-opties.

Dit gebruik valt binnen de richtlijnen die in *Zeker Toetsen in AI-tijden* (Coene, 2025) zijn geformuleerd voor verantwoorde AI-inzet: AI als hulpmiddel waarvan het gebruik transparant is verantwoord, niet als zelfstandige uitvoerder van denkwerk.

### 15.2.2 AI bij de rapportage

Bij de schriftelijke rapportage van dit onderzoek is eveneens AI ingezet. Concrete vormen:

- **Eerste schrijfconcepten** van hoofdstukken zijn vaak door Claude opgesteld op basis van expliciete instructies van de auteur over inhoud, structuur, toon en bronverwijzingen. Claude functioneert hier als co-auteur bij eerste opzet.
- **Theoretisch kader-onderbouwing**: bronnen die in *AI in het hoger onderwijs* (Coene, 2026) waren gebruikt zijn door Claude opgenomen op basis van de bronnenlijst van dat document. Aanvullende bronnen (DBR, TAM, prompt-engineering) zijn door Claude voorgesteld en door de auteur kritisch beoordeeld op gebruikswaarde — zie het bronnen-werkbestand voor de status per bron.
- **Methodologische verantwoording**: de structuur van methodologie- en discussiehoofdstukken is door Claude voorgesteld op basis van DBR-conventies; de inhoudelijke keuzes zijn door de auteur gevalideerd.

Vier strikte beperkingen zijn aan de AI-inzet opgelegd:

1. **Inhoudelijke claims worden door de auteur geverifieerd** voordat ze definitief worden opgenomen.
2. **Bronvermeldingen worden in een afsluitende fase systematisch geverifieerd** op juistheid (bestaat de bron, klopt het jaartal, is de bewering die eraan wordt toegeschreven correct in de oorspronkelijke bron). Het bronnen-werkbestand functioneert als planningsinstrument hiervoor.
3. **De auteur draagt eindverantwoordelijkheid** voor alle uitspraken in dit rapport, ongeacht of zij zijn opgesteld via AI-assistentie of niet.
4. **Tester-citaten en data zijn niet door AI gegenereerd**; deze komen uit feitelijke mailwisselingen, gebruiksdata en feedback-formulieren.

### 15.2.3 Methodische reflectie

Deze inzet roept een methodische vraag op die in toenemende mate aan de orde komt in academisch onderzoek: *hoe verhoudt AI-ondersteuning bij onderzoeksrapportage zich tot academische integriteit?* Op het moment van schrijven (mei 2026) bestaan hierover nog geen breed gedragen academische conventies; verschillende tijdschriften hanteren verschillende richtlijnen, die in versneld tempo worden bijgesteld.

Dit rapport hanteert daarom de richtlijnen uit Coene (2025) als interne standaard: transparant verantwoorden welke tools zijn gebruikt, voor welk doel, met welke prompts, en hoe de output is geïntegreerd. In de bijlagen (G2) is het essay *AI in het hoger onderwijs* (Coene, 2026) opgenomen waarin deze positionering breder is uitgewerkt — niet alleen voor onderwijs, maar ook voor onderzoekspraktijk.

De auteur erkent dat deze positionering vooruitloopt op consensus binnen het bredere onderzoeksveld, en hoopt dat de transparante verantwoording in dit hoofdstuk bijdraagt aan de bredere discussie over verantwoorde AI-inzet in academisch werk.

## 15.3 Wat ik anders zou doen

Bij terugblik op de cycli zijn drie keuzes die de auteur achteraf anders had gemaakt, en die als leerpunten relevant zijn voor toekomstige DBR-projecten in vergelijkbare contexten.

### 15.3.1 Vroegere platform-restrictie-test

De Hanze-Outlook-blokkade van `mailto:`-deeplinks is in cyclus 2 ontdekt — relatief vroeg, maar pas na implementatie van een e-mail digest-knop die om die reden moest worden verwijderd. Een platform-restrictie-test in cyclus 1, voorafgaand aan implementatie, had deze omweg kunnen voorkomen. Voor toekomstige DBR-projecten in organisatorische contexten met IT-restricties is een expliciete *platform-compatibiliteit-cyclus* aan het begin van het traject aan te bevelen.

### 15.3.2 Eerder gestructureerde dataverzameling

De cycli 1-4 hebben overwegend kwalitatieve dataverzameling toegepast (open feedback, code-review, observatie). Pas in cyclus 5 wordt een gestructureerd kwantitatief feedback-instrument geïntroduceerd. Achteraf bezien had een lichte vorm van gebruiksdata-verzameling al vanaf cyclus 1 kunnen plaatsvinden — bijvoorbeeld geaggregeerde page-view-tellingen — om het natuurlijke gebruikspatroon van de tool over de tijd te kunnen reconstrueren. In de huidige opzet ontbreekt deze longitudinale data over de eerste vier cycli.

### 15.3.3 Bredere theoretische verankering vóór de eerste cyclus

Het scaffold-perspectief is gedurende de cycli 1-4 impliciet ontwerpend toegepast en pas in cyclus 4 expliciet als rode draad geformuleerd. Een eerdere expliciete theoretische verankering — bijvoorbeeld door een literatuurstudie vóór cyclus 1 — had het ontwerp wellicht scherper gepositioneerd vanaf het begin. Tegelijk is in DBR de *emergente theoretische opbrengst* een geaccepteerd kenmerk van de methode (McKenney & Reeves, 2018, hoofdstuk 8) en is het niet onmogelijk dat een te vroege theoretische verankering juist had geleid tot een minder open ontwerpproces. De optimale balans tussen *theory-driven* en *emergent* ontwerp blijft een open methodologische kwestie.

## 15.4 Persoonlijke ontwikkeling

Tot slot een persoonlijke noot. Het onderzoek heeft de auteur op drie terreinen verder gebracht.

Ten eerste in **AI-geletterdheid**. Het dagelijkse werken met Claude Code in zowel ontwerp als rapportage heeft een veel directer gevoel opgeleverd voor wat AI wel en niet betrouwbaar doet — een vorm van impliciete leerwinst die volledig in lijn is met de hypothese die in hoofdstuk 12.3.3 over de tool zelf is geformuleerd. Het scaffold-principe is voor de auteur in eigen werk bevestigd geworden.

Ten tweede in **ontwerpvaardigheid**. Het iteratieve karakter van DBR — denken-doen-evalueren in korte cycli — heeft een ander soort ontwerpdiscipline opgeleverd dan klassieke watervalprojecten zouden hebben gedaan. De combinatie van software-engineering-snelheid (commits per uur) en academische rigueur (per cyclus expliciete verantwoording) is een werkwijze die voorbij dit onderzoek bruikbaar blijft.

Ten derde in **academische schrijvenshouding**. De keuze om AI-assistentie expliciet te benoemen, de drievoudige rol te exponeren, en bias-risico's te erkennen voelt comfortabeler dan de impliciete autoriteits-claim die in veel academisch werk gebruikelijk is. De academische gemeenschap zal de komende jaren consensus moeten vinden over hoe AI-assistentie in onderzoek verantwoord wordt; dit rapport is een bijdrage aan die discussie.

\newpage


# 16. Referenties

> **Status v0.1:** deze referentielijst is opgesteld op basis van de bronnen die in de hoofdstukken 1 t/m 14 zijn aangehaald. Voor een definitieve versie (v1.0) wordt elke referentie systematisch gecontroleerd op (a) bestaan en juiste citaat-format en (b) of de in dit rapport gemaakte beweringen daadwerkelijk in de oorspronkelijke bron staan. Het bronnen-werkbestand (`bronnen-werkbestand.md`) functioneert als planningsinstrument voor deze controle. Items met aandachtspunten zijn daar gemarkeerd met `VERIFIEREN` of `CONTROLEREN`.

Citatie-stijl: APA 7e editie.


Al-Ajlan, A., Alotaibi, F., & Alshahrani, A. (2024). AI in higher education: A systematic literature review. *Frontiers in Education, 9*, Article 1391485. https://doi.org/10.3389/feduc.2024.1391485

Anderson, T., & Shattuck, J. (2012). Design-based research: A decade of progress in education research? *Educational Researcher, 41*(1), 16-25.

Ayan, M., Demir, A., & Yildiz, E. (2025). Exploring artificial intelligence literacy and engagement in higher education. *International Journal of Information and Education Technology*. https://doi.org/10.18178/ijiet

Bawden, D., & Robinson, L. (2009). The dark side of information: Overload, anxiety and other paradoxes and pathologies. *Journal of Information Science, 35*(2), 180-191.

Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. *Qualitative Research in Psychology, 3*(2), 77-101.

Brooks, F. P. (1995). *The mythical man-month: Essays on software engineering* (Anniversary edition). Addison-Wesley.

Brown, A. L. (1992). Design experiments: Theoretical and methodological challenges in creating complex interventions in classroom settings. *Journal of the Learning Sciences, 2*(2), 141-178.

Centraal Bureau voor de Statistiek. (2025). *AI-monitor 2024*. https://www.cbs.nl/nl-nl/longread/aanvullende-statistische-diensten/2025/ai-monitor-2024

Chen, L., Wang, X., & Liu, Y. (2025). The cognitive impact of ChatGPT in higher education: A systematic review of critical and creative thinking outcomes. *Computers & Education: Artificial Intelligence*. https://doi.org/10.1016/j.caeai.2026.100330

Coene, L. (2024). *Studiehandleiding Project Innovatiemanagement en Design Thinking/onderzoek* (versie 2024-2025). Hanzehogeschool Groningen, opleiding ORM (opleidingsdocument).

Coene, L. (2025). *Zeker Toetsen in AI-tijden: Handleiding voor vakverantwoordelijken binnen de opleiding ORM*. Hanzehogeschool Groningen.

Coene, L. (2026a). *AI in het hoger onderwijs: Kansen, risico's en didactische randvoorwaarden*. Hanzehogeschool Groningen, opleiding ORM (intern document, breed gedeeld binnen Hanze + één keer extern verspreid).

Coene, L. (2026b). *AI als leercoach: Claude Enterprise in het onderwijs*. Hanzehogeschool Groningen, opleiding ORM (intern document, april 2026).

Collins, A. (1992). Toward a design science of education. In E. Scanlon & T. O'Shea (Eds.), *New directions in educational technology* (pp. 15-22). Springer-Verlag.

Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly, 13*(3), 319-340.

Dekker, I. (2026). *De studeercrisis: Werk aan de fundering van hoger onderwijs* [presentatie]. Studiemiddag 'Studeercrisis en het studentenbrein', BMC, Ede, 4 maart 2026. Hogeschool van Amsterdam.

Dekker, I., & Doornenbal, J.-W. (2025). *Meer aanwezig, hoger cijfer: onderzoek naar aanwezigheid en studiesucces aan de HvA*. https://hvana.nl/nieuws/meer-aanwezig-hoger-cijfer-waarom-je-als-student-juist-wel-naar-de-les-moet-komen

Delta. (2025). How AI radically changed the job of teachers: 'Students are no longer able to think analytically'. *TU Delft Delta*. https://delta.tudelft.nl/en/article/how-ai-radically-changed-the-job-of-teachers

Eppler, M. J., & Mengis, J. (2004). The concept of information overload: A review of literature from organization science, accounting, marketing, MIS, and related disciplines. *The Information Society, 20*(5), 325-344.

Fowler, M. (2018). *Refactoring: Improving the design of existing code* (2nd ed.). Addison-Wesley.

Granić, A., & Marangunić, N. (2019). Technology acceptance model in educational context: A systematic literature review. *British Journal of Educational Technology, 50*(5), 2572-2593.

Guo, Y., et al. (2025). The effect of ChatGPT on students' learning performance, learning perception, and higher-order thinking: Insights from a meta-analysis. *Humanities and Social Sciences Communications, 12*, Article 604. https://doi.org/10.1057/s41599-025-04787-y

Hartson, H. R., Andre, T. S., & Williges, R. C. (2003). Criteria for evaluating usability evaluation methods. *International Journal of Human-Computer Interaction, 15*(1), 145-181.

Hornstra, L. (2026). *Studeercrisis: Hoe creëer je een motiverende leeromgeving?* [presentatie]. Studiemiddag 'Studeercrisis en het studentenbrein', BMC, Ede, 4 maart 2026. Universiteit Utrecht, afdeling Educatie.

Houben, G.-J. (2020). *AI gaat de hele universiteit raken*. TU Delft. https://www.tudelft.nl/en/innovatie-impact/home-of-innovation/special/ai-will-have-an-impact-on-the-whole-university

Hunt, A., & Thomas, D. (1999). *The pragmatic programmer: From journeyman to master*. Addison-Wesley.

Jarodzka, H. (2023). *Een rijke en ethisch verantwoorde onderwijsomgeving mét ChatGPT*. Open Universiteit. https://www.ou.nl/-/een-rijke-en-ethisch-verantwoorde-onderwijsomgeving-met-chatgpt

Jolles, J. (2026). *De lerende student: werk in uitvoering* [presentatie]. Studiemiddag 'Studeercrisis en het studentenbrein', BMC, Ede, 4 maart 2026. PraktijkNeuroPsy & Vrije Universiteit Amsterdam.

Karaman, M., & Bahar, M. (2025). Mapping the scaffolding of metacognition and learning by AI tools in STEM classrooms: A bibliometric–systematic review approach (2005–2025). *Brain Sciences, 13*(11), 148. https://doi.org/10.3390/brainsci13110148

Koenders, L. (2024). *Wat is de invloed van AI op het leren van studenten?* Universiteit Utrecht, Onderwijsadvies & Training. https://www.uu.nl/onderwijs/onderwijsadvies-training/kennisdossiers/themadossier-generatieve-ai-in-het-onderwijs

Kosmyna, N., et al. (2025). *Your brain on ChatGPT: Accumulation of cognitive debt when using an AI assistant for essay writing task*. arXiv. https://arxiv.org/abs/2506.08872

Lincoln, Y. S., & Guba, E. G. (1985). *Naturalistic inquiry*. Sage Publications.

Liu, P., Yuan, W., Fu, J., Jiang, Z., Hayashi, H., & Neubig, G. (2024). Pre-train, prompt, and predict: A systematic survey of prompting methods in natural language processing. *ACM Computing Surveys, 55*(9), 1-35.

Long, D., & Magerko, B. (2020). What is AI literacy? Competencies and design considerations. *Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems*, 1-16.

Ma, B., et al. (2025). *Scaffolding metacognition in programming education: Understanding student–AI interactions and design implications*. arXiv. https://arxiv.org/abs/2511.04144

Manning, C. D., Raghavan, P., & Schütze, H. (2008). *Introduction to information retrieval*. Cambridge University Press.

Marzano, R. J. (2007). *The art and science of teaching: A comprehensive framework for effective instruction*. ASCD.

McKenney, S., & Reeves, T. C. (2018). *Conducting educational design research* (2nd ed.). Routledge.

Nationale Onderwijsgids. (2026). *Hoger onderwijs ziet dalende opkomst en toenemend AI-gebruik: experts spreken van 'studeercrisis'*. https://www.nationaleonderwijsgids.nl/hbo/hoger-onderwijs-ziet-dalende-opkomst-en-toenemend-ai-gebruik-experts-spreken-van-studeercrisis/

Ng, D. T. K., Leung, J. K. L., Chu, K. W. S., & Qiao, M. S. (2021). AI literacy: Definition, teaching, evaluation and ethical issues. *Proceedings of the Association for Information Science and Technology, 58*(1), 504-509.

Nielsen, J. (1994). Heuristic evaluation. In J. Nielsen & R. L. Mack (Eds.), *Usability inspection methods*. John Wiley & Sons.

Nielsen, J., & Molich, R. (1990). Heuristic evaluation of user interfaces. *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems*, 249-256.

Norman, D. A. (2013). *The design of everyday things* (Revised and expanded edition). Basic Books.

Plomp, T. (2013). Educational design research: An introduction. In T. Plomp & N. Nieveen (Eds.), *Educational design research – Part A: An introduction* (pp. 11-50). SLO.

Roberts, S. T. (2019). *Behind the screen: Content moderation in the shadows of social media*. Yale University Press.

Russell, A. (2018). *Service workers and the application shell pattern* [Web essay]. https://infrequently.org

Sahoo, P., et al. (2024). *A systematic survey of prompt engineering in large language models: Techniques and applications*. arXiv. https://arxiv.org/abs/2402.07927

Scherer, R., Siddiq, F., & Tondeur, J. (2019). The technology acceptance model (TAM): A meta-analytic structural equation modeling approach to explaining teachers' adoption of digital technology in education. *Computers & Education, 128*, 13-35.

Schep, M., et al. (2025). *Generatieve AI in hoger onderwijs: werkveld, docenten en studenten*. Hanzehogeschool Groningen / HBO Kennisbank. https://hbo-kennisbank.nl/details/hanzepure:oai:research.hanze.nl:publications/d071a991-4018-4ad7-b93d-c214558c7006

Schön, D. A. (1983). *The reflective practitioner: How professionals think in action*. Basic Books.

Simon, H. A. (1971). Designing organizations for an information-rich world. In M. Greenberger (Ed.), *Computers, communications, and the public interest* (pp. 37-72). Johns Hopkins University Press.

Stuvia. (2025). Studenten halen steeds vaker vakken met hulp van AI en docent weet van niets. *Nationale Onderwijsgids*. https://www.nationaleonderwijsgids.nl/hbo/nieuws/73164-studenten-halen-steeds-vaker-vakken-met-hulp-van-ai-en-docent-weet-van-niets.html

Sullivan, M., Green, H., & Patel, R. (2025). Assessment and learning outcomes for generative AI in higher education. *Studies in Higher Education*. https://doi.org/10.1080/03075079.2025

UNESCO. (2024). *AI competency framework for teachers* (F. Miao & M. Cukurova). United Nations Educational, Scientific and Cultural Organization. https://unesdoc.unesco.org/ark:/48223/pf0000391104

Universiteit van Amsterdam & Vrije Universiteit Amsterdam. (2025). *Ontdek AIMES: jouw gids naar AI-vaardigheden in het hoger onderwijs*. https://www.uva.nl/content/nieuws/nieuwsberichten/2025/1/ontdek-aimes-gids-naar-ai-vaardigheden-in-het-hoger-onderwijs.html

Venkatesh, V., & Bala, H. (2008). Technology Acceptance Model 3 and a research agenda on interventions. *Decision Sciences, 39*(2), 273-315.

Venkatesh, V., & Davis, F. D. (2000). A theoretical extension of the technology acceptance model: Four longitudinal field studies. *Management Science, 46*(2), 186-204.

Venkatesh, V., Morris, M. G., Davis, G. B., & Davis, F. D. (2003). User acceptance of information technology: Toward a unified theory. *MIS Quarterly, 27*(3), 425-478.

Venkatesh, V., Thong, J. Y. L., & Xu, X. (2012). Consumer acceptance and use of information technology: Extending the unified theory of acceptance and use of technology. *MIS Quarterly, 36*(1), 157-178.

Wang, F., & Hannafin, M. J. (2005). Design-based research and technology-enhanced learning environments. *Educational Technology Research and Development, 53*(4), 5-23.

Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain-of-thought prompting elicits reasoning in large language models. *Advances in Neural Information Processing Systems, 35*, 24824-24837.

Wharton, C., Rieman, J., Lewis, C., & Polson, P. (1994). The cognitive walkthrough method: A practitioner's guide. In J. Nielsen & R. L. Mack (Eds.), *Usability inspection methods* (pp. 105-140). John Wiley & Sons.

\newpage


# 17. Bijlagen

> **Status v0.2:** dit hoofdstuk geeft een overzicht van de geplande bijlagen, hun status en hun bron. Voor v1.0 worden ontbrekende bijlagen aangevuld of verzameld.

| Bijlage | Inhoud | Status v0.2 | Bron |
|---|---|---|---|
| A | TAM-vragenlijst voor cyclus 5b feedback-formulier | Gepland — opgesteld in juli 2026 | Wordt opgenomen in v1.0 |
| B | Tester-feedback verbatim (geanonimiseerd) | Gedeeltelijk beschikbaar (Ties' twee mails uit cyclus 0 en 1) | Mail-archief auteur |
| C | Voorbeelden van ontwerpiteraties (screenshots, code-snippets) | Gedeeltelijk beschikbaar | GitHub-repository en projectlog |
| D | Google Form-vragen en antwoordopties | Gepland — opgesteld in juli 2026 | Wordt opgenomen in v1.0 |
| E | Verzamelde gebruiksdata (geaggregeerd, geen persoonsgegevens) | Gepland — beschikbaar na augustus 2026 | Server-logging, te ontwerpen aanvulling op `server.js` |
| F | Verstuurde mailcommunicatie (uitnodigingen, brede uitrol) | Beschikbaar | Mail-archief auteur (zie projectlog) |
| G1 | Handleiding *Zeker Toetsen in AI-tijden* (Coene, 2025) | Beschikbaar | Eigen werk auteur, gedeeld binnen Hanze ORM |
| G2 | Essay *AI in het hoger onderwijs: Kansen, risico's en didactische randvoorwaarden* (Coene, 2026a) | Beschikbaar | Eigen werk auteur, breed gedeeld binnen Hanze + één keer extern verspreid |
| G3 | Notitie *AI als leercoach: Claude Enterprise in het onderwijs* (Coene, 2026b) | Beschikbaar | Eigen werk auteur, intern document ORM (april 2026) |
| G4 | Studiehandleiding *Project Innovatiemanagement en Design Thinking/onderzoek* (Coene, 2024) | Beschikbaar | Eigen werk auteur, opleidingsdocument ORM 2024-2025 |

## A. TAM-vragenlijst (gepland)

In te vullen voor v1.0. Voor cyclus 5b wordt een Google Form ingericht met circa 4-5 korte vragen, gebaseerd op het TAM-kader (Davis, 1989). Voorgestelde vragenstructuur is opgenomen in hoofdstuk 10 §10.4.2.

Voor een latere uitbreiding kan het Form worden aangevuld met klassieke TAM-Likert-items voor PU en PEOU, zodra een grotere N gebruikers beschikbaar is voor structural equation modelling-analyses zoals beschreven door Scherer, Siddiq en Tondeur (2019).

## B. Tester-feedback verbatim

Reeds beschikbaar (twee mails van Ties de Boer):

**B.1 Eerste reactie (cyclus 0, april 2026, op Google AI Studio-versie):**
> *"Meteen even ingedoken, leuk idee om zo op de hoogte te blijven! Ik heb bij de samenvattingen doorgeklikt naar het originele artikel en krijg bij geen één van de samenvattingen dit voor elkaar (allemaal 404 errors). Als die koppeling werkt is dit heel interessant om te delen met collega's om op de hoogte te blijven van al het nieuws!"*

**B.2 Tweede reactie (cyclus 1, 15 april 2026, op Claude Code-versie):**
> *"Interessant platform en de koppeling met de artikelen lijkt goed te staan. Ik kom bij iedere samenvatting makkelijk bij het achterliggende artikel. Ik twijfel nog een beetje aan de selectie die de website maakt bij de verschillende categorieën. Zo zie ik bij 'AI in het onderwijs' ook wel nieuws staan over ontwikkelingen die niet aansluiten bij het onderwijs."*

In te vullen voor v1.0:
- Open mail-feedback van bredere tester-ronde cyclus 1 (eind april 2026)
- Concrete tester-feedback uit cyclus 3 ("ORM-tab is te breed")
- Spontane mail-feedback uit cyclus 5a (mei-juni 2026)
- Open antwoorden uit Google Form van cyclus 5b (juli-augustus 2026)

## C. Voorbeelden van ontwerpiteraties

Beschikbaar in:
- **GitHub-repository**: alle commits met datum en beschrijving (`https://github.com/lexcoene001-cpu/AI-Nieuws`)
- **Projectlog** (`docs/projectlog.md`) — chronologische beschrijving van alle wijzigingen

Voor v1.0: selectie van representatieve commits per cyclus, met screenshots vóór/na waar relevant.

## D. Google Form-vragen (gepland)

In te vullen voor v1.0. Volledige tekst van het Google Form dat in juli 2026 wordt gelanceerd, inclusief antwoordopties, validatieregels en analyseplan.

## E. Verzamelde gebruiksdata (gepland)

In te vullen voor v1.0. Vereist een lichte uitbreiding van `server.js` met geaggregeerde page-view-tellingen per tab, per dag. Deze logging registreert geen IP-adressen of identificeerbare paths, conform de ethische overwegingen in hoofdstuk 5 §5.5.

Te rapporteren in v1.0:
- Aantal unieke bezoeken per week (geaggregeerd)
- Frequentieverdeling per tab
- Retentiepatroon (hoeveel bezoekers komen meer dan eens terug)

## F. Verstuurde mailcommunicatie

Beschikbaar in mail-archief auteur. Geanonimiseerde versie kan voor v1.0 worden opgenomen indien gewenst voor externe publicatie. Concreet:
- Eerste tester-uitnodiging via mail aan Ties, Previen, Ellis (9 april 2026) voor de Google AI Studio-versie
- Brede tester-uitnodiging (29 april 2026) aan ORM-collega's voor Claude Code-versie
- Brede uitrol-mail aan vakverantwoordelijken (10 mei 2026), gecombineerd met *Zeker Toetsen in AI-tijden*
- Geplande tweede mail (juli/augustus 2026): introductie feedback-knop

## G1. Handleiding *Zeker Toetsen in AI-tijden* (Coene, 2025)

Beschikbaar als separate PDF/Word. Deze handleiding is een paralleldocument binnen het AI-portfolio van de auteur en wordt in dit rapport meermaals gerefereerd in verband met:
- AI-verantwoordingsrichtlijnen voor verantwoorde AI-inzet (zie hoofdstuk 15 §15.2)
- Gecombineerde uitrol met de tool (zie hoofdstuk 11 §11.3.1)
- Toetsing-component van bredere AI-werk binnen ORM (zie hoofdstuk 14 §14.2)

Voor extern publiceerbare versie van het rapport: opnemen na bevestiging dat publicatierechten dit toestaan.

## G2. Essay *AI in het hoger onderwijs* (Coene, 2026a)

Beschikbaar als separate PDF. Dit essay is binnen Hanze breed gedeeld en is één keer extern verspreid. Het bevat het bredere theoretische kader waarop dit onderzoek voortbouwt, met name:
- De studeercrisis-context (zie hoofdstuk 2 §2.2)
- Het scaffold-perspectief op AI in het hoger onderwijs (zie hoofdstuk 3 §3.3.2)
- Didactische randvoorwaarden voor verantwoorde AI-integratie

Bronnenlijst van dit essay is gedeeltelijk overgenomen in hoofdstuk 16 (referenties) van dit rapport.

## G3. Notitie *AI als leercoach: Claude Enterprise in het onderwijs* (Coene, 2026b)

Beschikbaar als separate PDF/Word. Intern document ORM (april 2026) over Claude Enterprise als leercoach voor studenten. De notitie operationaliseert het scaffold-principe op studentniveau ("AI als coach, niet als antwoordmachine") via Claude Enterprise's *Learning mode*, en complementeert daarmee de docentgerichte invulling die in dit onderzoek via ORM AI Nieuws wordt ontwikkeld. Wordt in dit rapport gerefereerd in:
- Theoretisch kader scaffold-perspectief (zie hoofdstuk 3 §3.3.2)
- Drieluik AI-portfolio in resultatenhoofdstuk (zie hoofdstuk 12 §12.3)
- Reflectie op viervoudige rol van auteur (zie hoofdstuk 15 §15.1)

## G4. Studiehandleiding *Project Innovatiemanagement en Design Thinking/onderzoek* (Coene, 2024)

Beschikbaar als separate PDF/Word. Opleidingsdocument ORM voor het studiejaar 2024-2025. Door de auteur ontwikkelde module waarin Design Thinking als ontwerpgerichte methode op studentniveau wordt onderwezen. Vormt de empirische onderbouwing voor de stelling in hoofdstuk 5 §5.1.1 over methodologische continuïteit: de auteur is met design-based werkwijzen vertrouwd via de eigen onderwijspraktijk, wat de keuze voor DBR in dit onderzoek niet ad-hoc maar voortbouwend maakt. Wordt in dit rapport gerefereerd in:
- Methodologie — methodologische continuïteit (zie hoofdstuk 5 §5.1.1)
- Reflectie — viervoudige rol van auteur (zie hoofdstuk 15 §15.1)

\newpage

