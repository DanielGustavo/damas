import React, { useEffect, useState } from 'react';

import Piece from '../Piece';

type TPieces = {
  turn: number;
  onMove: () => void;
};

const Pieces: React.FC<TPieces> = ({ turn, onMove }) => {
  const [pieces, setPieces] = useState([
    //// PLAYER 0
    { x: 1, y: 0, player: 0, id: 0 },
    { x: 3, y: 0, player: 0, id: 1 },
    { x: 5, y: 0, player: 0, id: 2 },
    { x: 7, y: 0, player: 0, id: 3 },
    { x: 0, y: 1, player: 0, id: 0 },
    { x: 2, y: 1, player: 0, id: 5 },
    { x: 4, y: 1, player: 0, id: 6 },
    { x: 6, y: 1, player: 0, id: 7 },
    { x: 1, y: 2, player: 0, id: 8 },
    { x: 3, y: 2, player: 0, id: 9 },
    { x: 5, y: 2, player: 0, id: 10 },
    { x: 7, y: 2, player: 0, id: 11 },

    // PLAYER 1

    { x: 0, y: 5, player: 1, id: 12 },
    { x: 2, y: 5, player: 1, id: 13 },
    { x: 4, y: 5, player: 1, id: 14 },
    { x: 6, y: 5, player: 1, id: 15 },
    { x: 1, y: 6, player: 1, id: 16 },
    { x: 3, y: 6, player: 1, id: 17 },
    { x: 5, y: 6, player: 1, id: 18 },
    { x: 7, y: 6, player: 1, id: 19 },
    { x: 0, y: 7, player: 1, id: 20 },
    { x: 2, y: 7, player: 1, id: 21 },
    { x: 4, y: 7, player: 1, id: 22 },
    { x: 6, y: 7, player: 1, id: 23 },
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

  function eatPieces(ids: number[]) {
    setPieces((state) => {
      return state.filter(({ id }) => !ids.includes(id));
    });
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
            id={piece.id}
            onEat={eatPieces}
          />
        );
      })}
    </>
  );
};

export default Pieces;
