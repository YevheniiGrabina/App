import React, { useState } from 'react';
import css from './Search.module.css';

const Search = ({ items,  addToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const openModal = (item) => {
    setSelectedItems([item]);
    setSearchQuery(''); // Clear the search query when an item is clicked
  };

  const closeModal = () => {
    setSelectedItems([]);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    closeModal();
  };

  const filteredItems = items ? items.filter(item =>
  item.title.toLowerCase().includes(searchQuery.toLowerCase())
) : [];


  return (
    <div>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className={css.input}
      />
      {searchQuery && (
        <ul className={css.dropdown}>
          {filteredItems.map((item) => (
            <li key={item.id} onClick={() => openModal(item)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
      {selectedItems.length === 1 && (
        <div className={css.modal}>
          <div className={css.modalcontent}>
            <img src={selectedItems[0].url} alt={selectedItems[0].title} />
            <p>{selectedItems[0].title}</p>
            <p>{selectedItems[0].description}</p>
            <p>{selectedItems[0].price}</p>
            <p>{selectedItems[0].quantity}</p>
            <button onClick={() => handleAddToCart(selectedItems[0])}>Добавить в корзину</button>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
