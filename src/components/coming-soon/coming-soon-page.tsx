import { DiscoverySection } from "./discovery-section";
import { GamesTimeline } from "./games-timeline";
import { HeroSection } from "./hero-section";
import { MapSection } from "./map-section";
import { SiteFooter } from "./site-footer";
import { TombEntrance } from "./tomb-entrance";
import { SiteHeader } from "@/components/site/site-header";
import type { NavItem } from "@/components/site/nav-data";

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
    navigation: {
      ariaLabel: string;
      menuOpen: string;
      menuClose: string;
      items: NavItem[];
    };
    language: {
      ariaLabel: string;
      english: string;
      portuguese: string;
    };
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
    footer: {
      navigationLabel: string;
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
    <>
      <SiteHeader
        items={content.navigation.items}
        labels={{
          navigation: content.navigation.ariaLabel,
          menuOpen: content.navigation.menuOpen,
          menuClose: content.navigation.menuClose
        }}
        languageLabels={content.language}
      />
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
      <SiteFooter
        navItems={content.navigation.items}
        instagramUrl={socialUrls.instagram}
        youtubeUrl={socialUrls.youtube}
        instagramLabel={content.hero.instagramLabel}
        youtubeLabel={content.hero.youtubeLabel}
        languageLabels={content.language}
        navigationLabel={content.footer.navigationLabel}
        disclaimer={content.footer.disclaimer}
        copyright={content.footer.copyright}
      />
    </>
  );
}
