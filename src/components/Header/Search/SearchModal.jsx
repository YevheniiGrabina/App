import React from 'react';
import css from './Search.module.css'


const SearchModal = ({ closeSearch }) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={css.searchmodal}>
      <form onSubmit={handleSearchSubmit}>
        <p>Окно поиска</p>
        <input type="text" placeholder="Введите запрос" />
        <button type="submit">Искать</button>
      </form>
      <button onClick={closeSearch}>X</button>
    </div>
  );
};

export default SearchModal;