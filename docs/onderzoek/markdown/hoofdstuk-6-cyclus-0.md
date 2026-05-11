---
title: "Hoofdstuk 6 — Cyclus 0: Pre-Claude-Code-fase (mei 2025 – half april 2026)"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.2-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

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
