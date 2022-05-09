import type { NextPage, InferGetStaticPropsType } from 'next';
import Footer from '../../components/footer';
import Header from '../../components/header';
import MangaCard from '../../components/mangaCard';
import SEO from '../../components/seo';
import { prisma } from '../../lib/prisma';
import { Manga } from '../../lib/types';

export async function getStaticProps() {
  const page: number = 1;
  const limit: number = 5;
  const startIndex: number = (page - 1) * limit;
  const mangas: Manga[] = await prisma.manga.findMany({
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
  return {
    props: {
      mangas,
    },
    revalidate: 10,
  };
}

const Discover: NextPage<{ mangas: Manga[] }> = ({ mangas }) => {
  return (
    <>
      <SEO title="Discover" />
      <Header />
      <div className="bg-neutral-700 pb-10">
        <div className="mx-64 mt-0 items-center justify-center flex flex-row">
          <div className="flex justify-center">
            <div className="mb-10 xl:w-96 mt-10">
              <input
                type="search"
                className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white shadow-lg"
                placeholder="Search Manga..."
              />
            </div>
          </div>
        </div>
        {mangas.length > 0 ? <MangaCard mangas={mangas} /> : <div className="mx-64 items-center justify-center flex flex-col text-3xl text-white mt-10 mb-32">Oops! No mangas found.</div>}
      </div>
      <Footer />
    </>
  );
};

export default Discover;
