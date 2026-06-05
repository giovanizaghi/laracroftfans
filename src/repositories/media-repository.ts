import { MediaType } from "@prisma/client";

import { prisma } from "@/lib/prisma";

export class MediaRepository {
  static findArchiveAssets(locale: string) {
    return prisma.mediaAsset.findMany({
      where: {
        type: {
          in: [
            MediaType.WALLPAPER,
            MediaType.ARTWORK,
            MediaType.CONCEPT_ART,
            MediaType.SCREENSHOT,
            MediaType.PROMOTIONAL
          ]
        }
      },
      orderBy: [
        { type: "asc" },
        { title: "asc" }
      ],
      include: {
        game: {
          select: { title: true, slug: true }
        },
        translations: {
          where: { locale }
        }
      }
    });
  }
}
