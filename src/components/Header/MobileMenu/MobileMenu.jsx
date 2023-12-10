import React from 'react';
import css from './MobileMenu.module.css'

const MobileMenu = ({ closeMobileMenu }) => {

  
const menuItems = ['Меню', 'Головна', 'Магазин', 'Доставка і оплата', 'Контакти'];
  

  return (
    <div className={css.Burgermenu}>
      <button className={css.burgerClose} type='button' onClick={closeMobileMenu}>
        X
      </button>
      <div className={css.burgerTitle}>
      {menuItems.map((item, index) => (
        <p key={index} className={css[`menuItem${index}`]}>
          {item}
        </p>
      ))}
    </div>
    </div>
  );
};

export default MobileMenu;