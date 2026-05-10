---
title: "Hoofdstuk 2 — Inleiding"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.1-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

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

Het onderzoek is opgezet als een DBR-traject met vijf cycli van april 2026 tot — naar verwachting — september 2026. De eerste vier cycli (april–mei 2026) zijn afgerond op het moment van schrijven; de vijfde cyclus (brede uitrol naar vakverantwoordelijken met gestructureerde feedback) is in uitvoering. Voor de evaluatie van adoptie en daadwerkelijk gebruik wordt het Technology Acceptance Model (TAM; Davis, 1989; Granić & Marangunić, 2019) als kader gebruikt — zowel kwalitatief in de ontwerpfase (cyclus 2) als kwantitatief in de implementatiefase (cyclus 5b).

Het onderzoek heeft daarmee twee samenhangende doelen:

1. **Een concreet werkend artefact**: het *ORM AI Nieuws*-dashboard, draaiend op het Render-platform, beschikbaar voor alle vakverantwoordelijken en docenten binnen ORM.
2. **Generaliseerbare ontwerpkennis**: een set ontwerpprincipes die overdraagbaar zijn naar vergelijkbare onderwijscontexten waarin docenten worden ondersteund in hun AI-geletterdheid.

## 2.5 Doelpubliek en relevantie

Dit rapport richt zich op twee doelgroepen.

Ten eerste op het **lectoraat van de Hanzehogeschool Groningen** (lector: Harald Pol). Voor het lectoraat biedt het rapport een uitgewerkt voorbeeld van hoe een docent-tool voor AI-geletterdheid binnen één opleiding kan worden ontwikkeld, met inzichten die mogelijk ook voor andere Hanze-opleidingen relevant zijn.

Ten tweede op een **bredere academische gemeenschap** via een nog te bepalen extern tijdschrift. Voor deze doelgroep is de bijdrage drieledig: (a) een methodologisch voorbeeld van DBR in een hbo-context met expliciete inzet van TAM als evaluatiekader, (b) een transpositie van het *AI als scaffold*-principe van student-context naar docent-context, en (c) een set ontwerpprincipes voor docent-AI-tools die ook in andere instellingen toepasbaar zijn.

De maatschappelijke relevantie is direct: in een tijd waarin AI snel verandert wat docenten moeten weten en kunnen, draagt elk concreet voorbeeld van een werkbare scaffold-georiënteerde tool bij aan de bredere capaciteit van het hoger onderwijs om met deze ontwikkelingen om te gaan.

## 2.6 Opbouw van het rapport

Het rapport volgt de standaardstructuur van een DBR-onderzoeksverslag. Hoofdstuk 3 schetst het theoretisch kader (DBR, TAM, AI als scaffold, curatie en information overload). Hoofdstuk 4 formuleert de onderzoeksvraag en subvragen. Hoofdstuk 5 verantwoordt de methodologie. De hoofdstukken 6 t/m 10 beschrijven de vijf ontwerpcycli, elk met probleemanalyse, ontwerpinterventie, resultaten en cyclus-specifieke reflectie. Hoofdstuk 11 synthetiseert de bevindingen tot meetbare resultaten, kwalitatieve patronen en negen generaliseerbare ontwerpprincipes. Hoofdstuk 12 plaatst de bevindingen in breder perspectief (discussie); hoofdstuk 13 trekt conclusies en formuleert aanbevelingen. Hoofdstuk 14 bevat een methodologische en persoonlijke reflectie. De referentielijst (hoofdstuk 15) en bijlagen (hoofdstuk 16) sluiten het rapport af.

Lezers met beperkte tijd kunnen na deze inleiding direct doorgaan naar hoofdstuk 13 voor de aanbevelingen, en teruglezen waar onderbouwing gewenst is.
