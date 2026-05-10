---
title: "Hoofdstuk 5 — Methodologie"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.1-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

# 5. Methodologie

## 5.1 Onderzoeksopzet: DBR met vijf cycli

Het onderzoek is opgezet als een Design-Based Research-traject (DBR; McKenney & Reeves, 2018; Plomp, 2013) met vijf opeenvolgende ontwerpcycli van april 2026 tot — naar verwachting — september 2026. Elke cyclus omvat een ontwerp- of herontwerp-interventie, gevolgd door een evaluatie waarvan de bevindingen direct worden teruggekoppeld in de volgende cyclus.

| Cyclus | Periode | Hoofd-interventie | Evaluatie |
|---|---|---|---|
| 1 | 15-29 april 2026 | Eerste prototype | Open kwalitatieve feedback |
| 2 | 1 mei 2026 | TAM-georiënteerde code-review | Inspectiebevindingen → 7 fixes, 3 verwijderingen |
| 3 | 8 mei 2026 | Filter-aanscherping op tester-feedback | Vergelijking output-metrics (NL/INTL, relevantie) |
| 4 | 9-10 mei 2026 | Cross-tab consistentie + LLM-instructies | Vergelijking output-metrics + UI-inspectie |
| 5 | mei-augustus 2026 | Brede uitrol + gestructureerd feedback-instrument | Spontane feedback (5a) + Google Form (5b) + gebruiksdata |

De keuze voor vijf cycli sluit aan bij de DBR-aanbeveling om voldoende iteraties te doen om convergentie naar een werkbaar ontwerp te bereiken, zonder zo veel cycli dat de focus van het onderzoek verwatert (McKenney & Reeves, 2018, hoofdstuk 7). De eerste vier cycli vonden plaats binnen vier weken — typisch voor de prototyping-fase; de vijfde cyclus beslaat een langere periode omdat implementatie-feedback tijd nodig heeft om te ontstaan.

## 5.2 Setting en participanten

### 5.2.1 Setting

Het onderzoek vindt plaats binnen de opleiding Ondernemen en Retail Management (ORM) van de Hanzehogeschool Groningen. ORM is een vierjarige hbo-opleiding (bachelor of business administration) gericht op de domeinen retail, e-commerce, ondernemerschap en marketing. De opleiding telt circa 600 studenten, een tiental vakverantwoordelijken en een wijdere groep van rond 30 docenten.

De keuze voor één opleiding als onderzoekssetting is bewust en sluit aan bij DBR-traditie van diepgaande studie binnen één natuurlijke context (Brown, 1992). Het beperkt de externe validiteit, maar maakt rijke kwalitatieve dataverzameling en directe terugkoppeling mogelijk.

### 5.2.2 Participanten

Drie groepen participanten zijn betrokken in verschillende cycli:

- **Auteur als ontwerper-onderzoeker**: Lex Coene, docent ORM en verantwoordelijke voor AI-beleid van de opleiding. In cycli 1-4 functioneert de auteur als ontwerper, ontwikkelaar en initiële evaluator.
- **Beta-testers**: twee collega-docenten binnen ORM (Ties de Boer en Nico [achternaam te anonimiseren]), uitgenodigd voor de eerste tester-ronde (cyclus 1) en de bredere ronde (cyclus 3 en 4).
- **Bredere groep vakverantwoordelijken** (cyclus 5): alle vakverantwoordelijken binnen de opleiding ORM, uitgenodigd via een gecombineerde mail op 10 mei 2026.

In het rapport worden tester-bijdragen waar zinvol geanonimiseerd; expliciete naamsvermelding gebeurt alleen met instemming van de betrokkene.

## 5.3 Dataverzameling per cyclus

Per cyclus zijn verschillende soorten data verzameld, met combinaties van kwalitatieve en kwantitatieve methoden. Tabel 5.3 vat samen wat per cyclus is verzameld.

| Cyclus | Type data | Methode | Doel |
|---|---|---|---|
| 1 | Kwalitatief: tester-feedback via mail/gesprek | Open uitnodiging tot reageren | Brede signaal-detectie |
| 2 | Kwalitatief: bevindingen TAM-simulatie | Code- en interface-review met PU/PEOU-vragen | Systematische usability-evaluatie |
| 3 | Kwalitatief: gerichte tester-feedback ("te breed") | Mail / informeel gesprek | Inhoudelijke kwaliteit van curatie |
| 3-4 | Kwantitatief: output-metrics (aantallen, NL/INTL, pool-grootte) | Server-logging + handmatige verificatie | Effect van filterinterventies |
| 5a | Kwalitatief: spontane mail-feedback | Open uitnodiging na uitrol | Bredere gebruikssignalen |
| 5a | Kwantitatief: gebruiksdata (page views, fetch-counts) | *Te ontwikkelen lichte server-logging* | Werkelijk gebruikspatroon |
| 5b | Mixed: Google Form responses | Vier gesloten + één open vraag | TAM-georiënteerde feedback met N-respons |
| 5b | Optioneel: follow-up gesprekken | Member checking | Diepte-interpretatie |

### 5.3.1 TAM-simulatie als methodisch instrument (cyclus 2)

In cyclus 2 is een methode toegepast die in dit onderzoek wordt aangeduid als *TAM-simulatie*: een systematische code- en interface-review waarbij elk UI-element wordt beoordeeld op de twee TAM-dimensies *perceived usefulness* en *perceived ease of use* (Davis, 1989). De methode is methodologisch verwant aan heuristic evaluation (Nielsen, 1994; Nielsen & Molich, 1990) en cognitive walkthrough (Wharton et al., 1994), maar specifiek georiënteerd op het TAM-kader om consistentie met de latere kwantitatieve TAM-evaluatie (cyclus 5b) te waarborgen.

De methode is uitgevoerd door de auteur. Deze keuze is een methodologische beperking (zie reflectie in hoofdstuk 14): inspecties door de ontwerper zelf zijn vatbaar voor blinde vlekken. De mitigatie is drieledig:

1. Bevindingen zijn vastgelegd in Git-commits — verifieerbaar door derden.
2. Gevonden issues zijn vergeleken met de feitelijke gebruikerservaring in opvolgende cycli; geen van de in cyclus 2 gevonden issues bleek achteraf onterecht.
3. In cyclus 5b wordt door middel van een vragenlijst onafhankelijke kwantitatieve TAM-evaluatie gedaan, die de waarde van de eerdere simulatie kan toetsen of ontkrachten.

### 5.3.2 Geplande TAM-vragenlijst (cyclus 5b)

Voor cyclus 5b wordt in juli 2026 een feedback-instrument gelanceerd in de vorm van een Google Form. De voorgestelde vragenstructuur is gebaseerd op het TAM-kader (zie hoofdstuk 10 §10.4.2). In een latere cyclus kan het Form worden uitgebreid met klassieke TAM-Likert-items voor PU en PEOU, zodra een voldoende grote N gebruikers beschikbaar is voor structural equation modelling-analyses zoals beschreven door Scherer, Siddiq en Tondeur (2019).

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

Naast de cyclus-specifieke analyse wordt aan het einde van elk hoofdstuk en geconsolideerd in hoofdstuk 11 ontwerpkennis geformuleerd. Deze kennis is nadrukkelijk *theorie van middel-niveau* (Plomp, 2013): geen universele wetmatigheid, maar wel breder toepasbare principes dan de specifieke context van ORM.

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

1. **Eén opleiding als onderzoekssetting** beperkt de externe validiteit. De ontwerpkennis die in hoofdstuk 11 wordt geformuleerd, is *theorie van middel-niveau* (Plomp, 2013) en behoeft validatie in andere contexten voor bredere generalisatie.
2. **Auteur is tegelijk ontwerper, ontwikkelaar en onderzoeker** — een drievoudige rol die in DBR vrijwel onvermijdelijk is, maar wel ruimte laat voor blinde vlekken. De mitigaties via transparantie, externe peer-review en member checking zijn besproken in §5.6.
3. **Inzet van AI (Claude Code) bij zowel ontwerp als rapportage** is methodologisch te benoemen en wordt in hoofdstuk 14 (reflectie) expliciet verantwoord, in lijn met de richtlijnen uit Coene (2025).

Deze beperkingen worden niet weggewerkt maar geëxpliciteerd; ze maken integraal deel uit van de academische verantwoording.
