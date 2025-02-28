import React from 'react';

import Piece from '../Piece';

import * as S from './styles';

function renderCells() {
  const cells = [];

  let border = '0px';

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      if (row === 0 && col === 0) {
        border = '8px 0px 0px 0px';
      }

      if (row === 0 && col === 7) {
        border = '0px 8px 0px 0px';
      }

      if (row === 7 && col === 0) {
        border = '0px 0px 0px 8px';
      }

      if (row === 7 && col === 7) {
        border = '0px 0px 8px 0px';
      }

      cells.push(
        <S.CellContainer dark={col % 2 != row % 2} borderRadius={border} />
      );

      border = '0px';
    }
  }

  return cells;
}

const pieces = [
  // PLAYER 0

  { x: 1, y: 0, player: 0 },
  { x: 3, y: 0, player: 0 },
  { x: 5, y: 0, player: 0 },
  { x: 7, y: 0, player: 0 },

  { x: 0, y: 1, player: 0 },
  { x: 2, y: 1, player: 0 },
  { x: 4, y: 1, player: 0 },
  { x: 6, y: 1, player: 0 },

  { x: 1, y: 2, player: 0 },
  { x: 3, y: 2, player: 0 },
  { x: 5, y: 2, player: 0 },
  { x: 7, y: 2, player: 0 },

  // PLAYER 1

  { x: 0, y: 5, player: 1 },
  { x: 2, y: 5, player: 1 },
  { x: 4, y: 5, player: 1 },
  { x: 6, y: 5, player: 1 },

  { x: 1, y: 6, player: 1 },
  { x: 3, y: 6, player: 1 },
  { x: 5, y: 6, player: 1 },
  { x: 7, y: 6, player: 1 },

  { x: 0, y: 7, player: 1 },
  { x: 2, y: 7, player: 1 },
  { x: 4, y: 7, player: 1 },
  { x: 6, y: 7, player: 1 },
];

function renderPieces() {
  return pieces.map((piece) => {
    return (
      <Piece
        x={piece.x}
        y={piece.y}
        player={piece.player}
        key={`${piece.x}${piece.y}${piece.player}`}
      />
    );
  });
}

const Board: React.FC = () => {
  return (
    <S.Container>
      {renderPieces()}
      {renderCells()}
    </S.Container>
  );
};

export default Board;
