import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import ProductsList from './ProductList/ProductsList';
import Brands from './pages/BrandPage';
import product from './data/product.json';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <Routes>
      <Route
        path="/App" element={
          <>
            <Header cartItems={cartItems} removeFromCart={removeFromCart} />
            <ProductsList items={product} addToCart={addToCart} />
          </>
        }
      />
      <Route path="/brands" element={<Brands />} />
      
      {/* Добавьте другие маршруты, если необходимо */}
    </Routes>
  );
}
