import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

interface Product {
  _id?: string;
  id?: string;
  title?: string;
  price?: number;
  stock?: string;
  source?: string;
  link?: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => console.error("API Hatası:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <header className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-14 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center">
          🛒 Ürün Koleksiyonu
        </h1>
        <p className="text-center mt-3 text-lg opacity-90">
          En güncel ürünleri keşfet ve stok durumlarını incele.
        </p>
      </header>

      {/* Başlık + adet */}
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center mt-10 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Products</h2>
        <span className="text-sm bg-green-100 text-green-700 px-4 py-1 rounded-full shadow-sm">
          {products.length} ürün bulundu
        </span>
      </div>

      {/* Grid Kartlar */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {products.map((p) => (
          <div
            key={p._id || p.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition transform duration-300 p-6 flex flex-col"
          >
            {/* Başlık */}
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              {p.title}
            </h3>

            {/* Fiyat */}
            <p className="text-xl font-extrabold text-green-600 mb-2">
              {p.price ? `${p.price} ₺` : "Fiyat Yok"}
            </p>

            {/* Stok */}
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium w-fit mb-2 ${
                p.stock?.toLowerCase().includes("var")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {p.stock ?? "Durum Bilinmiyor"}
            </span>

            {/* Kaynak */}
            {p.source && (
              <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full mb-4">
                {p.source}
              </span>
            )}

            {/* Link */}
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-center bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
              >
                Görüntüle
              </a>
            ) : (
              <span className="text-gray-400 text-sm">Bağlantı Yok</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
