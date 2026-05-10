# Changelog — ORM AI Nieuws Onderzoeksrapport

Versies van het rapport, met wat per versie is gewijzigd. Werkdocument — voor Lex' overzicht en voor versterkbeheer met Harald Pol.

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
