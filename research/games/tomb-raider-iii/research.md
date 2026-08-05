# Research: Tomb Raider III: Adventures of Lara Croft

Research completed for the original 1998 game. This file documents evidence decisions; all published EN/PT content and normalized entity records are imported into PostgreSQL from `content/games/tomb-raider-iii/`.

## Scope

- Included: original Windows and PlayStation game released in 1998.
- Recorded separately: 1999 Macintosh port.
- Related, not merged: 2000 six-level expansion _The Lost Artifact_.
- Related, not merged: digital reissues and _Tomb Raider I-III Remastered_ (2024).
- Images intentionally omitted in this pass.

## Release Record

| Field                | Finding                                                         |
| -------------------- | --------------------------------------------------------------- |
| Official full title  | Tomb Raider III: Adventures of Lara Croft                       |
| Canonical site date  | November 23, 1998                                               |
| Regional evidence    | Europe commonly November 20; North America commonly November 24 |
| Original platforms   | Windows, PlayStation                                            |
| Later Macintosh port | October 22, 1999 in North American release records              |
| Developer            | Core Design Ltd.                                                |
| Original publisher   | Eidos Interactive Limited                                       |
| Producer             | Troy Horton                                                     |
| Engine               | Enhanced proprietary Core Design engine                         |

The current official product page gives November 23 without regional separation. Later specialist records commonly use November 20 for Europe and November 24 for North America. The database uses November 23 for the main `Game.releaseDate` and preserves the other dates in normalized release records with evidence notes.

## Playable Structure

| Category                   | Count | Notes                                                       |
| -------------------------- | ----: | ----------------------------------------------------------- |
| Story levels               |    19 | India 4, Nevada 3, South Pacific 4, London 4, Antarctica 4  |
| Training levels            |     1 | Lara's Home                                                 |
| Bonus levels               |     1 | All Hallows                                                 |
| Displayed playable entries |    21 | Training + story + bonus                                    |
| Classic secret requirement |    59 | Unlocks All Hallows                                         |
| Reachable secret triggers  |    60 | Coastal Village permits 4 although classic statistics say 3 |
| Weapons                    |     8 | Pistols are the only unlimited-ammunition weapon            |
| Vehicle types              |     5 | Quad bike, kayak, UPV, inflatable boat, mine cart           |

India is mandatory first. Nevada, South Pacific, and London can then be selected in any order. Antarctica unlocks after the three middle regions are finished. Therefore a single display order is editorial, not a claim that the middle chapters are linear.

### Levels and Classic Secret Counts

|    Order | Level                  | Region        |                    Count |
| -------: | ---------------------- | ------------- | -----------------------: |
| Training | Lara's Home            | Croft Manor   |                        0 |
|        1 | Jungle                 | India         |                        6 |
|        2 | Temple Ruins           | India         |                        4 |
|        3 | The River Ganges       | India         |                        5 |
|        4 | Caves of Kaliya        | India         |                        0 |
|        5 | Nevada Desert          | Nevada        |                        3 |
|        6 | High Security Compound | Nevada        |                        2 |
|        7 | Area 51                | Nevada        |                        3 |
|        8 | Coastal Village        | South Pacific | 3 reported / 4 reachable |
|        9 | Crash Site             | South Pacific |                        3 |
|       10 | Madubu Gorge           | South Pacific |                        3 |
|       11 | Temple of Puna         | South Pacific |                        1 |
|       12 | Thames Wharf           | London        |                        5 |
|       13 | Aldwych                | London        |                        5 |
|       14 | Lud's Gate             | London        |                        6 |
|       15 | City                   | London        |                        1 |
|       16 | Antarctica             | Antarctica    |                        3 |
|       17 | RX-Tech Mines          | Antarctica    |                        3 |
|       18 | Lost City of Tinnos    | Antarctica    |                        3 |
|       19 | Meteorite Cavern       | Antarctica    |                        0 |
|    Bonus | All Hallows            | London        |                        0 |

The level table in the database stores Coastal Village as three secrets because that is the original counter contribution. A note records the fourth physical trigger. This yields the original unlock total of 59 without denying the reachable 60th secret.

## Story Evidence

The official meteorite retrospective and preserved transcript agree on the main chain:

1. Polynesian settlers build Tinnos around the Antarctic meteorite.
2. Four artifacts are carved: Infada Stone, Element 115, Ora Dagger, Eye of Isis.
3. Stephen Barr, Paul Caulfield, Smythe, Henderson, and Jonson find them in 1834 while serving the Beagle expedition.
4. Caulfield dies during the escape; the remaining artifacts disperse.
5. Tony finds and embeds the Infada Stone in India.
6. Willard recruits Lara to recover the other three.
7. Element 115 is in Area 51, the Ora Dagger with Puna, and the Eye of Isis with Sophia Leigh.
8. Willard uses all four in Antarctica and becomes a spider-like mutant.

The Hand of Rathmore is not a fifth collectible in the 1998 campaign. Official current lore explicitly places it after Tomb Raider III, in _The Lost Artifact_.

## Character Identity Decisions

- The South Pacific speaker is stored as `Wounded Australian Commander`; the transcript does not name him.
- He is not Commander Bishop. Bishop and Lieutenant Tuckerman are dead officers identified by keys in Crash Site.
- The Damned leader is displayed as Bob. The preserved descriptive transcript says Robert Smith; current official lore says Geordie Bob; shipped dialogue uses Bob.
- Winston is displayed without the surname Smith because the shipped credit does not use it.
- The official retrospective spells Beagle sailor `Jonson`; the archive preserves that spelling.
- Charles Darwin is a referenced historical character, not an on-screen participant.
- Kuru is used for the South Pacific location because that spelling appears in Core Design's level record. Current official lore uses Kuro, so the discrepancy is marked as a source conflict.

## Artifact Name Conflict

Some original regional versions interchange the inventory labels `Element 115` and `Ora Dagger`. The story placement used here follows current official lore and level records:

- Area 51: Element 115;
- Temple of Puna: Ora Dagger.

The mismatch is a version-label conflict, not evidence that the two objects share one canonical identity.

## Platform Differences

- PlayStation: a collected save crystal is consumed for each save.
- Windows/Macintosh: save anywhere without consuming crystals.
- PC/Mac crystals: small health restoration.
- Original graphics and effects vary by platform and hardware acceleration.

This prevents the frequent error of describing the PlayStation save economy as universal.

## Development Findings

The 1998 programming interview says the team began a new project in October 1997, was asked to make TR3 in December, and completed it in roughly eleven months. Production was PlayStation-led even though level authoring occurred on PC.

The engine was extended, not rewritten from scratch. Documented changes include:

- triangular level geometry;
- colored lighting;
- transparent, reflective, rippling water;
- smoke, mist, shafts of light, snow, rain, and wind;
- footprints and surface-dependent sounds;
- more complex NPC interactions and guard behavior;
- sprint, crouch, crawl, and overhead traversal.

Pre-release material promised broader alternate routing. Andy Sandham later said many routes were removed because of time pressure. Peru appears on beta globe material but is not a shipped region.

All Hallows was originally intended to follow Thames Wharf inside St Paul's. Sandham cited memory constraints and extreme difficulty when explaining why it became the unlockable bonus level.

## Original Credits

| Role                     | Credit                                                  |
| ------------------------ | ------------------------------------------------------- |
| PC Programmer            | Richard Flower                                          |
| Programmers              | Chris Coupe; Martin Gibbins                             |
| AI Programming           | Tom Scutt                                               |
| Additional Programming   | Jurjen Katsman                                          |
| Animators                | Phil Chapman; Jer O'Carroll; Darren Wakeman             |
| Level Designers          | Pete Duncan; Jamie Morton; Richard Morton; Andy Sandham |
| FMV Sequences            | Peter Barnard; David Reading                            |
| Additional Artwork       | Matt Charlesworth; Mark Hazleton                        |
| Music                    | Nathan McCree                                           |
| Sound Effects            | Martin Iveson                                           |
| Additional Sound Effects | Matthew Kemp; Peter Connelly                            |
| Script                   | Vicky Arnold                                            |
| Producer                 | Troy Horton                                             |
| Executive Producers      | Jeremy H. Smith; Adrian Smith                           |

The manual spellings are used for the normalized credit rows. The preserved English credit screen explicitly lists Judith Gibbins as Lara and Sophia, Simon Greenall as Bob, and Nathan McCree as Winston. It does not cleanly assign every other male role, so no unsupported voice mapping is added.

## Sales and Rating

A 2009 Square Enix corporate chart places Tomb Raider III at approximately 5.9 million units. The chart is rounded, so `exactly 5.9 million audited lifetime sales` is too strong.

The ESRB record gives `T`, with `Animated Blood` and `Violence`. The current official franchise page renders `Animated Blood` and `Animated Violence`. The rating is stable; the descriptor wording differs.

## Fact Classification Summary

| Claim                              | Status                    | Finding                                  |
| ---------------------------------- | ------------------------- | ---------------------------------------- |
| Original year is 1998              | Confirmed                 | Yes                                      |
| One uncontested worldwide date     | Source conflict           | Official page 23; regional records 20/24 |
| 19 story + 1 training + 1 bonus    | Confirmed                 | Yes                                      |
| Exactly 59 physical secrets        | Qualified                 | 59 counter, 60 reachable                 |
| India can be skipped               | Myth                      | India is fixed first                     |
| PC consumes save crystals          | Myth                      | PlayStation only                         |
| Four base artifacts                | Confirmed                 | Yes                                      |
| Hand of Rathmore is in base game   | Later continuity / false  | Expansion only                           |
| Wounded commander is Bishop        | Myth                      | Speaker unnamed; Bishop dead             |
| Peru shipped                       | Draft-only / false retail | Beta material only                       |
| Engine rewritten from scratch      | Myth                      | Existing engine extended                 |
| Difficulty designed to sell guides | Unsupported               | No developer evidence found              |
| Exactly 5.9m audited sales         | Qualified                 | Rounded corporate chart                  |

## Sources

| Source                            | URL                                                                                                        | Evidence use                                                           |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Official product page             | https://www.tombraider.com/products/games/tomb-raider-iii-adventures-of-lara-croft                         | Full title, official date, developer, synopsis, current rating display |
| Original PC manual                | https://tombraiders.net/stella/files/manuals/TR3/Tomb_Raider_3_PC.pdf                                      | Story setup, controls, vehicles, save behavior, credits                |
| Core transcripts and credits      | https://core-design.com/goodies_tr3_transcripts.html                                                       | Dialogue, character names, ending, voice and development credits       |
| Core levels overview              | https://core-design.com/goodies_tr3_levelsoverview.html                                                    | Level order, regions, secrets, pickups, enemy rosters                  |
| Official meteorite artifacts lore | https://www.tombraider.com/news/video-games/tomb-raider-i-iii-remastered-lore-the-five-meteorite-artifacts | Tinnos, Beagle sailors, four artifacts, Hand of Rathmore scope         |
| Official SLinc and Damned lore    | https://www.tombraider.com/news/video-games/tomb-raider-i-iii-remastered-lore-slinc-and-the-damned         | Sophia, Eye of Isis, Bob, experiments                                  |
| Official bonus-level feature      | https://www.tombraider.com/news/video-games/tomb-raider-i-iii-remastered-bonus-levels                      | All Hallows origin and unlock                                          |
| 1998 developer preview            | https://core-design.com/interview7.html                                                                    | Region order, vehicles, weapons, geometry, save options                |
| 1998 programming interview        | https://core-design.com/interview15.html                                                                   | Eleven-month schedule, PlayStation-led work, AI and engine changes     |
| Andy Sandham interview            | https://core-design.com/interview2.html                                                                    | Removed routes, beta Peru, TARDIS reference, All Hallows               |
| Subtitle interview                | https://core-design.com/interview8.html                                                                    | Five-adventure meaning of subtitle                                     |
| Stella's TR3 record               | https://tombraiders.net/stella/tomb3.html                                                                  | Platform differences, arsenal, moves, regions, level list              |
| Stella's Coastal Village guide    | https://www.vps.tombraiders.net/stella/walks/TR3walk/P1-coastal-village.html                               | 59/60 secret explanation                                               |
| ESRB record                       | https://www.esrb.org/ratings/39288/tomb-raider-iii-adventures-of-lara-croft/                               | T rating and descriptors                                               |
| Square Enix 2009 presentation     | https://www.hd.square-enix.com/eng/ir/pdf/20090422_02en.pdf                                                | Rounded sales chart                                                    |
| Lost Artifact release record      | https://gamefaqs.gamespot.com/pc/199050-tomb-raider-the-lost-artifact/data                                 | 2000 expansion date and separate scope                                 |

## Database Implementation

The archive payload uses relational tables for releases, levels and translations, characters and game-specific descriptions, locations and game-specific descriptions, artifacts, weapons, enemies, credits, ratings, sources, fact checks, fact-source links, and related releases. `bonusLevelCount` and `GameLevel.isBonus` were added so All Hallows is not mislabeled as story or training. Enemy categories `MUTANT` and `MECHANICAL` were added so Tinnos/Damned creatures and Area 51 turrets are represented accurately. No JSON/JSONB content archive is stored in PostgreSQL.
