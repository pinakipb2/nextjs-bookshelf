import { Prisma } from '@prisma/client';

export interface DBManga {
  id?: string;
  manga_id: number;
  url: string;
  images: Prisma.JsonObject | Prisma.InputJsonObject;
  title_english: string;
  title_japanese: string;
  chapters?: number;
  volumes?: number;
  status: string;
  popularity: number;
  synopsis?: string;
  authors?: string[];
  genres?: string[];
}

export interface MangaImage {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
}
export interface Manga {
  id?: string;
  manga_id: number;
  url: string;
  images: Prisma.JsonValue | Prisma.InputJsonValue | MangaImage;
  title_english: string;
  title_japanese: string;
  chapters?: number | null;
  volumes?: number | null;
  status: string;
  popularity: number;
  synopsis?: string | null;
  authors?: string[];
  genres?: string[];
}

export interface MangaAPIResponse {
  results?: Object;
  previous?: Object;
  self?: Object;
  next?: Object;
  total?: number;
  data?: Manga | Manga[] | null;
  error?: string;
}

export enum activeRoute {
  discover,
  list,
  completed,
}
