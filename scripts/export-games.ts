import { PrismaClient } from "@prisma/client";
import * as fs from "node:fs";
import * as path from "node:path";

const prisma = new PrismaClient();
const CONTENT_DIR = path.resolve(__dirname, "../content/games");
const SUPPORTED_LOCALES = ["en", "pt"];
const BASE_LOCALE = "en";

// --- Formatters ---

function toMarkdown(data: {
  title: string;
  shortDescription: string;
  fullDescription: string;
  story: string;
  gameplay: string;
  development: string;
  legacy: string;
  characters: string;
  locations: string;
  levels: string;
  factCheck: string;
  trivia: string[];
}): string {
  const lines: string[] = [];

  lines.push("---");
  lines.push(`title: "${data.title}"`);
  lines.push(`shortDescription: "${data.shortDescription}"`);
  lines.push("---");
  lines.push("");
  lines.push(data.fullDescription);
  lines.push("");
  lines.push("## Story");
  lines.push("");
  lines.push(data.story);
  if (data.gameplay) {
    lines.push("");
    lines.push("## Gameplay");
    lines.push("");
    lines.push(data.gameplay);
  }
  lines.push("");
  lines.push("## Development");
  lines.push("");
  lines.push(data.development);
  if (data.legacy) {
    lines.push("");
    lines.push("## Legacy");
    lines.push("");
    lines.push(data.legacy);
  }
  if (data.characters) {
    lines.push("");
    lines.push("## Characters");
    lines.push("");
    lines.push(data.characters);
  }
  if (data.locations) {
    lines.push("");
    lines.push("## Locations");
    lines.push("");
    lines.push(data.locations);
  }
  if (data.levels) {
    lines.push("");
    lines.push("## Levels");
    lines.push("");
    lines.push(data.levels);
  }
  if (data.factCheck) {
    lines.push("");
    lines.push("## Fact Check");
    lines.push("");
    lines.push(data.factCheck);
  }
  lines.push("");
  lines.push("## Trivia");
  lines.push("");
  for (const item of data.trivia) {
    lines.push(`- ${item}`);
  }
  lines.push("");

  return lines.join("\n");
}

function toMetadataJson(data: {
  slug: string;
  releaseDate: string;
  platforms: string[];
  coverImage: string;
  heroImage: string;
  timeline: {
    year: number;
    title: string;
    description: string;
    eventDate: string;
    translations?: Record<string, { title: string; description: string }>;
  }[];
}): string {
  return JSON.stringify(data, null, 2) + "\n";
}

// --- Export Logic ---

async function exportGames() {
  console.log("📤 Content Export: Starting...\n");

  const games = await prisma.game.findMany({
    include: {
      platforms: { include: { platform: true } },
      translations: true,
      timelineEvents: { include: { translations: true } }
    },
    orderBy: { releaseDate: "asc" }
  });

  if (games.length === 0) {
    console.log("No games found in database.");
    process.exit(0);
  }

  // Ensure content directory exists
  fs.mkdirSync(CONTENT_DIR, { recursive: true });

  let exported = 0;

  for (const game of games) {
    const gameDir = path.join(CONTENT_DIR, game.slug);
    fs.mkdirSync(gameDir, { recursive: true });

    // Export base locale (en) from Game record
    const enMarkdown = toMarkdown({
      title: game.title,
      shortDescription: game.shortDescription,
      fullDescription: game.fullDescription,
      story: game.story,
      gameplay: game.gameplay,
      development: game.development,
      legacy: game.legacy,
      characters: game.characters,
      locations: game.locations,
      levels: game.levels,
      factCheck: game.factCheck,
      trivia: game.trivia
    });
    fs.writeFileSync(
      path.join(gameDir, `game.${BASE_LOCALE}.md`),
      enMarkdown,
      "utf-8"
    );

    // Export translations
    for (const translation of game.translations) {
      if (!SUPPORTED_LOCALES.includes(translation.locale)) continue;

      const translationMarkdown = toMarkdown({
        title: translation.title,
        shortDescription: translation.shortDescription,
        fullDescription: translation.fullDescription,
        story: translation.story,
        gameplay: translation.gameplay,
        development: translation.development,
        legacy: translation.legacy,
        characters: translation.characters,
        locations: translation.locations,
        levels: translation.levels,
        factCheck: translation.factCheck,
        trivia: translation.trivia
      });
      fs.writeFileSync(
        path.join(gameDir, `game.${translation.locale}.md`),
        translationMarkdown,
        "utf-8"
      );
    }

    // Export metadata.json
    const timeline = game.timelineEvents.map((event) => ({
      year: event.year,
      title: event.title,
      description: event.description,
      eventDate: event.eventDate.toISOString().split("T")[0],
      ...(event.translations.some(
        (translation) => translation.locale !== BASE_LOCALE
      )
        ? {
            translations: Object.fromEntries(
              event.translations
                .filter((translation) => translation.locale !== BASE_LOCALE)
                .map((translation) => [
                  translation.locale,
                  {
                    title: translation.title,
                    description: translation.description
                  }
                ])
            )
          }
        : {})
    }));

    const metadata = toMetadataJson({
      slug: game.slug,
      releaseDate: game.releaseDate.toISOString().split("T")[0],
      platforms: game.platforms.map((gp) => gp.platform.name),
      coverImage: game.coverImage,
      heroImage: game.heroImage,
      timeline
    });
    fs.writeFileSync(path.join(gameDir, "metadata.json"), metadata, "utf-8");

    console.log(`✅ ${game.slug}`);
    exported++;
  }

  console.log(
    `\n📤 Export complete: ${exported} games exported to content/games/`
  );
}

// --- Main ---

exportGames()
  .catch((e) => {
    console.error("Fatal error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
