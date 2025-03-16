import { api } from './api';

export async function endPlay() {
  try {
    await api.get(`/relatorio`);
  } catch (e) {
    console.log({ e });
  }
}
