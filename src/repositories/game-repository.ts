import { prisma } from "@/lib/prisma";

export class GameRepository {
  static findAll() {
    return prisma.game.findMany({
      orderBy: {
        releaseDate: "asc"
      },
      include: {
        platforms: {
          include: {
            platform: true
          },
          orderBy: {
            platform: {
              name: "asc"
            }
          }
        },
        mediaAssets: {
          orderBy: {
            createdAt: "asc"
          }
        }
      }
    });
  }

  static findBySlug(slug: string) {
    return prisma.game.findUnique({
      where: {
        slug
      },
      include: {
        platforms: {
          include: {
            platform: true
          },
          orderBy: {
            platform: {
              name: "asc"
            }
          }
        },
        mediaAssets: {
          orderBy: {
            createdAt: "asc"
          }
        }
      }
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
