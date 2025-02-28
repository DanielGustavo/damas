import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { theme } from '../../styles/theme';

type TContainer = {
  color: string;
  x: number;
  y: number;
  itsTurn: boolean;
  selected: boolean;
};

type TPossibleCell = {
  x: number;
  y: number;
};

export const Container = styled.div<TContainer>`
  position: absolute;

  top: ${({ y }) => y * 88}px;
  left: ${({ x }) => x * 88}px;

  transform: translate(9px, 4px);
  outline: 8px solid ${({ color }) => polished.shade(0.25)(color)};
  outline-offset: -8px;

  width: 70px;
  height: 70px;
  background: ${({ color }) => color};
  border-radius: 100%;

  box-shadow: 0px 7px 0px ${({ color }) => polished.shade(0.4)(color)};

  transition: 200ms;
  pointer-events: none;

  ${({ itsTurn, selected }) => {
    if (selected) {
      return css`
        width: 65px;
        height: 65px;
        transform: translate(10px, 8px);
      `;
    }

    if (!itsTurn) return;

    return css`
      cursor: pointer;
      pointer-events: all;

      &:hover {
        width: 80px;
        height: 80px;
        transform: translate(5px, 0px);
      }

      &:active {
        width: 65px;
        height: 65px;
        transform: translate(10px, 8px);
      }
    `;
  }}
`;

export const PossibleCell = styled.div<TPossibleCell>`
  position: absolute;

  top: ${({ y }) => y * 88}px;
  left: ${({ x }) => x * 88}px;

  width: 88px;
  height: 88px;

  background: ${polished.transparentize(0.9)(theme.colors.success)};
  border: ${polished.shade(0.4)(theme.colors.success)} 4px solid;

  cursor: pointer;

  transition: 200ms;
  &:hover {
    background: ${polished.transparentize(0.6)(theme.colors.success)};
    border: ${polished.shade(0.4)(theme.colors.success)} 4px solid;
  }
`;
