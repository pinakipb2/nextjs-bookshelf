import type { NextApiRequest, NextApiResponse } from 'next';
const fsp = require('fs').promises;

interface Mangas {
  error: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Mangas>) {
  switch (req.method) {
    case 'GET': {
      try {
        const file_data = await fsp.readFile('src/mangas/mangas.json');
        const json_data = JSON.parse(file_data);
        res.status(200).json(json_data);
      } catch (error) {
        res.status(500).json({ error: 'Error reading data' });
      }
      break;
    }
    default: {
      res.status(500).json({ error: 'Method not Supported !!' });
    }
  }
}
