import { useEffect, useState } from "react";
import { fetchBooks } from "../services/api";

interface Book {
  _id?: string;
  id?: string;
  title?: string;
  author?: string;
  price?: number;
  link?: string;
}

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks()
      .then(setBooks)
      .catch((err) => console.error("API Hatası:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-14 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center">
          📚 Kitap Koleksiyonu
        </h1>
        <p className="text-center mt-3 text-lg opacity-90">
          En güncel kitap verilerini keşfet ve merakını gider.
        </p>
      </header>

      {/* Başlık + adet */}
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center mt-10 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Books</h2>
        <span className="text-sm bg-purple-100 text-purple-700 px-4 py-1 rounded-full shadow-sm">
          {books.length} kitap bulundu
        </span>
      </div>

      {/* Grid Kartlar */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {books.map((b) => (
          <div
            key={b._id || b.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition transform duration-300 p-6 flex flex-col"
          >
            {/* Başlık */}
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              {b.title}
            </h3>

            {/* Yazar */}
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full mb-3">
              {b.author ?? "Bilinmeyen Yazar"}
            </span>

            {/* Fiyat */}
            <p className="text-xl font-extrabold text-indigo-600 mb-4">
              {b.price ? `${b.price} ₺` : "Fiyat Yok"}
            </p>

            {/* Link */}
            {b.link ? (
              <a
                href={b.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-center bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition"
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
