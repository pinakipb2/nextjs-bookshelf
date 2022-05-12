import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { activeRoute } from '../../lib/types';

const Header: NextPage<{ current?: activeRoute }> = ({ current }) => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal p-6 dark:bg-neutral-900">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <Image src="/book.png" alt="Mangashelf" width={40} height={40} />
          <Link href="/">
            <span className="font-semibold text-xl ml-2 tracking-tight cursor-pointer">Mangashelf</span>
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/discover">
              {current === activeRoute.discover ? (
                <div className="block mt-4 lg:inline-block lg:mt-0 text-white ml-4 mr-6 cursor-pointer underline underline-offset-4 decoration-orange-400 font-semibold">Discover</div>
              ) : (
                <div className="block mt-4 lg:inline-block lg:mt-0 text-white ml-4 mr-6 cursor-pointer">Discover</div>
              )}
            </Link>
            <Link href="/list">
              {current === activeRoute.list ? (
                <div className="block mt-4 lg:inline-block lg:mt-0 text-white mr-6 cursor-pointer underline underline-offset-4 decoration-orange-400 font-semibold">Reading List</div>
              ) : (
                <div className="block mt-4 lg:inline-block lg:mt-0 text-white mr-6 cursor-pointer">Reading List</div>
              )}
            </Link>
            <Link href="/completed">
              {current === activeRoute.completed ? (
                <div className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer underline underline-offset-4 decoration-orange-400 font-semibold">Completed Mangas</div>
              ) : (
                <div className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer">Completed Mangas</div>
              )}
            </Link>
          </div>
          <div className="flex">
            <Image src="/profile.png" alt="Mangashelf" width={40} height={40} className="cursor-pointer rounded-full bg-white py-2 items-center justify-center" />
            <div className="ml-4 text-sm px-4 py-2 border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 items-center justify-center cursor-pointer">
              Logout
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
