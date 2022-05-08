import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Header: NextPage = () => {
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
            <div className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 cursor-pointer">Docs</div>
            <div className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 cursor-pointer">Examples</div>
            <div className="block mt-4 lg:inline-block lg:mt-0 text-white cursor-pointer">Blog</div>
          </div>
          <div className="flex flex-row">
            <Image src="/profile.png" alt="Mangashelf" width={30} height={30} className="cursor-pointer rounded-full bg-white min-h-0" />
            <div className="ml-4 inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0 items-center justify-center cursor-pointer">
              Logout
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
