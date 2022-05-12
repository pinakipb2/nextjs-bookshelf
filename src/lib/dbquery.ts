import { prisma } from './prisma';
import { Manga } from './types';

const select = {
  id: true,
  manga_id: true,
  url: true,
  images: true,
  title_english: true,
  title_japanese: true,
  chapters: true,
  volumes: true,
  status: true,
  popularity: true,
  synopsis: true,
  authors: true,
  genres: true,
};

// Skip 'n' records and take 'm' records after it
export const getPaginatedMangas = async (skip: number, take: number): Promise<Manga[] | null> => {
  try {
    const paginatedMangas: Manga[] = await prisma.manga.findMany({
      skip,
      take,
      select,
      orderBy: {
        manga_id: 'asc',
      },
    });
    return paginatedMangas;
  } catch (err) {
    return null;
  }
};

export const getAllMangas = async (): Promise<Manga[] | []> => {
  try {
    const allMangas: Manga[] = await prisma.manga.findMany({
      select,
      orderBy: {
        manga_id: 'asc',
      },
    });
    return allMangas;
  } catch (err) {
    return [];
  }
};

export const getMangaById = async (ID: number): Promise<Manga | null> => {
  try {
    const singleManga: Manga | null = await prisma.manga.findFirst({
      where: {
        manga_id: ID,
      },
      select,
    });
    return singleManga;
  } catch (err) {
    return null;
  }
};

export const getMangaByDBId = async (ID: string): Promise<Manga | null> => {
  try {
    const singleManga: Manga | null = await prisma.manga.findFirst({
      where: {
        id: ID,
      },
      select,
    });
    return singleManga;
  } catch (err) {
    return null;
  }
};
