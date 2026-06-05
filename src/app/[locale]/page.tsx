import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ComingSoonPage } from "@/components/coming-soon/coming-soon-page";
import { navAnchors, type NavItem } from "@/components/site/nav-data";

type MapCategory = {
  title: string;
  description: string;
};

type DiscoveryCard = {
  id: string;
  title: string;
};

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "project" });
  const title = t("name");
  const description = t("description");

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      siteName: title,
      type: "website"
    }
  };
}

export default async function HomePage() {
  const t = await getTranslations("comingSoon");

  const navItems = (
    t.raw("navigation.items") as Array<{ id: keyof typeof navAnchors; label: string }>
  ).map((item) => ({
    id: item.id,
    label: item.label,
    href: navAnchors[item.id]
  })) satisfies NavItem[];

  return (
    <ComingSoonPage
      content={{
        navigation: {
          ariaLabel: t("navigation.ariaLabel"),
          menuOpen: t("navigation.menuOpen"),
          menuClose: t("navigation.menuClose"),
          items: navItems
        },
        language: {
          ariaLabel: t("language.ariaLabel"),
          english: t("language.english"),
          portuguese: t("language.portuguese")
        },
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
          cards: t.raw("discovery.cards") as DiscoveryCard[]
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
          navigationLabel: t("footer.navigationLabel"),
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
