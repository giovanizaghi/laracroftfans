import { MediaType } from "@prisma/client";

import { resolveTranslation } from "@/lib/i18n/translate";
import { GameRepository } from "@/repositories/game-repository";

import type { ArchiveGame, CoverTone } from "./archive-types";

type GameRecord = Awaited<ReturnType<typeof GameRepository.findAll>>[number];

const coverTones: CoverTone[] = ["sand", "jade", "obsidian", "bronze", "river"];

function formatReleaseDate(date: Date, locale: string) {
  return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(date);
}

function mapGame(game: GameRecord, index = 0, locale = "en"): ArchiveGame {
  const resolved = resolveTranslation(
    {
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
    },
    game.translations,
    locale
  );

  const gallery = game.mediaAssets
    .filter((asset) => asset.type === MediaType.SCREENSHOT)
    .map((asset) => {
      const translated = resolveTranslation(
        { title: asset.title, description: asset.description },
        asset.translations,
        locale
      );

      return {
        id: asset.id,
        title: translated.title,
        description: translated.description,
        imageUrl: asset.imageUrl,
        thumbnailUrl: asset.thumbnailUrl
      };
    });

  const characters = game.gameCharacters.map((gameCharacter) => {
    const translatedCharacter = resolveTranslation(
      { name: gameCharacter.character.name },
      gameCharacter.character.translations,
      locale
    );
    const translatedAppearance = resolveTranslation(
      { description: gameCharacter.description },
      gameCharacter.translations,
      locale
    );

    return {
      id: gameCharacter.character.id,
      title: translatedCharacter.name,
      description: translatedAppearance.description,
      imageUrl: gameCharacter.imageUrl,
      eyebrow: gameCharacter.role,
      note: gameCharacter.note
    };
  });

  const locations = game.gameLocations.map((gameLocation) => {
    const translatedLocation = resolveTranslation(
      { name: gameLocation.location.name },
      gameLocation.location.translations,
      locale
    );
    const translatedAppearance = resolveTranslation(
      { description: gameLocation.description },
      gameLocation.translations,
      locale
    );

    return {
      id: gameLocation.location.id,
      title: translatedLocation.name,
      description: translatedAppearance.description,
      imageUrl: gameLocation.imageUrl,
      eyebrow: gameLocation.kind,
      note: gameLocation.note
    };
  });

  const levels = game.gameLevels.map((level) => {
    const translated = resolveTranslation(
      {
        name: level.name,
        region: level.region,
        description: level.description,
        note: level.note
      },
      level.translations,
      locale
    );

    return {
      id: level.id,
      title: translated.name,
      description: translated.description,
      imageUrl: level.imageUrl,
      eyebrow: translated.region,
      note: translated.note,
      order: level.sortOrder,
      region: translated.region,
      secretCount: level.secretCount,
      isTraining: level.isTraining,
      isBonus: level.isBonus
    };
  });

  const facts = game.facts.map((fact) => {
    const translated = resolveTranslation(
      { claim: fact.claim, verdict: fact.verdict },
      fact.translations,
      locale
    );

    return {
      id: fact.id,
      claim: translated.claim,
      verdict: translated.verdict,
      status: fact.evidenceStatus,
      sources: fact.sourceLinks.map(({ source }) => ({
        id: source.id,
        title: source.title,
        url: source.url
      }))
    };
  });

  return {
    id: game.id,
    slug: game.slug,
    title: resolved.title,
    releaseYear: game.releaseDate.getUTCFullYear(),
    releaseDate: formatReleaseDate(game.releaseDate, locale),
    description: resolved.shortDescription,
    platforms: game.platforms.map(({ platform }) => platform.name),
    coverImage: game.coverImage,
    heroImage: game.heroImage,
    sectionImages: {
      overview: game.overviewImage,
      story: game.storyImage,
      gameplay: game.gameplayImage,
      development: game.developmentImage,
      legacy: game.legacyImage
    },
    coverTone: coverTones[index % coverTones.length],
    overview: resolved.fullDescription,
    story: resolved.story,
    gameplay: resolved.gameplay,
    development: resolved.development,
    legacy: resolved.legacy,
    characterOverview: resolved.characters,
    locationOverview: resolved.locations,
    levelOverview: resolved.levels,
    factCheck: resolved.factCheck,
    characters,
    locations,
    levels,
    facts,
    trivia: resolved.trivia,
    gallery
  };
}

export class GameService {
  static async getAllGames(locale = "en") {
    const games = await GameRepository.findAll(locale);

    return games.map((game, index) => mapGame(game, index, locale));
  }

  static async getFeaturedGames(limit = 3, locale = "en") {
    const games = await this.getAllGames(locale);

    return games.slice(0, limit);
  }

  static async getGameBySlug(slug: string, locale = "en") {
    const game = await GameRepository.findBySlug(slug, locale);

    if (!game) {
      return null;
    }

    const index = await GameRepository.countReleasedBefore(game.releaseDate);

    return mapGame(game, index, locale);
  }

  static async getGameSlugs() {
    return GameRepository.findSlugs();
  }
}
