const API_URL = import.meta.env.VITE_API_URL ?? "/api";

// Products
export async function fetchProducts() {
  const res = await fetch(`${API_URL}/products/`);
  if (!res.ok) throw new Error(`API Hatası: ${res.status}`);
  return await res.json();
}

// Books
export async function fetchBooks() {
  const res = await fetch(`${API_URL}/products/books`);
  if (!res.ok) throw new Error(`API Hatası: ${res.status}`);
  return await res.json();
}

// Quotes
export async function fetchQuotes() {
  const res = await fetch(`${API_URL}/products/quotes`);
  if (!res.ok) throw new Error(`API Hatası: ${res.status}`);
  return await res.json();
}

// Laptops
export async function fetchLaptops() {
  const res = await fetch(`${API_URL}/products/laptops`);
  if (!res.ok) throw new Error(`API Hatası: ${res.status}`);
  return await res.json();
}

export async function apiFetch(url: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token");
  const headers: any = {
    ...options.headers,
    Authorization: token ? `Bearer ${token}` : "",
  };

  const res = await fetch(url, { ...options, headers });
  if (res.status === 401) {
    alert("Unauthorized! Please login again.");
  }
  return res.json();
}
