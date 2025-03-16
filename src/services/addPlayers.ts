import { api } from './api';

type TRequest = {
  player1: string;
  player2: string;
};

export async function addPlayers({ player1, player2 }: TRequest) {
  try {
    await api.put(`/definirnomes`, { nome1: player1, nome2: player2 });
  } catch (e) {
    console.log({ e });
  }
}
