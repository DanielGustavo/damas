import { api } from './api';

type Response =
  | undefined
  | [{ empates: number; nome: string; partidas: number; vitorias: number }];

export async function getRanking() {
  let data = undefined as Response;

  try {
    const response = await api.get(`/ranking`);
    data = response.data as Response;
  } catch {
    data = undefined;
  }

  return data;
}
