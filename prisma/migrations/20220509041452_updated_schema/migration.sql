/*
  Warnings:

  - The primary key for the `Manga` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `images` on table `Manga` required. This step will fail if there are existing NULL values in that column.
  - Made the column `popularity` on table `Manga` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Manga` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title_english` on table `Manga` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title_japanese` on table `Manga` required. This step will fail if there are existing NULL values in that column.
  - Made the column `url` on table `Manga` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Manga" DROP CONSTRAINT "Manga_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "images" SET NOT NULL,
ALTER COLUMN "popularity" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "title_english" SET NOT NULL,
ALTER COLUMN "title_japanese" SET NOT NULL,
ALTER COLUMN "url" SET NOT NULL,
ADD CONSTRAINT "Manga_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Manga_id_seq";
