/// <reference path="./ITheme.d.ts" />

import { DefaultTheme } from 'styled-components';

const palette = {
  back: '#ffffff',
  onBack: '#222222',
  surface: '#f9f9f9',
  primary: '#7ab148',
  secondary: '#e25936',
};

const dimensions = {
  x1: '8px',
  x2: '16px',
  x3: '24px',
  x4: '32px',
  x5: '40px',
  x6: '48px',
};

const defaults = {
  gutter: dimensions.x3,
  shadow: '0 1px 5px rgba(0,0,0,0.1)',
  menuShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const zIndex = {
  header: 100,
};

const breakpoints = {
  xs: '375px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

export const LightTheme: DefaultTheme = {
  palette,
  defaults,
  dimensions,
  zIndex,
  breakpoints,
};
