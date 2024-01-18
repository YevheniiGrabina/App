import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import ProductsList from './ProductList/ProductsList';
import BrandPage from './pages/BrandPage';
import ProductsPage from './pages/ProductsPage';
import product from './data/product.json';
import FixMenu from './FixMenu/FixMenu';
import WishlistPage from './pages/WishlistPage';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

 const addToWishlist = (item) => {
  console.log("Adding to wishlist:", item);
  setWishlistItems((prevItems) => [...prevItems, item]);
  console.log("Wishlist after adding:", wishlistItems);
};

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
            <ProductsList items={product} addToCart={addToCart} addToWishlist={addToWishlist} />
            <FixMenu cartItems={cartItems} removeFromCart={removeFromCart} />
          </>
        }
      />
      <Route
        path="/brands"
        element={<BrandPage cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />}
      />
      <Route path="/brands/:brandName" element={<ProductsPage cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />} />
       <Route path="/wishlist" element={<WishlistPage wishlistItems={wishlistItems}  />} />
    </Routes>
  );
}
