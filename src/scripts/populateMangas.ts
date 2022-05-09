import { prisma } from '../lib/prisma';
const fsp = require('fs').promises;
import { DBManga } from '../lib/types';

const populateMangas = async () => {
  try {
    const mangas: DBManga[] = [];
    for (let i = 1; i <= 213; i++) {
      const file_data = await fsp.readFile(`src/mangas/${i}.json`);
      const json_data: DBManga = JSON.parse(file_data);
      const mangaObject: DBManga = {} as DBManga;
      mangaObject.manga_id = Number(json_data.id);
      mangaObject.url = json_data.url;
      mangaObject.images = json_data.images;
      mangaObject.title_english = json_data.title_english;
      mangaObject.title_japanese = json_data.title_japanese;
      mangaObject.chapters = json_data.chapters;
      mangaObject.volumes = json_data.volumes;
      mangaObject.status = json_data.status;
      mangaObject.popularity = json_data.popularity;
      mangaObject.synopsis = json_data.synopsis;
      mangaObject.authors = json_data.authors === null ? undefined : json_data.authors;
      mangaObject.genres = json_data.genres === null ? undefined : json_data.genres;
      mangas.push(mangaObject);
    }
    const creation = await prisma.manga.createMany({
      data: mangas,
    });
    console.log('Creation: ', creation);
  } catch (error) {
    console.log(error);
  }
};

populateMangas();
