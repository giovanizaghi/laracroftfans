# Content Pipeline

This directory is the **source of truth** for all translatable content.

## Structure

```
content/
  games/
    <slug>/
      metadata.json    # Non-translatable game data
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
      "eventDate": "1996-10-25"
    }
  ]
}
```

## Scripts

- `npm run content:import` — Import markdown into the database
- `npm run content:export` — Export database content to markdown

## Workflow

1. Edit markdown files
2. Open a pull request for review
3. After merge, run `npm run content:import`
4. Database is updated from markdown source
