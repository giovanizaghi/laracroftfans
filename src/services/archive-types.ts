import type { EvidenceStatus } from "@prisma/client";

export { MediaType } from "@prisma/client";

export type CoverTone = "sand" | "jade" | "bronze" | "obsidian" | "river";

export type ArchiveEntityCard = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  eyebrow: string;
  note: string;
};

export type ArchiveLevelCard = ArchiveEntityCard & {
  order: number;
  region: string;
  secretCount: number;
  isTraining: boolean;
};

export type ArchiveFactCard = {
  id: string;
  claim: string;
  verdict: string;
  status: EvidenceStatus;
  sources: {
    id: string;
    title: string;
    url: string;
  }[];
};

export type ArchiveGalleryItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
};

export type ArchiveGame = {
  id: string;
  slug: string;
  title: string;
  releaseYear: number;
  releaseDate: string;
  description: string;
  platforms: string[];
  coverImage: string;
  heroImage: string;
  sectionImages: {
    overview: string;
    story: string;
    gameplay: string;
    development: string;
    legacy: string;
  };
  coverTone: CoverTone;
  overview: string;
  story: string;
  gameplay: string;
  development: string;
  legacy: string;
  characterOverview: string;
  locationOverview: string;
  levelOverview: string;
  factCheck: string;
  characters: ArchiveEntityCard[];
  locations: ArchiveEntityCard[];
  levels: ArchiveLevelCard[];
  facts: ArchiveFactCard[];
  trivia: string[];
  gallery: ArchiveGalleryItem[];
};

export type TimelineMilestone = {
  id: string;
  year: number;
  title: string;
  description: string;
  gameSlug?: string;
};
