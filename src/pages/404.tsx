import type { NextPage } from 'next';
import Link from 'next/link';
import SEO from '../components/seo';

const NotFound: NextPage = () => {
  return (
    <>
      <SEO title="404" />
      <div className="pl-96 pr-96 text-justify h-screen max-h-screen justify-center items-center flex flex-col bg-transparent">
        <div className="pb-10 text-white text-4xl font-extrabold font-sans">{`451 – Unavailable For Legal Reasons`}</div>
        <p className="text-gray-300 pb-10">
          {`Why show a generic 404 when I can make it sound mysterious? It seems you've found something that used to exist, or you spelled something wrong. I'm guessing you spelled something wrong. Can
        you double check that URL?`}
        </p>
        <Link href="/">
          <button className="box-border flex justify-center w-1/2 px-4 py-2 font-medium text-white bg-indigo-600 rounded-md text-md hover:bg-indigo-700">Go Read Some Manga !</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
