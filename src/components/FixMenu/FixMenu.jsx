import React, { useState } from 'react';
import Cart from '../Header/Cart/Cart';
import basket from 'images/basket.png';
import css from './FixMenu.module.css';

const FixMenu = ({ cartItems, removeFromCart }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
    console.log('Значение isCartOpen:', isCartOpen);
  };

  return (
    <div className={css.altmenu}>
      <center>
        <ul>
          <li>
            <span className={css.altmenuItem}></span>
          </li>
          <li>
            <span className={css.altmenuItem}></span>
          </li>
          <li>
            <span className={css.altmenuItem}></span>
          </li>
          <li>
            <button className={css.basket} onClick={openCart}>
              <img src={basket} alt="корзина" width={30} height={30} />
              <span className={css.cartCounter}>{cartItems.length}</span>
            </button>
            {isCartOpen && (
              <Cart items={cartItems} closeCart={closeCart} removeFromCart={removeFromCart} />
            )}
          </li>
        </ul>
      </center>
    </div>
  );
};

export default FixMenu;
