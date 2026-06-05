import { prisma } from "@/lib/prisma";

const gameIncludes = (locale: string) => ({
  platforms: {
    include: { platform: true },
    orderBy: { platform: { name: "asc" as const } }
  },
  mediaAssets: {
    orderBy: { createdAt: "asc" as const }
  },
  translations: {
    where: { locale }
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
