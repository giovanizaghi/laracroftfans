import { cache } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { AncientButton } from "@/components/archive/ancient-button";
import { DustParticles } from "@/components/archive/dust-particles";
import { StonePanel } from "@/components/archive/stone-panel";
import { TombSection } from "@/components/archive/tomb-section";
import { TorchDivider } from "@/components/archive/torch-divider";
import { routing } from "@/lib/i18n/routing";
import { GameService } from "@/services/game-service";

const getGame = cache((slug: string, locale: string) =>
  GameService.getGameBySlug(slug, locale)
);

export const revalidate = 86400;

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const games = await GameService.getGameSlugs();

  return routing.locales.flatMap((locale) =>
    games.map((game) => ({ locale, slug: game.slug }))
  );
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const game = await getGame(slug, locale);

  if (!game) {
    return {};
  }

  return {
    title: game.title,
    description: game.description,
    openGraph: {
      title: game.title,
      description: game.description,
      locale,
      siteName: "Lara Croft Fans",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: game.title,
      description: game.description
    }
  };
}

export default async function GameDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const game = await getGame(slug, locale);
  const t = await getTranslations("gameDetail");

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <section className="game-detail-hero">
        <DustParticles />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1fr] lg:px-10">
          <div className={`game-cover-monolith artifact-cover-${game.coverTone}`}>
            <span>{game.releaseYear}</span>
          </div>
          <div className="self-center">
            <p className="text-sm font-black uppercase text-amber-200/75">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-amber-50 sm:text-6xl">
              {game.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">
              {game.description}
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <StonePanel>
                <dt className="text-xs font-black uppercase text-amber-200/75">
                  {t("releaseDate")}
                </dt>
                <dd className="mt-2 text-lg font-black text-amber-50">
                  {game.releaseDate}
                </dd>
              </StonePanel>
              <StonePanel>
                <dt className="text-xs font-black uppercase text-amber-200/75">
                  {t("platforms")}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-stone-300">
                  {game.platforms.join(" / ")}
                </dd>
              </StonePanel>
            </dl>
            <AncientButton className="mt-8" href={`/${locale}/games`} variant="stone">
              {t("back")}
            </AncientButton>
          </div>
        </div>
      </section>

      <TombSection title={t("overview")} variant="deep">
        <StonePanel>
          <p className="text-base leading-8 text-stone-300">{game.overview}</p>
        </StonePanel>
      </TombSection>

      <TorchDivider />

      <TombSection title={t("story")}>
        <StonePanel>
          <p className="text-base leading-8 text-stone-300">{game.story}</p>
        </StonePanel>
      </TombSection>

      <TombSection title={t("development")} variant="deep">
        <StonePanel>
          <p className="text-base leading-8 text-stone-300">
            {game.development}
          </p>
        </StonePanel>
      </TombSection>

      <TombSection title={t("trivia")}>
        <div className="grid gap-4 md:grid-cols-3">
          {game.trivia.map((item) => (
            <StonePanel as="article" key={item}>
              <p className="text-sm leading-6 text-stone-300">{item}</p>
            </StonePanel>
          ))}
        </div>
      </TombSection>

      <TombSection title={t("gallery")} variant="map">
        <div className="museum-grid">
          {game.gallery.map((item) => (
            <article className="museum-piece" key={item}>
              <div className={`museum-placeholder artifact-cover-${game.coverTone}`} />
              <h3 className="mt-4 text-sm font-black uppercase text-stone-950">
                {item}
              </h3>
            </article>
          ))}
        </div>
      </TombSection>
    </main>
  );
}
