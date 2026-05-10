# ORM AI Nieuws — Ontwerpgericht onderzoek (DBR)

> **Status:** werkdocument (skelet) — opgesteld 2026-05-10
> **Doelpubliek:** lectoraat Hanzehogeschool Groningen (lector: Harald Pol) en externe publicatie (tijdschrift TBD na overleg)
> **Auteur:** Lex Coene (Hanzehogeschool, opleiding ORM)
> **Methodologie:** Design-Based Research (DBR) met Technology Acceptance Model (TAM) als evaluatie-instrument

---

## Hoe gebruiken we dit document

Dit is het **skelet** voor het uiteindelijke onderzoeksrapport. Per sectie staat:
- **Doel** — wat moet deze sectie opleveren
- **In te vullen** — concrete elementen die we erin gaan zetten
- **Bronmateriaal** — waar in de repo we informatie vandaan halen (projectlog, commits, etc.)
- **Status** — 🔴 leeg / 🟡 in opbouw / 🟢 concept klaar / ✅ definitief

We bouwen sectie voor sectie. Elk gevulde sectie krijgt later zijn eigen losse markdown-bestand in deze map (`hoofdstuk-1-inleiding.md`, etc.) zodat we niet één onhandelbare file hebben. Dit skelet blijft de leidraad.

---

## Inhoudsopgave

1. [Samenvatting / Abstract](#1-samenvatting--abstract)
2. [Inleiding](#2-inleiding)
3. [Theoretisch kader](#3-theoretisch-kader)
4. [Onderzoeksvraag & subvragen](#4-onderzoeksvraag--subvragen)
5. [Methodologie](#5-methodologie)
6. [Cyclus 1 — Eerste prototype (april 2026)](#6-cyclus-1--eerste-prototype-april-2026)
7. [Cyclus 2 — TAM-simulatie & usability-fixes (1 mei 2026)](#7-cyclus-2--tam-simulatie--usability-fixes-1-mei-2026)
8. [Cyclus 3 — Filter-aanscherping op tester-feedback (8 mei 2026)](#8-cyclus-3--filter-aanscherping-op-tester-feedback-8-mei-2026)
9. [Cyclus 4 — Stats-bar & mix-eis (9-10 mei 2026)](#9-cyclus-4--stats-bar--mix-eis-9-10-mei-2026)
10. [Cyclus 5 — Brede uitrol & feedback-ronde (juni-juli 2026)](#10-cyclus-5--brede-uitrol--feedback-ronde-juni-juli-2026)
11. [Resultaten & ontwerpkennis](#11-resultaten--ontwerpkennis)
12. [Discussie](#12-discussie)
13. [Conclusie & aanbevelingen](#13-conclusie--aanbevelingen)
14. [Reflectie](#14-reflectie)
15. [Referenties](#15-referenties)
16. [Bijlagen](#16-bijlagen)

---

## 1. Samenvatting / Abstract

**Status:** 🔴 leeg

**Doel:** korte samenvatting (NL + EN, ~250 woorden elk) met probleem, methode, belangrijkste resultaten, conclusie.

**In te vullen:**
- NL-samenvatting
- EN-abstract
- Trefwoorden / keywords

---

## 2. Inleiding

**Status:** 🔴 leeg

**Doel:** context schetsen, probleem afbakenen, relevantie onderbouwen.

**In te vullen:**
- Context Hanzehogeschool Groningen + opleiding Ondernemen en Retail Management (ORM)
- Lex' rol als verantwoordelijke voor AI-beleid van de opleiding
- Het probleem: AI-ontwikkelingen gaan zo snel dat docenten ze niet kunnen bijhouden naast hun reguliere taken
- Specifiek probleem voor ORM: AI raakt vakgebieden als marketing, retail, e-commerce direct — docenten moeten studenten voorbereiden op een veranderend werkveld
- Bestaand aanbod (algemene AI-nieuwssites, nieuwsbrieven) sluit niet aan: te breed, te internationaal, geen ORM-context
- Aanleiding voor dit project: behoefte aan een gericht, gefilterd, Nederlandstalig nieuwsdashboard
- **Bredere urgentie — de studeercrisis als achtergrond**: docenten staan zelf onder druk (dalende aanwezigheid, intensief studenten-AI-gebruik, verschuivende rol van inhoudsdeskundige naar coach; Dekker, 2026; Jolles, 2026; Hornstra, 2026; Schep et al., 2025). Ondersteuning van docenten zelf in hun AI-geletterdheid is een voorwaarde voor het kunnen begeleiden van studenten daarin.
- Maatschappelijke en onderwijsmatige relevantie

**Bronmateriaal:**
- `docs/projectlog.md` sectie 2 (architectuur op hoog niveau) en sectie 4 (beslissingen)
- Lex' globale CLAUDE.md (rol, context Hanze)
- Coene (2026), *AI in het hoger onderwijs: Kansen, risico's en didactische randvoorwaarden* — voor de bredere context van docent-AI-geletterdheid binnen ORM

---

## 3. Theoretisch kader

**Status:** 🔴 leeg

**Doel:** academische verankering — welke modellen en literatuur bouwen we op.

**In te vullen:**

**3.1 Design-Based Research (DBR)**
- Definitie en oorsprong (McKenney & Reeves, 2018; Plomp, 2013; Wang & Hannafin, 2005)
- DBR-fasen: probleemanalyse → ontwerp → implementatie → evaluatie → herontwerp
- Verschil met klassiek experimenteel onderzoek
- Waarom DBR past bij dit project (iteratief, in echte praktijk, met praktijkpartners)

**3.2 Technology Acceptance Model (TAM)**
- Davis (1989): perceived usefulness + perceived ease of use → intention to use
- Eventueel UTAUT2 (Venkatesh et al., 2012) als modernere variant
- Toepassing in HE-context (literatuurverwijzingen)
- Hoe we TAM operationaliseren voor dit project

**3.3 AI in het hoger onderwijs**
- Beleid en discussies (mogelijk: Kennisnet, SURF, EU AI Act)
- AI-geletterdheid (AI literacy) bij docenten — verankerd in kwalificatietrajecten zoals BKO; informele workshops volstaan niet (UvA & VU, 2025; Ayan et al., 2025)
- AIMES (AI Maturity in Education Scan) en het UNESCO AI Competency Framework for Teachers (2024) als secundaire kaders naast TAM
- Curatie en filtering bij informatie-overload

**3.4 AI als scaffold, niet als shortcut** *(rode draad van het rapport)*
- Kosmyna et al. (2025): "cognitive debt" wanneer denkwerk structureel wordt uitbesteed; AI als *tweede denker* na eigen werk leidt juist tot meer cognitieve activatie
- Chen et al. (2025): AI ondersteunt cognitieve ontwikkeling alleen als het is ingebed in scaffolded instructieontwerp met tussenstappen, metacognitieve reflectie en argumentatief redeneren
- Ma et al. (2025) en Karaman & Bahar (2025): AI als denkpartner / co-regulator, niet als productiegenerator
- Coene (2026): toepassing van scaffold-principe op het Nederlandse hbo-onderwijs en op ORM-context
- **Toepassing in dit onderzoek:** AI-Nieuws is een scaffold *voor docenten* (niet voor studenten) — het neemt geen denkwerk over (curatie, summarisation, chat) maar biedt een ondersteunende structuur waardoor docenten zelf hun AI-geletterdheid kunnen ontwikkelen en bijhouden. Dit positioneert het ontwerp expliciet binnen de wetenschappelijke literatuur over verantwoorde AI-inzet in HE.

**3.5 Conceptueel raamwerk voor dit onderzoek**
- Combinatie van DBR (proceskader) + TAM (adoptie-kader) + AI-als-scaffold (didactisch kader) + AI-literacy (competentie-kader)
- Schematische weergave (te maken)

**Bronmateriaal:**
- Coene (2026), *AI in het hoger onderwijs* — bronnenlijst overnemen + aanvullen met DBR/TAM-specifieke literatuur
- Externe literatuur DBR/TAM (zie sectie 15)

---

## 4. Onderzoeksvraag & subvragen

**Status:** 🔴 leeg

**Doel:** scherpe formulering van wat we willen weten.

**Voorlopig voorstel hoofdvraag:**
> Hoe kan een gefilterd, AI-ondersteund nieuwsdashboard ontworpen worden dat ORM-docenten van de Hanzehogeschool Groningen helpt om relevant AI-nieuws bij te houden, en welke ontwerpprincipes zijn daarbij overdraagbaar naar andere onderwijscontexten?

**Subvragen:**
1. Welke functionele en niet-functionele eisen stellen ORM-docenten aan een AI-nieuwsdashboard?
2. Hoe kan AI (LLM-summarisation + filtering) effectief ingezet worden om vakspecifiek nieuws te selecteren?
3. Welke factoren bepalen acceptatie en daadwerkelijk gebruik (TAM)?
4. Welke ontwerpkennis is generaliseerbaar naar vergelijkbare HE-contexten?

(Te scherpen na overleg met Harald Pol)

---

## 5. Methodologie

**Status:** 🔴 leeg

**Doel:** verantwoorden hoe we te werk zijn gegaan.

**In te vullen:**

**5.1 Onderzoeksopzet**
- DBR met meerdere ontwerpcycli (5 t/m mei 2026, vermoedelijk 6+ tot eind 2026)
- Iteratieve verbetering op basis van data per cyclus

**5.2 Setting en participanten**
- Hanzehogeschool Groningen, opleiding ORM
- Beta-testers (eerste ronde): twee collega-docenten (Ties, Nico)
- Bredere groep: alle vakverantwoordelijken ORM (uitrol mei 2026)

**5.3 Dataverzameling per cyclus**
- **Kwalitatief:** mailwisseling, gesprekken, observaties tijdens demo
- **Kwantitatief:** geplande gebruiksdata (na inbouw analytics), Google Form-feedback (gepland fase 2)
- **TAM-simulatie als instrument** (cyclus 2): code-review als systematische evaluatie van perceived usefulness en perceived ease of use vóór gebruikerstest — expliciet als methodische stap, niet alleen als debug-praktijk

**5.4 Analyse**
- Thematische analyse van kwalitatieve feedback
- Vergelijking pre/post-iteratie van meetbare metrics (bv. NL/INTL-balans, totaalvolume artikelen)

**5.5 Ethische overwegingen**
- Geen persoonsgegevens van studenten verzameld
- Tester-feedback geanonimiseerd in rapport
- Eigen rol als ontwerper-onderzoeker (zie sectie 14)

**5.6 Betrouwbaarheid en validiteit**
- Triangulatie (kwalitatief + kwantitatief + TAM)
- Member checking met testers
- Transparantie via projectlog en open broncode

**Bronmateriaal:**
- `docs/projectlog.md` — gedetailleerde chronologie
- Git-commits — bewijs van iteraties
- Tester-mails (te anonimiseren)

---

## 6. Cyclus 1 — Eerste prototype (april 2026)

**Status:** 🟡 materiaal aanwezig, nog te schrijven

**Doel:** eerste ontwerpkeuzes verantwoorden, eerste tester-impressies.

**In te vullen:**
- Probleemanalyse (hoe kwam het idee tot stand)
- Ontwerpkeuzes:
  - Geen npm-deps, native Node.js HTTP — minimal onderhoud
  - PWA i.p.v. native app — drempelloze installatie, geen App Store
  - 4 tabs (Algemeen, ORM, Onderwijs, Vakgebied) + Opgeslagen
  - Claude Haiku voor summarisation — kosten-bewust
  - NewsAPI + RSS-fallback voor robuustheid
  - localStorage voor opgeslagen artikelen — geen DB, geen account
- Eerste prototype draait op Render (publieke URL)
- Eerste tester-ronde (29 april 2026)

**Bronmateriaal:**
- `docs/projectlog.md` sectie 2 (architectuur), sectie 4 (beslissingen), sectie 9 werklog 2026-04-15 t/m 2026-04-30

---

## 7. Cyclus 2 — TAM-simulatie & usability-fixes (1 mei 2026)

**Status:** 🟡 materiaal aanwezig, nog te schrijven

**Doel:** beschrijven hoe TAM als kader is gebruikt vóór de bredere gebruikerstest, en welke 7 issues zijn gevonden en opgelost.

**In te vullen:**
- Methode: code-review uitgevoerd waarbij elk UI-element getoetst is op perceived usefulness en perceived ease of use — een soort 'TAM-simulatie' uitgevoerd door de ontwerpers in plaats van directe gebruikertest
- Gevonden issues (7):
  1. Onboarding-banner ID + sluitknop niet werkend
  2. Misleidende empty-state tekst
  3. "Opnieuw proberen" zonder force-refresh
  4. "Leg uit" toonde volledige prompt zichtbaar in inputveld
  5. Chat-label onzichtbaar als ingeklapt
  6. ESC sloot modal niet
  7. (zevende issue uit projectlog halen)
- Verwijderde features (op basis van TAM-perceived-usefulness-evaluatie):
  - E-mail digest knop (Hanze-omgeving blokkeert mailto)
  - E-mail deeloptie
  - "Markeer alles" — dagelijks gebruik bevestigt geen meerwaarde
- Verbeterde features:
  - Chat-label verduidelijkt
  - Empty state Mijn vakgebied uitnodigender

**Reflectie:** TAM-simulatie als instrument vooraf is goedkoop en levert verbetering op — geleerd dat het niet kan vervangen, maar wel kan voorbereiden, op echte gebruikerstest.

**Bronmateriaal:**
- `docs/projectlog.md` sectie 7 → "Usability-fixes n.a.v. code-review als TAM-simulatie"
- Git-commits `c16c327`–`d1da4dc`

---

## 8. Cyclus 3 — Filter-aanscherping op tester-feedback (8 mei 2026)

**Status:** 🟡 materiaal aanwezig, nog te schrijven

**Doel:** beschrijven hoe één concrete tester-feedback ("ORM-tab is te breed") leidde tot drie ontwerp-iteraties op één dag, en welke ontwerpkennis dit opleverde.

**In te vullen:**

**Probleem (tester-feedback):** ORM-tab toonde algemeen AI-bedrijfsnieuws (AI Act, big-tech-deals, AI-modeluitrol) i.p.v. AI-toepassingen door ondernemers/retailers/marketeers.

**Iteratie 1 (commit `998e413`):** filter strenger — vereist nu AI **én** ORM, synoniemenlijst ingedikt, 8 niche-bronnen toegevoegd.

**Iteratie 2 (commit `15bf52f`):** AI-regex verruimd met moderne AI-namen (Copilot, Gemini, Claude, OpenAI, Anthropic, etc.); NewsAPI-queries hertekend met AND-logica; LLM-selectie-prompt aangescherpt.

**Iteratie 3 (commit `621502f`):** NL-volume verhoogd via verbreding regex (LLM-pas filtert ruis), extra Emerce-tag-feeds, mix-eis (min 4 NL + 4 INTL).

**Resultaat:** van 1-2 NL-artikelen naar 6 NL + 4 INTL, allemaal toepassings-georiënteerd.

**Ontwerpkennis (overdraagbaar):**
- Voor smalle thema's (zoals AI×ORM) is gelaagd filteren nodig: regex voor brute-force exclusie, LLM-pas voor nuance, expliciete mix-instructies om extreme uitkomsten te voorkomen
- "Zoek de overlap, niet de som" — twee thema's combineren vraagt AND-logica, geen OR
- Tester-feedback met één korte zin ("te breed") kan diepgaande ontwerpconsequenties hebben

**Bronmateriaal:**
- `docs/projectlog.md` sectie 7 → "ORM-tab te brede selectie"
- Git-commits `998e413`, `15bf52f`, `621502f`

---

## 9. Cyclus 4 — Stats-bar & mix-eis (9-10 mei 2026)

**Status:** 🟡 materiaal aanwezig, nog te schrijven

**Doel:** beschrijven hoe consistentie-issues in de UI en LLM-gedrag werden opgelost.

**In te vullen:**

**Probleem 1:** stats-bar (totaal/NL/INTL) was alleen op tabs Algemeen en ORM — niet op Onderwijs en Vakgebied. Inconsistentie.

**Probleem 2:** Tabs Algemeen en Onderwijs trokken scheef naar alleen NL, omdat ze geen mix-instructie kregen (alleen ORM had die in eigen prompt).

**Oplossingen:**
- Stats-bar uitgerold over alle 4 tabs, `updateNewsStats` herschreven naar prefix-map
- Algemene `aiTerms`-regex uitgebreid met moderne AI-namen
- Mix-eis verplaatst naar generieke prompt-onderdeel, aangescherpt van "Streef naar" → "MINIMAAL"
- Service worker cache v2 → v3

**Resultaat:** Onderwijs van 1 INTL → 5 INTL; Algemeen van 1 → 5; ORM blijft op 5; stats-bar consistent.

**Ontwerpkennis:**
- LLM-instructies met "Streef naar..." worden vaak genegeerd; "MINIMAAL X" met expliciet aantal werkt beter
- UI-componenten verdienen consistentie over alle vergelijkbare schermen
- Service worker cache-bumping is essentieel bij elke significante frontend-wijziging in een PWA

**Bronmateriaal:**
- `docs/projectlog.md` sectie 7 → "Stats-bar ontbrak op onderwijs/vakgebied" en "Algemene tabs trokken scheef"
- Git-commits `ce30c22`, `dc037dc`

---

## 10. Cyclus 5 — Brede uitrol & feedback-ronde (juni-juli 2026)

**Status:** 🟡 in uitvoering — uitrol-mail verstuurd 10 mei, deadline reacties 1 juli

**Doel:** beschrijven hoe de bredere implementatie verloopt en welke data dit oplevert.

**In te vullen (na 1 juli):**
- Brede uitrol-mail aan vakverantwoordelijken (10 mei 2026), gecombineerd met handleiding *"Zeker Toetsen in AI-tijden"*
- Bewuste keuze: feedback-knop nog niet gebouwd in eerste mail — collega's bouwen eerst gebruikservaring op
- Gebruikersgegevens van Render (page-views, fetch-counts) — nog te verzamelen
- Tweede ronde: feedback-knop + Google Form (juli/augustus)
- Verzamelde feedback en analyses

**Bronmateriaal:**
- `docs/projectlog.md` sectie 6 → brede uitrol
- Verstuurde mail (kopie te bewaren)
- Toekomstige Google Form-responses

---

## 11. Resultaten & ontwerpkennis

**Status:** 🔴 leeg

**Doel:** systematisch presenteren wat de cycli hebben opgeleverd, en welke generaliseerbare lessen we eruit halen.

**In te vullen:**

**11.1 Meetbare resultaten per cyclus**
- Tabel met pre/post-metrics: artikelvolume, NL/INTL-verhouding, relevantie-score, etc.

**11.2 Kwalitatieve resultaten**
- Tester-citaten (geanonimiseerd)
- Hoe feedback heeft geleid tot welke aanpassing

**11.3 AI-Nieuws als scaffold voor docenten — terugkoppeling op theoretisch kader**

De rode draad uit hoofdstuk 3.4 (AI als scaffold, niet als shortcut) wordt hier expliciet teruggekoppeld op het ontwerp:

- AI-Nieuws **neemt geen denkwerk over**: het cureert (zoeken), filtert (selecteren) en vat samen (lezen verlichten) — maar de docent leest de artikelen zelf, oordeelt over relevantie, en integreert in lesmateriaal
- AI-Nieuws **biedt structuur**: vier tabs als didactische kapstok (algemeen → vakgebied → onderwijs → ORM), chat als sparringpartner voor verdieping
- AI-Nieuws **versterkt AI-geletterdheid van docenten**: door dagelijks contact met AI-output, en zichtbaar maken van hoe Claude bronnen samenvat, ontwikkelen docenten zelf gevoel voor wat AI wel/niet betrouwbaar doet
- Daarmee functioneert het ontwerp als *toegepast voorbeeld* van Kosmyna's (2025) "tweede denker"-principe en Chen's (2025) scaffolded instructieontwerp — getransponeerd van student-context naar docent-context

**11.4 Ontwerpprincipes (generaliseerbare ontwerpkennis)**
Voorlopige lijst, te verfijnen:
1. **Combineer regex + LLM voor smalle thema's** — regex doet de brute-force exclusie, LLM doet de nuance-selectie
2. **Expliciete LLM-instructies werken beter dan zachte hints** — "MINIMAAL X" beats "streef naar"
3. **Platform-restricties dwingen tot creativiteit** — Hanze blokkeert mailto-deeplinks → Google Form als alternatief
4. **TAM-simulatie als pre-test is goedkoop en effectief** — voor kleine teams een waardevolle tussenstap voor echte gebruikerstest
5. **PWA-cache-versies altijd bumpen bij significante UI-wijzigingen** — anders zien geïnstalleerde gebruikers niets veranderen
6. **Tester-feedback met één zin kan diepgaande ontwerpconsequenties hebben** — luister naar "te breed", niet naar "wat zou je liever zien"
7. **Mix-eisen voorkomen LLM-extremiteiten** — anders kiest LLM consistent één extreme (alles NL of alles INTL)
8. **Scaffold-ontwerp boven shortcut-ontwerp** — bij AI-tools voor professionals: ontwerp expliciet zo dat de eindgebruiker de denkverantwoordelijkheid behoudt; voorkomt cognitive offloading en bouwt AI-geletterdheid op
9. **(meer toe te voegen na verdere cycli)**

---

## 12. Discussie

**Status:** 🔴 leeg

**Doel:** resultaten in context plaatsen, vergelijken met literatuur, beperkingen erkennen.

**In te vullen:**
- Wat dragen onze bevindingen bij aan TAM-literatuur?
- Hoe verhoudt deze studie zich tot eerdere DBR-studies in HE?
- Wat betekenen onze ontwerpprincipes voor andere opleidingen?
- Beperkingen: kleine N (één opleiding, één lectoraat); ontwerper en onderzoeker zijn dezelfde persoon (zie reflectie); AI-tools veranderen snel, dus context-verouderingsrisico

---

## 13. Conclusie & aanbevelingen

**Status:** 🔴 leeg

**Doel:** kort terugkoppelen op onderzoeksvraag, aanbevelingen voor praktijk en vervolgonderzoek.

**In te vullen:**
- Korte beantwoording hoofd- en subvragen
- Aanbevelingen voor de Hanzehogeschool: implementeren in andere opleidingen?
- Aanbevelingen voor andere HE-instellingen: wat over te nemen, wat te vermijden?
- Aanbevelingen voor vervolgonderzoek: longitudinaal effect, andere vakgebieden, kwantitatief TAM-onderzoek met grotere N

---

## 14. Reflectie

**Status:** 🔴 leeg

**Doel:** kritische zelfreflectie op rol als ontwerper-onderzoeker.

**In te vullen:**
- **Drievoudige rol**: docent ORM (gebruiker-perspectief) + verantwoordelijke voor AI-beleid van de opleiding (institutioneel perspectief) + ontwerper-onderzoeker (DBR-perspectief). Verklaren hoe deze rollen elkaar versterken én potentieel bias introduceren — bv. eigen overtuigingen uit *AI in het hoger onderwijs* (Coene, 2026) hebben de ontwerpkeuzes voor AI-Nieuws gekleurd
- Inzet van AI (Claude) bij zowel ontwerp als rapportage — methodologische verantwoording in lijn met de richtlijnen uit eigen handleiding *"Zeker Toetsen in AI-tijden"* (Coene, 2025) sectie 2: welke prompts, welke output, hoe verwerkt
- Mitigaties tegen bias: open broncode, gedetailleerd projectlog, externe review (Harald Pol)
- Wat ik anders zou doen
- Persoonlijke ontwikkeling (AI-geletterdheid, ontwerpvaardigheid)

---

## 15. Referenties

**Status:** 🔴 leeg

**Doel:** academische bronvermelding (APA 7e).

**Voorlopige kern-referenties (te verifiëren en aan te vullen):**

*DBR & TAM (nog toe te voegen vanuit dit skelet):*
- Davis, F. D. (1989). Perceived usefulness, perceived ease of use, and user acceptance of information technology. *MIS Quarterly*, 13(3), 319-340.
- McKenney, S., & Reeves, T. C. (2018). *Conducting educational design research* (2nd ed.). Routledge.
- Plomp, T. (2013). Educational design research: An introduction. In T. Plomp & N. Nieveen (Eds.), *Educational design research – Part A: An introduction* (pp. 11-50). SLO.
- Venkatesh, V., Thong, J. Y. L., & Xu, X. (2012). Consumer acceptance and use of information technology: Extending the unified theory of acceptance and use of technology. *MIS Quarterly*, 36(1), 157-178.
- Wang, F., & Hannafin, M. J. (2005). Design-based research and technology-enhanced learning environments. *Educational Technology Research and Development*, 53(4), 5-23.

*AI in HE & scaffold-perspectief (overgenomen uit Coene, 2026 — bronnenlijst essay):*
- Al-Ajlan, A., Alotaibi, F., & Alshahrani, A. (2024). AI in higher education: A systematic literature review. *Frontiers in Education*, 9, Article 1391485.
- Ayan, M., Demir, A., & Yildiz, E. (2025). Exploring artificial intelligence literacy and engagement in higher education. *International Journal of Information and Education Technology*.
- Chen, L., Wang, X., & Liu, Y. (2025). The cognitive impact of ChatGPT in higher education: A systematic review of critical and creative thinking outcomes. *Computers & Education: Artificial Intelligence*.
- Coene, L. (2026). *AI in het hoger onderwijs: Kansen, risico's en didactische randvoorwaarden*. Hanzehogeschool Groningen, opleiding ORM (intern document, beperkt extern verspreid).
- Coene, L. (2025). *Zeker Toetsen in AI-tijden: Handleiding voor vakverantwoordelijken binnen de opleiding ORM*. Hanzehogeschool Groningen.
- Guo, Y. et al. (2025). The effect of ChatGPT on students' learning performance, learning perception, and higher-order thinking: Insights from a meta-analysis. *Humanities and Social Sciences Communications*, 12, Article 604.
- Karaman, M., & Bahar, M. (2025). Mapping the scaffolding of metacognition and learning by AI tools in STEM classrooms: A bibliometric–systematic review approach (2005–2025). *Brain Sciences*, 13(11), 148.
- Kosmyna, N., et al. (2025). *Your brain on ChatGPT: Accumulation of cognitive debt when using an AI assistant for essay writing task*. arXiv:2506.08872.
- Ma, B., et al. (2025). *Scaffolding metacognition in programming education: Understanding student–AI interactions and design implications*. arXiv:2511.04144.
- Schep, M., et al. (2025). *Generatieve AI in hoger onderwijs: werkveld, docenten en studenten*. Hanzehogeschool Groningen / HBO Kennisbank.
- Sullivan, M., Green, H., & Patel, R. (2025). Assessment and learning outcomes for generative AI in higher education. *Studies in Higher Education*.
- UNESCO. (2024). *AI competency framework for teachers* (F. Miao & M. Cukurova). UNESCO.
- Universiteit van Amsterdam & Vrije Universiteit Amsterdam. (2025). *AIMES: AI Maturity in Education Scan*.

*Studeercrisis-context (uit Coene, 2026):*
- Dekker, I. (2026). De studeercrisis: Werk aan de fundering van hoger onderwijs [presentatie]. Hogeschool van Amsterdam.
- Hornstra, L. (2026). Studeercrisis: Hoe creëer je een motiverende leeromgeving? [presentatie]. Universiteit Utrecht.
- Jolles, J. (2026). De lerende student: werk in uitvoering [presentatie]. PraktijkNeuroPsy & VU Amsterdam.

*Volledige bronnenlijst van Coene (2026) voor verdere selectie zie bijlage G2.*

---

## 16. Bijlagen

**Status:** 🔴 leeg

**In te vullen:**
- A. TAM-vragenlijst (gebruikt in cyclus 2-simulatie + later in feedback-form)
- B. Tester-feedback verbatim, geanonimiseerd
- C. Voorbeelden van ontwerpiteraties (screenshots / code-snippets)
- D. Google Form-vragen (na opzet)
- E. Verzamelde gebruiksdata
- F. Verstuurde mailcommunicatie (uitnodigingen, brede uitrol)
- **G1.** Handleiding *"Zeker Toetsen in AI-tijden"* (Coene, 2025) — bijdrage aan toetsing-component van bredere AI-werk binnen ORM
- **G2.** Essay *"AI in het hoger onderwijs: Kansen, risico's en didactische randvoorwaarden"* (Coene, 2026) — theoretisch fundament en bredere positionering binnen Hanze AI-beleid

---

## Volgende stappen (werkproces)

1. **Skelet door Lex bekijken** — kloppen secties? Iets toevoegen/weghalen?
2. **Overleg met Harald Pol** — feedback op opzet, voorkeur tijdschrift
3. **Per sectie inhoudsfase:**
   - Bronmateriaal verzamelen (projectlog, commits, mails)
   - Concept schrijven in eigen .md-bestand (`hoofdstuk-N-titel.md`)
   - Lex review → revisie → 🟢 concept klaar
4. **Eindredactie:** alle losse hoofdstukken samenvoegen, abstract schrijven, bijlagen samenstellen
5. **Externe review:** Harald Pol, eventueel collega-onderzoeker
6. **Tijdschrift-aanpassing:** opmaak en lengte aan eisen tijdschrift aanpassen
