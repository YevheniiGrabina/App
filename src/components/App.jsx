import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import ProductsList from './ProductList/ProductsList';
import BrandPage from './pages/BrandPage';
import ProductsPage from './pages/ProductsPage';
import product from './data/product.json';
import FixMenu from './FixMenu/FixMenu';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);


  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => [...prevItems, item]);
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.filter((cartItem) => cartItem.id !== item.id);
      console.log('Cart after removing:', updatedCartItems);
      return updatedCartItems;
    });
  };

  const removeFromWishList = (itemId) => {
    setWishlistItems((prevWishlistItems) => prevWishlistItems.filter((item) => item.id !== itemId));
  };

    useEffect(() => {
    // Ваш код, который может быть вызван после обновления wishlistItems
  }, [wishlistItems]);
  return (
    <Routes>
      <Route
        path="/App"
        element={
          <>
            <Header cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
               <ProductsList
              items={product}
              addToCart={addToCart}
              wishlistItems={wishlistItems}
              addToWishlist={addToWishlist}
              removeFromWishlist={removeFromWishlist} // Передаем removeFromWishlist
            />
            <FixMenu cartItems={cartItems} removeFromCart={removeFromCart} wishlistItems={wishlistItems} removeFromWishList={removeFromWishList} />
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
