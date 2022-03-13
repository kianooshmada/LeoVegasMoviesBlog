import styled from 'styled-components';

export const Cover = styled.div`
  position: relative;
  padding-top: 29.41%;
`;

export const CoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Layout = styled.section`
  padding: ${({ theme }) => theme.defaults.gutter};
  background-color: ${({ theme }) => theme.palette.back};
`;

export const Content = styled.section`
  overflow: auto;
  text-align: justify;
`;

export const Header = styled.header`
  padding-top: ${({ theme }) => theme.defaults.gutter};
  padding-bottom: ${({ theme }) => theme.defaults.gutter};
  margin-bottom: ${({ theme }) => theme.defaults.gutter};
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.onBack};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

export const Date = styled.span`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.onBack};
  opacity: 0.6;
  margin-top: ${({ theme }) => theme.dimensions.x1};
`;

export const ThumbnailContainer = styled.div`
  float: right;
  width: 30%;
  margin-bottom: ${({ theme }) => theme.defaults.gutter};
  margin-left: ${({ theme }) => theme.defaults.gutter};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`;

export const ThumbnailWrap = styled.div`
  position: relative;
  padding-top: 60%;
`;

export const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
