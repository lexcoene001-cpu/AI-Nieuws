# Changelog — ORM AI Nieuws Onderzoeksrapport

Versies van het rapport, met wat per versie is gewijzigd. Werkdocument — voor Lex' overzicht en voor versterkbeheer met Harald Pol.

---

## Te verwerken in v0.3 (na Harald-feedback)

- **UptimeRobot-incident 12 mei 2026** als illustratie meenemen in **H11 (Cyclus 5)** als operationele subsectie 11.1.4 (of vergelijkbaar): monitoring-tool ontdekte HTTP-conformiteits-probleem (HEAD-method niet ondersteund door server.js). Methodisch interessant want monitoring fungeert als geautomatiseerde tester die een structureel probleem onthult dat menselijke testers niet zouden vinden — past bij DBR-traditie waarin meerdere tester-kanalen verschillende klassen issues blootleggen.
- **Nieuw ontwerpprincipe 10** in **H12.4**: *"HTTP-conformiteit voor publieke endpoints — een correcte HTTP-server hoort HEAD te ondersteunen voor élke URL die GET ondersteunt (RFC 7231). Voor monitoring-tools (UptimeRobot, curl -I) en link-checkers maakt dit het verschil tussen werkende en valse-positieve checks."*
- **Bijlage E** (gebruiksdata) kan nu deels gevuld worden met UptimeRobot-data (uptime-percentages, response times) — naast de geplande server-side page-view-logging.
- **Sectie 5 (Methodologie)**: dataverzameling-tabel uitbreiden met UptimeRobot als kwantitatieve bron voor uptime-percentages per cyclus.

### Installeer-banner-iteratie (15 mei 2026) als sub-cyclus opnemen in H11 (Cyclus 5)

- **Aanleiding**: tester-input via Apple-notitie ("kan de website een app worden, de mobiele versie werkt heel goed?") — typische DBR-observatie dat een feature pas een feature is als gebruikers 'm kunnen vinden. De PWA was al sinds cyclus 1 installeerbaar via "Voeg toe aan beginscherm", maar onzichtbaar voor niet-technische gebruikers.
- **Ontwerpkeuze**: gekozen voor zichtbare in-product-prompt (header-knop + dismissible banner met platform-specifieke instructie-modal), niet voor native wrapper (Capacitor/PWA-builder). Afweging: bewuste PWA-keuze uit cyclus 1 (geen App Store-flow, geen Apple Developer Account) blijft intact; vindbaarheidsprobleem wordt op UI-niveau opgelost. Bouwkost <1 uur vs ~weken voor een native wrapper-track.
- **Configuratie**: cooldown 3 dagen (constante `INSTALL_BANNER_COOLDOWN_DAYS`) — bewust kort vanwege korte testperiode tot 1 juli, na vragenlijst-data te evalueren naar 7d/14d voor lange termijn.
- **Iteratie binnen de iteratie (methodisch interessant)**: na lokale verificatie in preview-server (Chromium desktop) en deploy naar Render testte Lex zelf op iPad in Safari — geen banner, geen knop. Diagnose onthulde een platformspecifieke bug: moderne iPadOS Safari rapporteert zich met "Macintosh" in de user-agent (sinds iPadOS 13, default met "Vraag om bureaubladsite"), waardoor de Mac-Safari-uitsluiting (die de banner correct verbergt op Mac Safari, omdat daar geen PWA-installatie mogelijk is) iPad-gebruikers per ongeluk ook ving. Fix via `navigator.maxTouchPoints`-feature-detectie (Mac: 0-1, iPad: 5+). Bevestigd op iPad — installatie via iOS-stappen geslaagd.
- **Methodische reflectie voor H5 (Methodologie) en H15 (Reflectie)**: de ontwerper-onderzoeker als eerste end-user-tester op meerdere apparaten onthulde tijdens cyclus 5 een bug die preview-server-verificatie (Chromium desktop) niet zou vinden. Triangulatie van testkanalen — automatische preview-server, eigen apparaat-test, collega-tester-feedback — onthult verschillende klassen issues. Past in DBR-traditie waarin evaluatie in de echte gebruikscontext essentieel is.
- **Mogelijke ontwerpprincipes voor H12.4** (afwegen met Lex):
  - *Vindbaarheid > technische correctheid* — "een correct geïmplementeerde browser-feature die niet zichtbaar is in de UI, is geen feature voor niet-technische gebruikers; een (dismissable) in-product prompt wel."
  - *Platform-detectie aanvullen met feature-detectie* — "user-agent-strings alleen zijn fragiel (iPadOS sinds versie 13 rapporteert als Macintosh). Combineren met DOM-feature-detectie (`navigator.maxTouchPoints`, `'ontouchstart' in window`) maakt platform-keuzes robuust."
- **Cyclus-data**: na vragenlijst-verwerking (na 1 juli) kunnen we banner-effectiviteit kwantificeren — hoeveel testers installeerden de PWA als app, hoe vaak werd de banner gedismissd, hoeveel keer triggerde de cooldown een herhaalprompt. localStorage-data niet centraal verzamelbaar (privacy-vriendelijk uit cyclus 1), dus deze data komt via TAM-vragenlijst-vragen of mondelinge feedback.

---

## v0.2 — 11 mei 2026 (uitgebreid concept met cyclus 0)

**Status:** concept-versie voor inhoudelijke feedback van Harald Pol (lectoraat Hanzehogeschool Groningen)

**Belangrijkste wijzigingen t.o.v. v0.1:**

1. **Cyclus 0 toegevoegd** (nieuw H6) — pre-Claude-Code-fase (mei 2025 – half april 2026): ChatGPT-experiment, migratie naar Google AI Studio, eerste tester-uitnodiging aan drie ORM-collega's (9 april 2026), kritische 404-feedback van Ties → besluit tot fundamentele herbouw in Claude Code. Versterkt DBR-coherentie aanzienlijk.
2. **Cyclus 1 herzien** (was H6, nu H7) — beschrijft nu Claude Code-herbouw + Ties' tweede feedback (15 april 2026, 'te brede selectie' op Onderwijs-tab) + brede tester-uitnodiging eind april. Mooi: Ties' tweede feedback toont al hetzelfde structurele filterprobleem dat in cyclus 3 fundamenteel wordt aangepakt.
3. **Hoofdstuk-renumbering**: H6 t/m H10 (cycli) → H7 t/m H11; H11 t/m H16 (syntheses) → H12 t/m H17. Cyclus-nummering: 1-5 → 0-5.
4. **Twee aanvullende eigen werken** (Coene, 2024 en Coene, 2026b) opgenomen als context-bronnen. Studiehandleiding *Project Innovatiemanagement en Design Thinking/onderzoek* in H5 §5.1.1 (methodologische continuïteit) en H15 §15.1 (viervoudige rol). Notitie *AI als leercoach: Claude Enterprise in het onderwijs* in H3 §3.3.2 (scaffold-perspectief op studentniveau) en als bijlage G3.
5. **Viervoudige rol** in plaats van drievoudige rol uitgewerkt in H15 §15.1: docent + beleidsverantwoordelijke + ontwikkelaar van design-based onderwijs + ontwerper-onderzoeker.
6. **Coene 2026 hernoemd** naar Coene 2026a (essay) om onderscheid met Coene 2026b (notitie leercoach) mogelijk te maken.
7. **Cyclus 5-mailcommunicatie** in bijlage F bijgewerkt: 9-april-mail (AI Studio) en 29-april-uitnodiging (Claude Code) toegevoegd naast 10-mei-uitrol.
8. **Bijlage B** nu gedeeltelijk beschikbaar: twee Ties-mails (404-feedback + te brede selectie) verbatim opgenomen.
9. **Nico verwijderd** als beta-tester in H5 §5.2.2 — was aanname, blijkt onjuist.

**Wat blijft gelijk:**
- Theoretisch kader (DBR + TAM + scaffold + curatie)
- Methodologie-opzet
- Negen ontwerpprincipes
- Cyclus 5-data nog open (na 1 juli 2026)
- Bronnen-check nog open (zie bronnen-werkbestand)

---

## v0.1 — 11 mei 2026 (compleet concept)

**Status:** concept-versie voor inhoudelijke feedback van Harald Pol (lectoraat Hanzehogeschool Groningen)

**Wat is af (alle 16 hoofdstukken):**
- H1 — Samenvatting / Abstract (NL + EN)
- H2 — Inleiding
- H3 — Theoretisch kader (DBR, TAM, AI als scaffold, curatie)
- H4 — Onderzoeksvraag en subvragen
- H5 — Methodologie
- H6 — Cyclus 1 (Eerste prototype, april 2026)
- H7 — Cyclus 2 (TAM-simulatie en usability-fixes, 1 mei)
- H8 — Cyclus 3 (Filter-aanscherping, 8 mei)
- H9 — Cyclus 4 (Cross-tab-consistentie en LLM-instructies, 9-10 mei)
- H10 — Cyclus 5 (Brede uitrol, in uitvoering)
- H11 — Resultaten en ontwerpkennis (9 generaliseerbare ontwerpprincipes)
- H12 — Discussie
- H13 — Conclusie en aanbevelingen
- H14 — Reflectie (drievoudige rol + AI-inzet)
- H15 — Referenties (~50 bronnen)
- H16 — Bijlagen (overzicht)
- **Samengevoegd `rapport-v0.1.docx`** met inhoudsopgave (te openen in Word)

**Wat is bewust nog open in v0.1:**
- Cyclus 5 (H10) — data wordt na 1 juli 2026 toegevoegd in v1.0
- TAM-vragenlijst, Google Form-vragen — opgesteld in juli 2026
- Gebruiksdata — beschikbaar na augustus 2026
- Bronnen-check — systematische verificatie van elke referentie op bestaan + correctheid van toegeschreven bewering. Aandachtspunten gemarkeerd in `bronnen-werkbestand.md` (Roberts jaartal, Yu et al. 2024, Wei et al. 2022 contextueel, Sahoo et al. 2024 exact citaat, Russell 2018 type publicatie).

**Bekende beperkingen v0.1:**
- Concept-toon: nog niet eindredactioneel afgewerkt
- Geen externe peer-review uitgevoerd (gepland: Harald Pol)
- Bronnenlijst leunt deels op Coene (2026) — bronnen daaruit overgenomen, eigen toevoegingen vereisen verificatie

## v0.0 — 10 mei 2026

**Skelet alleen.** Doel: structuur en richting met Lex afstemmen voordat inhoudelijk schrijven begint.

---

## Werkwijze versiebeheer

- **Bron**: markdown in `docs/onderzoek/markdown/` (één bestand per hoofdstuk + samengevoegd `rapport-vX.Y.md`)
- **Output**: Word (`.docx`) in `docs/onderzoek/word/` per hoofdstuk + samengevoegd `rapport-vX.Y.docx`
- **Conversie**: `pandoc <input>.md -o <output>.docx --from markdown --to docx --standalone`
- **Versienummering**: `v0.X` voor pre-Harald-feedback concepten; `v1.0` na Harald-feedback verwerkt; `v1.X` voor revisies; `v2.0` voor publicatie-klare versie
- **Git-tags**: `git tag -a rapport-v0.1 -m "Eerste concept voor Harald"` per release
- **CHANGELOG bijwerken** bij elke versie-bump
