-- CreateTable
CREATE TABLE "GameTranslation" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "fullDescription" TEXT NOT NULL,
    "story" TEXT NOT NULL,
    "development" TEXT NOT NULL,
    "trivia" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GameTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaAssetTranslation" (
    "id" TEXT NOT NULL,
    "assetId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MediaAssetTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimelineEventTranslation" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimelineEventTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterTranslation" (
    "id" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LocationTranslation" (
    "id" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LocationTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GameTranslation_locale_idx" ON "GameTranslation"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "GameTranslation_gameId_locale_key" ON "GameTranslation"("gameId", "locale");

-- CreateIndex
CREATE INDEX "MediaAssetTranslation_locale_idx" ON "MediaAssetTranslation"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "MediaAssetTranslation_assetId_locale_key" ON "MediaAssetTranslation"("assetId", "locale");

-- CreateIndex
CREATE INDEX "TimelineEventTranslation_locale_idx" ON "TimelineEventTranslation"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "TimelineEventTranslation_eventId_locale_key" ON "TimelineEventTranslation"("eventId", "locale");

-- CreateIndex
CREATE INDEX "CharacterTranslation_locale_idx" ON "CharacterTranslation"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterTranslation_characterId_locale_key" ON "CharacterTranslation"("characterId", "locale");

-- CreateIndex
CREATE INDEX "LocationTranslation_locale_idx" ON "LocationTranslation"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "LocationTranslation_locationId_locale_key" ON "LocationTranslation"("locationId", "locale");

-- AddForeignKey
ALTER TABLE "GameTranslation" ADD CONSTRAINT "GameTranslation_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MediaAssetTranslation" ADD CONSTRAINT "MediaAssetTranslation_assetId_fkey" FOREIGN KEY ("assetId") REFERENCES "MediaAsset"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimelineEventTranslation" ADD CONSTRAINT "TimelineEventTranslation_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "TimelineEvent"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterTranslation" ADD CONSTRAINT "CharacterTranslation_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LocationTranslation" ADD CONSTRAINT "LocationTranslation_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
