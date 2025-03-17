import { api } from './api';

export async function tie() {
  try {
    await api.put(`/empate`);
  } catch (e) {
    console.log({ e });
  }
}
