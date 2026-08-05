export type EvidenceStatus =
  | "CONFIRMED"
  | "DOCUMENTED_SECONDARY"
  | "DRAFT_ONLY"
  | "LATER_CONTINUITY"
  | "FAN_TERM"
  | "MYTH"
  | "INTERPRETATION"
  | "SOURCE_CONFLICT"
  | "QUALIFIED"
  | "UNSUPPORTED";

export interface LocalizedText {
  name: string;
  description: string;
}

export interface GameArchiveInput {
  scope: string;
  developer: string;
  originalPublisher: string;
  genre: string;
  perspective: string;
  gameMode: string;
  engine: string;
  images: {
    overview: string;
    story: string;
    gameplay: string;
    development: string;
    legacy: string;
  };
  counts: {
    campaignLevels: number;
    trainingLevels: number;
    secrets: number;
    weapons: number;
  };
  releases: {
    platform: string;
    region: string;
    date: string;
    regionalTitle?: string;
    status: EvidenceStatus;
    note?: string;
  }[];
  levels: {
    order: number;
    name: string;
    region: string;
    description: string;
    imageUrl?: string;
    secrets: number;
    training: boolean;
    status: EvidenceStatus;
    note?: string;
    translations: Record<
      string,
      LocalizedText & { region: string; note?: string }
    >;
  }[];
  characters: {
    slug: string;
    name: string;
    description: string;
    imageUrl?: string;
    role:
      | "PROTAGONIST"
      | "ANTAGONIST"
      | "SUPPORTING"
      | "RIVAL"
      | "HISTORICAL"
      | "MERCENARY"
      | "CREATURE";
    order: number;
    status: EvidenceStatus;
    note?: string;
    translations: Record<string, LocalizedText>;
  }[];
  locations: {
    slug: string;
    name: string;
    description: string;
    imageUrl?: string;
    kind: "TRAINING" | "CINEMATIC" | "CAMPAIGN_REGION";
    order: number;
    status: EvidenceStatus;
    note?: string;
    translations: Record<string, LocalizedText>;
  }[];
  artifacts: {
    slug: string;
    name: string;
    description: string;
    role: string;
    order: number;
    status: EvidenceStatus;
    note?: string;
    translations: Record<string, LocalizedText>;
  }[];
  weapons: {
    slug: string;
    name: string;
    description: string;
    ammunitionType: "UNLIMITED" | "FINITE";
    ammunitionNote: string;
    order: number;
    status: EvidenceStatus;
    note?: string;
    translations: Record<string, LocalizedText>;
  }[];
  enemies: {
    slug: string;
    name: string;
    description: string;
    category: "WILDLIFE" | "DINOSAUR" | "ATLANTEAN" | "HUMAN" | "BOSS";
    order: number;
    status: EvidenceStatus;
    note?: string;
    translations: Record<string, LocalizedText>;
  }[];
  credits: {
    role: string;
    names: string[];
  }[];
  contentRatings: {
    board: string;
    rating: string;
    descriptors: string[];
    status: EvidenceStatus;
    note?: string;
  }[];
  sources: {
    key: string;
    title: string;
    url: string;
    type:
      | "OFFICIAL"
      | "PRIMARY_DOCUMENT"
      | "PRIMARY_DRAFT_DOCUMENT"
      | "PRESERVED_PRIMARY_MATERIAL"
      | "OFFICIAL_RETROSPECTIVE"
      | "DEVELOPER_INTERVIEW"
      | "VERIFIED_COMMUNITY_REFERENCE"
      | "SECONDARY_REFERENCE"
      | "CONTEMPORARY_REVIEW"
      | "REVIEW_AGGREGATE";
    note?: string;
  }[];
  facts: {
    slug: string;
    order: number;
    status: EvidenceStatus;
    claim: string;
    verdict: string;
    sourceKeys: string[];
    translations: Record<string, { claim: string; verdict: string }>;
  }[];
  relatedReleases: {
    title: string;
    year: number;
    relationship: string;
    order: number;
    translations: Record<string, { relationship: string }>;
  }[];
}
