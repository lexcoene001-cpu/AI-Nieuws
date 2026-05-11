---
title: "Hoofdstuk 8 — Cyclus 2: TAM-simulatie en usability-fixes (1 mei 2026)"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.2-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

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
