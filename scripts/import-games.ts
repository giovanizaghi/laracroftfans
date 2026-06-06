import { PrismaClient } from "@prisma/client";
import * as fs from "node:fs";
import * as path from "node:path";

const prisma = new PrismaClient();
const CONTENT_DIR = path.resolve(__dirname, "../content/games");
const SUPPORTED_LOCALES = ["en", "pt"];
const BASE_LOCALE = "en";

// --- Types ---

interface GameFrontmatter {
  title: string;
  shortDescription: string;
}

interface GameMarkdownContent {
  frontmatter: GameFrontmatter;
  story: string;
  development: string;
  trivia: string[];
  fullDescription: string;
}

interface TimelineEntry {
  year: number;
  title: string;
  description: string;
  eventDate: string;
}

interface GameMetadata {
  slug: string;
  releaseDate: string;
  platforms: string[];
  coverImage: string;
  heroImage: string;
  timeline?: TimelineEntry[];
}

// --- Parsers ---

function parseFrontmatter(raw: string): { frontmatter: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error("Invalid frontmatter format");
  }

  const frontmatterLines = match[1].split("\n");
  const frontmatter: Record<string, string> = {};

  for (const line of frontmatterLines) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();
    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    frontmatter[key] = value;
  }

  return { frontmatter, body: match[2] };
}

function parseMarkdownSections(body: string): { story: string; development: string; trivia: string[]; fullDescription: string } {
  const sections: Record<string, string> = {};
  let currentSection = "__intro";
  const lines = body.split("\n");

  for (const line of lines) {
    const heading = line.match(/^## (.+)$/);
    if (heading) {
      currentSection = heading[1].toLowerCase().trim();
    } else {
      sections[currentSection] = (sections[currentSection] || "") + line + "\n";
    }
  }

  const trivia: string[] = [];
  if (sections["trivia"]) {
    const triviaLines = sections["trivia"].split("\n");
    for (const tl of triviaLines) {
      const item = tl.match(/^- (.+)$/);
      if (item) {
        trivia.push(item[1].trim());
      }
    }
  }

  return {
    fullDescription: (sections["__intro"] || "").trim(),
    story: (sections["story"] || "").trim(),
    development: (sections["development"] || "").trim(),
    trivia,
  };
}

function parseGameMarkdown(filePath: string): GameMarkdownContent {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { frontmatter, body } = parseFrontmatter(raw);

  if (!frontmatter.title) {
    throw new Error(`Missing 'title' in frontmatter: ${filePath}`);
  }
  if (!frontmatter.shortDescription) {
    throw new Error(`Missing 'shortDescription' in frontmatter: ${filePath}`);
  }

  const sections = parseMarkdownSections(body);

  return {
    frontmatter: {
      title: frontmatter.title,
      shortDescription: frontmatter.shortDescription,
    },
    ...sections,
  };
}

function readMetadata(dirPath: string): GameMetadata {
  const metaPath = path.join(dirPath, "metadata.json");
  if (!fs.existsSync(metaPath)) {
    throw new Error(`Missing metadata.json in ${dirPath}`);
  }

  const raw = fs.readFileSync(metaPath, "utf-8");
  const data = JSON.parse(raw) as GameMetadata;

  if (!data.slug) throw new Error(`Missing 'slug' in ${metaPath}`);
  if (!data.releaseDate) throw new Error(`Missing 'releaseDate' in ${metaPath}`);
  if (!data.platforms || !Array.isArray(data.platforms)) throw new Error(`Missing 'platforms' in ${metaPath}`);

  return data;
}

// --- Validation ---

function validateGameContent(slug: string, content: GameMarkdownContent): string[] {
  const errors: string[] = [];

  if (!content.frontmatter.title) errors.push(`[${slug}] Missing title`);
  if (!content.frontmatter.shortDescription) errors.push(`[${slug}] Missing shortDescription`);
  if (!content.story) errors.push(`[${slug}] Missing ## Story section`);
  if (!content.development) errors.push(`[${slug}] Missing ## Development section`);
  if (content.trivia.length === 0) errors.push(`[${slug}] Missing ## Trivia items`);
  if (!content.fullDescription) errors.push(`[${slug}] Missing intro/fullDescription`);

  return errors;
}

// --- Import Logic ---

async function importGame(gameDir: string): Promise<{ slug: string; errors: string[] }> {
  const metadata = readMetadata(gameDir);
  const slug = metadata.slug;
  const errors: string[] = [];

  // Parse available locale files
  const localeContents: Record<string, GameMarkdownContent> = {};
  for (const locale of SUPPORTED_LOCALES) {
    const mdFile = path.join(gameDir, `game.${locale}.md`);
    if (!fs.existsSync(mdFile)) {
      if (locale === BASE_LOCALE) {
        errors.push(`[${slug}] Missing required file: game.${BASE_LOCALE}.md`);
      }
      continue;
    }
    try {
      localeContents[locale] = parseGameMarkdown(mdFile);
    } catch (e) {
      errors.push(`[${slug}] Error parsing game.${locale}.md: ${(e as Error).message}`);
    }
  }

  // Validate base locale
  const baseContent = localeContents[BASE_LOCALE];
  if (!baseContent) {
    return { slug, errors };
  }

  const validationErrors = validateGameContent(slug, baseContent);
  if (validationErrors.length > 0) {
    return { slug, errors: [...errors, ...validationErrors] };
  }

  // Upsert platforms
  const platformIds: string[] = [];
  for (const platformName of metadata.platforms) {
    const platformSlug = platformName.toLowerCase().replaceAll(" ", "-");
    const platform = await prisma.platform.upsert({
      where: { slug: platformSlug },
      update: { name: platformName },
      create: { name: platformName, slug: platformSlug },
    });
    platformIds.push(platform.id);
  }

  // Upsert game (base locale populates the Game record)
  const game = await prisma.game.upsert({
    where: { slug },
    update: {
      title: baseContent.frontmatter.title,
      shortDescription: baseContent.frontmatter.shortDescription,
      fullDescription: baseContent.fullDescription,
      story: baseContent.story,
      development: baseContent.development,
      trivia: baseContent.trivia,
      releaseDate: new Date(metadata.releaseDate),
      coverImage: metadata.coverImage || "",
      heroImage: metadata.heroImage || "",
    },
    create: {
      slug,
      title: baseContent.frontmatter.title,
      shortDescription: baseContent.frontmatter.shortDescription,
      fullDescription: baseContent.fullDescription,
      story: baseContent.story,
      development: baseContent.development,
      trivia: baseContent.trivia,
      releaseDate: new Date(metadata.releaseDate),
      coverImage: metadata.coverImage || "",
      heroImage: metadata.heroImage || "",
    },
  });

  // Sync platform associations
  await prisma.gamePlatform.deleteMany({ where: { gameId: game.id } });
  for (const platformId of platformIds) {
    await prisma.gamePlatform.create({
      data: { gameId: game.id, platformId },
    });
  }

  // Upsert translations for non-base locales
  for (const [locale, content] of Object.entries(localeContents)) {
    if (locale === BASE_LOCALE) continue;

    await prisma.gameTranslation.upsert({
      where: { gameId_locale: { gameId: game.id, locale } },
      update: {
        title: content.frontmatter.title,
        shortDescription: content.frontmatter.shortDescription,
        fullDescription: content.fullDescription,
        story: content.story,
        development: content.development,
        trivia: content.trivia,
      },
      create: {
        gameId: game.id,
        locale,
        title: content.frontmatter.title,
        shortDescription: content.frontmatter.shortDescription,
        fullDescription: content.fullDescription,
        story: content.story,
        development: content.development,
        trivia: content.trivia,
      },
    });
  }

  // Upsert timeline events
  if (metadata.timeline) {
    for (const event of metadata.timeline) {
      // Use game + year + eventDate as a natural key for matching
      const existing = await prisma.timelineEvent.findFirst({
        where: { gameId: game.id, year: event.year, eventDate: new Date(event.eventDate) },
      });

      if (existing) {
        await prisma.timelineEvent.update({
          where: { id: existing.id },
          data: {
            title: event.title,
            description: event.description,
          },
        });
      } else {
        await prisma.timelineEvent.create({
          data: {
            year: event.year,
            title: event.title,
            description: event.description,
            eventDate: new Date(event.eventDate),
            gameId: game.id,
          },
        });
      }
    }
  }

  return { slug, errors };
}

// --- Main ---

async function main() {
  console.log("📦 Content Import: Starting...\n");

  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`❌ Content directory not found: ${CONTENT_DIR}`);
    process.exit(1);
  }

  const gameDirs = fs.readdirSync(CONTENT_DIR).filter((entry) => {
    const fullPath = path.join(CONTENT_DIR, entry);
    return fs.statSync(fullPath).isDirectory();
  });

  if (gameDirs.length === 0) {
    console.log("No game directories found in content/games/");
    process.exit(0);
  }

  let totalErrors = 0;
  let imported = 0;

  for (const dir of gameDirs) {
    const gamePath = path.join(CONTENT_DIR, dir);
    const result = await importGame(gamePath);

    if (result.errors.length > 0) {
      console.error(`❌ ${result.slug}:`);
      for (const err of result.errors) {
        console.error(`   ${err}`);
      }
      totalErrors += result.errors.length;
    } else {
      console.log(`✅ ${result.slug}`);
      imported++;
    }
  }

  console.log(`\n📦 Import complete: ${imported} games imported, ${totalErrors} errors.`);

  if (totalErrors > 0) {
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error("Fatal error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
