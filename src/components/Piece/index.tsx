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
  onMove: (player: TPlayer, curr: number[], next: number[]) => void;
  onEat: (ids: number[]) => void;
  id: number;
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
              onMove(player, [x, y], [cell.x, cell.y]);

              const response = await movePiece({ id, x: cell.x, y: cell.y });
              const eatenSource =
                player.id === 0 ? response.jogador2 : response.jogador1;

              const eatenIds = eatenSource
                .filter((piece) => piece != null)
                .map((piece) => piece.id);

              onEat(eatenIds);
            }}
          />
        ))}

      <S.Container
        color={player.id === 0 ? theme.colors.primary : theme.colors.secondary}
        crown={false}
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
      />
    </>
  );
};

export default Piece;
