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

  const swapY = data.peca.coordenadas.y;
  data.peca.coordenadas.y = data.peca.coordenadas.x;
  data.peca.coordenadas.x = swapY;

  data.jogador1
    .filter((piece) => piece !== null)
    .forEach((piece) => {
      const swapY = piece.coordenadas.y;
      piece.coordenadas.y = piece.coordenadas.x;
      piece.coordenadas.x = swapY;
    });

  data.jogador2
    .filter((piece) => piece !== null)
    .forEach((piece) => {
      const swapY = piece.coordenadas.y;
      piece.coordenadas.y = piece.coordenadas.x;
      piece.coordenadas.x = swapY;
    });

  return data;
}
