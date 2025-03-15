import React, { useState } from 'react';

import Piece from '../Piece';
import { TPlayer } from '../Board';

type TPieces = {
  turn: TPlayer;
  onMove: () => void;
  player1: TPlayer;
  player2: TPlayer;
};

const Pieces: React.FC<TPieces> = ({ turn, onMove, player1, player2 }) => {
  const [pieces, setPieces] = useState([
    //// PLAYER 0
    { x: 1, y: 0, player: player1, id: 0 },
    { x: 3, y: 0, player: player1, id: 1 },
    { x: 5, y: 0, player: player1, id: 2 },
    { x: 7, y: 0, player: player1, id: 3 },
    { x: 0, y: 1, player: player1, id: 4 },
    { x: 2, y: 1, player: player1, id: 5 },
    { x: 4, y: 1, player: player1, id: 6 },
    { x: 6, y: 1, player: player1, id: 7 },
    { x: 1, y: 2, player: player1, id: 8 },
    { x: 3, y: 2, player: player1, id: 9 },
    { x: 5, y: 2, player: player1, id: 10 },
    { x: 7, y: 2, player: player1, id: 11 },

    // PLAYER 1

    { x: 0, y: 5, player: player2, id: 12 },
    { x: 2, y: 5, player: player2, id: 13 },
    { x: 4, y: 5, player: player2, id: 14 },
    { x: 6, y: 5, player: player2, id: 15 },
    { x: 1, y: 6, player: player2, id: 16 },
    { x: 3, y: 6, player: player2, id: 17 },
    { x: 5, y: 6, player: player2, id: 18 },
    { x: 7, y: 6, player: player2, id: 19 },
    { x: 0, y: 7, player: player2, id: 20 },
    { x: 2, y: 7, player: player2, id: 21 },
    { x: 4, y: 7, player: player2, id: 22 },
    { x: 6, y: 7, player: player2, id: 23 },
  ]);

  function movePiece(player: TPlayer, curr: number[], next: number[]) {
    setPieces((state) => {
      const newState = [...state];

      const piece = state.find((piece) => {
        return (
          piece.x === curr[0] &&
          piece.y === curr[1] &&
          piece.player.id === player.id
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
            itsTurn={turn.id === piece.player.id}
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
