import PageHead from '../src/components/shared/page-head';
import HomeView from '../src/components/views/home-view';
import { getServerSidePropsErrorHandler } from '../src/helpers/get-sever-side-props-error-handler';
import { MovieBaseInterface } from '../src/models/movie/movie-base-interface';
import { HomeApi } from '../src/services/api/home/home-api';
import { MovieApi } from '../src/services/api/movie/movie-api';
import { authHeader } from '../src/helpers/auth-header';
import { GetServerSidePropsContext } from 'next';
import { ListInterface } from '../src/models/list-interface';
type Props = {
  introduction: string;
  list: ListInterface<MovieBaseInterface> | null;
  page: number;
};

const HomePage = ({ introduction, list, page }: Props) => {
  return (
    <>
      <PageHead title="Home" />
      <HomeView introduction={introduction} list={list} page={page} />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const query: any = context.query;
    const page = parseInt(query?.page || 1);

    const [introductionRes, movieRes] = await Promise.all([
      HomeApi.GetIntroduction(),
      MovieApi.getNowPalyingList({
        pageNumber: page,
        config: {
          headers: authHeader(context.req),
        },
      }),
    ]);

    const props: Props = {
      introduction: introductionRes?.context || '',
      list: movieRes,
      page: page,
    };
    return {
      props,
    };
  } catch (e) {
    return getServerSidePropsErrorHandler(e);
  }
};

export default HomePage;
