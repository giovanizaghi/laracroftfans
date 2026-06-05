import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ExpeditionTimeline } from "@/components/archive/expedition-timeline";
import { StonePanel } from "@/components/archive/stone-panel";
import { TombSection } from "@/components/archive/tomb-section";
import { TimelineService } from "@/services/timeline-service";

export const revalidate = 86400;

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "timelinePage.meta" });

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

export default async function TimelinePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("timelinePage");
  const milestones = await TimelineService.getTimelineEvents(locale);

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <TombSection
        className="pt-6"
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        variant="deep"
      >
        <StonePanel className="mb-8">
          <p className="text-sm leading-7 text-stone-300">{t("mapNote")}</p>
        </StonePanel>
        <ExpeditionTimeline basePath={`/${locale}`} milestones={milestones} />
      </TombSection>
    </main>
  );
}
