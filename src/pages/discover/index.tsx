import type { NextPage } from 'next';
import Footer from '../../components/footer';
import Header from '../../components/header';
import MangaCard from '../../components/mangaCard';
import SEO from '../../components/seo';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/mangas?page=1&limit=2').then((res) => res.json());
  return {
    props: {
      mangas: res.data,
    },
    revalidate: 10,
  };
}

const Discover: NextPage<any> = ({ mangas }) => {
  return (
    <>
      <SEO title="Discover" />
      <Header />
      <div className="bg-neutral-700">
        <div className="mx-64 mt-0 items-center justify-center flex flex-row">
          <div className="flex justify-center">
            <div className="mb-10 xl:w-96 mt-10">
              <input
                type="search"
                className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white shadow"
                placeholder="Search Manga..."
              />
            </div>
          </div>
        </div>
        <MangaCard mangas={mangas} />
      </div>
      <Footer />
    </>
  );
};

export default Discover;
