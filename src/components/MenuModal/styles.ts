import styled from 'styled-components';
import { darken, transparentize } from 'polished';
import Modal from '../Modal';
import { theme } from '../../styles/theme';

export const ContentContainer = styled(Modal.Content)`
  gap: 80px;
  flex: 1;

  padding: 8px;

  p.desc {
    width: 100%;
    text-align: right;

    font-weight: ${theme.font.firaMono.weight.bold};

    .green {
      color: ${theme.colors.success};
    }

    .red {
      color: ${theme.colors.primary};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: ${theme.spacing.sm};

  p {
    width: 80%;
    text-align: center;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  background: ${transparentize(0.55)(theme.colors.dark)};
  border-radius: 8px;
  padding: 8px;

  p {
    font-weight: ${theme.font.firaMono.weight.bold};

    .green {
      color: ${theme.colors.success};
    }

    .red {
      color: ${theme.colors.primary};
    }
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  div.list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
  }
`;
