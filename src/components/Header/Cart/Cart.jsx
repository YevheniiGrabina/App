import React, { useState } from 'react';
import css from './Cart.module.css';
import OrderModal from '../../Order/OrderModal';
import right from 'images/right.png';
import plus from 'images/plus.png';
import minus from 'images/minus.png';


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
    <div className={css.cartmodal}>
      <h2 className={css.carttitle}>Мій кошик ({items.length})</h2>
      <img className={css.cartclosebtn} src={right} alt="меню" width={350} height={30} onClick={closeCart}/>
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
                   <button className={css.itemclosebtn} onClick={() => removeFromCart(item)}>х</button>
                  </div>
                <div className={css.countercontainer}>
                  <div className={css.countgrid}>
                    <button className={css.countmin} onClick={() => decreaseCount(index)}><img src={minus} alt='minus' width={80} height={80}/></button>
                     <p className={css.cartitemcount}> {itemCounts[index]}</p>
                    <button className={css.countplus} onClick={() => increaseCount(index)}><img src={plus} alt='plus' width={80} height={80}/></button>
                  </div>
                  <div className={css.cost}>
                  <p className={css.cartprice}> {item.price}₴</p>
                    
                    </div>
                </div>
              </li>
            ))}
            </ul>
            <p>Підсумок:{getTotalCost()} ₴</p>
           <button className={css.checkoutbtn} onClick={handleCheckout}>Оформить заказ</button>
        </>
      )}
      {isOrderModalOpen && (
        <OrderModal
          items={items}
          itemCounts={itemCounts}
          totalCost={getTotalCost()}
          onClose={handleOrderModalClose}
        />
      )}
    </div>
   
  );
};

export default Cart;
