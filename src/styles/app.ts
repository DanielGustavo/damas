import styled from 'styled-components';

import { theme } from './theme';

export const Container = styled.div`
  width: 100%;

  background: ${theme.colors.dark};
  padding: ${theme.spacing.lg} ${theme.spacing.xxlg};

  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xxlg};
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
