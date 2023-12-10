import React, { useState } from 'react';
import Header from "./Header/Header";
import ProductsList from './ProductList/ProductsList';
import product from './data/product.json';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  };

  return (
    <>
      <Header cartItems={cartItems} removeFromCart={removeFromCart} />
      <ProductsList items={product} addToCart={addToCart} />
    </>
  );
}
