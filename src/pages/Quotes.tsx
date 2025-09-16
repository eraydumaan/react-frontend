import { useEffect, useState } from "react";
import { fetchQuotes } from "../services/api";

interface Quote {
  _id?: string;
  id?: string;
  title?: string;
  content?: string;
  link?: string;
}

export default function Quotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetchQuotes()
      .then(setQuotes)
      .catch((err) => console.error("API Hatası:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-14 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center">
          📝 Alıntılar Koleksiyonu
        </h1>
        <p className="text-center mt-3 text-lg opacity-90">
          İlham verici sözleri keşfet ve paylaş.
        </p>
      </header>

      {/* Başlık + adet */}
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center mt-10 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quotes</h2>
        <span className="text-sm bg-orange-100 text-orange-700 px-4 py-1 rounded-full shadow-sm">
          {quotes.length} alıntı bulundu
        </span>
      </div>

      {/* Grid Kartlar */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {quotes.map((q) => (
          <div
            key={q._id || q.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition transform duration-300 p-6 flex flex-col"
          >
            {/* Başlık */}
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              {q.title}
            </h3>

            {/* İçerik */}
            <p className="italic text-gray-700 mb-4">
              {q.content ?? "İçerik bulunamadı"}
            </p>

            {/* Link */}
            {q.link ? (
              <a
                href={q.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-center bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
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
