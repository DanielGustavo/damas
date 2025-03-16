import { createGlobalStyle, keyframes } from 'styled-components';
import { theme } from './theme';

import { lighten, shade } from 'polished';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
   
  to {
    transform: rotate(360deg);
  }
`;

export const GlobalStyle = createGlobalStyle`
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

  button {
    padding: ${theme.spacing.md};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacing.sm};

    background: ${theme.colors.success};
    color: ${theme.colors.dark};
    font-weight: ${theme.font.firaMono.weight.medium};
    font-size: ${theme.font.firaMono.size.cta};
    border-radius: 16px;
    border: 4px solid ${shade(0.25)(theme.colors.success)};

    transition: 200ms;

    .rotate {
      animation: ${rotation} 1000ms linear 0s infinite forwards;
    }

    &:hover:not(:disabled) {
      background: ${shade(0.1)(theme.colors.success)};
      transform: scale(1.01);
    }

    &:active:not(:disabled) {
      background: ${lighten(0.0)(theme.colors.success)};
      transform: scale(0.99);
    }

    &:disabled {
      cursor: not-allowed;
      background: ${shade(0.5)(theme.colors.success)};
      border: 4px solid ${shade(0.65)(theme.colors.success)};
    }

    &.primary {
      background: ${theme.colors.primary};
      color: ${theme.colors.light};
      border: 4px solid ${shade(0.25)(theme.colors.primary)};

      &:hover:not(:disabled) {
        background: ${shade(0.1)(theme.colors.primary)};
        transform: scale(1.01);
      }

      &:active:not(:disabled) {
        background: ${lighten(0.0)(theme.colors.primary)};
        transform: scale(0.99);
      }

      &:disabled {
        cursor: not-allowed;
        background: ${shade(0.5)(theme.colors.primary)};
        border: 4px solid ${shade(0.65)(theme.colors.primary)};
      }
    }
     
    &.neutral {
      background: ${theme.colors.gray};
      color: ${theme.colors.light};
      border: 4px solid ${shade(0.25)(theme.colors.gray)};

      &:hover:not(:disabled) {
        background: ${shade(0.1)(theme.colors.gray)};
        transform: scale(1.01);
      }

      &:active:not(:disabled) {
        background: ${lighten(0.0)(theme.colors.gray)};
        transform: scale(0.99);
      }

      &:disabled {
        cursor: not-allowed;
        background: ${shade(0.5)(theme.colors.gray)};
        border: 4px solid ${shade(0.65)(theme.colors.gray)};
      }
    }
  }
`;
