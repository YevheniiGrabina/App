import React, { useState, useCallback } from 'react';
import Products from '../Products/Products';
import hearth from '..//../images/heart.png';
import redHearth from '..//../images/heart1.png'; // Импортируйте красную иконку сердца
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import css from './ProductList.module.css';

const ProductsList = ({ items, addToCart, addToWishlist }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heartClicked, setHeartClicked] = useState({}); // Создайте объект состояния для каждого товара

  const handleAddToWishlist = (item) => {
    addToWishlist(item);
  };

  const handleHeartClick = (e, item) => {
    e.stopPropagation();
    setHeartClicked(prevState => ({ ...prevState, [item.id]: !prevState[item.id] })); // Обновите состояние для конкретного товара
    handleAddToWishlist(item);
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
              <button className={css.hearth} onClick={(e) => handleHeartClick(e, item)}>
                <img src={heartClicked[item.id] ? redHearth : hearth} alt="серце" width={20} height={25} />
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
