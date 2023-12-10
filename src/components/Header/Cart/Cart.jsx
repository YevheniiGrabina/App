import React from 'react';
import css from './Cart.module.css';



const Cart = ({ items, closeCart }) => {
  return (
    <div className={css.cartmodal}>
          <h2>Корзина</h2>
          <button onClick={closeCart}>Х</button>
      {items.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {items.map((item, id) => (
            <li key={id}>
              <img src={item.url} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Цена: {item.price}</p>
              <p>Количество: {item.quantity}</p>
            </li>
          ))}
        </ul>
          )}
          
    </div>
  );
};

export default Cart;