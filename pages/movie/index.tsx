import PageHead from '../../src/components/shared/page-head';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import { GlobalConstant } from '../../src/constants/page-size';
import { authHeader } from '../../src/helpers/auth-header';
import { getServerSidePropsErrorHandler } from '../../src/helpers/get-sever-side-props-error-handler';
import { ListInterface } from '../../src/models/list-interface';
import { MovieBaseInterface } from '../../src/models/movie/movie-base-interface';
import { MovieApi } from '../../src/services/api/movie/movie-api';
import MovieView from '../../src/components/views/movie/movie-view';

type Props = {
  page: number;
  list: ListInterface<MovieBaseInterface> | null;
};
const MoviePage = ({ page, list }: Props) => {
  return (
    <>
      <PageHead title="Movie" />
      <MovieView page={page} list={list} />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const query: any = context.query;
    const page = parseInt(query?.page || 1);

    const [movieRes] = await Promise.all([
      MovieApi.list({
        pageNumber: page,
        pageSize: GlobalConstant.PAGE_SIZE,
        config: {
          headers: authHeader(context.req),
        },
      }),
    ]);

    const props: Props = {
      page: page,
      list: movieRes,
    };
    return {
      props,
    };
  } catch (e) {
    return getServerSidePropsErrorHandler(e);
  }
};

export default MoviePage;
