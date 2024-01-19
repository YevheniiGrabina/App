import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import css from './Search.module.css';

const Search = ({ items, addToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setSearchQuery('');
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    closeModal();
  };

  const filteredItems = items
    ? items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={css.searchTerm}
      />
      {searchQuery && (
        <ul className={css.dropdown}>
          {filteredItems.map((item) => (
            <li
              className={css.dropdownItem}
              key={item.id}
              onClick={() => openModal(item)}
            >
              <img className={css.searchimg} src={item.url} alt={item.title} />
              <h3 className={css.searchitemtitle}>{item.title}</h3>
            </li>
          ))}
        </ul>
      )}
      {selectedItem && (
        <Modal show={true} onHide={closeModal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <img
              className={css.modalimg}
              src={selectedItem.url}
              alt={selectedItem.title}
            />
            <p className={css.modaltitle}>{selectedItem.title}</p>
            <p className={css.modalprice}>{selectedItem.price}</p>
            <p className={css.modaldesc}>{selectedItem.description}</p>
            <p>{selectedItem.quantity}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="dark"
              onClick={() => handleAddToCart(selectedItem)}
            >
              У кошик
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Search;
