import React, { useEffect, useRef, useState } from 'react';

import Pieces from '../Pieces';

import * as S from './styles';
import renderUtils from './hooks/renderUtils';
import { api } from '../../services/api';

const Board: React.FC = () => {
  const [turn, setTurn] = useState(1);
  const resetedRef = useRef(false);

  const { Cells } = renderUtils();

  useEffect(() => {
    if (resetedRef.current) return;

    resetedRef.current = true;

    api.put('/reset');
  }, []);

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
