CREATE TYPE "EvidenceStatus" AS ENUM (
  'CONFIRMED',
  'DOCUMENTED_SECONDARY',
  'DRAFT_ONLY',
  'LATER_CONTINUITY',
  'FAN_TERM',
  'MYTH',
  'INTERPRETATION',
  'SOURCE_CONFLICT',
  'QUALIFIED',
  'UNSUPPORTED'
);

CREATE TYPE "GameCharacterRole" AS ENUM (
  'PROTAGONIST',
  'ANTAGONIST',
  'SUPPORTING',
  'RIVAL',
  'HISTORICAL',
  'MERCENARY',
  'CREATURE'
);

CREATE TYPE "LocationKind" AS ENUM ('TRAINING', 'CINEMATIC', 'CAMPAIGN_REGION');
CREATE TYPE "AmmunitionType" AS ENUM ('UNLIMITED', 'FINITE');
CREATE TYPE "EnemyCategory" AS ENUM ('WILDLIFE', 'DINOSAUR', 'ATLANTEAN', 'HUMAN', 'BOSS');
CREATE TYPE "SourceType" AS ENUM (
  'OFFICIAL',
  'PRIMARY_DOCUMENT',
  'PRIMARY_DRAFT_DOCUMENT',
  'PRESERVED_PRIMARY_MATERIAL',
  'OFFICIAL_RETROSPECTIVE',
  'DEVELOPER_INTERVIEW',
  'VERIFIED_COMMUNITY_REFERENCE',
  'SECONDARY_REFERENCE',
  'CONTEMPORARY_REVIEW',
  'REVIEW_AGGREGATE'
);

ALTER TABLE "Game"
ADD COLUMN "scope" TEXT NOT NULL DEFAULT '',
ADD COLUMN "developer" TEXT NOT NULL DEFAULT '',
ADD COLUMN "originalPublisher" TEXT NOT NULL DEFAULT '',
ADD COLUMN "genre" TEXT NOT NULL DEFAULT '',
ADD COLUMN "perspective" TEXT NOT NULL DEFAULT '',
ADD COLUMN "gameMode" TEXT NOT NULL DEFAULT '',
ADD COLUMN "engine" TEXT NOT NULL DEFAULT '',
ADD COLUMN "campaignLevelCount" INTEGER,
ADD COLUMN "trainingLevelCount" INTEGER,
ADD COLUMN "secretCount" INTEGER,
ADD COLUMN "weaponCount" INTEGER;

CREATE TABLE "GameRelease" (
  "id" TEXT NOT NULL,
  "gameId" TEXT NOT NULL,
  "platformId" TEXT NOT NULL,
  "region" TEXT NOT NULL,
  "releaseDate" TIMESTAMP(3) NOT NULL,
  "regionalTitle" TEXT,
  "evidenceStatus" "EvidenceStatus" NOT NULL DEFAULT 'CONFIRMED',
  "note" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GameRelease_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameLevel" (
  "id" TEXT NOT NULL,
  "gameId" TEXT NOT NULL,
  "sortOrder" INTEGER NOT NULL,
  "name" TEXT NOT NULL,
  "region" TEXT NOT NULL,
  "description" TEXT NOT NULL DEFAULT '',
  "secretCount" INTEGER NOT NULL DEFAULT 0,
  "isTraining" BOOLEAN NOT NULL DEFAULT false,
  "evidenceStatus" "EvidenceStatus" NOT NULL DEFAULT 'CONFIRMED',
  "note" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GameLevel_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameLevelTranslation" (
  "id" TEXT NOT NULL,
  "levelId" TEXT NOT NULL,
  "locale" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "region" TEXT NOT NULL,
  "description" TEXT NOT NULL DEFAULT '',
  "note" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GameLevelTranslation_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameCharacter" (
  "gameId" TEXT NOT NULL,
  "characterId" TEXT NOT NULL,
  "role" "GameCharacterRole" NOT NULL,
  "sortOrder" INTEGER NOT NULL,
  "evidenceStatus" "EvidenceStatus" NOT NULL DEFAULT 'CONFIRMED',
  "note" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "GameCharacter_pkey" PRIMARY KEY ("gameId", "characterId")
);

CREATE TABLE "GameLocation" (
  "gameId" TEXT NOT NULL,
  "locationId" TEXT NOT NULL,
  "kind" "LocationKind" NOT NULL,
  "sortOrder" INTEGER NOT NULL,
  "evidenceStatus" "EvidenceStatus" NOT NULL DEFAULT 'CONFIRMED',
  "note" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "GameLocation_pkey" PRIMARY KEY ("gameId", "locationId")
);

CREATE TABLE "Artifact" (
  "id" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Artifact_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ArtifactTranslation" (
  "id" TEXT NOT NULL,
  "artifactId" TEXT NOT NULL,
  "locale" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "ArtifactTranslation_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameArtifact" (
  "gameId" TEXT NOT NULL,
  "artifactId" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "sortOrder" INTEGER NOT NULL,
  "evidenceStatus" "EvidenceStatus" NOT NULL DEFAULT 'CONFIRMED',
  "note" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "GameArtifact_pkey" PRIMARY KEY ("gameId", "artifactId")
);

CREATE TABLE "Weapon" (
  "id" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Weapon_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "WeaponTranslation" (
  "id" TEXT NOT NULL,
  "weaponId" TEXT NOT NULL,
  "locale" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "WeaponTranslation_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameWeapon" (
  "gameId" TEXT NOT NULL,
  "weaponId" TEXT NOT NULL,
  "ammunitionType" "AmmunitionType" NOT NULL,
  "ammunitionNote" TEXT NOT NULL DEFAULT '',
  "sortOrder" INTEGER NOT NULL,
  "evidenceStatus" "EvidenceStatus" NOT NULL DEFAULT 'CONFIRMED',
  "note" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "GameWeapon_pkey" PRIMARY KEY ("gameId", "weaponId")
);

CREATE TABLE "Enemy" (
  "id" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "category" "EnemyCategory" NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Enemy_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "EnemyTranslation" (
  "id" TEXT NOT NULL,
  "enemyId" TEXT NOT NULL,
  "locale" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "EnemyTranslation_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameEnemy" (
  "gameId" TEXT NOT NULL,
  "enemyId" TEXT NOT NULL,
  "sortOrder" INTEGER NOT NULL,
  "evidenceStatus" "EvidenceStatus" NOT NULL DEFAULT 'CONFIRMED',
  "note" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "GameEnemy_pkey" PRIMARY KEY ("gameId", "enemyId")
);

CREATE TABLE "GameCredit" (
  "id" TEXT NOT NULL,
  "gameId" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "personName" TEXT NOT NULL,
  "groupOrder" INTEGER NOT NULL,
  "personOrder" INTEGER NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "GameCredit_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameContentRating" (
  "id" TEXT NOT NULL,
  "gameId" TEXT NOT NULL,
  "board" TEXT NOT NULL,
  "rating" TEXT NOT NULL,
  "descriptors" TEXT[],
  "evidenceStatus" "EvidenceStatus" NOT NULL DEFAULT 'CONFIRMED',
  "note" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GameContentRating_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameSource" (
  "id" TEXT NOT NULL,
  "gameId" TEXT NOT NULL,
  "sourceKey" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "sourceType" "SourceType" NOT NULL,
  "note" TEXT NOT NULL DEFAULT '',
  "accessedOn" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GameSource_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameFact" (
  "id" TEXT NOT NULL,
  "gameId" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "sortOrder" INTEGER NOT NULL,
  "evidenceStatus" "EvidenceStatus" NOT NULL,
  "claim" TEXT NOT NULL,
  "verdict" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GameFact_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameFactTranslation" (
  "id" TEXT NOT NULL,
  "factId" TEXT NOT NULL,
  "locale" TEXT NOT NULL,
  "claim" TEXT NOT NULL,
  "verdict" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GameFactTranslation_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameFactSource" (
  "factId" TEXT NOT NULL,
  "sourceId" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "GameFactSource_pkey" PRIMARY KEY ("factId", "sourceId")
);

CREATE TABLE "GameRelatedRelease" (
  "id" TEXT NOT NULL,
  "gameId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "releaseYear" INTEGER NOT NULL,
  "relationship" TEXT NOT NULL,
  "sortOrder" INTEGER NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GameRelatedRelease_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameRelatedReleaseTranslation" (
  "id" TEXT NOT NULL,
  "relatedReleaseId" TEXT NOT NULL,
  "locale" TEXT NOT NULL,
  "relationship" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GameRelatedReleaseTranslation_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "GameRelease_game_platform_region_key" ON "GameRelease"("gameId", "platformId", "region");
CREATE INDEX "GameRelease_game_date_idx" ON "GameRelease"("gameId", "releaseDate");
CREATE INDEX "GameRelease_platform_idx" ON "GameRelease"("platformId");
CREATE UNIQUE INDEX "GameLevel_game_order_key" ON "GameLevel"("gameId", "sortOrder");
CREATE INDEX "GameLevel_game_idx" ON "GameLevel"("gameId");
CREATE UNIQUE INDEX "GameLevelTranslation_level_locale_key" ON "GameLevelTranslation"("levelId", "locale");
CREATE INDEX "GameLevelTranslation_locale_idx" ON "GameLevelTranslation"("locale");
CREATE UNIQUE INDEX "GameCharacter_game_order_key" ON "GameCharacter"("gameId", "sortOrder");
CREATE INDEX "GameCharacter_character_idx" ON "GameCharacter"("characterId");
CREATE UNIQUE INDEX "GameLocation_game_order_key" ON "GameLocation"("gameId", "sortOrder");
CREATE INDEX "GameLocation_location_idx" ON "GameLocation"("locationId");
CREATE UNIQUE INDEX "Artifact_slug_key" ON "Artifact"("slug");
CREATE INDEX "Artifact_slug_idx" ON "Artifact"("slug");
CREATE UNIQUE INDEX "ArtifactTranslation_artifact_locale_key" ON "ArtifactTranslation"("artifactId", "locale");
CREATE INDEX "ArtifactTranslation_locale_idx" ON "ArtifactTranslation"("locale");
CREATE UNIQUE INDEX "GameArtifact_game_order_key" ON "GameArtifact"("gameId", "sortOrder");
CREATE INDEX "GameArtifact_artifact_idx" ON "GameArtifact"("artifactId");
CREATE UNIQUE INDEX "Weapon_slug_key" ON "Weapon"("slug");
CREATE INDEX "Weapon_slug_idx" ON "Weapon"("slug");
CREATE UNIQUE INDEX "WeaponTranslation_weapon_locale_key" ON "WeaponTranslation"("weaponId", "locale");
CREATE INDEX "WeaponTranslation_locale_idx" ON "WeaponTranslation"("locale");
CREATE UNIQUE INDEX "GameWeapon_game_order_key" ON "GameWeapon"("gameId", "sortOrder");
CREATE INDEX "GameWeapon_weapon_idx" ON "GameWeapon"("weaponId");
CREATE UNIQUE INDEX "Enemy_slug_key" ON "Enemy"("slug");
CREATE INDEX "Enemy_slug_idx" ON "Enemy"("slug");
CREATE UNIQUE INDEX "EnemyTranslation_enemy_locale_key" ON "EnemyTranslation"("enemyId", "locale");
CREATE INDEX "EnemyTranslation_locale_idx" ON "EnemyTranslation"("locale");
CREATE UNIQUE INDEX "GameEnemy_game_order_key" ON "GameEnemy"("gameId", "sortOrder");
CREATE INDEX "GameEnemy_enemy_idx" ON "GameEnemy"("enemyId");
CREATE UNIQUE INDEX "GameCredit_game_role_person_key" ON "GameCredit"("gameId", "role", "personName");
CREATE INDEX "GameCredit_game_order_idx" ON "GameCredit"("gameId", "groupOrder", "personOrder");
CREATE UNIQUE INDEX "GameContentRating_game_board_key" ON "GameContentRating"("gameId", "board");
CREATE INDEX "GameContentRating_game_idx" ON "GameContentRating"("gameId");
CREATE UNIQUE INDEX "GameSource_game_key_key" ON "GameSource"("gameId", "sourceKey");
CREATE INDEX "GameSource_game_idx" ON "GameSource"("gameId");
CREATE UNIQUE INDEX "GameFact_game_slug_key" ON "GameFact"("gameId", "slug");
CREATE UNIQUE INDEX "GameFact_game_order_key" ON "GameFact"("gameId", "sortOrder");
CREATE INDEX "GameFact_game_status_idx" ON "GameFact"("gameId", "evidenceStatus");
CREATE UNIQUE INDEX "GameFactTranslation_fact_locale_key" ON "GameFactTranslation"("factId", "locale");
CREATE INDEX "GameFactTranslation_locale_idx" ON "GameFactTranslation"("locale");
CREATE INDEX "GameFactSource_source_idx" ON "GameFactSource"("sourceId");
CREATE UNIQUE INDEX "GameRelatedRelease_game_title_key" ON "GameRelatedRelease"("gameId", "title");
CREATE UNIQUE INDEX "GameRelatedRelease_game_order_key" ON "GameRelatedRelease"("gameId", "sortOrder");
CREATE INDEX "GameRelatedRelease_game_idx" ON "GameRelatedRelease"("gameId");
CREATE UNIQUE INDEX "RelatedReleaseTranslation_release_locale_key" ON "GameRelatedReleaseTranslation"("relatedReleaseId", "locale");
CREATE INDEX "RelatedReleaseTranslation_locale_idx" ON "GameRelatedReleaseTranslation"("locale");

ALTER TABLE "GameRelease" ADD CONSTRAINT "GameRelease_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameRelease" ADD CONSTRAINT "GameRelease_platform_fkey" FOREIGN KEY ("platformId") REFERENCES "Platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "GameLevel" ADD CONSTRAINT "GameLevel_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameLevelTranslation" ADD CONSTRAINT "GameLevelTranslation_level_fkey" FOREIGN KEY ("levelId") REFERENCES "GameLevel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameCharacter" ADD CONSTRAINT "GameCharacter_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameCharacter" ADD CONSTRAINT "GameCharacter_character_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "GameLocation" ADD CONSTRAINT "GameLocation_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameLocation" ADD CONSTRAINT "GameLocation_location_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "ArtifactTranslation" ADD CONSTRAINT "ArtifactTranslation_artifact_fkey" FOREIGN KEY ("artifactId") REFERENCES "Artifact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameArtifact" ADD CONSTRAINT "GameArtifact_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameArtifact" ADD CONSTRAINT "GameArtifact_artifact_fkey" FOREIGN KEY ("artifactId") REFERENCES "Artifact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "WeaponTranslation" ADD CONSTRAINT "WeaponTranslation_weapon_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameWeapon" ADD CONSTRAINT "GameWeapon_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameWeapon" ADD CONSTRAINT "GameWeapon_weapon_fkey" FOREIGN KEY ("weaponId") REFERENCES "Weapon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "EnemyTranslation" ADD CONSTRAINT "EnemyTranslation_enemy_fkey" FOREIGN KEY ("enemyId") REFERENCES "Enemy"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameEnemy" ADD CONSTRAINT "GameEnemy_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameEnemy" ADD CONSTRAINT "GameEnemy_enemy_fkey" FOREIGN KEY ("enemyId") REFERENCES "Enemy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "GameCredit" ADD CONSTRAINT "GameCredit_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameContentRating" ADD CONSTRAINT "GameContentRating_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameSource" ADD CONSTRAINT "GameSource_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameFact" ADD CONSTRAINT "GameFact_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameFactTranslation" ADD CONSTRAINT "GameFactTranslation_fact_fkey" FOREIGN KEY ("factId") REFERENCES "GameFact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameFactSource" ADD CONSTRAINT "GameFactSource_fact_fkey" FOREIGN KEY ("factId") REFERENCES "GameFact"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameFactSource" ADD CONSTRAINT "GameFactSource_source_fkey" FOREIGN KEY ("sourceId") REFERENCES "GameSource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameRelatedRelease" ADD CONSTRAINT "GameRelatedRelease_game_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "GameRelatedReleaseTranslation" ADD CONSTRAINT "RelatedReleaseTranslation_release_fkey" FOREIGN KEY ("relatedReleaseId") REFERENCES "GameRelatedRelease"("id") ON DELETE CASCADE ON UPDATE CASCADE;
