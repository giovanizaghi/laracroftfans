import { PrismaClient } from "@prisma/client";
import { randomUUID } from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";
import { pathToFileURL } from "node:url";
import type { GameArchiveInput } from "../content/archive-types";

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
  gameplay: string;
  development: string;
  legacy: string;
  characters: string;
  locations: string;
  levels: string;
  factCheck: string;
  trivia: string[];
  fullDescription: string;
}

interface TimelineEntry {
  year: number;
  title: string;
  description: string;
  eventDate: string;
  translations?: Record<string, { title: string; description: string }>;
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

function parseFrontmatter(raw: string): {
  frontmatter: Record<string, string>;
  body: string;
} {
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
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    frontmatter[key] = value;
  }

  return { frontmatter, body: match[2] };
}

function parseMarkdownSections(
  body: string
): Omit<GameMarkdownContent, "frontmatter"> {
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
    gameplay: (sections["gameplay"] || "").trim(),
    development: (sections["development"] || "").trim(),
    legacy: (sections["legacy"] || "").trim(),
    characters: (sections["characters"] || "").trim(),
    locations: (sections["locations"] || "").trim(),
    levels: (sections["levels"] || "").trim(),
    factCheck: (sections["fact check"] || "").trim(),
    trivia
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
      shortDescription: frontmatter.shortDescription
    },
    ...sections
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
  if (!data.releaseDate)
    throw new Error(`Missing 'releaseDate' in ${metaPath}`);
  if (!data.platforms || !Array.isArray(data.platforms))
    throw new Error(`Missing 'platforms' in ${metaPath}`);

  return data;
}

async function readArchiveData(
  dirPath: string
): Promise<GameArchiveInput | null> {
  const archivePath = path.join(dirPath, "archive.ts");
  if (!fs.existsSync(archivePath)) return null;

  const archiveModule = (await import(pathToFileURL(archivePath).href)) as {
    gameArchive?: GameArchiveInput;
  };
  if (!archiveModule.gameArchive) {
    throw new Error(`Missing 'gameArchive' export in ${archivePath}`);
  }

  return archiveModule.gameArchive;
}

// --- Validation ---

function validateGameContent(
  slug: string,
  content: GameMarkdownContent
): string[] {
  const errors: string[] = [];

  if (!content.frontmatter.title) errors.push(`[${slug}] Missing title`);
  if (!content.frontmatter.shortDescription)
    errors.push(`[${slug}] Missing shortDescription`);
  if (!content.story) errors.push(`[${slug}] Missing ## Story section`);
  if (!content.development)
    errors.push(`[${slug}] Missing ## Development section`);
  if (content.trivia.length === 0)
    errors.push(`[${slug}] Missing ## Trivia items`);
  if (!content.fullDescription)
    errors.push(`[${slug}] Missing intro/fullDescription`);

  return errors;
}

async function syncArchiveData(
  gameId: string,
  archive: GameArchiveInput,
  platformIdsByName: Map<string, string>
) {
  await prisma.gameFact.deleteMany({ where: { gameId } });
  await prisma.gameSource.deleteMany({ where: { gameId } });
  await prisma.gameRelatedRelease.deleteMany({ where: { gameId } });
  await prisma.gameRelease.deleteMany({ where: { gameId } });
  await prisma.gameLevel.deleteMany({ where: { gameId } });
  await prisma.gameCharacter.deleteMany({ where: { gameId } });
  await prisma.gameLocation.deleteMany({ where: { gameId } });
  await prisma.gameArtifact.deleteMany({ where: { gameId } });
  await prisma.gameWeapon.deleteMany({ where: { gameId } });
  await prisma.gameEnemy.deleteMany({ where: { gameId } });
  await prisma.gameCredit.deleteMany({ where: { gameId } });
  await prisma.gameContentRating.deleteMany({ where: { gameId } });

  await prisma.gameRelease.createMany({
    data: archive.releases.map((release) => {
      const platformId = platformIdsByName.get(release.platform);
      if (!platformId) {
        throw new Error(
          `Archive release references unknown platform: ${release.platform}`
        );
      }
      return {
        gameId,
        platformId,
        region: release.region,
        releaseDate: new Date(release.date),
        regionalTitle: release.regionalTitle,
        evidenceStatus: release.status,
        note: release.note ?? ""
      };
    })
  });

  const levelsWithIds = archive.levels.map((level) => ({
    ...level,
    id: randomUUID()
  }));
  await prisma.gameLevel.createMany({
    data: levelsWithIds.map((level) => ({
      id: level.id,
      gameId,
      sortOrder: level.order,
      name: level.name,
      region: level.region,
      description: level.description,
      imageUrl: level.imageUrl ?? "",
      secretCount: level.secrets,
      isTraining: level.training,
      isBonus: level.bonus ?? false,
      evidenceStatus: level.status,
      note: level.note ?? ""
    }))
  });
  await prisma.gameLevelTranslation.createMany({
    data: levelsWithIds.flatMap((level) =>
      Object.entries(level.translations).map(([locale, translation]) => ({
        levelId: level.id,
        locale,
        name: translation.name,
        region: translation.region,
        description: translation.description,
        note: translation.note ?? ""
      }))
    )
  });

  await Promise.all(
    archive.characters.map(async (entry) => {
      const character = await prisma.character.upsert({
        where: { slug: entry.slug },
        update: {
          name: entry.name,
          description: entry.description,
          imageUrl: entry.imageUrl ?? ""
        },
        create: {
          slug: entry.slug,
          name: entry.name,
          description: entry.description,
          imageUrl: entry.imageUrl ?? ""
        }
      });
      await Promise.all(
        Object.entries(entry.translations).map(([locale, translation]) =>
          prisma.characterTranslation.upsert({
            where: {
              characterId_locale: { characterId: character.id, locale }
            },
            update: translation,
            create: { characterId: character.id, locale, ...translation }
          })
        )
      );
      await prisma.gameCharacter.create({
        data: {
          gameId,
          characterId: character.id,
          role: entry.role,
          description: entry.description,
          imageUrl: entry.imageUrl ?? "",
          sortOrder: entry.order,
          evidenceStatus: entry.status,
          note: entry.note ?? "",
          translations: {
            create: Object.entries(entry.translations).map(
              ([locale, translation]) => ({
                locale,
                description: translation.description
              })
            )
          }
        }
      });
    })
  );

  await Promise.all(
    archive.locations.map(async (entry) => {
      const location = await prisma.location.upsert({
        where: { slug: entry.slug },
        update: {
          name: entry.name,
          description: entry.description,
          imageUrl: entry.imageUrl ?? ""
        },
        create: {
          slug: entry.slug,
          name: entry.name,
          description: entry.description,
          imageUrl: entry.imageUrl ?? ""
        }
      });
      await Promise.all(
        Object.entries(entry.translations).map(([locale, translation]) =>
          prisma.locationTranslation.upsert({
            where: { locationId_locale: { locationId: location.id, locale } },
            update: translation,
            create: { locationId: location.id, locale, ...translation }
          })
        )
      );
      await prisma.gameLocation.create({
        data: {
          gameId,
          locationId: location.id,
          kind: entry.kind,
          description: entry.description,
          imageUrl: entry.imageUrl ?? "",
          sortOrder: entry.order,
          evidenceStatus: entry.status,
          note: entry.note ?? "",
          translations: {
            create: Object.entries(entry.translations).map(
              ([locale, translation]) => ({
                locale,
                description: translation.description
              })
            )
          }
        }
      });
    })
  );

  await Promise.all(
    archive.artifacts.map(async (entry) => {
      const artifact = await prisma.artifact.upsert({
        where: { slug: entry.slug },
        update: { name: entry.name, description: entry.description },
        create: {
          slug: entry.slug,
          name: entry.name,
          description: entry.description
        }
      });
      await Promise.all(
        Object.entries(entry.translations).map(([locale, translation]) =>
          prisma.artifactTranslation.upsert({
            where: { artifactId_locale: { artifactId: artifact.id, locale } },
            update: translation,
            create: { artifactId: artifact.id, locale, ...translation }
          })
        )
      );
      await prisma.gameArtifact.create({
        data: {
          gameId,
          artifactId: artifact.id,
          role: entry.role,
          sortOrder: entry.order,
          evidenceStatus: entry.status,
          note: entry.note ?? ""
        }
      });
    })
  );

  await Promise.all(
    archive.weapons.map(async (entry) => {
      const weapon = await prisma.weapon.upsert({
        where: { slug: entry.slug },
        update: { name: entry.name, description: entry.description },
        create: {
          slug: entry.slug,
          name: entry.name,
          description: entry.description
        }
      });
      await Promise.all(
        Object.entries(entry.translations).map(([locale, translation]) =>
          prisma.weaponTranslation.upsert({
            where: { weaponId_locale: { weaponId: weapon.id, locale } },
            update: translation,
            create: { weaponId: weapon.id, locale, ...translation }
          })
        )
      );
      await prisma.gameWeapon.create({
        data: {
          gameId,
          weaponId: weapon.id,
          ammunitionType: entry.ammunitionType,
          ammunitionNote: entry.ammunitionNote,
          sortOrder: entry.order,
          evidenceStatus: entry.status,
          note: entry.note ?? ""
        }
      });
    })
  );

  await Promise.all(
    archive.enemies.map(async (entry) => {
      const enemy = await prisma.enemy.upsert({
        where: { slug: entry.slug },
        update: {
          name: entry.name,
          description: entry.description,
          category: entry.category
        },
        create: {
          slug: entry.slug,
          name: entry.name,
          description: entry.description,
          category: entry.category
        }
      });
      await Promise.all(
        Object.entries(entry.translations).map(([locale, translation]) =>
          prisma.enemyTranslation.upsert({
            where: { enemyId_locale: { enemyId: enemy.id, locale } },
            update: translation,
            create: { enemyId: enemy.id, locale, ...translation }
          })
        )
      );
      await prisma.gameEnemy.create({
        data: {
          gameId,
          enemyId: enemy.id,
          sortOrder: entry.order,
          evidenceStatus: entry.status,
          note: entry.note ?? ""
        }
      });
    })
  );

  await prisma.gameCredit.createMany({
    data: archive.credits.flatMap((credit, groupOrder) =>
      credit.names.map((personName, personOrder) => ({
        gameId,
        role: credit.role,
        personName,
        groupOrder: groupOrder + 1,
        personOrder: personOrder + 1
      }))
    )
  });

  await prisma.gameContentRating.createMany({
    data: archive.contentRatings.map((rating) => ({
      gameId,
      board: rating.board,
      rating: rating.rating,
      descriptors: rating.descriptors,
      evidenceStatus: rating.status,
      note: rating.note ?? ""
    }))
  });

  const sourceIdsByKey = new Map<string, string>();
  const sourcesWithIds = archive.sources.map((source) => ({
    ...source,
    id: randomUUID()
  }));
  for (const source of sourcesWithIds) {
    sourceIdsByKey.set(source.key, source.id);
  }
  await prisma.gameSource.createMany({
    data: sourcesWithIds.map((source) => ({
      id: source.id,
      gameId,
      sourceKey: source.key,
      title: source.title,
      url: source.url,
      sourceType: source.type,
      note: source.note ?? "",
      accessedOn: new Date("2026-08-04T00:00:00.000Z")
    }))
  });

  const factsWithIds = archive.facts.map((fact) => ({
    ...fact,
    id: randomUUID()
  }));
  await prisma.gameFact.createMany({
    data: factsWithIds.map((fact) => ({
      id: fact.id,
      gameId,
      slug: fact.slug,
      sortOrder: fact.order,
      evidenceStatus: fact.status,
      claim: fact.claim,
      verdict: fact.verdict
    }))
  });
  await prisma.gameFactTranslation.createMany({
    data: factsWithIds.flatMap((fact) =>
      Object.entries(fact.translations).map(([locale, translation]) => ({
        factId: fact.id,
        locale,
        ...translation
      }))
    )
  });
  await prisma.gameFactSource.createMany({
    data: factsWithIds.flatMap((fact) =>
      fact.sourceKeys.map((sourceKey) => {
        const sourceId = sourceIdsByKey.get(sourceKey);
        if (!sourceId) {
          throw new Error(
            `Fact '${fact.slug}' references unknown source '${sourceKey}'`
          );
        }
        return { factId: fact.id, sourceId };
      })
    )
  });

  const relatedReleasesWithIds = archive.relatedReleases.map((release) => ({
    ...release,
    id: randomUUID()
  }));
  await prisma.gameRelatedRelease.createMany({
    data: relatedReleasesWithIds.map((release) => ({
      id: release.id,
      gameId,
      title: release.title,
      releaseYear: release.year,
      relationship: release.relationship,
      sortOrder: release.order
    }))
  });
  await prisma.gameRelatedReleaseTranslation.createMany({
    data: relatedReleasesWithIds.flatMap((release) =>
      Object.entries(release.translations).map(([locale, translation]) => ({
        relatedReleaseId: release.id,
        locale,
        ...translation
      }))
    )
  });
}

// --- Import Logic ---

async function importGame(
  gameDir: string
): Promise<{ slug: string; errors: string[] }> {
  const metadata = readMetadata(gameDir);
  const archive = await readArchiveData(gameDir);
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
      errors.push(
        `[${slug}] Error parsing game.${locale}.md: ${(e as Error).message}`
      );
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
  const platformIdsByName = new Map<string, string>();
  const platformNames = new Set([
    ...metadata.platforms,
    ...(archive?.releases.map((release) => release.platform) ?? [])
  ]);
  for (const platformName of platformNames) {
    const platformSlug = platformName.toLowerCase().replaceAll(" ", "-");
    const platform = await prisma.platform.upsert({
      where: { slug: platformSlug },
      update: { name: platformName },
      create: { name: platformName, slug: platformSlug }
    });
    platformIdsByName.set(platformName, platform.id);
    if (metadata.platforms.includes(platformName)) {
      platformIds.push(platform.id);
    }
  }

  const archiveGameData = archive
    ? {
        scope: archive.scope,
        developer: archive.developer,
        originalPublisher: archive.originalPublisher,
        genre: archive.genre,
        perspective: archive.perspective,
        gameMode: archive.gameMode,
        engine: archive.engine,
        overviewImage: archive.images.overview,
        storyImage: archive.images.story,
        gameplayImage: archive.images.gameplay,
        developmentImage: archive.images.development,
        legacyImage: archive.images.legacy,
        campaignLevelCount: archive.counts.campaignLevels,
        trainingLevelCount: archive.counts.trainingLevels,
        bonusLevelCount: archive.counts.bonusLevels ?? 0,
        secretCount: archive.counts.secrets,
        weaponCount: archive.counts.weapons
      }
    : {};

  // Upsert game (base locale populates the Game record)
  const game = await prisma.game.upsert({
    where: { slug },
    update: {
      title: baseContent.frontmatter.title,
      shortDescription: baseContent.frontmatter.shortDescription,
      fullDescription: baseContent.fullDescription,
      story: baseContent.story,
      gameplay: baseContent.gameplay,
      development: baseContent.development,
      legacy: baseContent.legacy,
      characters: baseContent.characters,
      locations: baseContent.locations,
      levels: baseContent.levels,
      factCheck: baseContent.factCheck,
      trivia: baseContent.trivia,
      ...archiveGameData,
      releaseDate: new Date(metadata.releaseDate),
      coverImage: metadata.coverImage || "",
      heroImage: metadata.heroImage || ""
    },
    create: {
      slug,
      title: baseContent.frontmatter.title,
      shortDescription: baseContent.frontmatter.shortDescription,
      fullDescription: baseContent.fullDescription,
      story: baseContent.story,
      gameplay: baseContent.gameplay,
      development: baseContent.development,
      legacy: baseContent.legacy,
      characters: baseContent.characters,
      locations: baseContent.locations,
      levels: baseContent.levels,
      factCheck: baseContent.factCheck,
      trivia: baseContent.trivia,
      ...archiveGameData,
      releaseDate: new Date(metadata.releaseDate),
      coverImage: metadata.coverImage || "",
      heroImage: metadata.heroImage || ""
    }
  });

  // Sync platform associations
  await prisma.gamePlatform.deleteMany({ where: { gameId: game.id } });
  for (const platformId of platformIds) {
    await prisma.gamePlatform.create({
      data: { gameId: game.id, platformId }
    });
  }

  if (archive) {
    await syncArchiveData(game.id, archive, platformIdsByName);
  }

  // Upsert translations for all locales (including base locale to keep en row in sync)
  for (const [locale, content] of Object.entries(localeContents)) {
    await prisma.gameTranslation.upsert({
      where: { gameId_locale: { gameId: game.id, locale } },
      update: {
        title: content.frontmatter.title,
        shortDescription: content.frontmatter.shortDescription,
        fullDescription: content.fullDescription,
        story: content.story,
        gameplay: content.gameplay,
        development: content.development,
        legacy: content.legacy,
        characters: content.characters,
        locations: content.locations,
        levels: content.levels,
        factCheck: content.factCheck,
        trivia: content.trivia
      },
      create: {
        gameId: game.id,
        locale,
        title: content.frontmatter.title,
        shortDescription: content.frontmatter.shortDescription,
        fullDescription: content.fullDescription,
        story: content.story,
        gameplay: content.gameplay,
        development: content.development,
        legacy: content.legacy,
        characters: content.characters,
        locations: content.locations,
        levels: content.levels,
        factCheck: content.factCheck,
        trivia: content.trivia
      }
    });
  }

  // Upsert timeline events
  if (metadata.timeline) {
    for (const event of metadata.timeline) {
      // Use game + year + eventDate as a natural key for matching
      const existing = await prisma.timelineEvent.findFirst({
        where: {
          gameId: game.id,
          year: event.year,
          eventDate: new Date(event.eventDate)
        }
      });

      let timelineEventId: string;

      if (existing) {
        const updated = await prisma.timelineEvent.update({
          where: { id: existing.id },
          data: {
            title: event.title,
            description: event.description
          }
        });
        timelineEventId = updated.id;
      } else {
        const created = await prisma.timelineEvent.create({
          data: {
            year: event.year,
            title: event.title,
            description: event.description,
            eventDate: new Date(event.eventDate),
            gameId: game.id
          }
        });
        timelineEventId = created.id;
      }

      const timelineTranslations = {
        en: { title: event.title, description: event.description },
        ...event.translations
      };

      for (const [locale, translation] of Object.entries(
        timelineTranslations
      )) {
        if (!SUPPORTED_LOCALES.includes(locale)) continue;

        await prisma.timelineEventTranslation.upsert({
          where: { eventId_locale: { eventId: timelineEventId, locale } },
          update: translation,
          create: {
            eventId: timelineEventId,
            locale,
            ...translation
          }
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

  const requestedSlugs = new Set(process.argv.slice(2));
  const gameDirs = fs.readdirSync(CONTENT_DIR).filter((entry) => {
    const fullPath = path.join(CONTENT_DIR, entry);
    return (
      fs.statSync(fullPath).isDirectory() &&
      (requestedSlugs.size === 0 || requestedSlugs.has(entry))
    );
  });

  const missingSlugs = [...requestedSlugs].filter(
    (slug) => !gameDirs.includes(slug)
  );
  if (missingSlugs.length > 0) {
    console.error(`Unknown game slug(s): ${missingSlugs.join(", ")}`);
    process.exit(1);
  }

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

  console.log(
    `\n📦 Import complete: ${imported} games imported, ${totalErrors} errors.`
  );

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
