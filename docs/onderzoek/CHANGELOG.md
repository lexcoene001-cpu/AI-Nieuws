# Changelog — ORM AI Nieuws Onderzoeksrapport

Versies van het rapport, met wat per versie is gewijzigd. Werkdocument — voor Lex' overzicht en voor versterkbeheer met Harald Pol.

---

## v0.1 — 11 mei 2026 (in opbouw)

**Status:** concept-versie voor inhoudelijke feedback van Harald Pol (lectoraat Hanzehogeschool Groningen)

**Wat is af:**
- Skelet (`markdown/rapport-skelet.md`) — 16 secties met doelstelling per sectie en bronmateriaal-verwijzingen
- Hoofdstuk 6 (Cyclus 1 — Eerste prototype, april 2026) — concept klaar in markdown + Word

**Wat is in opbouw:**
- Hoofdstuk 7 (Cyclus 2 — TAM-simulatie, 1 mei)
- Hoofdstuk 8 (Cyclus 3 — Filter-aanscherping, 8 mei)
- Hoofdstuk 9 (Cyclus 4 — Stats-bar + mix-eis, 9-10 mei)
- Hoofdstuk 3 (Theoretisch kader)
- Hoofdstuk 5 (Methodologie)
- Hoofdstuk 11 (Resultaten & ontwerpkennis)
- Hoofdstuk 12-14 (Discussie, Conclusie, Reflectie)
- Hoofdstukken 1-2 (Samenvatting, Inleiding) — als laatste, omdat deze leunen op de inhoud
- Hoofdstuk 15-16 (Referenties, Bijlagen)

**Wat is bewust nog open:**
- Hoofdstuk 10 (Cyclus 5 — Brede uitrol) — nog in uitvoering, deadline tester-reacties 1 juli
- TAM-vragenlijst en Google Form-vragen — nog te ontwerpen
- Gebruiksdata — nog te verzamelen na fase 2
- Literatuurverwijzingen — DOI's en exacte titels nog te verifiëren

**Bekende beperkingen v0.1:**
- Concept-toon: nog niet eindredactioneel afgewerkt
- Geen externe peer-review uitgevoerd
- Bronnenlijst leunt sterk op Coene (2026) — moet aangevuld worden met onafhankelijke DBR/TAM-bronnen via lectoraat-bibliotheek

---

## Werkwijze versiebeheer

- **Bron**: markdown in `docs/onderzoek/markdown/` (één bestand per hoofdstuk + samengevoegd `rapport-vX.Y.md`)
- **Output**: Word (`.docx`) in `docs/onderzoek/word/` per hoofdstuk + samengevoegd `rapport-vX.Y.docx`
- **Conversie**: `pandoc <input>.md -o <output>.docx --from markdown --to docx --standalone`
- **Versienummering**: `v0.X` voor pre-Harald-feedback concepten; `v1.0` na Harald-feedback verwerkt; `v1.X` voor revisies; `v2.0` voor publicatie-klare versie
- **Git-tags**: `git tag -a rapport-v0.1 -m "Eerste concept voor Harald"` per release
- **CHANGELOG bijwerken** bij elke versie-bump
