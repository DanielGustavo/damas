import React, { useState } from 'react';

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
};

const Board: React.FC<TBoard> = ({ player1, player2 }) => {
  const [turn, setTurn] = useState(player2);

  const { Cells } = renderUtils();

  return (
    <S.Container turn={turn.id}>
      <Pieces
        turn={turn}
        onMove={() => {
          setTurn((state) => (state.id === player2.id ? player1 : player2));
        }}
        player1={player1}
        player2={player2}
      />

      <Cells />
    </S.Container>
  );
};

export default Board;
