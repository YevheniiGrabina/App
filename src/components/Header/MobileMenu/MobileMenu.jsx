import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './MobileMenu.module.css';

const MobileMenu = ({ closeMobileMenu }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleBrandsClick = () => {
    closeMobileMenu(); // Закрыть мобильное меню
  };

  return (
    <div className={css.Burgermenu}>
      <h1>Меню</h1>
      <Link to="/App">Головна</Link>
      <div className={css.menuLink} onClick={toggleDropdown}>
        Магазин
        {isDropdownOpen && (
          <div className={css.dropdownMenu}>
            <Link to="/brands" onClick={handleBrandsClick} className={css.dropdownItem}>
              Бренди
            </Link>
            {/* Добавьте другие элементы выпадающего меню при необходимости */}
          </div>
        )}
      </div>
      <p>Оплата і доставка</p>
      <p>Контакти</p>
      <button className={`${css.burgerClose} ${css.menuLink}`} type='button' onClick={closeMobileMenu}>
        X
      </button>
    </div>
  );
};

export default MobileMenu;

