import type { NextApiRequest, NextApiResponse } from 'next';
const fsp = require('fs').promises;
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Mangas {
  error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Mangas | unknown>) {
  switch (req.method) {
    case 'GET': {
      const id: number = parseInt(req.query.id as string);

      try {
        const user = await prisma.manga.findFirst({
          where: {
            manga_id: id,
          },
          select: {
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
          },
        });
        console.log(user);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: 'Manga does not exist !!' });
      }
      break;
    }
    default: {
      res.status(500).json({ error: 'Method not Supported !!' });
    }
  }
}
