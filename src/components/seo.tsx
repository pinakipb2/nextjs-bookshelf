import type { NextPage } from 'next';
import Head from 'next/head';

interface props {
  title?: string;
}

const SEO: NextPage<props> = ({ title }) => {
  return (
    <Head>
      {title ? <title>{title} | The Next Bookshelf App</title> : <title>The Next Bookshelf App</title>}
      {title ? <meta name="description" content={`${title} | The Next Bookshelf App`} /> : <meta name="description" content="The Next Bookshelf App" />}

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
