import { DiscoverySection } from "./discovery-section";
import { GamesTimeline } from "./games-timeline";
import { HeroSection } from "./hero-section";
import { MapSection } from "./map-section";
import { TombEntrance } from "./tomb-entrance";

type MapCategory = {
  title: string;
  description: string;
};

type DiscoveryCard = {
  id: string;
  title: string;
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
      cards: DiscoveryCard[];
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
      <TombEntrance id="about" {...content.entrance} />
      <DiscoverySection
        id="media"
        title={content.discovery.title}
        cards={content.discovery.cards}
      />
      <MapSection
        id="community"
        eyebrow={content.map.eyebrow}
        title={content.map.title}
        subtitle={content.map.subtitle}
        categories={content.map.categories}
      />
      <GamesTimeline
        id="timeline"
        title={content.timeline.title}
        games={content.timeline.games}
      />
    </main>
  );
}
