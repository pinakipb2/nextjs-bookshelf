import { prisma } from '../lib/prisma';

const dropMangas = async (): Promise<void> => {
  try {
    const deletion = await prisma.manga.deleteMany({});
    console.log('Deletion: ', deletion);
  } catch (error) {
    console.log(error);
  }
};

dropMangas();
