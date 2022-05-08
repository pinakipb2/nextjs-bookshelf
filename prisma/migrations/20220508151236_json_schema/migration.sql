/*
  Warnings:

  - You are about to drop the column `data` on the `Manga` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Manga" DROP COLUMN "data",
ADD COLUMN     "authors" TEXT[],
ADD COLUMN     "chapters" INTEGER,
ADD COLUMN     "genres" TEXT[],
ADD COLUMN     "images" JSONB,
ADD COLUMN     "popularity" INTEGER,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "synopsis" TEXT,
ADD COLUMN     "title_english" TEXT,
ADD COLUMN     "title_japanese" TEXT,
ADD COLUMN     "url" TEXT,
ADD COLUMN     "volumes" INTEGER;
