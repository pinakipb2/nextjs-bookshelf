import type { NextPage } from 'next';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import { Manga, MangaImage } from '../../lib/types';

const MangaCard: NextPage<{ mangas: Manga[] }> = ({ mangas }) => {
  return (
    <>
      <div className="mx-64 mt-0 items-center justify-center flex flex-col">
        {mangas.map((manga: Manga) => {
          return (
            <div key={manga.manga_id} className="flex flex-row">
              <div className="bg-white w-11/12 rounded p-4 mb-6 relative shadow-lg">
                <div className="flex flex-row space-x-6">
                  <Image
                    src={(manga.images as MangaImage).large_image_url ? (manga.images as MangaImage).large_image_url : (manga.images as MangaImage).image_url}
                    alt={manga.title_english}
                    width={170}
                    height={220}
                  />
                  <div className="flex flex-col">
                    <div className="font-bold text-2xl mt-0 text-blue-700">
                      {manga.title_english.slice(0, 15)}
                      {manga.title_english.length > 16 && '...'}
                    </div>
                    <div className="font-bold text-base mt-1 text-blue-800 leading-3">({manga.title_japanese})</div>
                    <div className="font-extralight text-sm text-justify mt-2 text-black max-w-md first-letter:font-bold first-letter:text-2xl">
                      {manga.synopsis ? manga.synopsis.slice(0, 290) : 'No Synopsis'}...
                    </div>
                    <div className="font-extralight text-sm mt-2 text-black max-w-md">Authors - {(manga.authors as string[]).length > 0 ? (manga.authors as string[]).join(', ') : '-'}</div>
                    <div className="font-extralight text-sm mt-2 text-black max-w-md">Genres - {(manga.genres as string[]).length > 0 ? (manga.genres as string[]).join(', ') : '-'}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-base mt-2.5 text-blue-800 absolute top-2 right-8">
                      {manga.chapters ? manga.chapters : '-'} Chapters & {manga.volumes ? manga.volumes : '-'} Volumes
                    </div>
                    <div className="font-bold text-sm mt-2.5 text-green-700 absolute top-8 right-8">Status : {manga.status}</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-evenly">
                <div className="w-1/11 ml-6 rounded font-semibold mb-6 items-center flex">
                  <Tippy content="Mark as Unread" placement="right" className="bg-neutral-900 text-white rounded-xl p-2 pl-3 pr-3">
                    <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-white transition-colors duration-150 bg-red-700 rounded-full focus:shadow-outline hover:bg-orange-800 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
                    <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-white transition-colors duration-150 bg-red-700 rounded-full focus:shadow-outline hover:bg-orange-800 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </Tippy>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MangaCard;
