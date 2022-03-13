import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html, body, #__next{
  height:100%
}
body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.palette.surface};
    position:relative;
    max-width:1700px;
    margin-right:auto;
    margin-left:auto;
    &::-webkit-scrollbar{width:9px;height:9px}
    &::-webkit-scrollbar-thumb{background-color:#666}
    &::-webkit-scrollbar-track{background-color:#e0e0e0}
    &:hover::-webkit-scrollbar-thumb{background-color:#555}
}

* {
    &::-webkit-scrollbar{width:8px;height:8px}
    &::-webkit-scrollbar-thumb{background-color:#666}
    &::-webkit-scrollbar-track{background-color:#e0e0e0}
    &:hover::-webkit-scrollbar-thumb{background-color:#555}
  }

 .slick-dots button{
  box-shadow:0 0 2px rgba(0,0,0,0.2);
  height:4px !important;
 }
 a:hover{
   color: ${({ theme }) => theme.palette.primary};
 }

 #nprogress .bar {
  height:3px;
  background: ${({ theme }) => theme.palette.secondary};
  z-index: 10000;
}

#nprogress .peg{
  box-shadow:none !important;
}

#nprogress .spinner-icon{
  display:none !important;
}

`;
export default GlobalStyle;
