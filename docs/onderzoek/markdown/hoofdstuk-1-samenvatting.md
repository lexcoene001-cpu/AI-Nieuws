---
title: "Hoofdstuk 1 — Samenvatting / Abstract"
subtitle: "Onderdeel van: ORM AI Nieuws — Ontwerpgericht onderzoek (DBR), v0.1-concept"
author: "Lex Coene, Hanzehogeschool Groningen, opleiding ORM"
date: "Mei 2026"
lang: nl-NL
---

# 1. Samenvatting / Abstract

## 1.1 Nederlandstalige samenvatting

**Achtergrond.** AI-ontwikkelingen veranderen het werkveld van docenten in het hoger beroepsonderwijs sneller dan zij naast hun reguliere taken kunnen bijhouden. Voor opleidingen in retail, marketing en ondernemerschap raakt AI direct aan vakinhoud die studenten nodig hebben. Tegelijk staan docenten voor de uitdaging studenten te begeleiden in verantwoord AI-gebruik — wat AI-geletterdheid van de docent zelf vooronderstelt. Bestaande informatiekanalen (algemene AI-nieuwssites, vakspecifieke nieuwsbrieven voor IT-professionals) sluiten niet aan op de specifieke behoefte van docenten in business-opleidingen.

**Doel.** Dit ontwerpgericht onderzoek (Design-Based Research, DBR) beoogt twee opbrengsten: (1) een werkend digitaal hulpmiddel dat docenten van de opleiding Ondernemen en Retail Management (ORM) van de Hanzehogeschool Groningen helpt om dagelijks relevant AI-nieuws bij te houden, en (2) een set generaliseerbare ontwerpprincipes voor docent-AI-tools in vergelijkbare onderwijscontexten.

**Methode.** Het onderzoek is opgezet als DBR met vijf opeenvolgende ontwerpcycli (april 2026–september 2026). In elke cyclus is een ontwerpinterventie gevolgd door evaluatie, met directe terugkoppeling op de volgende iteratie. Het Technology Acceptance Model (TAM) is gebruikt als evaluatiekader — kwalitatief in de ontwerpfase (cyclus 2) en kwantitatief in de implementatiefase (cyclus 5b, in uitvoering). De ontwerper-onderzoeker vervulde een drievoudige rol als docent ORM, verantwoordelijke voor AI-beleid van de opleiding, en onderzoeker; methodische mitigaties (transparantie via Git en projectlog, externe peer-review, member checking, open broncode) zijn ingezet om bias-risico's te beperken.

**Resultaten.** Vier afgeronde cycli (april–mei 2026) hebben geleid tot een functioneel Progressive Web App-dashboard met geautomatiseerde curatie uit ~30 bronnen, AI-gebaseerde Nederlandse samenvattingen via Claude Haiku, een vakgebied-personaliseerbare interface met vier thematische tabs en een AI-chatfunctie. Meetbare effecten per cyclus: TAM-georiënteerde code-review leverde 7 usability-fixes en 3 verwijderingen op (cyclus 2); filter-aanscherping op tester-feedback bracht het aandeel toepassings-georiënteerde artikelen van circa 30% naar circa 90% (cyclus 3); aanscherping van LLM-instructies van *suggestion* naar *constraint* verhoogde het aantal internationale artikelen op de Algemeen- en Onderwijs-tabs van 1 naar 5 (cyclus 4). De vijfde cyclus, met brede uitrol naar vakverantwoordelijken en gestructureerde feedback-verzameling, is in uitvoering.

**Ontwerpkennis.** Het onderzoek levert negen generaliseerbare ontwerpprincipes op, gegroepeerd in drie clusters: curatie-architectuur (gelaagde filtering, mix-eisen, vakblad-redacteurs als voor-curators), LLM-promptdesign (constraints boven suggestions) en ontwerp- en evaluatieproces (TAM-simulatie als legitieme tussenstap, één tester-feedback kan diepgaande herziening triggeren, platform-restricties vroeg testen, PWA-cache-discipline). Het overkoepelende principe is een transpositie van Kosmyna et al. (2025): *AI als scaffold, niet als shortcut* — voor het eerst gepositioneerd voor docent-tools in plaats van studententools.

**Conclusie.** Een vakspecifieke, scaffold-georiënteerde AI-tool kan een wezenlijke bijdrage leveren aan docent-AI-geletterdheid binnen een opleidingscontext. De ontwerpprincipes zijn naar verwachting overdraagbaar naar vergelijkbare hbo-opleidingen onder vier condities: doelgroep van expert-gebruikers, vakspecifiek thematisch venster, iteratief ontwerpproces, en bereidheid tot gelaagde technische architectuur. Vervolgonderzoek wordt aanbevolen op vier richtingen: replicatie in andere opleidingen, longitudinaal effect op AI-geletterdheid, kwantitatieve TAM-validatie met grotere N, en empirische vergelijking met shortcut-georiënteerde alternatieven.

**Trefwoorden.** Design-Based Research, Technology Acceptance Model, AI-geletterdheid, scaffold, docent-tools, hoger beroepsonderwijs, curatie, prompt engineering, Progressive Web App.

---

## 1.2 English abstract

**Background.** AI developments are changing the field of higher vocational education teachers faster than they can keep up with alongside their regular duties. For programs in retail, marketing and entrepreneurship, AI directly affects subject matter that students need. At the same time, teachers face the challenge of guiding students in responsible AI use — which presupposes AI literacy on the part of the teacher. Existing information channels (general AI news sites, vocational newsletters for IT professionals) do not align with the specific needs of teachers in business programs.

**Aim.** This Design-Based Research (DBR) study has two outcomes: (1) a working digital tool that helps teachers of the Entrepreneurship and Retail Management (ORM) program at Hanze University of Applied Sciences keep up with relevant AI news on a daily basis, and (2) a set of transferable design principles for teacher-oriented AI tools in similar educational contexts.

**Method.** The study is designed as DBR with five consecutive design cycles (April 2026–September 2026). Each cycle features a design intervention followed by evaluation, with direct feedback into the next iteration. The Technology Acceptance Model (TAM) serves as the evaluation framework — qualitatively in the design phase (cycle 2) and quantitatively in the implementation phase (cycle 5b, in progress). The designer-researcher held a triple role as ORM teacher, AI policy owner for the program, and researcher; methodological mitigations (transparency via Git and project log, external peer review, member checking, open source code) were employed to limit bias risks.

**Results.** Four completed cycles (April–May 2026) resulted in a functional Progressive Web App dashboard with automated curation from approximately 30 sources, AI-generated Dutch-language summaries via Claude Haiku, a subject-personalizable interface with four thematic tabs, and an AI chat function. Measurable effects per cycle: TAM-oriented code review yielded 7 usability fixes and 3 removals (cycle 2); filter sharpening based on tester feedback raised the proportion of application-oriented articles from approximately 30% to approximately 90% (cycle 3); tightening of LLM instructions from *suggestion* to *constraint* increased the number of international articles on the General and Education tabs from 1 to 5 (cycle 4). The fifth cycle, with broad rollout to subject coordinators and structured feedback collection, is in progress.

**Design knowledge.** The study yields nine transferable design principles, grouped in three clusters: curation architecture (layered filtering, mix requirements, sector journals as pre-curators), LLM prompt design (constraints over suggestions) and design and evaluation process (TAM simulation as a legitimate intermediate step, one tester's feedback can trigger profound revision, platform restrictions tested early, PWA cache discipline). The overarching principle is a transposition of Kosmyna et al. (2025): *AI as scaffold, not as shortcut* — for the first time positioned for teacher tools instead of student tools.

**Conclusion.** A subject-specific, scaffold-oriented AI tool can make a meaningful contribution to teacher AI literacy within a program context. The design principles are expected to be transferable to similar higher vocational education programs under four conditions: target audience of expert users, subject-specific thematic scope, iterative design process, and willingness to adopt layered technical architecture. Follow-up research is recommended on four directions: replication in other programs, longitudinal effect on AI literacy, quantitative TAM validation with larger N, and empirical comparison with shortcut-oriented alternatives.

**Keywords.** Design-Based Research, Technology Acceptance Model, AI literacy, scaffold, teacher tools, higher vocational education, curation, prompt engineering, Progressive Web App.
