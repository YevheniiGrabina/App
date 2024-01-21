import React, { useState, useCallback } from 'react';
import Products from '../Products/Products';
import hearth from '..//../images/heart.png';
import redHearth from '..//../images/heart1.png';
import { Button, Modal } from 'react-bootstrap';
 import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
import css from './ProductList.module.css';

const ProductsList = ({ items, addToCart, addToWishlist, removeFromWishlist }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heartClicked, setHeartClicked] = useState({});

  const openModal = useCallback((item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedItem(null);
    setIsModalOpen(false);
  }, []);

  const handleAddToWishlist = (item) => {
    addToWishlist(item);
    toast.success("Додано у вподобання", {
        position: "top-right"
      });

  };

   const handleHeartClick = (e, item) => {
    e.stopPropagation();
    setHeartClicked((prevState) => {
      const updatedHeartClicked = { ...prevState, [item.id]: !prevState[item.id] };

      if (updatedHeartClicked[item.id]) {
        // Если товар еще не был в вишлисте, добавляем
        handleAddToWishlist(item);
      } else {
        // Если товар уже был в вишлисте, удаляем
        removeFromWishlist(item.id);
        toast.error("Видалено з вподабань", {
        position: "top-right"
      });
      }

      return updatedHeartClicked;
    });
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      addToCart(selectedItem);
      closeModal();
    }
  };

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <ul className={css.productlist}>
        {items.map((item) => (
          <li key={item.id} className={css.productitem} onClick={() => openModal(item)}>
            <div>
              <button className={css.hearth} onClick={(e) => handleHeartClick(e, item)}>
                <img src={heartClicked[item.id] ? redHearth : hearth} alt="серце" width={20} height={25} />
              </button>
            </div>
            {item && (
              <Products url={item.url} price={item.price} title={item.title} />
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
