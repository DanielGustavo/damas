import { api } from './api';

type Request = {
  id: number;
  x: number;
  y: number;
};

type Response = {
  peca: {
    rainha: boolean;
    id: number;
    coordenadas: {
      x: number;
      y: number;
    };
  };
  jogador1: [
    {
      rainha: boolean;
      id: number;
      coordenadas: {
        x: number;
        y: number;
      };
    } | null,
  ];
  jogador2: [
    {
      rainha: boolean;
      id: number;
      coordenadas: {
        x: number;
        y: number;
      };
    } | null,
  ];
  acabou: boolean;
};

export async function movePiece({ id, x, y }: Request) {
  const response = await api.post('/moverpeca', {
    id,
    coordenada: { x: y, y: x },
  });

  const data = response.data as Response;

  const swapX = data.peca.coordenadas.x;
  data.peca.coordenadas.y = swapX;

  data.jogador1
    .filter((piece) => piece !== null)
    .forEach((piece) => {
      const swapX = piece.coordenadas.x;
      piece.coordenadas.y = swapX;
    });

  data.jogador2
    .filter((piece) => piece !== null)
    .forEach((piece) => {
      const swapX = piece.coordenadas.x;
      piece.coordenadas.y = swapX;
    });

  return data;
}
