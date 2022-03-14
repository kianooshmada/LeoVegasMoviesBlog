import React from 'react';
import { MovieInterface } from '../../../../models/movie/movie-interface';
import * as S from './movie-detail-view.styled';
import { GlobalConstant } from '../../../../constants/page-size';
type Props = {
  detail: MovieInterface;
};
const NewsDetailView = ({ detail }: Props) => {
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
      </S.Layout>
    </>
  );
};

export default NewsDetailView;
