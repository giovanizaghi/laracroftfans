export type MediaCategory = {
  id: string;
  title: string;
  description: string;
  items: Array<{
    title: string;
    label: string;
  }>;
};

export const mediaCategories: MediaCategory[] = [
  {
    id: "wallpapers",
    title: "Wallpapers",
    description:
      "Display pieces prepared like recovered expedition backdrops and chamber murals.",
    items: [
      { title: "Lost Valley Vista", label: "Desktop study" },
      { title: "Temple Torchlight", label: "Mobile wall" },
      { title: "Croft Manor Evening", label: "Archive plate" }
    ]
  },
  {
    id: "artwork",
    title: "Artwork",
    description:
      "Concept-style placeholders cataloged as museum plates for future fan archive entries.",
    items: [
      { title: "Scion Chamber", label: "Concept note" },
      { title: "Explorer Silhouette", label: "Character study" },
      { title: "Ancient Mechanism", label: "Prop sheet" }
    ]
  },
  {
    id: "screenshots",
    title: "Screenshots",
    description:
      "A structured shelf for gameplay stills, location captures, and comparison views.",
    items: [
      { title: "Bridge Approach", label: "Gameplay still" },
      { title: "Puzzle Room", label: "Traversal record" },
      { title: "Hidden Alcove", label: "Secret find" }
    ]
  },
  {
    id: "promotional",
    title: "Promotional Images",
    description:
      "A public exhibit area for key art, campaign material, and historical promotional imagery.",
    items: [
      { title: "Launch Poster", label: "Press archive" },
      { title: "Magazine Feature", label: "Promotion" },
      { title: "Collection Banner", label: "Publicity plate" }
    ]
  }
];
