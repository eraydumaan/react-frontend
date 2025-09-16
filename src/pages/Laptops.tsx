import { useEffect, useState } from "react";
import { fetchLaptops } from "../services/api";

interface Laptop {
  _id?: string;
  id?: string;
  title?: string;
  price?: number;
  stock?: string;
  link?: string;
}

export default function Laptops() {
  const [laptops, setLaptops] = useState<Laptop[]>([]);

  useEffect(() => {
    fetchLaptops()
      .then(setLaptops)
      .catch((err) => console.error("API Hatası:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-14 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center">
          💻 Laptop Koleksiyonu
        </h1>
        <p className="text-center mt-3 text-lg opacity-90">
          En güncel laptop verilerini keşfet ve fiyatları karşılaştır.
        </p>
      </header>

      {/* Başlık + adet */}
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center mt-10 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Laptoplar</h2>
        <span className="text-sm bg-blue-100 text-blue-700 px-4 py-1 rounded-full shadow-sm">
          {laptops.length} adet bulundu
        </span>
      </div>

      {/* Grid Kartlar */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {laptops.map((l) => (
          <div
            key={l._id || l.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition transform duration-300 p-6 flex flex-col"
          >
            {/* Başlık */}
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              {l.title}
            </h3>

            {/* Fiyat */}
            <p className="text-2xl font-extrabold text-blue-600 mb-3">
              {l.price ? `${l.price} ₺` : "Fiyat Yok"}
            </p>

            {/* Stok Badge */}
            <span
              className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium w-fit ${
                l.stock?.toLowerCase().includes("var")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {l.stock ?? "Durum Bilinmiyor"}
            </span>

            {/* Link */}
            {l.link ? (
              <a
                href={l.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-center bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
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
