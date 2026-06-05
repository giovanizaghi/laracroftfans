import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { StonePanel } from "@/components/archive/stone-panel";
import { TombSection } from "@/components/archive/tomb-section";
import { mediaCategories } from "@/data/media";

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
          {mediaCategories.map((category, categoryIndex) => (
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
                        {item.label}
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
