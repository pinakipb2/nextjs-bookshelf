import type { NextPage } from 'next';
import Link from 'next/link';
import SEO from '../components/seo';

const InternalServerError: NextPage = () => {
  return (
    <>
      <SEO title="500" />
      <div className="pl-96 pr-96 text-justify h-screen max-h-screen justify-center items-center flex flex-col bg-transparent">
        <div className="pb-10 text-white text-4xl font-extrabold font-sans">{`508 - Loop Detected`}</div>
        <p className="text-gray-300 pb-10">
          {`Why show a generic 500 when I can make it sound mysterious? It seems you've reached a point where the server encountered an unexpected condition that prevented it from fulfilling the request. Can you please check back later?`}
        </p>
        <Link href="/">
          <button className="box-border flex justify-center w-1/2 px-4 py-2 font-medium text-white bg-indigo-600 rounded-md text-md hover:bg-indigo-700">Go Read Some Manga !</button>
        </Link>
      </div>
    </>
  );
};

export default InternalServerError;
