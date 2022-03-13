import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.back};
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  padding-right: ${({ theme }) => theme.defaults.gutter};
  padding-left: ${({ theme }) => theme.defaults.gutter};
  box-shadow: ${({ theme }) => theme.defaults.shadow};
`;

export const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

export const Logo = styled.a`
  width: 50px;
  height: 50px;
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const PhoneWrap = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.onBack};
  margin-right: ${({ theme }) => theme.dimensions.x2};
  text-decoration: none !important;
`;

export const PhoneIcon = styled.span`
  font-size: 24px;
  margin-right: ${({ theme }) => theme.dimensions.x1};
`;

export const PhoneText = styled.span`
  font-size: 16px;
  font-weight: bold;
  direction: ltr;
`;
