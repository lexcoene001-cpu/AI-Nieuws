---
title: "Hoofdstuk 17 — Bijlagen"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.2-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

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
| G2 | Interne notitie *AI in het hoger onderwijs: Kansen, risico's en didactische randvoorwaarden* (Coene, 2026a) | Beschikbaar | Eigen werk auteur, interne notitie ORM, breed gedeeld binnen de opleiding |
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
- Brede tester-uitnodiging (29 april 2026) aan ORM-collega's voor Claude Code-versie op [https://ai-nieuws.onrender.com/](https://ai-nieuws.onrender.com/)
- Brede uitrol-mail aan vakverantwoordelijken (10 mei 2026), gecombineerd met *Zeker Toetsen in AI-tijden*
- Geplande tweede mail (juli/augustus 2026): introductie feedback-knop

## G1. Handleiding *Zeker Toetsen in AI-tijden* (Coene, 2025)

Beschikbaar als separate PDF/Word. Deze handleiding is een paralleldocument binnen het AI-portfolio van de auteur en wordt in dit rapport meermaals gerefereerd in verband met:
- AI-verantwoordingsrichtlijnen voor verantwoorde AI-inzet (zie hoofdstuk 15 §15.2)
- Gecombineerde uitrol met de tool (zie hoofdstuk 11 §11.3.1)
- Toetsing-component van bredere AI-werk binnen ORM (zie hoofdstuk 14 §14.2)

Voor extern publiceerbare versie van het rapport: opnemen na bevestiging dat publicatierechten dit toestaan.

## G2. Interne notitie *AI in het hoger onderwijs* (Coene, 2026a)

Beschikbaar als separate PDF. Deze interne notitie van de opleiding ORM is binnen de opleiding breed gedeeld. Het bevat het bredere theoretische kader waarop dit onderzoek voortbouwt, met name:
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
