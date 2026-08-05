# Content Pipeline

This directory is the **source of truth** for all translatable content.

## Structure

```
content/
  games/
    <slug>/
      metadata.json    # Non-translatable game data
      archive.ts       # Optional normalized research data imported into relational tables
      game.en.md       # English content
      game.pt.md       # Portuguese content
```

## Markdown Format

Each `game.<locale>.md` uses YAML frontmatter + markdown sections:

```markdown
---
title: "Game Title"
shortDescription: "One-line summary."
---

## Story

Story content here.

## Development

Development notes here.

## Gameplay

Optional gameplay and systems overview.

## Legacy

Optional reception, influence, and later-release context.

## Characters

Optional game-specific character record.

## Locations

Optional game-specific location record.

## Levels

Optional level list.

## Fact Check

Optional verification notes that distinguish confirmed facts, drafts, myths, and later continuity.

## Trivia

- Trivia point 1
- Trivia point 2
```

## metadata.json Format

```json
{
  "slug": "tomb-raider-1996",
  "releaseDate": "1996-10-25",
  "platforms": ["PC", "PlayStation", "Sega Saturn"],
  "coverImage": "/images/cover.png",
  "heroImage": "/images/hero.png",
  "timeline": [
    {
      "year": 1996,
      "title": "Game release event",
      "description": "Description of the event.",
      "eventDate": "1996-10-25",
      "translations": {
        "pt": {
          "title": "Evento de lançamento do jogo",
          "description": "Descrição traduzida do evento."
        }
      }
    }
  ]
}
```

Detailed research is not stored as a JSON blob. When a game has an
`archive.ts`, the importer writes its releases, levels, characters, locations,
artifacts, weapons, enemies, credits, ratings, sources, fact checks, and related
releases to their respective relational tables.

## Scripts

- `npm run content:import` — Import markdown into the database
- `npm run content:export` — Export database content to markdown

## Workflow

1. Edit markdown files
2. Open a pull request for review
3. After merge, run `npm run content:import`
4. Database is updated from markdown source
