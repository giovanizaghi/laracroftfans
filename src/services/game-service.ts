import { MediaType } from "@prisma/client";

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

function mapGame(game: GameRecord, index = 0): ArchiveGame {
  const gallery = game.mediaAssets
    .filter((asset) => asset.type === MediaType.SCREENSHOT)
    .map((asset) => asset.title);

  return {
    id: game.id,
    slug: game.slug,
    title: game.title,
    releaseYear: game.releaseDate.getUTCFullYear(),
    releaseDate: formatReleaseDate(game.releaseDate),
    description: game.shortDescription,
    platforms: game.platforms.map(({ platform }) => platform.name),
    coverImage: game.coverImage,
    heroImage: game.heroImage,
    coverTone: coverTones[index % coverTones.length],
    overview: game.fullDescription,
    story: game.story,
    development: game.development,
    trivia: game.trivia,
    gallery
  };
}

export class GameService {
  static async getAllGames() {
    const games = await GameRepository.findAll();

    return games.map((game, index) => mapGame(game, index));
  }

  static async getFeaturedGames(limit = 3) {
    const games = await this.getAllGames();

    return games.slice(0, limit);
  }

  static async getGameBySlug(slug: string) {
    const game = await GameRepository.findBySlug(slug);

    if (!game) {
      return null;
    }

    const index = await GameRepository.countReleasedBefore(game.releaseDate);

    return mapGame(game, index);
  }

  static async getGameSlugs() {
    return GameRepository.findSlugs();
  }
}
