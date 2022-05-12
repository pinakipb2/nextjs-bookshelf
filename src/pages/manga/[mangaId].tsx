import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Footer from '../../components/footer';
import Header from '../../components/header';
import MangaDetails from '../../components/mangaDetails';
import SEO from '../../components/seo';
import { PAGE_LIMIT, REVALIDATE_IN } from '../../lib/constants';
import { getMangaByDBId, getPaginatedMangas } from '../../lib/dbquery';
import { Manga } from '../../lib/types';

export async function getStaticPaths() {
  const page: number = 1;
  const limit: number = PAGE_LIMIT;
  const skip: number = (page - 1) * limit;
  const mangas: Manga[] | null = await getPaginatedMangas(skip, limit);
  const paths =
    mangas?.map((manga) => {
      return { params: { mangaId: manga.id } };
    }) || [];
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(ctx: any) {
  const { params } = ctx;
  const manga = await getMangaByDBId(params.mangaId);
  if (!manga) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      manga,
    },
    revalidate: REVALIDATE_IN,
  };
}

const MangaById: NextPage<{ manga: Manga }> = ({ manga }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <SEO title="Loading..." />
        <Header />
        <MangaDetails isLoading={true} />
        <Footer />
      </>
    );
  }
  return (
    <>
      <SEO title={manga.title_english} />
      <Header />
      <MangaDetails manga={manga} />
      <Footer />
    </>
  );
};

export default MangaById;
