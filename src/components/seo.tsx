import type { NextPage } from 'next';
import Head from 'next/head';

const SEO: NextPage<{ title?: string }> = ({ title }) => {
  return (
    <Head>
      {title ? <title>{title} | The Next Mangashelf App</title> : <title>The Next Mangashelf App</title>}
      {title ? <meta name="og:title" content={`${title} | The Next Mangashelf App`} /> : <meta name="og:title" content="The Next Mangashelf App" />}
      {title ? <meta name="description" content={`${title} | The Next Mangashelf App`} /> : <meta name="description" content="The Next Mangashelf App" />}
      {title ? <meta name="og:description" content={`${title} | The Next Mangashelf App`} /> : <meta name="og:description" content="The Next Mangashelf App" />}
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:site" content="@pinakipb2" />
      <meta name="author" content="Pinaki Bhattacharjee" />
    </Head>
  );
};

export default SEO;
