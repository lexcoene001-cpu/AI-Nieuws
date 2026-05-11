---
title: "Hoofdstuk 11 — Cyclus 5: Brede uitrol en gestructureerde feedback (mei-augustus 2026)"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.2-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026 (in uitvoering)"
lang: nl-NL
---

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
