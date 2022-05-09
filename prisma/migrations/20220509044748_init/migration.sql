-- CreateTable
CREATE TABLE "Manga" (
    "id" TEXT NOT NULL,
    "manga_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "images" JSONB NOT NULL,
    "title_english" TEXT NOT NULL,
    "title_japanese" TEXT NOT NULL,
    "chapters" INTEGER,
    "volumes" INTEGER,
    "status" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL,
    "synopsis" TEXT,
    "authors" TEXT[],
    "genres" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Manga_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Manga_manga_id_key" ON "Manga"("manga_id");

-- CreateIndex
CREATE UNIQUE INDEX "Manga_url_key" ON "Manga"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Manga_images_key" ON "Manga"("images");
