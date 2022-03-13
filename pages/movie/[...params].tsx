import { GetServerSidePropsContext } from 'next';
import React from 'react';
import PageHead from '../../src/components/shared/page-head';
import MovieDetailView from '../../src/components/views/movie/movie-detail-view';
import { authHeader } from '../../src/helpers/auth-header';
import { getServerSidePropsErrorHandler } from '../../src/helpers/get-sever-side-props-error-handler';
import { MovieInterface } from '../../src/models/movie/movie-interface';
import { MovieApi } from '../../src/services/api/movie/movie-api';
type Props = {
  detail: MovieInterface;
};
const NewsDetailPage = ({ detail }: Props) => {
  return (
    <>
      <PageHead title={detail.title + ' | movie'} />
      <MovieDetailView detail={detail} />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const params = context.query.params || [];
    const id: string = params[0];

    const [movieGetRes] = await Promise.all([
      MovieApi.get({
        id,
        config: {
          headers: authHeader(context.req),
        },
      }),
    ]);
    const props: Props = {
      detail: movieGetRes,
    };
    return {
      props,
    };
  } catch (e) {
    return getServerSidePropsErrorHandler(e);
  }
};

export default NewsDetailPage;
