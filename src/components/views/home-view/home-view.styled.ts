import styled from 'styled-components';

export const Slide = styled.section`
  position: relative;
  padding-top: 23.55%;
`;

export const SlideItem = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlidePhoto = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type BlockType = {
  $hasBack?: boolean;
};
export const Block = styled.section<BlockType>`
  padding-top: ${({ theme }) => theme.dimensions.x6};
  padding-bottom: ${({ theme }) => theme.dimensions.x6};
  padding-right: ${({ theme }) => theme.defaults.gutter};
  padding-left: ${({ theme }) => theme.defaults.gutter};

  background-color: ${({ theme, $hasBack }) =>
    $hasBack ? theme.palette.back : null};
`;

export const BlockTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

export const BlockParagraph = styled.p`
  text-align: justify;
  font-size: 14px;
  line-height: 1.8;
  opacity: 0.87;
`;
export const BlockContent = styled.section`
  margin-top: ${({ theme }) => theme.dimensions.x4};
`;

export const BlockFooter = styled.section`
  text-align: center;
  margin-top: ${({ theme }) => theme.dimensions.x4};
`;
