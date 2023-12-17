import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './MobileMenu.module.css';

const MobileMenu = ({ closeMobileMenu }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleBrandsClick = () => {
    closeMobileMenu();
  };

  useEffect(() => {
    // При изменении isVisible восстанавливаем его обратно в true
    if (!isVisible) {
      const timeoutId = setTimeout(() => {
        setDropdownOpen(false);
        setIsVisible(false);
      }, 50); // Небольшая задержка перед началом анимации

      return () => clearTimeout(timeoutId);
    }
  }, [isVisible]);

  const handleMenuClose = () => {
    setIsVisible(false);
  };

  return (
    <div className={`${css.Burgermenu} ${isVisible ? css.visible : css.hidden}`}>
      <h1 className={css.menuTitle}>Меню</h1>
      <Link className={css.menuLink} to="/App" onClick={handleMenuClose}>
        Головна
      </Link>
      <div className={css.dropmenuLink} onClick={toggleDropdown}>
        Магазин
        {isDropdownOpen && (
          <div className={css.dropdownMenu}>
            <Link to="/brands" onClick={handleBrandsClick} className={css.dropdownItem}>
              Бренди
            </Link>
          </div>
        )}
      </div>
      <p className={css.menuLink}>Оплата і доставка</p>
      <p className={css.menuLink}>Контакти</p>
      <button className={`${css.burgerClose} ${css.menuLink}`} type="button" onClick={handleMenuClose}>
        &#8592;
      </button>
    </div>
  );
};

export default MobileMenu;
