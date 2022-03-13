import styled from 'styled-components';

export const Wrapper = styled.nav``;

export const SubMenu = styled.div`
  position: absolute;
  width: 180px;
  top: 100%;
  left: 0;
  list-style-type: none;
  background-color: ${({ theme }) => theme.palette.back};
  box-shadow: ${({ theme }) => theme.defaults.menuShadow};
  max-height: 0;
  transform: translateY(-10px);
  overflow: hidden;
  transition: 0.5s all;
  transition-delay: 0.3s;
`;

export const SubMenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  transition: 0.5s all;
  padding-top: ${({ theme }) => theme.dimensions.x1};
  padding-bottom: ${({ theme }) => theme.dimensions.x1};
`;

export const SubMenuItem = styled.li`
  margin: 0;
`;

export const SubMenuButton = styled.a`
  display: flex;
  align-items: center;
  padding-right: ${({ theme }) => theme.defaults.gutter};
  padding-left: ${({ theme }) => theme.defaults.gutter};
  height: 40px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const Item = styled.li`
  margin: 0;
  position: relative;
  &:hover ${SubMenu} {
    max-height: 200px;
    transform: translateY(0);
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  padding-right: ${({ theme }) => theme.defaults.gutter};
  padding-left: ${({ theme }) => theme.defaults.gutter};
  height: 60px;
`;

export const ShowMenu = styled.div`
  & > label {
    display: none;
  }
  & > input[type='checkbox'] {
    display: none;
  }

  @media screen and (max-width: 44rem) {
    & > label {
      display: block;
      &:focus {
        color: red;
      }
    }
  }
`;
