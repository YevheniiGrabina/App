import React, { useState, useCallback } from 'react';
import Products from '../Products/Products';
import hearth from '..//../images/hearth.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import css from './ProductList.module.css';

const ProductsList = ({ items, addToCart, addToWishlist }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToWishlist = (item) => {
    addToWishlist(item);
  };

  const openModal = useCallback((item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
    setIsModalOpen(false);
  }, []);

  const handleAddToCart = () => {
    if (selectedItem) {
      addToCart({
        ...selectedItem,
      });
      closeModal();
    }
  };

  return (
    <div>
      <ul className={css.productlist}>
        {items.map((item) => (
          <li key={item.id} className={css.productitem} onClick={() => openModal(item)}>
            <div>
              <button className={css.hearth} onClick={(e) => { e.stopPropagation(); handleAddToWishlist(item); }}>
                <img src={hearth} alt="корзина" width={25} height={25} />
              </button>
            </div>
            {item && (
              <Products 
                url={item.url}
                price={item.price}
                title={item.title}
              />
            )}
          </li>
        ))}
      </ul>

      <Modal dialogClassName={`${css.customModalWidth}`} className={`${css.modal}`} show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className={`${css.modalcontent}`}>
          {selectedItem && (
            <>
              <img className={css.modalimg} src={selectedItem.url} alt={selectedItem.title} />
              <p className={css.modaltitle}>{selectedItem.title}</p>
              <p className={css.modalprice}>Ціна: {selectedItem.price}₴</p>
              <p className={css.modaldesc}>{selectedItem.description}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleAddToCart}>
            У кошик
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductsList;
