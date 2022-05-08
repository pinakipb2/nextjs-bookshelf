-- CreateTable
CREATE TABLE "Manga" (
    "id" SERIAL NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Manga_pkey" PRIMARY KEY ("id")
);
