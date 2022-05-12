import { NextPage } from 'next';
import Image from 'next/image';
import { Manga, MangaImage } from '../../lib/types';
import Tippy from '@tippyjs/react';
import Notes from '../notes';

const MangaDetails: NextPage<{ isLoading?: boolean; manga?: Manga }> = ({ isLoading, manga }) => {
  if (!isLoading && manga) {
    return (
      <>
        <div className="bg-neutral-700 pb-10 pt-16">
          <div className="mx-32 mt-0 items-center justify-center flex flex-row">
            <div className="mx-32 mt-0 items-center justify-center flex flex-col">
              <div className="flex flex-row">
                <div className="bg-white w-11/12 rounded-xl p-4 mb-6 pr-6 shadow-sm">
                  <div className="flex flex-row space-x-6 w-full">
                    <div className="pl-2 pt-2 flex flex-col min-w-max">
                      <Image
                        src={(manga.images as MangaImage).large_image_url ? (manga.images as MangaImage).large_image_url : (manga.images as MangaImage).image_url}
                        alt={manga.title_english}
                        width={170}
                        height={220}
                      />
                      <a href={manga.url} target="__blank">
                        <>
                          <button className="mt-3 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 w-full">
                            Explore
                          </button>
                        </>
                      </a>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-bold text-3xl mt-0 text-blue-700">{manga.title_english}</div>
                      <div className="font-bold text-lg mt-1 text-blue-800 leading-2">({manga.title_japanese})</div>
                      <div className="font-bold text-base mt-6 text-red-800">Popularity : {manga.popularity}</div>
                      <div className="font-bold text-base mt-1 text-blue-800">
                        {manga.chapters ? manga.chapters : '-'} Chapters & {manga.volumes ? manga.volumes : '-'} Volumes
                      </div>
                      <div className="font-bold text-base mt-1 text-green-700">Status : {manga.status}</div>
                      <div className="font-extralight text-base text-justify mt-7 text-black max-w-full first-letter:font-bold first-letter:text-2xl">
                        {manga.synopsis ? manga.synopsis : 'No Synopsis'}
                      </div>
                      <div className="font-extralight text-base mt-6 text-black">Authors - {(manga.authors as string[]).length > 0 ? (manga.authors as string[]).join(', ') : '-'}</div>
                      <div className="font-extralight text-base mt-2 text-black">Genres - {(manga.genres as string[]).length > 0 ? (manga.genres as string[]).join(', ') : '-'}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-evenly">
                  <div className="w-1/11 ml-6 rounded font-semibold mb-6 items-center flex">
                    <Tippy content="Mark as Unread" placement="right" className="bg-neutral-900 text-white rounded-xl p-2 pl-3 pr-3">
                      <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-white transition-colors duration-150 bg-red-700 rounded-full focus:shadow-outline hover:bg-orange-800 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </Tippy>
                  </div>
                  <div className="w-1/11 ml-6 rounded font-semibold mb-6 items-center flex">
                    <Tippy content="Remove from Completed List" placement="right" className="bg-neutral-900 text-white rounded-xl p-2 pl-3 pr-3">
                      <button className="inline-flex items-center justify-center w-10 h-10 mr-2 text-white transition-colors duration-150 bg-red-700 rounded-full focus:shadow-outline hover:bg-orange-800 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </Tippy>
                  </div>
                </div>
              </div>
              <Notes />
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="bg-neutral-700 pb-10 pt-16 select-none">
        <div className="mx-32 mt-0 items-center justify-center flex flex-row">
          <div className="mx-32 mt-0 items-center justify-center flex flex-col">
            <div className="flex flex-row">
              <div className="bg-white w-11/12 rounded-xl p-4 mb-6 pr-6 shadow-sm">
                <div className="flex flex-row space-x-6 w-full">
                  <div className="pl-2 pt-2 flex flex-col min-w-max">
                    <div className="mt-0 focus:outline-none font-medium text-lg px-5 py-20 mb-2 text-slate-700 bg-slate-700 animate-pulse w-44">Explore</div>
                    <div className="mt-3 focus:outline-none font-medium rounded-lg text-lg px-5 py-2.5 mb-2 w-full text-slate-700 bg-slate-700 animate-pulse">Explore</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="mt-2 font-bold text-3xl text-slate-700 bg-slate-700 animate-pulse">English Title</div>
                    <div className="font-bold text-lg mt-1 text-slate-700 bg-slate-700 animate-pulse leading-2">Japanese Title</div>
                    <div className="font-bold text-base mt-8 text-slate-700 bg-slate-700 animate-pulse">Popularity : 1</div>
                    <div className="font-bold text-base mt-1 text-slate-700 bg-slate-700 animate-pulse">1 Chapters & 1 Volumes</div>
                    <div className="font-bold text-base mt-1 text-slate-700 bg-slate-700 animate-pulse">Status : Finished</div>
                    <div className="font-extralight text-base text-justify mt-7 text-slate-700 bg-slate-700 animate-pulse max-w-full first-letter:font-bold first-letter:text-2xl">
                      {
                        "enzou Tenma, a renowned Japanese neurosurgeon working in post-war Germany, faces a difficult choice: to operate on Johan Liebert, an orphan boy on the verge of death, or on the mayor of Düsseldorf. In the end, Tenma decides to gamble his reputation by saving Johan, effectively leaving the mayor for dead. As a consequence of his actions, hospital director Heinemann strips Tenma of his position, and Heinemann's daughter Eva breaks off their engagement."
                      }
                    </div>
                    <div className="font-extralight text-base mt-6 text-slate-700 bg-slate-700 animate-pulse">Authors -</div>
                    <div className="font-extralight text-base mt-2 text-slate-700 bg-slate-700 animate-pulse">Genres -</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-evenly">
                <div className="w-1/11 ml-6 rounded font-semibold mb-6 items-center flex">
                  <div className="inline-flex items-center justify-center w-10 h-10 mr-2 text-slate-700 bg-gray-400 animate-pulse rounded-full shadow-lg"></div>
                </div>
                <div className="w-1/11 ml-6 rounded font-semibold mb-6 items-center flex">
                  <div className="inline-flex items-center justify-center w-10 h-10 mr-2 text-slate-700 bg-gray-400 animate-pulse rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MangaDetails;

MangaDetails.defaultProps = {
  isLoading: false,
};
