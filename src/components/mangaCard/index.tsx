import type { NextPage } from 'next';
import Image from 'next/image';
import Tippy from '@tippyjs/react';

const MangaCard: NextPage<any> = ({ mangas }) => {
  return (
    <>
      <div className="mx-64 mt-0 items-center justify-center flex flex-col shadow">
        {mangas.map((manga: any) => {
          return (
            <div key={manga.id} className="flex flex-row">
              <div className="bg-white w-11/12 rounded p-4 mb-6 relative">
                <div className="flex flex-row space-x-6">
                  <Image src={manga.images.large_image_url} alt={manga.title_english} width={170} height={220} />
                  <div className="flex flex-col">
                    <div className="font-bold text-3xl mt-0.5 text-blue-700">{manga.title_english}</div>
                    <div className="font-bold text-base mt-1 text-blue-800 leading-3">({manga.title_japanese})</div>
                    <div className="font-extralight text-sm text-justify mt-2 text-black max-w-md first-letter:font-bold first-letter:text-2xl">{manga.synopsis.slice(0, 305)}...</div>
                    <div className="font-extralight text-sm mt-2 text-black max-w-md">Authors - {manga.authors.join(', ')}</div>
                    <div className="font-extralight text-sm mt-2 text-black max-w-md">Genres - {manga.genres.join(', ')}</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-base mt-2 text-blue-800 absolute top-2 right-8">
                      {manga.chapters} Chapters & {manga.volumes} Volumes
                    </div>
                    <div className="font-bold text-sm mt-2 text-blue-800 absolute top-8 right-8">Status : {manga.status}</div>
                  </div>
                </div>
              </div>
              <div className="w-1/12 ml-6 rounded font-semibold mb-6 items-center flex">
                <Tippy content="Add to Reading List" placement="right" className="bg-neutral-900 text-white rounded-2xl p-2">
                  <button className="inline-flex items-center justify-center w-8 h-8 mr-2 text-white transition-colors duration-150 bg-black rounded-full focus:shadow-outline hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </button>
                </Tippy>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MangaCard;
