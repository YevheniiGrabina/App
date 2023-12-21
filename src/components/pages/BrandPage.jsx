// Brands.jsx
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Filter from '../Filtres/Filter';
import BrandList from '../BrandList/BrandList';
import ProductsPage from './ProductsPage'
import brands from '../data/brands.json';
import css from './Pages.module.css';

const BrandPage = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [selectedBrand, setSelectedBrand] = useState(null); // Новое состояние для отслеживания выбранного бренда

  // Обработчик изменения фильтра
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };
    const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  // Эффект прослушивания события прокрутки
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderFixed(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Рендеринг компонента
  return (
    <div>
      <Header cartItems={[]} removeFromCart={() => {}} />
      <div className={isHeaderFixed ? css.fixedHeader : ''}>
        {/* Ваш фиксированный хедер */}
      </div>
      <div className={css.contentContainer}>
        <Filter onFilterChange={handleFilterChange} />
        {/* Передаем выбранный фильтр в BrandList */}
         <BrandList items={brands} selectedFilter={selectedFilter} onBrandClick={handleBrandClick} />
        {/* Передаем выбранный бренд в новый компонент с товарами */}
        {selectedBrand && <ProductsPage brand={selectedBrand} />}
      </div>
    </div>
  );
};

export default BrandPage
