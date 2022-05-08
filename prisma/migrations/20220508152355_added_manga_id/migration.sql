/*
  Warnings:

  - Added the required column `manga_id` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manga" ADD COLUMN     "manga_id" INTEGER NOT NULL;
