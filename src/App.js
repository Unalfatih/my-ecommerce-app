import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";
import { Link } from "react-router-dom";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
        <h1 className="text-xl font-bold text-gray-700">Ürün Listesi</h1>
          <div style={{textAlign: "center", marginBottom: '20px'}}>
            <Link to="/cart" style={{fontSize: '18px', textDecoration: 'none', color: '#007bff'}}>
            Sepete Git
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<ProductList/>} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;