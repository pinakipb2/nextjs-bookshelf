import type { NextApiRequest, NextApiResponse } from 'next';
import { getMangaById } from '../../../lib/dbquery';
import { Manga, MangaAPIResponse } from '../../../lib/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<MangaAPIResponse | Manga>) {
  switch (req.method) {
    case 'GET': {
      const id: number = Number(req.query.id);
      try {
        const manga: Manga | null = await getMangaById(id);
        if (manga === null) {
          throw new Error('Manga does not exist !!');
        }
        res.status(200).json(manga);
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
