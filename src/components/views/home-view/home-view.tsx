import { Button } from 'antd';
import React from 'react';
import Paths from '../../../utils/paths';
import NavigationLink from '../../shared/navigation-link';
import * as S from './home-view.styled';
import { MovieBaseInterface } from '../../../models/movie/movie-base-interface';
import { ListInterface } from '../../../models/list-interface';
import NowPlayingMovies from '../../shared/now-playing-movies';

type Props = {
  introduction: string;
  list: ListInterface<MovieBaseInterface> | null;
  page: number;
};
const HomeView = ({ introduction, list, page }: Props) => {
  return (
    <>
      <S.Block $hasBack={true}>
        <S.BlockTitle as="h1">LeoVegas Movie Blog</S.BlockTitle>
        <S.BlockContent>
          <S.BlockParagraph>{introduction}</S.BlockParagraph>
          <S.BlockFooter>
            <NavigationLink href={Paths.about().getPath()}>
              <Button
                size="large"
                type="primary"
                href={Paths.about().getPath()}
              >
                Read More
              </Button>
            </NavigationLink>
          </S.BlockFooter>
        </S.BlockContent>
      </S.Block>
      <S.Block>
        <S.BlockTitle as="h1">Now Playing Movies</S.BlockTitle>
        <NowPlayingMovies page={page} list={list} />
      </S.Block>
    </>
  );
};

export default HomeView;
