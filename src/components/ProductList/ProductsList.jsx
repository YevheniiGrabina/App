import React, { useState, useCallback } from 'react';
import Products from '../Products/Products';
import hearth from '..//../images/hearth.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем стили Bootstrap
import { Button, Modal } from 'react-bootstrap'; // Импортируем нужные компоненты Bootstrap
import css from './ProductList.module.css';

const ProductsList = ({ items, addToCart }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = useCallback(() => {
    setSelectedItem(null);
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
            <Button className={css.hearth}>
              <img src={hearth} alt="корзина" width={25} height={25} />
            </Button>
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

      <Modal show={!!selectedItem} onHide={closeModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img className={css.modalimg} src={selectedItem?.url} alt={selectedItem?.title} />
           <p className={css.modaltitle}>{selectedItem?.title}</p>
          <p className={css.modalprice}>Ціна: {selectedItem?.price}₴</p>
          <p className={css.modaldesc}>{selectedItem?.description}</p>
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
