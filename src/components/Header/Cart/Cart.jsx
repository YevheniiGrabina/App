
import React, { useState } from 'react';
import css from './Cart.module.css';

const Cart = ({ items, closeCart, removeFromCart }) => {
   console.log("Adding to cart:", items);
  const [itemCounts, setItemCounts] = useState(items.map(() => 1));

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

  return (
    <div className={css.cartmodal}>
      <h2 className={css.carttitle}>Кошик ({items.length})</h2>
      <button className={css.cartclosebtn} onClick={closeCart}>Х</button>
      {items.length === 0 ? (
        <p>Ви ще нічого не додали</p>
      ) : (
        <>
          <ul className={css.cartlist}>
            {items.map((item, index) => (
              <li className={css.cartitem} key={item.id}>
                <img className={css.cartimg} src={item.url} alt={item.title} />
                <h3 className={css.cartitemtitle}>{item.title}</h3>
                <p className={css.cartprice}>Ціна: {item.price}</p>
                <button className={css.countmin} onClick={() => decreaseCount(index)}>-</button>
                <p className={css.cartitemcount}> {itemCounts[index]}</p>
                <button className={css.countplus} onClick={() => increaseCount(index)}>+</button>
                <button className={css.itemclosebtn} onClick={() => removeFromCart(item)}>х</button>
              </li>
            ))}
            </ul>
             <p>Всього:  {getTotalCost()} Грн.</p>
          <button className={css.checkoutbtn}>Оформить заказ</button>
        </>
      )}
     
    </div>
  );
};

export default Cart;
