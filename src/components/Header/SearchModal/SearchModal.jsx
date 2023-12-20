import React, { useState, useRef, useEffect } from 'react';
import css from './SearchModal.module.css';
import Search from '../Search/Search';
import product from '../../data/product.json';

const SearchModal = ({ isSearchOpen, addToCart }) => {
  const [searchItems, setSearchItems] = useState(product);

  const modalRef = useRef(null);

  const handleClickSearch = () => {
    isSearchOpen();
  };

  const addToCard = (item) => {
    addToCart(item);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      isSearchOpen();
    }
  };

  useEffect(() => {
 
    document.addEventListener('mousedown', handleOutsideClick);

 
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, );

  return (
    <div className={css.searchmodal} ref={modalRef}>
      <div className={css.backdrop}></div>
      <button className={css.closeButton} type='button' onClick={handleClickSearch}>
        X
      </button>
      {/* Передача функции addToCart в компонент Search */}
      <Search items={searchItems} onSearch={setSearchItems} addToCart={addToCard} />
    </div>
  );
};

export default SearchModal;
