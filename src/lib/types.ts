export interface Manga {
  manga_id: number;
  url: string;
  images: string;
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
