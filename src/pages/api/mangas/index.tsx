import type { NextApiRequest, NextApiResponse } from 'next';
const fsp = require('fs').promises;

interface Mangas {
  error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Mangas>) {
  switch (req.method) {
    case 'GET': {
      try {
        const TOTAL_MANGAS: number = 213;
        const file_data = await fsp.readFile('src/mangas/mangas.json');
        const mangas = JSON.parse(file_data);

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
        results.data = mangas.slice(startIndex, endIndex);

        if (page <= 0 || limit <= 0) {
          res.status(500).json({ error: 'Page and Limit cannot be Zero or Negtive !!' });
        } else {
          if (!page && !limit) {
            res.status(200).json(mangas);
          } else if (!page) {
            res.status(500).json({ error: 'Page is needed !!' });
          } else if (!limit) {
            res.status(500).json({ error: 'Limit is needed !!' });
          } else {
            res.status(200).json(results);
          }
        }
      } catch (error) {
        res.status(500).json({ error: 'Error reading data !!' });
      }
      break;
    }
    default: {
      res.status(500).json({ error: 'Method not Supported !!' });
    }
  }
}
