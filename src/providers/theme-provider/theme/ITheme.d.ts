import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      back: string;
      onBack: string;
      surface: string;
      primary: string;
      secondary: string;
    };

    dimensions: {
      x1: string;
      x2: string;
      x3: string;
      x4: string;
      x5: string;
      x6: string;
    };

    defaults: {
      gutter: string;
      shadow: string;
      menuShadow: string;
    };

    zIndex: {
      header: number;
    };

    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
