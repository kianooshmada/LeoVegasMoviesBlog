import React from 'react';
import { MovieInterface } from '../../../../models/movie/movie-interface';
import * as S from './movie-detail-view.styled';

type Props = {
  detail: MovieInterface;
};
const NewsDetailView = ({ detail }: Props) => {
  return (
    <>
      {/* {detail.cover ? (
        <S.Cover>
          <S.CoverImage src={detail.cover} alt={detail.title} />
        </S.Cover>
      ) : null}
      <S.Layout>
        <S.Header>
          <S.Title>{detail.title}</S.Title>
          {detail.date ? <S.Date>{detail.date}</S.Date> : null}
        </S.Header>
        <S.Content>
          {detail.thumnail ? (
            <S.ThumbnailContainer>
              <S.ThumbnailWrap>
                <S.Thumbnail src={detail.thumnail} alt={detail.title} />
              </S.ThumbnailWrap>
            </S.ThumbnailContainer>
          ) : null}

          <article
            dangerouslySetInnerHTML={{ __html: detail.content }}
          ></article>
        </S.Content>
      </S.Layout> */}
    </>
  );
};

export default NewsDetailView;
