import styled, { css, keyframes } from 'styled-components';
import { transparentize } from 'polished';
import { theme } from '../../../../styles/theme';

export type TBackgroundBlur = {
  open: boolean;
  fadeMilliseconds: number;
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const scaleIn = keyframes`
  0% {
    width: 500px;
    height: 500px;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: all;

  z-index: 999;
`;

export const BackgroundBlur = styled.div<TBackgroundBlur>`
  position: fixed;
  inset: 0;

  animation: ${({ fadeMilliseconds }) => fadeMilliseconds}ms ${fadeIn} forwards;
  background: ${transparentize(0.2, theme.colors.dark)};

  ${({ open, fadeMilliseconds }) => {
    if (open) return;

    return css`
      pointer-events: none;
      animation: ${fadeMilliseconds}ms ${fadeOut} forwards;
      opacity: 0;
    `;
  }}
`;

export const Container = styled.div`
  top: 50%;
  left: 50%;
  position: relative;
  transform: translate(-50%, -50%);

  width: 678px;
  height: 80%;
  padding: ${theme.spacing.sm};

  box-shadow: ${() => {
    const shadowColor = transparentize(0.85, theme.colors.dark);
    return `${shadowColor} 0px 2px 10px`;
  }};
  background: ${theme.colors.gray};
  border-radius: 16px;
  border: 8px solid ${transparentize(0.75)(theme.colors.dark)};

  z-index: 1000;

  display: flex;
  flex-direction: column;

  animation: 500ms ${scaleIn} forwards;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: absolute;
  width: 100%;

  button {
    margin-left: auto;
    transform: translateX(-100%) !important;
    padding: 8px 0 0 0;
    margin: 0;
    background: none;
    border: none;

    transition: 100ms;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(calc(1 - 0.1));
    }

    background: none !important;
    color: ${theme.colors.light};
  }
`;
