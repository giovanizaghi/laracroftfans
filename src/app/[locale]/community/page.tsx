import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { DustParticles } from "@/components/archive/dust-particles";
import { StonePanel } from "@/components/archive/stone-panel";
import { TorchDivider } from "@/components/archive/torch-divider";

export const revalidate = 86400;

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "communityPage.meta" });

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

export default async function CommunityPage() {
  const t = await getTranslations("communityPage");

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <section className="sealed-chamber">
        <DustParticles />
        <div className="torch-glow torch-glow-left" aria-hidden="true" />
        <div className="torch-glow torch-glow-right" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1fr] lg:px-10">
          <div className="sealed-door" aria-hidden="true">
            <div className="sealed-lock" />
          </div>
          <StonePanel>
            <p className="text-sm font-black uppercase text-amber-200/75">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-amber-50 sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              {t("description")}
            </p>
            <TorchDivider />
            <p className="text-sm leading-6 text-stone-400">{t("note")}</p>
          </StonePanel>
        </div>
      </section>
    </main>
  );
}
