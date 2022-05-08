import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Footer: NextPage = () => {
  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-neutral-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-4">
            <Image src="/book.png" alt="Mangashelf" width={80} height={80} />
            <Link href="/">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer">Mangashelf</span>
            </Link>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-base text-gray-400 sm:mb-0">
            <li>
              <a href="https://github.com/pinakipb2/nextjs-mangashelf" className="hover:underline" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-base text-gray-400 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{' '}
          <Link href="/" className="hover:underline">
            Mangashelf™
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
