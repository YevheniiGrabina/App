import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Header/Cart/Cart';
import WishList from '../WishList/WishList';
import basket from 'images/basket.png';
import category from 'images/category.png';
import heart from 'images/heart.png';
import heartred from 'images/heart1.png';
import house from 'images/house.png';
import css from './FixMenu.module.css';

const FixMenu = ({ cartItems, removeFromCart, wishlistItems , removeFromWishList }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const openWishList = () => {
    setIsWishlistOpen((prevIsWishlistOpen) => !prevIsWishlistOpen);
  };

  const closeWishList = () => {
    setIsWishlistOpen(false);
  };

  const openCart = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const cartLength = cartItems ? cartItems.length : 0;

  // Проверка наличия товаров в избранном
  const hasWishlistItems = wishlistItems && wishlistItems.length > 0;

  return (
    <div>
      <center>
        <ul className={css.altmenu}>
          <li className={css.fixlink}>
            <Link to="/App">
              <button className={css.house}>
                <div className={css.fixcontainer}>
                  <img src={house} alt="головна" width={25} height={30} />
                </div>
              </button>
            </Link>
            <p className={css.icontext}>Головна</p>
          </li>
          <li className={css.fixlink}>
            <button className={css.category}>
              <img src={category} alt="category" width={25} height={30} />
            </button>
            <p className={css.icontext}>Категорії</p>
          </li>
          <li className={css.fixlink}>
            <button className={css.basket} onClick={openCart}>
              <img src={basket} alt="корзина" width={25} height={30} />
              <span className={css.cartCounter}>{cartLength}</span>
            </button>
            {isCartOpen && (
              <Cart items={cartItems} closeCart={closeCart} removeFromCart={removeFromCart} />
            )}
            <p className={css.icontext}>Кошик</p>
          </li>
          <li className={css.fixlink}>
            <button className={css.heart} onClick={openWishList}>
              <img src={hasWishlistItems ? heartred : heart} alt="корзина" width={25} height={30} />
            </button>
            {isWishlistOpen && (
              <WishList wishlistItems={wishlistItems} closeWishList={closeWishList} removeFromWishList={removeFromWishList}/>
            )}
            <p className={css.icontext}>Вподобання</p>
          </li>
        </ul>
      </center>
    </div>
  );
};

export default FixMenu;
