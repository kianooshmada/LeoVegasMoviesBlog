import React from 'react';
import { MovieInterface } from '../../../../models/movie/movie-interface';
import * as S from './movie-detail-view.styled';
import { GlobalConstant } from '../../../../constants/page-size';
import { Button, message } from 'antd';
import { convertTryCatchParamToError } from '../../../../helpers/convert-try-catch-param-to-error';
import { MovieApi } from '../../../../services/api/movie/movie-api';

type Props = {
  detail: MovieInterface;
};

const MovieDetailView = ({ detail }: Props) => {
  const watchLater = async () => {
    try {
      await MovieApi.watchLater({
        media_id: detail.id,
        media_type: 'movie',
        watchlist: true,
      });

      message.success({
        content: 'the movie added to watch later list.',
        duration: 5,
      });
    } catch (error) {
      message.error(convertTryCatchParamToError(error).message);
    } finally {
    }
  };

  const addToMyFavoriteList = async () => {
    try {
      await MovieApi.addToFavoriteList({
        media_id: detail.id,
        media_type: 'movie',
        favorite: true,
      });

      message.success({
        content: 'the movie added to my favorite list.',
        duration: 5,
      });
    } catch (error) {
      message.error(convertTryCatchParamToError(error).message);
    } finally {
    }
  };
  return (
    <>
      {detail ? (
        <S.Cover>
          <S.CoverImage
            src={GlobalConstant.POSTER_PATH_URL + detail.backdrop_path}
            alt={detail.title}
          />
        </S.Cover>
      ) : null}
      <S.Layout>
        <S.Header>
          <S.Title>{detail.title}</S.Title>
          {detail.release_date ? <S.Date>{detail.release_date}</S.Date> : null}
        </S.Header>
        <S.Content>
          <article
            dangerouslySetInnerHTML={{ __html: detail.overview }}
          ></article>
        </S.Content>
        <hr />
        <Button
          size="middle"
          type="primary"
          htmlType="button"
          onClick={watchLater}
        >
          Watch Later
        </Button>
        <Button
          size="middle"
          type="primary"
          htmlType="button"
          danger
          style={{ marginLeft: '.4rem' }}
          onClick={addToMyFavoriteList}
        >
          Add to My Favorite List
        </Button>
      </S.Layout>
    </>
  );
};

export default MovieDetailView;
