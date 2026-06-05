export type NavItemId =
  | "home"
  | "games"
  | "timeline"
  | "media"
  | "community"
  | "about";

export type NavItem = {
  id: NavItemId;
  label: string;
  href: `#${NavItemId}`;
};

export const navAnchors = {
  home: "#home",
  games: "#games",
  timeline: "#timeline",
  media: "#media",
  community: "#community",
  about: "#about"
} as const satisfies Record<NavItemId, `#${NavItemId}`>;
