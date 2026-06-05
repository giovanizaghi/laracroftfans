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
  href: string;
};

export const navRoutes = {
  home: "",
  games: "/games",
  timeline: "/timeline",
  media: "/media",
  community: "/community",
  about: "/about"
} as const satisfies Record<NavItemId, string>;

export function buildLocalizedNavItems(
  locale: string,
  items: Array<{ id: NavItemId; label: string }>
): NavItem[] {
  return items.map((item) => ({
    ...item,
    href: `/${locale}${navRoutes[item.id]}`
  }));
}
