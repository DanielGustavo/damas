import styled, { keyframes } from 'styled-components';

import { theme } from './theme';
import { darken, lighten, shade } from 'polished';

export const Container = styled.div`
  width: 100%;

  background: ${theme.colors.dark};
  padding: ${theme.spacing.lg} ${theme.spacing.xxlg};

  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xxlg};
`;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
   
  to {
    transform: rotate(360deg);
  }
`;

export const SetupContainer = styled.div`
  width: 100%;
  height: 100vh;

  background: ${theme.colors.dark};
  padding: ${theme.spacing.lg} ${theme.spacing.xxlg};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.xxlg};

  form {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.lg};

    width: 30%;

    div.inputs {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacing.sm};
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
      border-radius: 4px;
      border: none;

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
      }
    }

    .checkbox {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.sm};
      margin-top: ${theme.spacing.md};

      color: ${theme.colors.light};

      * {
        cursor: pointer;
      }

      p {
        user-select: none;
      }
    }

    input:not([type='checkbox']) {
      width: 100%;
      padding: ${theme.spacing.md};

      background: ${theme.colors.gray};
      border: 3px solid ${lighten(0.1)(theme.colors.gray)};
      border-radius: 4px;

      color: ${theme.colors.light};

      &:disabled {
        background: ${lighten(0.1)(theme.colors.gray)};
        border: 3px solid ${shade(0.1)(theme.colors.gray)};
        color: ${shade(0.1)(theme.colors.light)};

        cursor: not-allowed;
      }

      &::placeholder {
        color: ${lighten(0.4)(theme.colors.gray)};
        font-weight: ${theme.font.firaMono.weight.normal};
      }
    }
  }
`;

export const BoardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  flex: 1;

  justify-content: space-between;
`;
