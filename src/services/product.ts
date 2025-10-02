import { apiFetch } from "./api";

export async function getStats() {
  return apiFetch("http://127.0.0.1:8000/api/products/stats");
}

export async function getProducts() {
  return apiFetch("http://127.0.0.1:8000/api/products");
}

export async function getAdminProducts() {
  return apiFetch("http://127.0.0.1:8000/api/products/admin");
}

export async function getMyProducts() {
  return apiFetch("http://127.0.0.1:8000/api/products/mine");
}
