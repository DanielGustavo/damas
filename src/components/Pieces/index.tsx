import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import Piece from '../Piece';
import { TPiecesRef, TPlayer } from '../Board';
import { endPlay } from '../../services/endPlay';
import { moveBot } from '../../services/moveBot';

type TPieces = {
  turn: TPlayer;
  onMove: () => void;
  player1: TPlayer;
  player2: TPlayer;
  onEnd: (winner?: TPlayer) => void;
};

const Pieces: React.ForwardRefRenderFunction<TPiecesRef, TPieces> = (
  { turn, onMove, player1, player2, onEnd: onEndFromProps },
  ref
) => {
  const initialPieces = [
    //// PLAYER 0
    { x: 1, y: 0, player: player2, id: 0, crown: false },
    { x: 3, y: 0, player: player2, id: 1, crown: false },
    { x: 5, y: 0, player: player2, id: 2, crown: false },
    { x: 7, y: 0, player: player2, id: 3, crown: false },
    { x: 0, y: 1, player: player2, id: 4, crown: false },
    { x: 2, y: 1, player: player2, id: 5, crown: false },
    { x: 4, y: 1, player: player2, id: 6, crown: false },
    { x: 6, y: 1, player: player2, id: 7, crown: false },
    { x: 1, y: 2, player: player2, id: 8, crown: false },
    { x: 3, y: 2, player: player2, id: 9, crown: false },
    { x: 5, y: 2, player: player2, id: 10, crown: false },
    { x: 7, y: 2, player: player2, id: 11, crown: false },

    // PLAYER 1

    { x: 0, y: 5, player: player1, id: 12, crown: false },
    { x: 2, y: 5, player: player1, id: 13, crown: false },
    { x: 4, y: 5, player: player1, id: 14, crown: false },
    { x: 6, y: 5, player: player1, id: 15, crown: false },
    { x: 1, y: 6, player: player1, id: 16, crown: false },
    { x: 3, y: 6, player: player1, id: 17, crown: false },
    { x: 5, y: 6, player: player1, id: 18, crown: false },
    { x: 7, y: 6, player: player1, id: 19, crown: false },
    { x: 0, y: 7, player: player1, id: 20, crown: false },
    { x: 2, y: 7, player: player1, id: 21, crown: false },
    { x: 4, y: 7, player: player1, id: 22, crown: false },
    { x: 6, y: 7, player: player1, id: 23, crown: false },
  ];

  const [pieces, setPieces] = useState([...initialPieces]);

  useImperativeHandle(
    ref,
    () => ({
      resetCells: () => {
        const newState = initialPieces.map((p) => ({ ...p }));
        setPieces(Array.from(newState));
      },
    }),
    []
  );

  async function movePiece(
    player: TPlayer,
    curr: number[],
    next: number[],
    crown: boolean
  ) {
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
        piece.crown = crown;
      }

      return newState;
    });

    if (player2.bot) {
      const botMove = await moveBot();
      console.log({ botMove });

      setTimeout(() => {
        setPieces((state) => {
          const newState = [...state];

          const botPiece = state.find((piece) => {
            return piece.id === botMove.peca.id;
          });

          if (botPiece) {
            botPiece.x = botMove.peca.coordenadas.x;
            botPiece.y = botMove.peca.coordenadas.y;
            botPiece.crown = botMove.peca.rainha;
          }

          return newState;
        });

        eatPieces(botMove.jogador2.filter((p) => !!p).map((p) => p.id));

        if (botMove.acabou) {
          onEnd();
        }
      }, 1000);
    }

    onMove();
  }

  function eatPieces(ids: number[]) {
    setPieces((state) => {
      const eaten = state.filter(({ id }) => ids.includes(id));

      eaten.forEach((p) => {
        console.log(
          `${p.player.id === player1.id ? player2.name : player1.name} eaten ${p.id}`
        );
      });

      return state.filter(({ id }) => !ids.includes(id));
    });
  }

  async function onEnd() {
    let winner = undefined as undefined | TPlayer;

    const player1Pieces = pieces.filter((p) => p.player.id === player1.id);
    const player2Pieces = pieces.filter((p) => p.player.id === player2.id);

    if (player1Pieces.length > player2Pieces.length) {
      winner = player1;
    } else if (player1Pieces.length < player2Pieces.length) {
      winner = player2;
    }

    await endPlay();
    onEndFromProps(winner);
  }

  return (
    <>
      {pieces.map((piece) => {
        return (
          <Piece
            x={piece.x}
            y={piece.y}
            player={piece.player}
            key={`${piece.x}${piece.y}${piece.player.id}${piece.id}`}
            itsTurn={turn.id === piece.player.id}
            onMove={movePiece}
            id={piece.id}
            onEat={eatPieces}
            onEnd={onEnd}
            crown={piece.crown}
          />
        );
      })}
    </>
  );
};

export default forwardRef(Pieces);
