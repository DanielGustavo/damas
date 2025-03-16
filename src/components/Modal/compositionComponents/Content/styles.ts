import styled from 'styled-components';
import { theme } from '../../../../styles/theme';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;

  overflow-y: auto;

  gap: ${theme.spacing.lg};

  h1 {
    font-family: ${theme.font.firaMono.family};
    font-size: ${theme.font.firaMono.size.title};
    font-weight: 400;
  }
`;
