import { DiscoverySection } from "./discovery-section";
import { GamesTimeline } from "./games-timeline";
import { HeroSection } from "./hero-section";
import { MapSection } from "./map-section";
import { SiteFooter } from "./site-footer";
import { TombEntrance } from "./tomb-entrance";

type MapCategory = {
  title: string;
  description: string;
};

type ComingSoonPageProps = {
  content: {
    hero: {
      kicker: string;
      subtitle: string;
      instagramLabel: string;
      youtubeLabel: string;
    };
    entrance: {
      eyebrow: string;
      title: string;
      description: string;
    };
    discovery: {
      title: string;
      cards: string[];
    };
    map: {
      eyebrow: string;
      title: string;
      subtitle: string;
      categories: MapCategory[];
    };
    timeline: {
      title: string;
      games: string[];
    };
    footer: {
      languagePlaceholder: string;
      disclaimer: string;
      copyright: string;
    };
  };
  socialUrls: {
    instagram: string;
    youtube: string;
  };
};

export function ComingSoonPage({ content, socialUrls }: ComingSoonPageProps) {
  return (
    <main className="min-h-screen bg-stone-950">
      <HeroSection
        kicker={content.hero.kicker}
        subtitle={content.hero.subtitle}
        instagramUrl={socialUrls.instagram}
        youtubeUrl={socialUrls.youtube}
        instagramLabel={content.hero.instagramLabel}
        youtubeLabel={content.hero.youtubeLabel}
      />
      <TombEntrance {...content.entrance} />
      <DiscoverySection
        title={content.discovery.title}
        cards={content.discovery.cards}
      />
      <MapSection
        eyebrow={content.map.eyebrow}
        title={content.map.title}
        subtitle={content.map.subtitle}
        categories={content.map.categories}
      />
      <GamesTimeline
        title={content.timeline.title}
        games={content.timeline.games}
      />
      <SiteFooter
        instagramUrl={socialUrls.instagram}
        youtubeUrl={socialUrls.youtube}
        instagramLabel={content.hero.instagramLabel}
        youtubeLabel={content.hero.youtubeLabel}
        languagePlaceholder={content.footer.languagePlaceholder}
        disclaimer={content.footer.disclaimer}
        copyright={content.footer.copyright}
      />
    </main>
  );
}
