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

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.defaults.gutter};
  background-color: ${({ theme }) => theme.palette.back};
`;
