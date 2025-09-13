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
    <div className="container mx-auto max-w-6xl bg-white rounded-lg shadow-md overflow-hidden">
      <header>
        <h1 className="text-center text-3xl font-bold text-blue-600 py-6">
          Çok Kaynaklı Veri Platformu
        </h1>
      </header>

      {/* Sekmeler */}
      <div className="flex border-b">
        <a href="/laptops" className="px-6 py-3 text-gray-600 hover:text-blue-600">
          Laptops
        </a>
        <a href="/books" className="px-6 py-3 text-blue-600 border-b-4 border-blue-600 font-semibold">
          Books
        </a>
        <a href="/quotes" className="px-6 py-3 text-gray-600 hover:text-blue-600">
          Quotes
        </a>
        <a href="/products" className="px-6 py-3 text-gray-600 hover:text-blue-600">
          Products
        </a>
      </div>

      {/* Başlık + adet */}
      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-xl font-semibold">Books</h2>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
          {books.length} kitap bulundu
        </span>
      </div>

      {/* Tablo */}
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 font-semibold uppercase text-sm text-gray-600">Başlık</th>
            <th className="p-3 font-semibold uppercase text-sm text-gray-600">Yazar</th>
            <th className="p-3 font-semibold uppercase text-sm text-gray-600">Fiyat</th>
            <th className="p-3 font-semibold uppercase text-sm text-gray-600">Bağlantı</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b._id || b.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{b.title}</td>
              <td className="p-3">{b.author ?? "N/A"}</td>
              <td className="p-3">{b.price ?? "N/A"}</td>
              <td className="p-3">
                {b.link ? (
                  <a
                    href={b.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Görüntüle
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
