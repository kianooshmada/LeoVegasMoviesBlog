import { Pagination } from 'antd';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { GlobalConstant } from '../../../../constants/page-size';
import { ListInterface } from '../../../../models/list-interface';
import { MovieBaseInterface } from '../../../../models/movie/movie-base-interface';
import Paths from '../../../../utils/paths';
import EmptyMessage from '../../../shared/empty-message';
import NavigationLink from '../../../shared/navigation-link';
import * as S from './movie-view.styled';

type Props = {
  page: number;
  list: ListInterface<MovieBaseInterface> | null;
};
const NewsView = ({ page, list }: Props) => {
  console.log(list?.results);
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState<number>(page);
  const onPageChange = (pageNumber: number) => {
    setPageNumber(pageNumber);
    router.push(Paths.movie.list(pageNumber).getPath());
  };

  useEffect(() => {
    setPageNumber(page);
  }, [page]);

  return (
    <>
      <S.Title>Movies</S.Title>
      <S.Content>
        <S.List>
          {list?.results?.length ? (
            list.results.map((data) => (
              <S.Item key={data.id}>
                <NavigationLink href={Paths.movie.detail(data).getPath()}>
                  <S.ItemContent href={Paths.movie.detail(data).getPath()}>
                    <S.ItemPhotoWrap>
                      <S.ItemPhoto
                        src={GlobalConstant.POSTER_PATH_URL + data.poster_path}
                        alt={data.title}
                      />
                    </S.ItemPhotoWrap>
                    <S.ItemText>{data.title}</S.ItemText>
                    <S.ItemDate>{data.release_date || '-'}</S.ItemDate>
                    {/*<S.ItemSummary>{data.summary}</S.ItemSummary> */}
                  </S.ItemContent>
                </NavigationLink>
              </S.Item>
            ))
          ) : (
            <EmptyMessage />
          )}
        </S.List>
        <S.Pager
          as={Pagination}
          current={pageNumber}
          showSizeChanger={false}
          pageSize={GlobalConstant.PAGE_SIZE}
          total={list?.total_results || 0}
          hideOnSinglePage={true}
          onChange={onPageChange}
        />
      </S.Content>
    </>
  );
};

export default NewsView;
