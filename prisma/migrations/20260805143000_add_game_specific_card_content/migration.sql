ALTER TABLE "GameCharacter"
ADD COLUMN "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN "imageUrl" TEXT NOT NULL DEFAULT '';

ALTER TABLE "GameLocation"
ADD COLUMN "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN "imageUrl" TEXT NOT NULL DEFAULT '';

UPDATE "GameCharacter" AS game_character
SET
  "description" = character."description",
  "imageUrl" = character."imageUrl"
FROM "Character" AS character
WHERE character."id" = game_character."characterId";

UPDATE "GameLocation" AS game_location
SET
  "description" = location."description",
  "imageUrl" = location."imageUrl"
FROM "Location" AS location
WHERE location."id" = game_location."locationId";

CREATE TABLE "GameCharacterTranslation" (
  "id" TEXT NOT NULL,
  "gameId" TEXT NOT NULL,
  "characterId" TEXT NOT NULL,
  "locale" TEXT NOT NULL,
  "description" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GameCharacterTranslation_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "GameLocationTranslation" (
  "id" TEXT NOT NULL,
  "gameId" TEXT NOT NULL,
  "locationId" TEXT NOT NULL,
  "locale" TEXT NOT NULL,
  "description" TEXT NOT NULL DEFAULT '',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GameLocationTranslation_pkey" PRIMARY KEY ("id")
);

INSERT INTO "GameCharacterTranslation" (
  "id",
  "gameId",
  "characterId",
  "locale",
  "description",
  "createdAt",
  "updatedAt"
)
SELECT
  'gct_' || md5(game_character."gameId" || ':' || game_character."characterId" || ':' || translation."locale"),
  game_character."gameId",
  game_character."characterId",
  translation."locale",
  translation."description",
  translation."createdAt",
  translation."updatedAt"
FROM "GameCharacter" AS game_character
JOIN "CharacterTranslation" AS translation
  ON translation."characterId" = game_character."characterId";

INSERT INTO "GameLocationTranslation" (
  "id",
  "gameId",
  "locationId",
  "locale",
  "description",
  "createdAt",
  "updatedAt"
)
SELECT
  'glt_' || md5(game_location."gameId" || ':' || game_location."locationId" || ':' || translation."locale"),
  game_location."gameId",
  game_location."locationId",
  translation."locale",
  translation."description",
  translation."createdAt",
  translation."updatedAt"
FROM "GameLocation" AS game_location
JOIN "LocationTranslation" AS translation
  ON translation."locationId" = game_location."locationId";

CREATE UNIQUE INDEX "GameCharacterTranslation_gameId_characterId_locale_key"
ON "GameCharacterTranslation"("gameId", "characterId", "locale");

CREATE INDEX "GameCharacterTranslation_locale_idx"
ON "GameCharacterTranslation"("locale");

CREATE UNIQUE INDEX "GameLocationTranslation_gameId_locationId_locale_key"
ON "GameLocationTranslation"("gameId", "locationId", "locale");

CREATE INDEX "GameLocationTranslation_locale_idx"
ON "GameLocationTranslation"("locale");

ALTER TABLE "GameCharacterTranslation"
ADD CONSTRAINT "GameCharacterTranslation_gameId_characterId_fkey"
FOREIGN KEY ("gameId", "characterId")
REFERENCES "GameCharacter"("gameId", "characterId")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "GameLocationTranslation"
ADD CONSTRAINT "GameLocationTranslation_gameId_locationId_fkey"
FOREIGN KEY ("gameId", "locationId")
REFERENCES "GameLocation"("gameId", "locationId")
ON DELETE CASCADE ON UPDATE CASCADE;
