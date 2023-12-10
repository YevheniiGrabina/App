import React from 'react';
import styles from './MobileMenu.module.css'

const MobileMenu = ({ closeMobileMenu }) => {

  
const menuItems = ['Меню', 'Головна', 'Магазин', 'Доставка і оплата', 'Контакти'];
  

  return (
    <div className={styles.Burgermenu}>
      <button type='button' onClick={closeMobileMenu}>
        X
      </button>
      <div className={styles.burgerTitle}>
      {menuItems.map((item, index) => (
        <p key={index} className={styles[`menuItem${index}`]}>
          {item}
        </p>
      ))}
    </div>
    </div>
  );
};

export default MobileMenu;