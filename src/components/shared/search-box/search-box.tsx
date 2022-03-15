import React from 'react';
import * as S from './search-box.styled';
import { Button } from 'antd';
const SearchBox = () => {
  return (
    <>
      <S.BlockTitle as="h1">Search Movies</S.BlockTitle>
      <Button>search</Button>
    </>
  );
};

export default SearchBox;
