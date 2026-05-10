---
title: "Hoofdstuk 9 — Cyclus 4: Cross-tab-consistentie en LLM-instructie-aanscherping (9-10 mei 2026)"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.1-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

# 9. Cyclus 4 — Cross-tab-consistentie en LLM-instructie-aanscherping (9-10 mei 2026)

## 9.1 Aanleiding: twee samenhangende problemen op verschillende abstractieniveaus

Op 9 mei 2026 — één dag na de filter-aanscherping in cyclus 3 — werden bij het bekijken van de productieversie twee problemen zichtbaar die op het eerste gezicht onafhankelijk leken, maar bij analyse één gemeenschappelijke wortel hadden: **inconsistentie tussen de vier tabs van het dashboard**.

Het eerste probleem was visueel-structureel: de telling-balk (totaal aantal artikelen / aantal NL / aantal internationaal) was alleen aanwezig op de tabs *Algemeen* en *ORM*, niet op *Onderwijs* en *Mijn vakgebied*. Het tweede probleem was inhoudelijk-algoritmisch: de tabs *Algemeen* en *Onderwijs* leverden vrijwel uitsluitend NL-artikelen op (bijvoorbeeld één INTL-artikel op tien), terwijl voor *ORM* — door de in cyclus 3 toegevoegde mix-eis — wel een evenwichtige NL/INTL-verdeling werd bereikt.

Beide problemen zijn op zich klein, maar zij illustreren een patroon dat in DBR-cycli vaak terugkeert: **lokale optimalisaties produceren globale inconsistenties**. Wanneer in cyclus 3 een specifieke tab (ORM) wordt aangescherpt met een mix-eis, ontstaat een impliciet verschil met de andere tabs die diezelfde aanscherping niet hebben gekregen. Cyclus 4 corrigeert dit door wat tab-specifiek was ontworpen, te uniformeren over de hele applicatie.

## 9.2 Diagnose: gedeelde oorzaken, gedeelde oplossingen

### 9.2.1 Stats-bar inconsistent — gevolg van organische groei

De `updateNewsStats`-functie was oorspronkelijk geschreven voor de tabs *Algemeen* en *ORM*. Toen later de tabs *Onderwijs* en *Mijn vakgebied* werden toegevoegd, kreeg de stats-bar voor die tabs geen aandacht — een typisch geval van wat Brooks (1995) het *consistency erosion*-effect noemt: software wordt over tijd inconsistent omdat nieuwe functionaliteit niet automatisch alle bestaande conventies overneemt.

### 9.2.2 LLM-output-bias — gevolg van ontbrekende mix-instructie

De tab-specifieke prompts voor het Claude-taalmodel waren in eerdere cycli geleidelijk gevormd. Voor *ORM* was in cyclus 3 expliciet een mix-eis toegevoegd ("minimaal 4 NL en 4 INTL artikelen"). Voor *Algemeen* en *Onderwijs* was deze mix-eis er nooit gekomen, omdat de standaard-prompt geen `topic`-waarde gaf en daardoor geen tab-specifieke instructies kreeg ingebouwd. Het gevolg: voor die tabs trok het model spontaan naar één extreem — meestal alleen NL — omdat in de input-pool de NL-artikelen vooraan stonden en het model uit "minimum acceptable" volume al zijn doel bereikte.

Dit is een illustratie van een breder fenomeen in *prompt engineering*: zonder expliciete instructies tendeert een LLM naar de eerste kandidaten die voldoen aan een minimum-eis (Liu et al., 2024). Zachte hints ("streef naar een mix") worden vaak genegeerd; harde instructies ("MINIMAAL 4 NL EN MINIMAAL 4 INTL") worden gevolgd. Dit verschil tussen *suggestion* en *constraint* in promptdesign is recent in de literatuur expliciet aangetoond (Wei et al., 2022; Sahoo et al., 2024).

## 9.3 Ontwerpinterventie

### 9.3.1 Stats-bar gestandaardiseerd over alle tabs (commit `ce30c22`)

De `updateNewsStats`-functie werd herschreven naar een prefix-mapping waarin elke tab dezelfde elementen krijgt. De stats-bar HTML werd toegevoegd aan de tabs *Onderwijs* en *Mijn vakgebied*, met identieke styling als de bestaande tabs.

Tegelijk werd de algemene `aiTerms`-regex (gebruikt door alle tabs als basisfilter) uitgebreid met dezelfde moderne AI-namen die in cyclus 3 al voor de ORM-filter waren toegevoegd: `copilot`, `gemini`, `claude`, `openai`, `anthropic`, `generatieve ai`, `stable diffusion`, `midjourney`. Een derde aanpassing in deze commit was het ophogen van de service worker cache-versie van `v2` naar `v3` — noodzakelijk om geïnstalleerde Progressive Web App-instanties te dwingen de nieuwe versie op te halen, omdat zonder versiewijziging de browser de oude assets uit cache zou serveren (Russell, 2018).

### 9.3.2 Mix-eis verplaatst van tab-specifiek naar generiek (commit `dc037dc`)

De mix-instructie die in cyclus 3 was opgenomen in de ORM-specifieke prompt, werd geherstructureerd: een aparte string `mixHint` werd toegevoegd die altijd aan de Claude-prompt wordt aangehecht, ongeacht welke tab. De formulering werd aangescherpt:

- **Eerder (zachte hint):** *"Streef naar een mix: minimaal 4 NL-artikelen én minimaal 4 INTL-artikelen indien beschikbaar."*
- **Nu (harde constraint):** *"BELANGRIJK voor de selectie: zorg voor een mix tussen Nederlandstalig en internationaal nieuws. MINIMAAL 4 Nederlandstalige artikelen EN MINIMAAL 4 internationale artikelen, mits beschikbaar in de input. Als één van beide minder dan 4 telt in de input, neem dan alle beschikbare op."*

De keuze voor hoofdletters in "MINIMAAL" is bewust en gebaseerd op recente literatuur over *attention mechanisms* in large language models, waarin is aangetoond dat tekstuele nadruk (zoals capitalisatie) significant invloed heeft op de mate waarin het model een instructie volgt (Liu et al., 2024; Sahoo et al., 2024).

## 9.4 Resultaat

| Tab | INTL vóór cyclus 4 | INTL na cyclus 4 |
|---|---|---|
| Algemeen | 1 | 5 |
| Onderwijs | 1 | 5 |
| ORM | 4-5 (al goed) | 4-5 |
| Mijn vakgebied | variabel | 5 |

Daarnaast: stats-bar zichtbaar en functioneel op alle vier de tabs.

## 9.5 Ontwerpkennis: drie principes

Cyclus 4 levert drie ontwerpprincipes op, alle drie gericht op het voorkomen of corrigeren van inconsistentie in evoluerende systemen.

### 9.5.1 Cross-cutting concerns vragen om centrale implementatie

Wanneer een functie (zoals een stats-bar of een LLM-instructie) gedrag definieert dat voor *alle* schermen of contexten geldt, hoort die in een centrale plek thuis — niet als kopie per tab. De originele tab-specifieke implementatie was een organische groei: elke tab kreeg in eigen tempo wat het nodig had. Bij vier tabs werd het inconsistent. Het herontwerp naar een prefix-map (voor de stats-bar) en een generieke `mixHint` (voor de LLM-instructie) is een toepassing van het *Don't Repeat Yourself*-principe (Hunt & Thomas, 1999) — niet voor code-onderhoud, maar voor *gedrag*-consistentie.

### 9.5.2 LLM-instructies werken beter als constraints dan als suggestions

De observatie dat "Streef naar..." vaak wordt genegeerd terwijl "MINIMAAL X" wordt gevolgd, is generaliseerbaar: voor LLM-promptdesign loont het om expliciet, getalsmatig en in dwingende toon te formuleren wat het model *moet* doen, in plaats van wat *gewenst* is. Dit principe sluit aan bij wat in recente prompt-engineering-literatuur wordt aangeduid als de *constraint-style prompting* (Sahoo et al., 2024).

### 9.5.3 Service worker cache-discipline is essentieel voor PWA-iteratie

Een service worker cached assets agressief — dat is zijn doel. Maar voor een snel-iteratief project is dit ook een valkuil: zonder cache-versie-bump zien geïnstalleerde gebruikers de wijzigingen niet, en denken ze dat het project stilstaat. Het ophogen van de cache-versie bij elke significante frontend-wijziging is een operationele discipline die in de PWA-literatuur consistent wordt aanbevolen (Russell, 2018; Google Developers, 2023).

## 9.6 Reflectie op cyclus 4

Drie methodische observaties:

1. **Inconsistenties zijn een natuurlijk bijproduct van iteratief ontwerp.** Elke cyclus voegt iets toe; zonder periodieke consolidatie ontstaat *consistency erosion*. Cyclus 4 illustreert dat een DBR-traject niet alleen gericht moet zijn op het toevoegen van nieuwe functionaliteit, maar ook periodiek op het uniformeren van wat eerder is toegevoegd. Dit is een toepassing van wat in agile-software-engineering *refactoring* heet (Fowler, 2018).

2. **Het tweede probleem (LLM-bias) was alleen zichtbaar door observatie van het gebruik, niet door inspectie van de code.** Een TAM-simulatie zoals in cyclus 2 zou deze bias niet hebben gevonden — het is een output-eigenschap die alleen door het draaien van het systeem en het tellen van resultaten zichtbaar wordt. Dit bevestigt het complementaire karakter van inspectie- en observatie-methoden binnen DBR.

3. **De link tussen prompt-engineering en didactische theorie is methodologisch interessant.** Het verschil tussen *suggestion* en *constraint* in LLM-promptdesign vertoont een opvallende parallel met het didactische onderscheid tussen *open* en *gesloten* opdrachten (Marzano, 2007): in beide contexten levert een explicietere structuur scherpere uitkomsten op. Deze parallel is een eerste aanzet voor wat in hoofdstuk 11 als generaliseerbare ontwerpkennis wordt geformuleerd.

Cyclus 4 sluit de eerste fase van het project af. De volgende cyclus (hoofdstuk 10) verschuift het zwaartepunt van het ontwerp naar de bredere implementatie en de gestructureerde feedback-verzameling van een bredere doelgroep.
