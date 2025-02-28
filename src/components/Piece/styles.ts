import styled from 'styled-components';
import * as polished from 'polished';

type TContainer = {
  color: string;
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
`;
