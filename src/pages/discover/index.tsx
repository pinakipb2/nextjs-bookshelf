import type { NextPage, InferGetStaticPropsType } from 'next';
import Footer from '../../components/footer';
import Header from '../../components/header';
import MangaCard from '../../components/mangaCards/discover';
import Pagination from '../../components/pagination';
import SEO from '../../components/seo';
import { getPaginatedMangas } from '../../lib/dbquery';
import { activeRoute, Manga } from '../../lib/types';
import { TOTAL_MANGAS } from '../../lib/constants';
import { useState } from 'react';

export async function getStaticProps() {
  // Reutrn page 'a'(page) with 'b'(limit) records each page
  const page: number = 1;
  const limit: number = 5;
  const skip: number = (page - 1) * limit;
  const mangas: Manga[] = await getPaginatedMangas(skip, limit);
  return {
    props: {
      mangas,
      limit,
    },
    revalidate: 10,
  };
}

const Discover: NextPage<{ mangas: Manga[]; limit: number }> = ({ mangas, limit }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // Current Page Number
  const [pageNumber, setPageNumber] = useState<number>(0);
  // Number of pages visited
  const pagesVisited: number = pageNumber * limit;
  // Total number of pages
  const pageCount: number = Math.ceil(TOTAL_MANGAS / limit);
  // Function to change page number
  const changePage = ({ selected }: { selected: number }): void => {
    setPageNumber(selected);
  };

  return (
    <>
      <SEO title="Discover" />
      <Header current={activeRoute.discover} />
      <div className="bg-neutral-700 pb-10">
        <div className="mx-64 mt-0 items-center justify-center flex flex-row">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-10 xl:w-96 mt-10">
              <input
                type="search"
                className="w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white shadow-lg"
                placeholder="Search Manga..."
              />
            </div>
            <div className="inline-flex rounded-md shadow-sm pb-10 h-full" role="group">
              <button
                type="button"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-neutral-800 dark:focus:bg-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg> */}
                Alphabetic
              </button>
              <button
                type="button"
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-neutral-800 dark:focus:bg-gray-900"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg> */}
                Popularity
              </button>
            </div>
          </div>
        </div>
        {mangas.length > 0 ? (
          <>
            <MangaCard mangas={mangas} />
            <div className="mx-64 items-center justify-center flex flex-col pb-5">
              <Pagination pageCount={pageCount} changePage={changePage} />
            </div>
          </>
        ) : (
          <div className="mx-64 items-center justify-center flex flex-col text-3xl text-white mt-10 mb-14">Oops! No mangas found.</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Discover;
