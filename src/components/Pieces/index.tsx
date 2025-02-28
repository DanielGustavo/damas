import React, { useState } from 'react';

import Piece from '../Piece';

type TPieces = {
  turn: number;
  onMove: () => void;
};

const Pieces: React.FC<TPieces> = ({ turn, onMove }) => {
  const [pieces, setPieces] = useState([
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
  ]);

  function movePiece(player: number, curr: number[], next: number[]) {
    setPieces((state) => {
      const newState = [...state];

      const piece = state.find((piece) => {
        return (
          piece.x === curr[0] && piece.y === curr[1] && piece.player === player
        );
      });

      if (piece) {
        piece.x = next[0];
        piece.y = next[1];
      }

      return newState;
    });

    onMove();
  }

  return (
    <>
      {pieces.map((piece) => {
        return (
          <Piece
            x={piece.x}
            y={piece.y}
            player={piece.player}
            key={`${piece.x}${piece.y}${piece.player}`}
            itsTurn={turn === piece.player}
            onMove={movePiece}
          />
        );
      })}
    </>
  );
};

export default Pieces;
