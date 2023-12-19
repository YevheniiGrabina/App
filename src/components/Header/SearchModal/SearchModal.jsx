import React, { useState } from 'react';
import css from './SearchModal.module.css';
import Search from '../Search/Search';
import product from '../../data/product.json';

const SearchModal = ({ isSearchOpen, addToCart }) => {
  const [searchItems, setSearchItems] = useState(product);

  const handleClickSearch = () => {
    isSearchOpen();
    };


    const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className={css.searchmodal}>
      <button type='button' onClick={handleClickSearch}>X</button>
      {/* Передача функции addToCart в компонент Search */}
      <Search items={searchItems} onSearch={setSearchItems} addToCart={handleAddToCart} />
    </div>
  );
};

export default SearchModal;