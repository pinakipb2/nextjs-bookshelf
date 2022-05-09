import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Mangas {
  error?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Mangas | unknown>) {
  switch (req.method) {
    case 'GET': {
      try {
        const TOTAL_MANGAS: number = 213;

        const page: number = parseInt(req.query.page as string);
        const limit: number = parseInt(req.query.limit as string);
        const startIndex: number = (page - 1) * limit;
        const endIndex: number = page * limit;

        const results: any = {};
        if (startIndex > 0) {
          results.previous = {
            page: page - 1,
            limit,
          };
        }
        results.self = {
          page: page,
          limit,
        };
        if (endIndex < TOTAL_MANGAS) {
          results.next = {
            page: page + 1,
            limit,
          };
        }
        results.total = TOTAL_MANGAS;

        if (page <= 0 || limit <= 0) {
          res.status(500).json({ error: 'Page and Limit cannot be Zero or Negative !!' });
        } else {
          if (!page && !limit) {
            const allMangas = await prisma.manga.findMany({
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
              orderBy: {
                manga_id: 'asc',
              },
            });
            res.status(200).json(allMangas);
          } else if (!page) {
            res.status(500).json({ error: 'Page is needed !!' });
          } else if (!limit) {
            res.status(500).json({ error: 'Limit is needed !!' });
          } else {
            results.data = await prisma.manga.findMany({
              skip: startIndex,
              take: limit,
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
              orderBy: {
                manga_id: 'asc',
              },
            });
            res.status(200).json(results);
          }
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error reading data !!' });
      }
      break;
    }
    default: {
      res.status(500).json({ error: 'Method not Supported !!' });
    }
  }
}
