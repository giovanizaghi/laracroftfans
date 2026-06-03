import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ComingSoonPage } from "@/components/coming-soon/coming-soon-page";

type MapCategory = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "Coming Soon"
};

export default async function HomePage() {
  const t = await getTranslations("comingSoon");

  return (
    <ComingSoonPage
      content={{
        hero: {
          kicker: t("hero.kicker"),
          subtitle: t("hero.subtitle"),
          instagramLabel: t("hero.instagram"),
          youtubeLabel: t("hero.youtube")
        },
        entrance: {
          eyebrow: t("entrance.eyebrow"),
          title: t("entrance.title"),
          description: t("entrance.description")
        },
        discovery: {
          title: t("discovery.title"),
          cards: t.raw("discovery.cards") as string[]
        },
        map: {
          eyebrow: t("map.eyebrow"),
          title: t("map.title"),
          subtitle: t("map.subtitle"),
          categories: t.raw("map.categories") as MapCategory[]
        },
        timeline: {
          title: t("timeline.title"),
          games: t.raw("timeline.games") as string[]
        },
        footer: {
          languagePlaceholder: t("footer.languagePlaceholder"),
          disclaimer: t("footer.disclaimer"),
          copyright: t("footer.copyright")
        }
      }}
      socialUrls={{
        instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
        youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "#"
      }}
    />
  );
}
