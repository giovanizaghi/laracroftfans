import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { StonePanel } from "@/components/archive/stone-panel";
import { TombSection } from "@/components/archive/tomb-section";
import { TorchDivider } from "@/components/archive/torch-divider";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage.meta" });

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

export default async function AboutPage() {
  const t = await getTranslations("aboutPage");
  const sections = t.raw("sections") as Array<{
    title: string;
    body: string;
  }>;

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <TombSection
        className="pt-6"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {sections.map((section) => (
            <StonePanel as="article" key={section.title}>
              <h2 className="text-2xl font-black uppercase text-amber-50">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                {section.body}
              </p>
            </StonePanel>
          ))}
        </div>
      </TombSection>

      <TorchDivider />

      <TombSection
        title={t("preservation.title")}
        description={t("preservation.description")}
        variant="deep"
      >
        <StonePanel>
          <p className="text-base leading-8 text-stone-300">
            {t("preservation.body")}
          </p>
        </StonePanel>
      </TombSection>
    </main>
  );
}
