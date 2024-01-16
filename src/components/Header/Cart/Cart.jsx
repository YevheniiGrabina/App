import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем стили Bootstrap
import OrderModal from '../../Order/OrderModal';
import plus from 'images/plus.png';
import minus from 'images/minus.png';
import css from './Cart.module.css';

const Cart = ({ items, closeCart, removeFromCart }) => {
  const [itemCounts, setItemCounts] = useState(items.map(() => 1));
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);

  const increaseCount = (index) => {
    const newCounts = [...itemCounts];
    newCounts[index]++;
    setItemCounts(newCounts);
  };

  const decreaseCount = (index) => {
    const newCounts = [...itemCounts];
    if (newCounts[index] > 1) {
      newCounts[index]--;
      setItemCounts(newCounts);
    }
  };

  const getTotalCost = () => {
    return items.reduce((total, item, index) => total + item.price * itemCounts[index], 0);
  };

  const handleCheckout = () => {
    // Открыть модальное окно с деталями заказа
    setOrderModalOpen(true);
  };

  const handleOrderModalClose = () => {
    // Закрыть модальное окно заказа
    setOrderModalOpen(false);
    closeCart();
  };

  return (
    <Modal show={true} onHide={closeCart} dialogClassName={css.cartmodal}>
      <Modal.Header  closeButton>
        <Modal.Title className={css.carttitle}>Мій кошик ({items.length})</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.length === 0 ? (
          <p className={css.alltitle}>Ви ще нічого не додали</p>
        ) : (
          <>
            <ul className={css.cartlist}>
              {items.map((item, index) => (
                <li className={css.cartitem} key={item.id}>
                  <div className={css.cartproduct}>
                    <img className={css.cartimg} src={item.url} alt={item.title} />
                    <h3 className={css.cartitemtitle}>{item.title}</h3>
                    <button className={css.itemclosebtn} onClick={() => removeFromCart(item)}>
                      х
                    </button>
                  </div>
                  <div className={css.countercontainer}>
                    <div className={css.countgrid}>
                      <button className={css.countmin} onClick={() => decreaseCount(index)}>
                        <img src={minus} alt="minus" />
                      </button>
                      <p className={css.cartitemcount}> {itemCounts[index]}</p>
                      <button className={css.countplus} onClick={() => increaseCount(index)}>
                        <img src={plus} alt="plus" />
                      </button>
                    </div>
                    <div className={css.cost}>
                      <p className={css.cartprice}> {item.price}₴</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p>Підсумок: {getTotalCost()} ₴</p>
            <Button className={css.checkoutbtn} onClick={handleCheckout}>
              Оформити замовлення
            </Button>
          </>
        )}
      </Modal.Body>
      {isOrderModalOpen && (
        <OrderModal
          items={items}
          itemCounts={itemCounts}
          totalCost={getTotalCost()}
          onClose={handleOrderModalClose}
        />
      )}
    </Modal>
  );
};

export default Cart;
