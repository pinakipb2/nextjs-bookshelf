import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { Manga, MangaAPIResponse } from '../../../lib/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<MangaAPIResponse | Manga>) {
  switch (req.method) {
    case 'GET': {
      const id: number = Number(req.query.id);
      try {
        const user: Manga | null = await prisma.manga.findFirst({
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
        if (user === null) {
          throw new Error('Manga does not exist !!');
        }
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
