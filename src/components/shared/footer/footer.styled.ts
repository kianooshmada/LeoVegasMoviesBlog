import styled from 'styled-components';

export const Wrapper = styled.footer`
  background-color: #333;
`;

export const Content = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Col = styled.li`
  margin: 0;
  padding: 0;
  padding: ${({ theme }) => theme.defaults.gutter};
  flex: 1;
  min-width: 0;
`;

export const ColTitle = styled.h6`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  margin-bottom: ${({ theme }) => theme.dimensions.x3};
`;

export const Copyright = styled.p`
  background-color: #222;
  font-size: 12px;
  color: #ddd;
  text-align: center;
  margin: 0;
  padding: ${({ theme }) => theme.dimensions.x1};
`;

export const TitleWrap = styled.a`
  display: inline-flex;
  opacity: 0.9;
  transition: all 0.3s;
  margin-bottom: ${({ theme }) => theme.dimensions.x3};
  :hover {
    opacity: 1;
  }
`;

export const TitleLogo = styled.img`
  width: 215px;
  height: 50px;
`;
export const Description = styled.p`
  font-size: 13px;
  color: #fff;
  opacity: 0.8;
  margin: 0;
  margin-bottom: ${({ theme }) => theme.dimensions.x3};
`;

export const TextWrap = styled.p`
  display: flex;
  margin: 0;
  margin-top: ${({ theme }) => theme.dimensions.x1};
`;

export const Text = styled.span`
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
`;

export const TextIcon = styled.span`
  display: inline-flex;
  font-size: 18px;
  padding-bottom: 2px;
  margin-left: ${({ theme }) => theme.dimensions.x1};
  color: #fff;
  opacity: 0.8;
`;

export const LinkWrap = styled.div`
  margin-top: ${({ theme }) => theme.dimensions.x2};
`;
export const Link = styled.a`
  font-size: 12px;
  color: #fff !important;
  opacity: 0.7;
  transition: all 0.3s;
  :hover {
    opacity: 1;
  }
`;

export const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.dimensions.x1};
`;

export const SocialNetworkLink = styled.a`
  display: inline-flex;
  font-size: 24px;
  padding: ${({ theme }) => theme.dimensions.x1};
  color: #fff !important;
  opacity: 0.8;
  transition: all 0.3s;
  :hover {
    opacity: 1;
  }

  path {
    fill: #fff !important;
  }
`;
