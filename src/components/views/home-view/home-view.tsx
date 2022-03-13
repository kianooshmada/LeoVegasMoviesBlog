import { Button, Carousel } from 'antd';
import React from 'react';
import Paths from '../../../utils/paths';
import NavigationLink from '../../shared/navigation-link';
import * as S from './home-view.styled';

type Props = {
  introduction: string;
};
const HomeView = ({ introduction }: Props) => {
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
        <S.BlockTitle>Movies List</S.BlockTitle>
        <S.BlockContent>movie....</S.BlockContent>
      </S.Block>
    </>
  );
};

export default HomeView;
