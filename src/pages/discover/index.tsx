import type { NextPage, GetServerSidePropsContext } from 'next';
import Footer from '../../components/footer';
import Header from '../../components/navbar';
import MangaCard from '../../components/mangaCards/discover';
import Pagination from '../../components/pagination';
import SEO from '../../components/seo';
import { getPaginatedMangasAlphabetically, getPaginatedMangas, getPaginatedMangasByPopularity, getMangasBySearchTerm } from '../../lib/dbquery';
import { activeRoute, Manga } from '../../lib/types';
import { PAGE_LIMIT, TOTAL_MANGAS } from '../../lib/constants';
import { useState } from 'react';
import { useRouter } from 'next/router';
import type { Prisma } from '@prisma/client';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // Reutrn page 'a'(page) with 'b'(limit) records each page
  const page: number = Number(ctx.query.page) || 1;
  let alphabetic: string = String(ctx.query.alphabetic);
  let popularity: string = String(ctx.query.popularity);
  let search: string = String(ctx.query.s);

  const limit: number = PAGE_LIMIT;
  const skip: number = (page - 1) * limit;
  let mangas: Manga[] | null;
  if (search !== 'undefined') {
    mangas = await getMangasBySearchTerm(search);
    popularity = 'undefined';
    alphabetic = 'undefined';
  } else if (alphabetic === 'asc' || alphabetic === 'desc') {
    mangas = await getPaginatedMangasAlphabetically(skip, limit, alphabetic as Prisma.SortOrder);
    popularity = 'undefined';
    search = 'undefined';
  } else if (popularity === 'asc' || popularity === 'desc') {
    mangas = await getPaginatedMangasByPopularity(skip, limit, popularity as Prisma.SortOrder);
    alphabetic = 'undefined';
    search = 'undefined';
  } else {
    mangas = await getPaginatedMangas(skip, limit);
  }
  return {
    props: {
      mangas,
      page,
      limit,
      alphabetic,
      popularity,
      search,
    },
  };
}

const Discover: NextPage<{ mangas: Manga[]; page: number; limit: number; alphabetic: string; popularity: string; search: string }> = ({ mangas, page, limit, alphabetic, popularity, search }) => {
  const router = useRouter();
  // Current Page Number
  const [pageNumber, setPageNumber] = useState<number>(page - 1);
  // Number of pages visited
  // const pagesVisited: number = pageNumber * limit;
  // Total number of pages
  const pageCount: number = Math.ceil(TOTAL_MANGAS / limit);

  // Function to change page number
  const changePage = ({ selected }: { selected: number }): void => {
    setPageNumber(selected);
    if (alphabetic !== 'undefined') {
      router.push(`/discover?page=${selected + 1}&alphabetic=${alphabetic}`);
    } else if (popularity !== 'undefined') {
      router.push(`/discover?page=${selected + 1}&popularity=${popularity}`);
    } else {
      router.push(`/discover?page=${selected + 1}`);
    }
  };

  // Function to Sort ALPHABETICALLY
  const sortAlphabetically = () => {
    if (alphabetic === 'asc') {
      router.push(`/discover?page=${page}&alphabetic=desc`);
    } else if (alphabetic === 'desc') {
      router.push(`/discover?page=${page}`);
    } else {
      router.push(`/discover?page=${page}&alphabetic=asc`);
    }
  };

  // Function to Sort By POPULARITY
  const sortByPopularity = () => {
    if (popularity === 'asc') {
      router.push(`/discover?page=${page}&popularity=desc`);
    } else if (popularity === 'desc') {
      router.push(`/discover?page=${page}`);
    } else {
      router.push(`/discover?page=${page}&popularity=asc`);
    }
  };

  // Function to search for mangas based on given term
  const searchMangas = (event: any) => {
    if (event.key === 'Enter') {
      // Remove unnecessary spaces
      const searchTerm: string = event.target.value.trim().replace(/ +(?= )/g, '');
      if (searchTerm) {
        console.log(searchTerm);
        router.push(`/discover?s=${searchTerm}`);
      }
    } else if (!event.target.value.trim()) {
      router.push(`/discover?page=${page}`);
    }
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
                type="text"
                className="w-full px-3 py-2 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded m-0 focus:text-gray-700 focus:bg-white shadow-lg"
                placeholder="Search Manga..."
                defaultValue={search === 'undefined' ? '' : search}
                onKeyUp={searchMangas}
              />
            </div>
            <div className="inline-flex rounded-md shadow-sm pb-10 h-full" role="group">
              {alphabetic === 'asc' || alphabetic === 'desc' ? (
                <button
                  type="button"
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 focus:z-10 focus:text-white dark:border-white dark:text-white bg-neutral-900"
                  onClick={() => {
                    sortAlphabetically();
                  }}
                >
                  {alphabetic === 'asc' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                    </svg>
                  )}
                  Alphabetic
                </button>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:text-white focus:z-10 focus:text-white dark:border-white dark:text-white dark:hover:text-white"
                  onClick={() => {
                    sortAlphabetically();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                  Alphabetic
                </button>
              )}
              {popularity === 'asc' || popularity === 'desc' ? (
                <button
                  type="button"
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-lg border border-gray-900 hover:bg-gray-900 focus:z-10 focus:text-white dark:border-white dark:text-white bg-neutral-900"
                  onClick={() => {
                    sortByPopularity();
                  }}
                >
                  {popularity === 'asc' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  Popularity
                </button>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-lg border border-gray-900 hover:text-white focus:z-10 focus:text-white dark:border-white dark:text-white dark:hover:text-white"
                  onClick={() => {
                    sortByPopularity();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Popularity
                </button>
              )}
            </div>
          </div>
        </div>
        {mangas && mangas.length > 0 ? (
          <>
            <MangaCard mangas={mangas} />
          </>
        ) : (
          <div className="mx-64 items-center justify-center flex flex-col text-3xl text-white mt-10 mb-14">Oops! No mangas found.</div>
        )}
        <div className={`mx-64 items-center justify-center flex flex-col pb-5 ${mangas && mangas.length > 0 && search === 'undefined' ? '' : 'hidden'}`}>
          <Pagination forcePage={pageNumber} pageCount={pageCount} changePage={changePage} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Discover;
