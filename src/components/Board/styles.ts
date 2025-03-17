import styled from 'styled-components';
import * as polished from 'polished';
import { theme } from '../../styles/theme';

type TContainer = {
  turn: number;
};

export const Container = styled.div<TContainer>`
  display: grid;
  grid-template-columns: repeat(8, 88px);
  position: relative;

  outline: 8px solid
    ${({ turn }) =>
      polished.lighten(0.05)(
        turn === 0 ? theme.colors.secondary : theme.colors.primary
      )};
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
