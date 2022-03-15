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

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.palette.onBack};
  padding: ${({ theme }) => theme.dimensions.x2};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

export const Content = styled.div`
  margin: ${({ theme }) => theme.defaults.gutter};
  margin-top: 0;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  flex-wrap: wrap;
  :last-child {
    margin-bottom: -${({ theme }) => theme.dimensions.x3};
  }
`;

export const Item = styled.li`
  flex: 0 0 33.33%;
  min-width: 0;
  margin: 0;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.dimensions.x6};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-basis: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-basis: 100%;
  }
`;

export const ItemPhoto = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s all;
  transform: scale(1);
`;

export const ItemContent = styled.a`
  display: block;
  margin-right: ${({ theme }) => theme.dimensions.x3};
  margin-left: ${({ theme }) => theme.dimensions.x3};
  :hover {
    ${ItemPhoto} {
      transform: scale(1.05);
    }
  }
`;

export const ItemPhotoWrap = styled.span`
  display: block;
  position: relative;
  padding-top: 60%;
  overflow: hidden;
`;

export const ItemText = styled.strong`
  margin-top: ${({ theme }) => theme.dimensions.x2};
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemDate = styled.span`
  margin-top: ${({ theme }) => theme.dimensions.x1};
  display: block;
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.onBack};
  opacity: 0.5;
`;

export const ItemSummary = styled.strong`
  margin-top: ${({ theme }) => theme.dimensions.x1};
  display: block;
  font-size: 12px;
  line-height: 1.5;
  max-height: ${12 * 1.5 * 3 + 'px'};
  overflow: hidden;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.onBack};
  text-align: justify;
  opacity: 0.7;
`;

export const Pager = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: ${({ theme }) => theme.dimensions.x2};
`;
