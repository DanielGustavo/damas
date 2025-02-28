import React, { useEffect, useRef, useState } from 'react';

import { theme } from '../../styles/theme';

import * as S from './styles';

type TPiece = {
  x: number;
  y: number;
  player: number;
  itsTurn: boolean;
  onMove: (player: number, curr: number[], next: number[]) => void;
};

type TCell = { x: number; y: number };

const Piece: React.FC<TPiece> = ({ x, y, player, itsTurn, onMove }) => {
  const [possibleCells, setPossibleCells] = useState<TCell[]>([
    { x: x + 1, y: y + 1 },
    { x: x + 2, y: y + 2 },
    { x: x + 3, y: y + 3 },
  ]);

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

  return (
    <>
      {selected &&
        possibleCells.map((cell) => (
          <S.PossibleCell
            x={cell.x}
            y={cell.y}
            key={`${cell.x}${cell.y}possible${player}`}
            onClick={() => {
              setPossibleCells([]);
              onMove(player, [x, y], [cell.x, cell.y]);
            }}
          />
        ))}

      <S.Container
        color={player === 0 ? theme.colors.primary : theme.colors.secondary}
        x={x}
        y={y}
        itsTurn={itsTurn}
        onClick={() => itsTurn && setSelected(true)}
        ref={ref}
        selected={selected}
        id={`${x}${y}${player}`}
      />
    </>
  );
};

export default Piece;
