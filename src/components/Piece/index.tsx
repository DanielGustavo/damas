import React, { useEffect, useRef, useState } from 'react';

import { theme } from '../../styles/theme';

import * as S from './styles';
import { getPossibleMoves } from '../../services/getPossibleMoves';
import { movePiece } from '../../services/movePiece';
import { TPlayer } from '../Board';

type TPiece = {
  x: number;
  y: number;
  player: TPlayer;
  itsTurn: boolean;
  onMove: (
    player: TPlayer,
    curr: number[],
    next: number[],
    crown: boolean
  ) => void;
  onEat: (ids: number[]) => void;
  onEnd: () => void;
  id: number;
  crown: boolean;
};

type TCell = { x: number; y: number };

const Piece: React.FC<TPiece> = ({
  x,
  y,
  player,
  itsTurn,
  onMove,
  id,
  onEat,
  onEnd,
  crown,
}) => {
  const [possibleCells, setPossibleCells] = useState<TCell[]>([]);

  const [selected, setSelected] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.id !== ref.current?.id) {
        setSelected(false);
      }
    };

    window.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, []);

  async function loadPossibleCells() {
    const response = await getPossibleMoves({ id });

    const parsedResponse = response
      .filter((value) => value !== null)
      .map((value) => ({
        x: value.x,
        y: value.y,
      }));

    setPossibleCells(parsedResponse);
  }

  return (
    <>
      {selected &&
        possibleCells.map((cell) => (
          <S.PossibleCell
            x={cell.x}
            y={cell.y}
            key={`${cell.x}${cell.y}possible${player.id}`}
            onClick={async () => {
              setPossibleCells([]);

              const response = await movePiece({ id, x: cell.x, y: cell.y });
              const eatenSource =
                player.id === 1 ? response.jogador2 : response.jogador1;

              onMove(player, [x, y], [cell.x, cell.y], response.peca.rainha);

              const eatenIds = eatenSource
                .filter((piece) => piece != null)
                .map((piece) => piece.id);

              onEat(eatenIds);

              if (response.acabou) {
                onEnd();
              }
            }}
          />
        ))}

      <S.Container
        color={player.id === 1 ? theme.colors.primary : theme.colors.secondary}
        crown={crown}
        x={x}
        y={y}
        itsTurn={itsTurn}
        onClick={() => {
          if (itsTurn) {
            setSelected(true);
          }

          loadPossibleCells();
        }}
        ref={ref}
        selected={selected}
        id={`${x}${y}${player.id}`}
      >
        <p>{id}</p>
      </S.Container>
    </>
  );
};

export default Piece;
