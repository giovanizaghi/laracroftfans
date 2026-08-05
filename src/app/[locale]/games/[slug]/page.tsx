import { cache } from "react";
import type { EvidenceStatus } from "@prisma/client";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

import { buildAlternates } from "@/lib/seo";
import { AncientButton } from "@/components/archive/ancient-button";
import {
  ArchiveRecordCard,
  PhotoPlaceholder
} from "@/components/archive/archive-record-card";
import { DustParticles } from "@/components/archive/dust-particles";
import { EditorialContentBlock } from "@/components/archive/editorial-content-block";
import { FactVerdictCard } from "@/components/archive/fact-verdict-card";
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
    alternates: buildAlternates(locale, `/games/${slug}`),
    openGraph: {
      title: game.title,
      description: game.description,
      url: buildAlternates(locale, `/games/${slug}`).canonical,
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

  const characterRoleLabels: Record<string, string> = {
    PROTAGONIST: t("characterRoles.protagonist"),
    ANTAGONIST: t("characterRoles.antagonist"),
    SUPPORTING: t("characterRoles.supporting"),
    RIVAL: t("characterRoles.rival"),
    HISTORICAL: t("characterRoles.historical"),
    MERCENARY: t("characterRoles.mercenary"),
    CREATURE: t("characterRoles.creature")
  };
  const locationKindLabels: Record<string, string> = {
    TRAINING: t("locationKinds.training"),
    CINEMATIC: t("locationKinds.cinematic"),
    CAMPAIGN_REGION: t("locationKinds.campaignRegion")
  };
  const factStatusLabels: Record<EvidenceStatus, string> = {
    CONFIRMED: t("factStatuses.confirmed"),
    DOCUMENTED_SECONDARY: t("factStatuses.documentedSecondary"),
    DRAFT_ONLY: t("factStatuses.draftOnly"),
    LATER_CONTINUITY: t("factStatuses.laterContinuity"),
    FAN_TERM: t("factStatuses.fanTerm"),
    MYTH: t("factStatuses.myth"),
    INTERPRETATION: t("factStatuses.interpretation"),
    SOURCE_CONFLICT: t("factStatuses.sourceConflict"),
    QUALIFIED: t("factStatuses.qualified"),
    UNSUPPORTED: t("factStatuses.unsupported")
  };

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <section className="game-detail-hero">
        <DustParticles />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1fr] lg:px-10">
          <div
            className={`game-cover-monolith artifact-cover-${game.coverTone}`}
          >
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
            <AncientButton
              className="mt-8"
              href={`/${locale}/games`}
              variant="stone"
            >
              {t("back")}
            </AncientButton>
          </div>
        </div>
      </section>

      <TombSection title={t("overview")} variant="deep">
        <EditorialContentBlock
          content={game.overview}
          imageAlt={`${game.title} — ${t("overview")}`}
          imageUrl={game.sectionImages.overview}
        />
      </TombSection>

      <TorchDivider />

      <TombSection title={t("story")}>
        <EditorialContentBlock
          content={game.story}
          imageAlt={`${game.title} — ${t("story")}`}
          imageUrl={game.sectionImages.story}
        />
      </TombSection>

      {game.gameplay ? (
        <TombSection title={t("gameplay")} variant="deep">
          <EditorialContentBlock
            content={game.gameplay}
            imageAlt={`${game.title} — ${t("gameplay")}`}
            imageUrl={game.sectionImages.gameplay}
          />
        </TombSection>
      ) : null}

      {game.characters.length > 0 || game.characterOverview ? (
        <TombSection title={t("characters")}>
          {game.characters.length > 0 ? (
            <ul aria-label={t("characters")} className="archive-card-rail">
              {game.characters.map((character) => (
                <li className="archive-card-rail-item" key={character.id}>
                  <ArchiveRecordCard
                    description={character.description}
                    emptyPhotoLabel={t("photoUnavailable")}
                    eyebrow={
                      characterRoleLabels[character.eyebrow] ??
                      character.eyebrow
                    }
                    imageFit="contain"
                    imageUrl={character.imageUrl}
                    title={character.title}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <EditorialContentBlock
              content={game.characterOverview}
              imageAlt={`${game.title} — ${t("characters")}`}
            />
          )}
        </TombSection>
      ) : null}

      {game.locations.length > 0 || game.locationOverview ? (
        <TombSection title={t("locations")} variant="map">
          {game.locations.length > 0 ? (
            <ul aria-label={t("locations")} className="archive-card-rail">
              {game.locations.map((location) => (
                <li className="archive-card-rail-item" key={location.id}>
                  <ArchiveRecordCard
                    description={location.description}
                    emptyPhotoLabel={t("photoUnavailable")}
                    eyebrow={
                      locationKindLabels[location.eyebrow] ?? location.eyebrow
                    }
                    imageUrl={location.imageUrl}
                    title={location.title}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <EditorialContentBlock
              content={game.locationOverview}
              imageAlt={`${game.title} — ${t("locations")}`}
            />
          )}
        </TombSection>
      ) : null}

      {game.levels.length > 0 || game.levelOverview ? (
        <TombSection title={t("levels")}>
          {game.levels.length > 0 ? (
            <ul aria-label={t("levels")} className="archive-card-rail">
              {game.levels.map((level) => (
                <li className="archive-card-rail-item" key={level.id}>
                  <ArchiveRecordCard
                    description={level.description}
                    emptyPhotoLabel={t("photoUnavailable")}
                    eyebrow={level.region}
                    imageUrl={level.imageUrl}
                    meta={`${
                      level.isTraining
                        ? t("trainingLevel")
                        : t("levelNumber", { number: level.order })
                    } · ${t("secretCount", { count: level.secretCount })}`}
                    note={level.note}
                    title={level.title}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <EditorialContentBlock
              content={game.levelOverview}
              imageAlt={`${game.title} — ${t("levels")}`}
            />
          )}
        </TombSection>
      ) : null}

      <TombSection title={t("development")} variant="deep">
        <EditorialContentBlock
          content={game.development}
          imageAlt={`${game.title} — ${t("development")}`}
          imageUrl={game.sectionImages.development}
        />
      </TombSection>

      {game.legacy ? (
        <TombSection title={t("legacy")}>
          <EditorialContentBlock
            content={game.legacy}
            imageAlt={`${game.title} — ${t("legacy")}`}
            imageUrl={game.sectionImages.legacy}
          />
        </TombSection>
      ) : null}

      {game.facts.length > 0 || game.factCheck ? (
        <TombSection title={t("factCheck")} variant="deep">
          {game.facts.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {game.facts.map((fact) => (
                <FactVerdictCard
                  fact={fact}
                  key={fact.id}
                  sourcesLabel={t("sources")}
                  statusLabel={factStatusLabels[fact.status]}
                />
              ))}
            </div>
          ) : (
            <EditorialContentBlock
              content={game.factCheck}
              imageAlt={`${game.title} — ${t("factCheck")}`}
            />
          )}
        </TombSection>
      ) : null}

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
        {game.gallery.length > 0 ? (
          <div className="museum-grid">
            {game.gallery.map((item) => (
              <article className="museum-piece" key={item.id}>
                <div className="museum-placeholder relative overflow-hidden">
                  {item.imageUrl ? (
                    <Image
                      alt={item.title}
                      className="object-cover"
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      src={item.imageUrl}
                    />
                  ) : (
                    <PhotoPlaceholder label={t("photoUnavailable")} />
                  )}
                </div>
                <h3 className="mt-4 text-sm font-black uppercase text-stone-950">
                  {item.title}
                </h3>
                {item.description ? (
                  <p className="mt-2 text-sm leading-6 text-stone-700">
                    {item.description}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <StonePanel>
            <PhotoPlaceholder className="min-h-48" label={t("galleryEmpty")} />
          </StonePanel>
        )}
      </TombSection>
    </main>
  );
}
