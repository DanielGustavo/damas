import React from 'react';

import { theme } from '../../styles/theme';

import * as S from './styles';

type TPiece = {
  x: number;
  y: number;
  player: number;
};

const Piece: React.FC<TPiece> = ({ x, y, player }) => {
  return (
    <S.Container
      color={player === 0 ? theme.colors.primary : theme.colors.secondary}
      x={x}
      y={y}
    />
  );
};

export default Piece;
