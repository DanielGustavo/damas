import React, { forwardRef, useState } from 'react';

import Pieces from '../Pieces';

import * as S from './styles';
import renderUtils from './hooks/renderUtils';

export type TPlayer = {
  id: number;
  name: string;
  bot: boolean;
};

export enum EGameState {
  PLAYING,
  SETUP,
  RANKING,
}

type TBoard = {
  player1: TPlayer;
  player2: TPlayer;
  onEnd: (winner?: TPlayer) => void;
};

export type TPiecesRef = {
  resetCells: () => void;
};

const Board: React.ForwardRefRenderFunction<TPiecesRef, TBoard> = (
  { player1, player2, onEnd },
  ref
) => {
  const [turn, setTurn] = useState(player1);

  const { Cells } = renderUtils();

  return (
    <S.Container turn={turn.id}>
      <Pieces
        turn={turn}
        onMove={async () => {
          if (!player2.bot) {
            setTurn((state) => (state.id === player2.id ? player1 : player2));
          }
        }}
        player1={player1}
        player2={player2}
        onEnd={onEnd}
        ref={ref}
      />

      <Cells />
    </S.Container>
  );
};

export default forwardRef(Board);
