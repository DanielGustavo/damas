import { api } from './api';

export async function activeBot() {
  try {
    await api.put(`/ativarbot`);
  } catch (e) {
    console.log({ e });
  }
}
