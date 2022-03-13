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
  const router = useRouter();
  const [pageNumber, setPageNumber] = useState<number>(page);
  const onPageChange = (pageNumber: number) => {
    setPageNumber(pageNumber);
    router.push(Paths.movie.list(pageNumber).getPath());
  };

  useEffect(() => {
    setPageNumber(page);
  }, [page]);

  // function createPost() {
  //   HttpClient.post('https://back.gpvisaland.com/api/ContactUsRequest/add', {
  //     fullName: 'kia',
  //     phone: 'kia',
  //     email: 'kia@gmail.com',
  //     subject: 'kia',
  //     message: 'ds',
  //   })
  //     .then(function (response) {
  //       console.log('done:' + response);
  //     })
  //     .catch(function (error) {
  //       console.log('error:' + error);
  //     });
  // }

  return (
    <>
      <S.Cover>
        <S.CoverImage src="/images/news-cover.jpg" alt="news cover" />
      </S.Cover>
      <S.Title>Movies</S.Title>
      <S.Content>
        <S.List>
          {/* {list?.items?.length ? (
            list.items.map((data) => (
              <S.Item key={data.id}>
                <NavigationLink href={Paths.news.detail(data).getPath()}>
                  <S.ItemContent href={Paths.news.detail(data).getPath()}>
                    <S.ItemPhotoWrap>
                      <S.ItemPhoto src={data.thumnail} alt={data.title} />
                    </S.ItemPhotoWrap>
                    <S.ItemText>{data.title}</S.ItemText>
                    <S.ItemDate>{data.date || '-'}</S.ItemDate>
                    <S.ItemSummary>{data.summary}</S.ItemSummary>
                  </S.ItemContent>
                </NavigationLink>
              </S.Item>
            ))
          ) : (
            <EmptyMessage />
          )} */}
        </S.List>
        <S.Pager
          as={Pagination}
          current={pageNumber}
          showSizeChanger={false}
          pageSize={GlobalConstant.PAGE_SIZE}
          total={list?.totalCount || 0}
          hideOnSinglePage={true}
          onChange={onPageChange}
        />
      </S.Content>
    </>
  );
};

export default NewsView;
