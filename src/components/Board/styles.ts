import styled from 'styled-components';
import * as polished from 'polished';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 88px);
  position: relative;

  outline: 8px solid ${polished.shade(0.25)(theme.colors.gray)};
  border-radius: 9px;
  outline-offset: -1px;
`;

type TCellContainer = {
  borderRadius?: string;
  dark: boolean;
};

export const CellContainer = styled.div<TCellContainer>`
  width: 88px;
  height: 88px;

  border-radius: ${({ borderRadius }) => borderRadius ?? '0px'};
  background: ${({ dark }) => (dark ? theme.colors.gray : theme.colors.light)};
`;

type TPieceContainer = {
  color: string;
  x: number;
  y: number;
};

export const PieceContainer = styled.div<TPieceContainer>`
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
`;

