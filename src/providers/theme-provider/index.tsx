import React, { ReactNode } from 'react';
import { ThemeProvider as StyleComponentThemeProvider } from 'styled-components';
import GlobalStyle from './theme/general-style';
import { LightTheme } from './theme/theme.light';

type Props = {
  children: ReactNode;
};
const ThemeProvider = ({ children }: Props) => {
  return (
    <StyleComponentThemeProvider theme={LightTheme}>
      <GlobalStyle />
      {children}
    </StyleComponentThemeProvider>
  );
};

export default ThemeProvider;
