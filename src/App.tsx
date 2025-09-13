import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Quotes from "./pages/Quotes";
import Books from "./pages/Books";
import Laptops from "./pages/Laptops";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="p-4 bg-gray-100 shadow-md">
        <ul className="flex gap-6">
          <li>
            <Link to="/laptops" className="text-gray-700 hover:text-blue-600">
              Laptops
            </Link>
          </li>
          <li>
            <Link to="/books" className="text-gray-700 hover:text-blue-600">
              Books
            </Link>
          </li>
          <li>
            <Link to="/quotes" className="text-gray-700 hover:text-blue-600">
              Quotes
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-gray-700 hover:text-blue-600">
              Products
            </Link>
          </li>
        </ul>
      </nav>

      {/* Rotalar */}
      <Routes>
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/books" element={<Books />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/products" element={<Products />} />
        {/* Default yönlendirme */}
        <Route path="/" element={<Navigate to="/quotes" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
