import type { NextApiRequest, NextApiResponse } from 'next';
import { Manga, MangaAPIResponse } from '../../../lib/types';
import { TOTAL_MANGAS } from '../../../lib/constants';
import { getAllMangas, getPaginatedMangas } from '../../../lib/dbquery';

export default async function handler(req: NextApiRequest, res: NextApiResponse<MangaAPIResponse | Manga[]>) {
  switch (req.method) {
    case 'GET': {
      try {
        // Reutrn page 'a'(page) with 'b'(limit) records each page
        const page: number = Number(req.query.page);
        const limit: number = Number(req.query.limit);
        // If page or limit is negative show error
        if (page <= 0 || limit <= 0) {
          res.status(500).json({ error: 'Page and Limit cannot be Zero or Negative !!' });
        } else {
          // If page and limit, both are not present
          // show all the mangas available
          if (!page && !limit) {
            const allMangas: Manga[] = await getAllMangas();
            res.status(200).json(allMangas);
          } else if (!page) {
            // If page is not present, return error
            res.status(500).json({ error: 'Page is needed !!' });
          } else if (!limit) {
            // If limit is not present, return error
            res.status(500).json({ error: 'Limit is needed !!' });
          } else {
            // Return paginated Mangas
            const startIndex: number = (page - 1) * limit;
            const endIndex: number = page * limit;
            const paginatedMangas: MangaAPIResponse = {} as MangaAPIResponse;
            if (startIndex > 0) {
              paginatedMangas.previous = {
                page: page - 1,
                limit,
              };
            }
            paginatedMangas.self = {
              page: page,
              limit,
            };
            if (endIndex < TOTAL_MANGAS) {
              paginatedMangas.next = {
                page: page + 1,
                limit,
              };
            }
            paginatedMangas.total = TOTAL_MANGAS;
            paginatedMangas.data = await getPaginatedMangas(startIndex, limit);
            res.status(200).json(paginatedMangas);
          }
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error reading data !!' });
      }
      break;
    }
    default: {
      res.status(505).json({ error: 'Method not Supported !!' });
    }
  }
}
