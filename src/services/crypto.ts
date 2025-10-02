// src/services/crypto.ts
import { apiFetch } from "./api";

export async function getTopCoins() {
  return apiFetch("http://127.0.0.1:8000/api/crypto/top");
}

export async function getCoinDetail(coinId: string) {
  return apiFetch(`http://127.0.0.1:8000/api/crypto/${coinId}`);
}
