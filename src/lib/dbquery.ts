import type { Prisma } from '@prisma/client';
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

export const getPaginatedMangasAlphabetically = async (skip: number, take: number, order: Prisma.SortOrder): Promise<Manga[] | null> => {
  try {
    const paginatedMangasAlphabetic: Manga[] | null = await prisma.manga.findMany({
      skip,
      take,
      select,
      orderBy: [{ title_english: order }],
    });
    return paginatedMangasAlphabetic;
  } catch (err) {
    return null;
  }
};

export const getPaginatedMangasByPopularity = async (skip: number, take: number, order: Prisma.SortOrder): Promise<Manga[] | null> => {
  try {
    const paginatedMangasByPopularity: Manga[] | null = await prisma.manga.findMany({
      skip,
      take,
      select,
      orderBy: [{ popularity: order }],
    });
    return paginatedMangasByPopularity;
  } catch (err) {
    return null;
  }
};

export const getMangasBySearchTerm = async (searchTerm: string): Promise<Manga[] | null> => {
  try {
    // Capitalize every first letter
    const words = searchTerm.split(' ');
    const titleCaseTerm: string = words
      .map((word: string) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(' ');
    const mangasBySearchTerm: Manga[] | null = await prisma.manga.findMany({
      select,
      where: {
        OR: [
          {
            title_english: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
          {
            title_japanese: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
          {
            status: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
          {
            synopsis: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
          {
            authors: {
              has: titleCaseTerm,
            },
          },
          {
            genres: {
              has: titleCaseTerm,
            },
          },
        ],
      },
    });
    return mangasBySearchTerm;
  } catch (err) {
    return null;
  }
};
