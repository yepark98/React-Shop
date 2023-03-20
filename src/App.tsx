import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import MainPage from "./components/main/MainPage";
import FashionPage from "./components/categories/FashionPage";
import AccessoryPage from "./components/categories/AccessoryPage";
import DigitalPage from "./components/categories/DigitalPage";
import DetailPage from "./components/detail/DetailPage";
import CartPage from "./components/cart/CartPage";
import ErrorPage from "./components/error/ErrorPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="fashion" element={<FashionPage />} />
          <Route path="accessory" element={<AccessoryPage />} />
          <Route path="digital" element={<DigitalPage />} />
          <Route path="product/:id" element={<DetailPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
