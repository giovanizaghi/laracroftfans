import { MediaType } from "@prisma/client";

import { resolveTranslation } from "@/lib/i18n/translate";
import { GameRepository } from "@/repositories/game-repository";

import type { ArchiveGame, CoverTone } from "./archive-types";

type GameRecord = Awaited<ReturnType<typeof GameRepository.findAll>>[number];

const coverTones: CoverTone[] = ["sand", "jade", "obsidian", "bronze", "river"];

function formatReleaseDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
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
      development: game.development,
      trivia: game.trivia
    },
    game.translations,
    locale
  );

  const gallery = game.mediaAssets
    .filter((asset) => asset.type === MediaType.SCREENSHOT)
    .map((asset) => asset.title);

  return {
    id: game.id,
    slug: game.slug,
    title: resolved.title,
    releaseYear: game.releaseDate.getUTCFullYear(),
    releaseDate: formatReleaseDate(game.releaseDate),
    description: resolved.shortDescription,
    platforms: game.platforms.map(({ platform }) => platform.name),
    coverImage: game.coverImage,
    heroImage: game.heroImage,
    coverTone: coverTones[index % coverTones.length],
    overview: resolved.fullDescription,
    story: resolved.story,
    development: resolved.development,
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
