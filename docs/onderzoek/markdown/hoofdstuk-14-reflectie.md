---
title: "Hoofdstuk 14 — Reflectie"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.1-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

# 14. Reflectie

Dit hoofdstuk reflecteert op drie kwesties die de academische verantwoording van het onderzoek raken: de drievoudige rol van de auteur als ontwerper, beleidsverantwoordelijke en onderzoeker (§14.1), de inzet van AI bij zowel het ontwerp als de rapportage (§14.2), en wat de auteur achteraf anders zou doen (§14.3).

## 14.1 De drievoudige rol van de auteur

De auteur van dit onderzoek vervult tegelijkertijd drie rollen die elk een eigen perspectief op het onderzoeksobject inbrengen:

1. **Docent ORM** — gebruiker-perspectief. Als docent binnen de doelgroep heeft de auteur directe toegang tot de werkelijke ervaring van de gebruiker: welke informatie nodig is, welke tijd beschikbaar is, welke interface-conventies aansluiten. Dit perspectief versterkt de empathische scherpte van het ontwerp.
2. **Verantwoordelijke voor AI-beleid van de opleiding** — institutioneel perspectief. Als beleidsverantwoordelijke heeft de auteur zicht op de bredere AI-context binnen Hanze (zoals uitgewerkt in *AI in het hoger onderwijs*, Coene, 2026), op de behoefte aan docent-AI-geletterdheid en op de relatie met andere AI-initiatieven (zoals *Zeker Toetsen in AI-tijden*, Coene, 2025). Dit perspectief versterkt de strategische positionering van het ontwerp.
3. **Ontwerper-onderzoeker** — DBR-perspectief. Als onderzoeker draagt de auteur verantwoordelijkheid voor de methodologische rigueur, voor transparantie van bevindingen, en voor de generalisering van ontwerpkennis voorbij de eigen context.

Deze drievoudige rol is in DBR niet uitzonderlijk — McKenney en Reeves (2018, hoofdstuk 4) beschrijven het zelfs als karakteristiek voor design-based researchers — maar wel methodologisch te benoemen, omdat de rollen elkaar zowel kunnen versterken als interfereren.

### 14.1.1 Hoe de rollen elkaar versterken

De drie rollen versterken elkaar primair doordat ze elk een eigen vraag stellen die zonder de andere rollen niet zou worden gesteld. Het docent-perspectief vraagt: *werkt dit voor mij in de praktijk?* Het beleidsverantwoordelijken-perspectief vraagt: *past dit binnen de bredere AI-strategie?* Het onderzoeker-perspectief vraagt: *wat leren we hieruit dat overdraagbaar is?* De integratie van deze drie vragen levert een rijker ontwerp en een rijker onderzoek op dan elk perspectief afzonderlijk zou produceren.

Een concreet voorbeeld: de keuze in cyclus 5 om de feedback-knop bewust uit te stellen tot na een periode van vrije gebruikservaring (H10 §10.2) is een interactie tussen de drie rollen. Het docent-perspectief levert het inzicht dat eerste-indrukken-feedback minder waardevol is dan ervaring-feedback. Het beleidsperspectief levert het inzicht dat twee initiatieven (toetsing-handleiding + nieuwstool) niet tegelijk om aandacht moeten vragen. Het onderzoeker-perspectief levert het methodische argument dat gestructureerde feedback in een latere cyclus een betere kwantitatieve onderbouwing oplevert.

### 14.1.2 Waar de rollen interfereren

De rollen interfereren primair doordat het docent- en beleidsperspectief de auteur dichter bij het onderzoeksobject plaatsen dan een externe onderzoeker zou staan. Dit risico op *confirmation bias* is in DBR een bekend methodisch vraagstuk (Anderson & Shattuck, 2012). Drie concrete vormen waarin het in dit onderzoek had kunnen optreden:

- **Selectieve interpretatie van tester-feedback**: feedback die het ontwerp valideert wordt sneller geaccepteerd dan feedback die ontwerpkeuzes ter discussie stelt.
- **Onbewuste sturing van ontwerpkeuzes** door eigen overtuigingen uit beleidswerk (zoals het scaffold-perspectief uit *AI in het hoger onderwijs*, Coene, 2026), waardoor het ontwerp voorspelbaar in lijn komt met die overtuigingen.
- **Te coulante zelfrapportage** in cyclus 2, waarin de TAM-simulatie als methode is gebruikt door de auteur zelf — een uitnodiging om eigen ontwerpkeuzes positiever te beoordelen dan een externe reviewer dat zou doen.

### 14.1.3 Mitigaties

Vier strategieën zijn ingezet om deze risico's te beperken:

1. **Radicale transparantie via Git en projectlog**. Alle ontwerpiteraties zijn in publieke commits vastgelegd, zodat derden kunnen verifiëren wat is gedaan, wanneer, en met welke onderbouwing. Dit functioneert als *audit trail* in de zin van Lincoln en Guba (1985).
2. **Externe peer-review** door lector Harald Pol op v0.1 van dit rapport, voorafgaand aan eventuele externe publicatie.
3. **Geplande member checking** in cyclus 5b via optionele follow-up gesprekken met respondenten van de feedback-vragenlijst.
4. **Open broncode** zodat onafhankelijke derden de implementatie kunnen toetsen en zo nodig de resultaten kunnen reproduceren.

Deze mitigaties elimineren de bias-risico's niet, maar maken ze controleerbaar — en daarmee falsifieerbaar in de zin die past bij DBR-traditie.

## 14.2 De inzet van AI in dit onderzoek

Een tweede te reflecteren kwestie is de inzet van AI bij zowel het ontwerp als de rapportage van dit onderzoek. Voor de geloofwaardigheid van het rapport — zeker een rapport over AI-tools voor docenten — is expliciete verantwoording op zijn plaats.

### 14.2.1 AI bij het ontwerp

Bij de ontwikkeling van het dashboard is gebruik gemaakt van Claude Code (Anthropic) als programmeerassistent. Concreet betekent dit:

- **Code-suggesties en -implementaties** zijn vaak voorgesteld door Claude Code, maar door de auteur in alle gevallen kritisch beoordeeld, getest en — waar nodig — aangepast voordat ze in de codebase werden opgenomen.
- **Architectuurkeuzes** zijn door de auteur genomen, niet door Claude. Voorbeelden: keuze voor PWA boven native app, keuze voor geen npm-dependencies, keuze voor Claude Haiku boven Sonnet, keuze voor gelaagde filtering met regex en LLM.
- **Tester-feedback-interpretatie** en de daaruit volgende ontwerpkeuzes zijn door de auteur gemaakt, met Claude Code als sparringpartner over implementatie-opties.

Dit gebruik valt binnen de richtlijnen die in *Zeker Toetsen in AI-tijden* (Coene, 2025) zijn geformuleerd voor verantwoorde AI-inzet: AI als hulpmiddel waarvan het gebruik transparant is verantwoord, niet als zelfstandige uitvoerder van denkwerk.

### 14.2.2 AI bij de rapportage

Bij de schriftelijke rapportage van dit onderzoek is eveneens AI ingezet. Concrete vormen:

- **Eerste schrijfconcepten** van hoofdstukken zijn vaak door Claude opgesteld op basis van expliciete instructies van de auteur over inhoud, structuur, toon en bronverwijzingen. Claude functioneert hier als co-auteur bij eerste opzet.
- **Theoretisch kader-onderbouwing**: bronnen die in *AI in het hoger onderwijs* (Coene, 2026) waren gebruikt zijn door Claude opgenomen op basis van de bronnenlijst van dat document. Aanvullende bronnen (DBR, TAM, prompt-engineering) zijn door Claude voorgesteld en door de auteur kritisch beoordeeld op gebruikswaarde — zie het bronnen-werkbestand voor de status per bron.
- **Methodologische verantwoording**: de structuur van methodologie- en discussiehoofdstukken is door Claude voorgesteld op basis van DBR-conventies; de inhoudelijke keuzes zijn door de auteur gevalideerd.

Vier strikte beperkingen zijn aan de AI-inzet opgelegd:

1. **Inhoudelijke claims worden door de auteur geverifieerd** voordat ze definitief worden opgenomen.
2. **Bronvermeldingen worden in een afsluitende fase systematisch geverifieerd** op juistheid (bestaat de bron, klopt het jaartal, is de bewering die eraan wordt toegeschreven correct in de oorspronkelijke bron). Het bronnen-werkbestand functioneert als planningsinstrument hiervoor.
3. **De auteur draagt eindverantwoordelijkheid** voor alle uitspraken in dit rapport, ongeacht of zij zijn opgesteld via AI-assistentie of niet.
4. **Tester-citaten en data zijn niet door AI gegenereerd**; deze komen uit feitelijke mailwisselingen, gebruiksdata en feedback-formulieren.

### 14.2.3 Methodische reflectie

Deze inzet roept een methodische vraag op die in toenemende mate aan de orde komt in academisch onderzoek: *hoe verhoudt AI-ondersteuning bij onderzoeksrapportage zich tot academische integriteit?* Op het moment van schrijven (mei 2026) bestaan hierover nog geen breed gedragen academische conventies; verschillende tijdschriften hanteren verschillende richtlijnen, die in versneld tempo worden bijgesteld.

Dit rapport hanteert daarom de richtlijnen uit Coene (2025) als interne standaard: transparant verantwoorden welke tools zijn gebruikt, voor welk doel, met welke prompts, en hoe de output is geïntegreerd. In de bijlagen (G2) is het essay *AI in het hoger onderwijs* (Coene, 2026) opgenomen waarin deze positionering breder is uitgewerkt — niet alleen voor onderwijs, maar ook voor onderzoekspraktijk.

De auteur erkent dat deze positionering vooruitloopt op consensus binnen het bredere onderzoeksveld, en hoopt dat de transparante verantwoording in dit hoofdstuk bijdraagt aan de bredere discussie over verantwoorde AI-inzet in academisch werk.

## 14.3 Wat ik anders zou doen

Bij terugblik op de cycli zijn drie keuzes die de auteur achteraf anders had gemaakt, en die als leerpunten relevant zijn voor toekomstige DBR-projecten in vergelijkbare contexten.

### 14.3.1 Vroegere platform-restrictie-test

De Hanze-Outlook-blokkade van `mailto:`-deeplinks is in cyclus 2 ontdekt — relatief vroeg, maar pas na implementatie van een e-mail digest-knop die om die reden moest worden verwijderd. Een platform-restrictie-test in cyclus 1, voorafgaand aan implementatie, had deze omweg kunnen voorkomen. Voor toekomstige DBR-projecten in organisatorische contexten met IT-restricties is een expliciete *platform-compatibiliteit-cyclus* aan het begin van het traject aan te bevelen.

### 14.3.2 Eerder gestructureerde dataverzameling

De cycli 1-4 hebben overwegend kwalitatieve dataverzameling toegepast (open feedback, code-review, observatie). Pas in cyclus 5 wordt een gestructureerd kwantitatief feedback-instrument geïntroduceerd. Achteraf bezien had een lichte vorm van gebruiksdata-verzameling al vanaf cyclus 1 kunnen plaatsvinden — bijvoorbeeld geaggregeerde page-view-tellingen — om het natuurlijke gebruikspatroon van de tool over de tijd te kunnen reconstrueren. In de huidige opzet ontbreekt deze longitudinale data over de eerste vier cycli.

### 14.3.3 Bredere theoretische verankering vóór de eerste cyclus

Het scaffold-perspectief is gedurende de cycli 1-4 impliciet ontwerpend toegepast en pas in cyclus 4 expliciet als rode draad geformuleerd. Een eerdere expliciete theoretische verankering — bijvoorbeeld door een literatuurstudie vóór cyclus 1 — had het ontwerp wellicht scherper gepositioneerd vanaf het begin. Tegelijk is in DBR de *emergente theoretische opbrengst* een geaccepteerd kenmerk van de methode (McKenney & Reeves, 2018, hoofdstuk 7) en is het niet onmogelijk dat een te vroege theoretische verankering juist had geleid tot een minder open ontwerpproces. De optimale balans tussen *theory-driven* en *emergent* ontwerp blijft een open methodologische kwestie.

## 14.4 Persoonlijke ontwikkeling

Tot slot een persoonlijke noot. Het onderzoek heeft de auteur op drie terreinen verder gebracht.

Ten eerste in **AI-geletterdheid**. Het dagelijkse werken met Claude Code in zowel ontwerp als rapportage heeft een veel directer gevoel opgeleverd voor wat AI wel en niet betrouwbaar doet — een vorm van impliciete leerwinst die volledig in lijn is met de hypothese die in hoofdstuk 11.3.3 over de tool zelf is geformuleerd. Het scaffold-principe is voor de auteur in eigen werk bevestigd geworden.

Ten tweede in **ontwerpvaardigheid**. Het iteratieve karakter van DBR — denken-doen-evalueren in korte cycli — heeft een ander soort ontwerpdiscipline opgeleverd dan klassieke watervalprojecten zouden hebben gedaan. De combinatie van software-engineering-snelheid (commits per uur) en academische rigueur (per cyclus expliciete verantwoording) is een werkwijze die voorbij dit onderzoek bruikbaar blijft.

Ten derde in **academische schrijvenshouding**. De keuze om AI-assistentie expliciet te benoemen, de drievoudige rol te exponeren, en bias-risico's te erkennen voelt comfortabeler dan de impliciete autoriteits-claim die in veel academisch werk gebruikelijk is. De academische gemeenschap zal de komende jaren consensus moeten vinden over hoe AI-assistentie in onderzoek verantwoord wordt; dit rapport is een bijdrage aan die discussie.
