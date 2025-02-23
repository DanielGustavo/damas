import styled, { css } from 'styled-components';
import * as polished from 'polished';

import { theme } from '../../styles/theme';

type TContainer = {
  reverse: boolean;
};

export const Container = styled.div<TContainer>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};

  ${({ reverse }) => {
    if (!reverse) return;

    return css`
      flex-direction: row-reverse;
    `;
  }}

  p {
    color: ${theme.colors.light};
    font-weight: ${theme.font.firaMono.weight.bold};
    font-size: ${theme.font.firaMono.size.default};
  }
`;

type TProfileIcon = {
  color: string;
};

export const ProfileIcon = styled.div<TProfileIcon>`
  width: 47px;
  height: 47px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ color }) => color};
  border: 4px solid ${({ color }) => polished.shade(0.2)(color)};
  border-radius: 100%;
`;
