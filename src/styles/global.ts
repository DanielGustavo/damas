import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Fira Mono';
    src: url('../assets/fonts/FiraMono-Regular.ttf');
    font-weight: 300;
  }
   
  @font-face {
    font-family: 'Fira Mono';
    src: url('../assets/fonts/FiraMono-Medium.ttf');
    font-weight: 400;
  }
   
  @font-face {
    font-family: 'Fira Mono';
    src: url('../assets/fonts/FiraMono-Bold.ttf');
    font-weight: 700;
  }
   
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Fira Mono';
  }
 
  body {
    background-color: ${theme.colors.dark};
    color: ${theme.colors.light};
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-size: 15px;
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-size: ${theme.font.firaMono.size.title};
  }

  h2 {
    font-size: ${theme.font.firaMono.size.subtitle};
  }

  small {
    font-size: ${theme.font.firaMono.size.small};
  }
`;
