import type { MetadataRoute } from "next";

import { routing } from "@/lib/i18n/routing";
import { getBaseUrl } from "@/lib/seo";
import { GameService } from "@/services/game-service";

const STATIC_PATHS = ["/", "/games", "/timeline", "/media", "/about"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getBaseUrl();
  const locales = routing.locales;

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.flatMap((path) =>
    locales.map((locale) => ({
      url: `${base}/${locale}${path === "/" ? "" : path}`,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8
    }))
  );

  const slugs = await GameService.getGameSlugs();

  const gameEntries: MetadataRoute.Sitemap = slugs.flatMap((game) =>
    locales.map((locale) => ({
      url: `${base}/${locale}/games/${game.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  );

  return [...staticEntries, ...gameEntries];
}
