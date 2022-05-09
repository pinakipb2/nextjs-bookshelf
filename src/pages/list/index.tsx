import type { NextPage } from 'next';
import Footer from '../../components/footer';
import Header from '../../components/header';
import SEO from '../../components/seo';
import { activeRoute } from '../../lib/types';

const List: NextPage = () => {
  return (
    <>
      <SEO title="Reading List" />
      <Header current={activeRoute.list} />
      <div className="bg-neutral-700 pb-10"></div>
      <Footer />
    </>
  );
};

export default List;
