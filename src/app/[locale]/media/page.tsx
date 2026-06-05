import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { MediaType } from "@/services/archive-types";

import { StonePanel } from "@/components/archive/stone-panel";
import { TombSection } from "@/components/archive/tomb-section";
import { MediaRepository } from "@/repositories/media-repository";

export const revalidate = 86400;

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "mediaPage.meta" });

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

export default async function MediaPage() {
  const t = await getTranslations("mediaPage");
  const assets = await MediaRepository.findArchiveAssets();
  const categories = [
    {
      id: "wallpapers",
      title: "Wallpapers",
      description:
        "Display pieces prepared like recovered expedition backdrops and chamber murals.",
      items: assets.filter((asset) => asset.type === MediaType.WALLPAPER)
    },
    {
      id: "artwork",
      title: "Artwork",
      description:
        "Concept and artwork records cataloged as museum plates for future archive entries.",
      items: assets.filter(
        (asset) =>
          asset.type === MediaType.ARTWORK || asset.type === MediaType.CONCEPT_ART
      )
    },
    {
      id: "screenshots",
      title: "Screenshots",
      description:
        "Gameplay stills, location captures, and comparison views from the archive shelves.",
      items: assets.filter((asset) => asset.type === MediaType.SCREENSHOT)
    },
    {
      id: "promotional",
      title: "Promotional Images",
      description:
        "Campaign material, launch pieces, and historical promotional placeholders.",
      items: assets.filter((asset) => asset.type === MediaType.PROMOTIONAL)
    }
  ];

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <TombSection
        className="pt-6"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        variant="map"
      >
        <div className="grid gap-8">
          {categories.map((category, categoryIndex) => (
            <StonePanel as="section" key={category.id}>
              <div className="grid gap-6 lg:grid-cols-[0.45fr_1fr]">
                <div>
                  <p className="text-xs font-black uppercase text-amber-200/70">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-2xl font-black uppercase text-amber-50">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-stone-300">
                    {category.description}
                  </p>
                </div>
                <div className="museum-grid">
                  {category.items.map((item, itemIndex) => (
                    <article className="museum-piece" key={item.title}>
                      <div
                        className={`museum-placeholder artifact-cover-${
                          ["sand", "jade", "bronze"][itemIndex % 3]
                        }`}
                      />
                      <p className="mt-4 text-xs font-black uppercase text-stone-700">
                        {item.game?.title ?? item.type.replaceAll("_", " ")}
                      </p>
                      <h3 className="mt-1 text-sm font-black uppercase text-stone-950">
                        {item.title}
                      </h3>
                    </article>
                  ))}
                </div>
              </div>
            </StonePanel>
          ))}
        </div>
      </TombSection>
    </main>
  );
}
