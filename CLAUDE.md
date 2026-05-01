## Sessiestart-routine

Aan het begin van elke AI-Nieuws-sessie:

1. Lees de Apple-notitie **"To do AI nieuws site"** met de Apple Notes MCP.
2. Verplaats nieuwe items naar `docs/projectlog.md` sectie 8 (Open punten), flag duplicaten.
3. Mark verplaatste items in de notitie af met `<s>...</s> ✅`.
4. Als de notitie leeg/onveranderd is: meld dat expliciet, niet stilzwijgend overslaan.
5. Geef daarna een korte samenvatting van wat er nu open staat in projectlog sectie 8.

## Projectlog bijhouden

Aan het einde van elke werksessie waarin code, configuratie, beslissingen, monitoring, of architectuur zijn gewijzigd, MOET je proactief het projectlog updaten — wacht niet op een expliciete vraag van Lex.

Concreet:

1. Stel aan het einde van een sessie zelf voor: "Zal ik het projectlog bijwerken met wat we hebben gedaan?"
2. Als Lex 'ja' zegt (of de sessie afsluit zonder tegenspraak), update `docs/projectlog.md`:
   - Voeg toevoegingen op de juiste thematische sectie toe (architectuur, beslissingen, setup, bugs, etc.)
   - Voeg in sectie 9 (Werklog) één korte regel toe met datum en hoofdpunten
   - Push het bijgewerkte document naar GitHub als onderdeel van de sessie-afsluiting
3. Voeg nooit secrets, API-keys of wachtwoorden toe — alleen verwijzingen naar waar ze staan
4. Schrijf in het Nederlands en houd het scanbaar
5. Het projectlog is een **kaart, niet een atlas** — overzicht, geen handleiding. Concrete commando's en uitgebreide procedures horen in dedicated docs.

Zie het instructie-blok bovenin `docs/projectlog.md` voor volledige richtlijnen.

**Wanneer wel een update nodig:** code-wijzigingen, nieuwe configuratie, externe diensten ingesteld, beslissingen genomen, bugs gefixt, tests gedraaid, deploys gedaan.

**Wanneer geen update nodig:** alleen vragen beantwoorden, uitleg geven, kleine typfouten gecorrigeerd zonder functionele wijziging.
