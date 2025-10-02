const API_URL = import.meta.env.VITE_API_URL ?? "/api";

// ✅ Ortak fetch helper
export async function apiFetch(url: string, options: RequestInit = {}) {
  const token = localStorage.getItem("token");

  const headers: any = {
    ...options.headers,
    Authorization: token ? `Bearer ${token}` : "",
  };

  const res = await fetch(url, { ...options, headers });

  if (res.status === 401) {
    // Token geçersizse sil ve login'e yönlendir
    localStorage.removeItem("token");
    alert("Oturum süresi doldu. Lütfen tekrar giriş yapın.");
    window.location.href = "/login";
    return Promise.reject("Unauthorized");
  }

  if (!res.ok) {
    throw new Error(`API Hatası: ${res.status}`);
  }

  return res.json();
}

// Products
export async function fetchProducts() {
  return apiFetch(`${API_URL}/products/`);
}

// Books
export async function fetchBooks() {
  return apiFetch(`${API_URL}/products/books`);
}

// Quotes
export async function fetchQuotes() {
  return apiFetch(`${API_URL}/products/quotes`);
}

// Laptops
export async function fetchLaptops() {
  return apiFetch(`${API_URL}/products/laptops`);
}
