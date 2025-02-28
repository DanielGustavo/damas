import React, { useState } from 'react';

import Pieces from '../Pieces';

import * as S from './styles';
import renderUtils from './hooks/renderUtils';

const Board: React.FC = () => {
  const [turn, setTurn] = useState(0);

  const { Cells } = renderUtils();

  return (
    <S.Container>
      <Pieces turn={turn} />

      <Cells />
    </S.Container>
  );
};

export default Board;
