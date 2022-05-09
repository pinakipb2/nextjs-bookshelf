import type { NextPage } from 'next';
import Footer from '../../components/footer';
import Header from '../../components/header';
import SEO from '../../components/seo';
import { activeRoute } from '../../lib/types';

const Completed: NextPage = () => {
  return (
    <>
      <SEO title="Completed Mangas" />
      <Header current={activeRoute.completed} />
      <div className="bg-neutral-700 pb-10"></div>
      <Footer />
    </>
  );
};

export default Completed;
