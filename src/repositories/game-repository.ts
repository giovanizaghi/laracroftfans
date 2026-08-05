import { prisma } from "@/lib/prisma";

const gameIncludes = (locale: string) => ({
  platforms: {
    include: { platform: true },
    orderBy: { platform: { name: "asc" as const } }
  },
  mediaAssets: {
    orderBy: { createdAt: "asc" as const },
    include: {
      translations: { where: { locale } }
    }
  },
  translations: {
    where: { locale }
  },
  gameCharacters: {
    orderBy: { sortOrder: "asc" as const },
    include: {
      character: {
        include: { translations: { where: { locale } } }
      }
    }
  },
  gameLocations: {
    orderBy: { sortOrder: "asc" as const },
    include: {
      location: {
        include: { translations: { where: { locale } } }
      }
    }
  },
  gameLevels: {
    orderBy: { sortOrder: "asc" as const },
    include: { translations: { where: { locale } } }
  },
  facts: {
    orderBy: { sortOrder: "asc" as const },
    include: {
      translations: { where: { locale } },
      sourceLinks: { include: { source: true } }
    }
  }
});

export class GameRepository {
  static findAll(locale: string) {
    return prisma.game.findMany({
      orderBy: { releaseDate: "asc" },
      include: gameIncludes(locale)
    });
  }

  static findBySlug(slug: string, locale: string) {
    return prisma.game.findUnique({
      where: { slug },
      include: gameIncludes(locale)
    });
  }

  static countReleasedBefore(releaseDate: Date) {
    return prisma.game.count({
      where: { releaseDate: { lt: releaseDate } }
    });
  }

  static findSlugs() {
    return prisma.game.findMany({
      select: {
        slug: true
      },
      orderBy: {
        releaseDate: "asc"
      }
    });
  }
}
