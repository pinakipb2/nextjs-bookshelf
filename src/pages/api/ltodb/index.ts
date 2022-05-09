import type { NextApiRequest, NextApiResponse } from 'next';
const fsp = require('fs').promises;
import { PrismaClient } from '@prisma/client';

interface Resp {
  status: string;
}

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<Resp>) {
  switch (req.method) {
    // Uncomment to make a POST request to add static data to database,
    // after adding to database, do comment this section !!
    // case 'POST': {
    //   try {
    //     for (let i = 1; i <= 213; i++) {
    //       const f_data = await fsp.readFile(`src/mangas/${i}.json`);
    //       const j_data = JSON.parse(f_data);
    //       await prisma.manga.create({
    //         data: {
    //           manga_id: j_data.id,
    //           url: j_data.url,
    //           images: j_data.images,
    //           title_english: j_data.title_english,
    //           title_japanese: j_data.title_japanese,
    //           chapters: j_data.chapters,
    //           volumes: j_data.volumes,
    //           status: j_data.status,
    //           popularity: j_data.popularity,
    //           synopsis: j_data.synopsis,
    //           authors: j_data.authors === null ? undefined : j_data.authors,
    //           genres: j_data.genres === null ? undefined : j_data.genres,
    //         },
    //       });
    //     }
    //     res.status(200).json({ status: 'OK !!' });
    //   } catch (error) {
    //     res.status(500).json({ status: 'Error !!' });
    //   }
    //   break;
    // }
    default: {
      res.status(500).json({ status: 'Error !!' });
    }
  }
}
