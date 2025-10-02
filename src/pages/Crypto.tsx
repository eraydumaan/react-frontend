// src/pages/Crypto.tsx
import { useEffect, useState } from "react";
import { getTopCoins } from "../services/crypto";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  market_cap: number;
}

export default function Crypto() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTopCoins()
      .then((data) => {
        if (Array.isArray(data)) {
          setCoins(data);
        } else {
          console.error("API beklenmedik formatta:", data);
          setError("API verisi geçersiz");
          setCoins([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Hatası:", err);
        setError("Veri alınamadı");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6">⏳ Yükleniyor...</p>;
  if (error) return <p className="p-6 text-red-600">❌ {error}</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-14 shadow-lg">
        <h1 className="text-4xl font-extrabold text-center">💰 Kripto Piyasası</h1>
        <p className="text-center mt-3 text-lg opacity-90">
          CoinGecko verileri ile en popüler 10 kripto.
        </p>
      </header>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        {coins.map((coin) => (
          <div
            key={coin.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col"
          >
            <img src={coin.image} alt={coin.name} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 text-center">
              {coin.name} ({coin.symbol.toUpperCase()})
            </h3>
            <p className="text-xl font-extrabold text-green-600 text-center mt-2">
              ${coin.current_price.toLocaleString()}
            </p>
            <span className="text-sm text-gray-500 text-center mt-1">
              MC: ${coin.market_cap.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
