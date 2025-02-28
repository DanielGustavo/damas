import React, { useState } from 'react';

import Pieces from '../Pieces';

import * as S from './styles';
import renderUtils from './hooks/renderUtils';

const Board: React.FC = () => {
  const [turn, setTurn] = useState(0);

  const { Cells } = renderUtils();

  return (
    <S.Container turn={turn}>
      <Pieces
        turn={turn}
        onMove={() => {
          setTurn((state) => (state === 1 ? 0 : 1));
        }}
      />

      <Cells />
    </S.Container>
  );
};

export default Board;
