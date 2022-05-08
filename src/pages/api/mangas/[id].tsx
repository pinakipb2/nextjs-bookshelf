import type { NextApiRequest, NextApiResponse } from 'next';
const fsp = require('fs').promises;

interface Mangas {
  error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Mangas>) {
  switch (req.method) {
    case 'GET': {
      const { id } = req.query;
      try {
        const file_data = await fsp.readFile(`src/mangas/${id}.json`);
        const json_data = JSON.parse(file_data);
        res.status(200).json(json_data);
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
