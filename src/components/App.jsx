import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import ProductsList from './ProductList/ProductsList';
import BrandPage from './pages/BrandPage';
import ProductsPage from './pages/ProductsPage';
import product from './data/product.json';
import FixMenu from './FixMenu/FixMenu';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevCartItems) => prevCartItems.filter((cartItem) => cartItem.id !== item.id));
    console.log('Cart after removing:', cartItems);
  };

  return (
    <Routes>
      <Route
        path="/App"
        element={
          <>
            <Header cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
            <ProductsList items={product} addToCart={addToCart} />
            <FixMenu cartItems={cartItems} removeFromCart={removeFromCart} />
          </>
        }
      />
      <Route
        path="/brands"
        element={<BrandPage cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />}
      />
      <Route path="/brands/:brandName" element={<ProductsPage cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} />
      
    </Routes>
  );
}
