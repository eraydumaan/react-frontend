import { apiFetch } from "./api";

export async function login(username: string, password: string) {
  return apiFetch("http://127.0.0.1:8000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ username, password }),
  });
}

export async function me() {
  return apiFetch("http://127.0.0.1:8000/api/auth/me");
}
