import { api } from './api';

type Request = {
  id: number;
};

type Response = [{ x: number; y: number } | null];

export async function getPossibleMoves({ id }: Request) {
  const response = await api.get(`/movimentospossiveis?id=${id}`);

  const data = response.data as Response;

  data
    .filter((piece) => piece !== null)
    .forEach((piece) => {
      const swapX = piece.x;

      piece.x = piece.y;
      piece.y = swapX;
    });

  return data;
}
