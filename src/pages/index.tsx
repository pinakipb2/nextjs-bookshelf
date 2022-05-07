import type { NextPage } from 'next';
import Link from 'next/link';
import SEO from '../components/seo';
import TextLogo from '../components/textlogo';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen space-y-4">
        <SEO />
        <TextLogo />
        <div className="items-center space-x-4">
          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-thin py-2 px-5 rounded">Login</button>
          </Link>
          <Link href="/register">
            <button className="bg-gray-200 hover:bg-gray-300 text-black font-thin py-2 px-5 rounded">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
