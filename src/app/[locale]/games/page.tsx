import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { buildAlternates } from "@/lib/seo";

import { ArtifactCard } from "@/components/archive/artifact-card";
import { TombSection } from "@/components/archive/tomb-section";
import { GameService } from "@/services/game-service";

export const revalidate = 86400;

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gamesPage.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale, "/games"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: buildAlternates(locale, "/games").canonical,
      locale,
      siteName: "Lara Croft Fans",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description")
    }
  };
}

export default async function GamesPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("gamesPage");
  const games = await GameService.getAllGames(locale);

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <TombSection
        className="pt-6"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      >
        <div className="expedition-board">
          {games.map((game) => (
            <ArtifactCard
              cta={t("explore")}
              description={game.description}
              eyebrow={String(game.releaseYear)}
              href={`/${locale}/games/${game.slug}`}
              key={game.id}
              meta={game.platforms.slice(0, 4).join(" / ")}
              title={game.title}
              coverTone={game.coverTone}
            />
          ))}
        </div>
      </TombSection>
    </main>
  );
}
