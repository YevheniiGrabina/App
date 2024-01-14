import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Header/Cart/Cart';
import basket from 'images/basket.png';
import category from 'images/category.png'
import hearth from 'images/hearth.png'
import house from 'images/house.png'
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

  // Проверка наличия корзины перед обращением к свойству length
  const cartLength = cartItems ? cartItems.length : 0;

  return (
    <div className={css.altmenu}>
      <center>
        <ul>
          <Link  to="/App">
         <button className={css.house}>
              <img src={house} alt="category" width={35} height={30} />
            </button>
            </Link>
           <li>
             <button className={css.category}>
              <img src={category} alt="category" width={35} height={30} />
        </button>
          </li>
          <li>
            <button className={css.basket} onClick={openCart}>
              <img src={basket} alt="корзина" width={30} height={30} />
              {/* Используйте cartLength вместо cartItems.length */}
              <span className={css.cartCounter}>{cartLength}</span>
            </button>
            {isCartOpen && (
              <Cart items={cartItems} closeCart={closeCart} removeFromCart={removeFromCart} />
            )}
          </li>
            <li>
             <button className={css.hearth}>
              <img src={hearth} alt="корзина" width={35} height={30} />
        </button>
          </li>
        </ul>
      </center>
    </div>
  );
};

export default FixMenu;
