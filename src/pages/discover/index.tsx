import type { NextPage } from 'next';
import Footer from '../../components/footer';
import Header from '../../components/header';
import SEO from '../../components/seo';

const Discover: NextPage = () => {
  return (
    <>
      <SEO title="Discover" />
      <Header />
      <div className="bg-white">hi</div>
      <Footer />
    </>
  );
};

export default Discover;
