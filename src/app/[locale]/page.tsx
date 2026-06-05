import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { AncientButton } from "@/components/archive/ancient-button";
import { ArtifactCard } from "@/components/archive/artifact-card";
import { DustParticles } from "@/components/archive/dust-particles";
import { StonePanel } from "@/components/archive/stone-panel";
import { TombSection } from "@/components/archive/tomb-section";
import { TorchDivider } from "@/components/archive/torch-divider";
import { games } from "@/data/games";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "archiveHome.meta" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
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

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("archiveHome");
  const featuredGames = games.slice(0, 3);

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <section className="archive-hero">
        <DustParticles />
        <div id="hero-background" className="absolute inset-0 scale-105" />
        <div className="vignette" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-10">
          <div>
            <p className="text-sm font-black uppercase text-amber-200/80">
              {t("kicker")}
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-tight text-amber-50 drop-shadow-[0_18px_42px_rgba(0,0,0,0.82)] sm:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200">
              {t("description")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AncientButton href={`/${locale}/games`}>
                {t("primaryCta")}
              </AncientButton>
              <AncientButton href={`/${locale}/timeline`} variant="stone">
                {t("secondaryCta")}
              </AncientButton>
            </div>
          </div>
          <StonePanel className="archive-logo-panel">
            <Image
              alt="Lara Croft Fans"
              className="mx-auto h-auto w-full max-w-sm drop-shadow-[0_18px_40px_rgba(0,0,0,0.74)]"
              height={1024}
              priority
              src="/images/lara-croft-fans-logo.png"
              width={1536}
            />
          </StonePanel>
        </div>
      </section>

      <TombSection
        eyebrow={t("featured.eyebrow")}
        title={t("featured.title")}
        description={t("featured.description")}
      >
        <div className="expedition-board">
          {featuredGames.map((game) => (
            <ArtifactCard
              cta={t("featured.cta")}
              description={game.description}
              eyebrow={String(game.releaseYear)}
              href={`/${locale}/games/${game.slug}`}
              key={game.id}
              meta={game.platforms.slice(0, 3).join(" / ")}
              title={game.title}
              coverTone={game.coverTone}
            />
          ))}
        </div>
      </TombSection>

      <TorchDivider />

      <TombSection
        eyebrow={t("chambers.eyebrow")}
        title={t("chambers.title")}
        description={t("chambers.description")}
        variant="deep"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["games", t("chambers.games"), t("chambers.gamesText")],
            ["timeline", t("chambers.timeline"), t("chambers.timelineText")],
            ["media", t("chambers.media"), t("chambers.mediaText")]
          ].map(([href, title, description]) => (
            <StonePanel as="article" key={href}>
              <h3 className="text-xl font-black uppercase text-amber-50">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                {description}
              </p>
              <AncientButton
                className="mt-5"
                href={`/${locale}/${href}`}
                variant="stone"
              >
                {t("chambers.enter")}
              </AncientButton>
            </StonePanel>
          ))}
        </div>
      </TombSection>
    </main>
  );
}
