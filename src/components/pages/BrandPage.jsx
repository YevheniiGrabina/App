import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Filter from '../Filtres/Filter';
import BrandList from '../BrandList/BrandList';
import FixMenu from '../FixMenu/FixMenu';
import ProductsPage from './ProductsPage';
import brands from '../data/brands.json';
import css from './Pages.module.css';

const BrandPage = ({ cartItems, removeFromCart }) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

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

  return (
    <div>
      <Header cartItems={cartItems} removeFromCart={removeFromCart} />
      <div className={isHeaderFixed ? css.fixedHeader : ''}></div>
      <div className={css.contentContainer}>
        <Filter onFilterChange={handleFilterChange} />
        <BrandList items={brands} selectedFilter={selectedFilter} onBrandClick={handleBrandClick} />
        {selectedBrand && <ProductsPage brandName={selectedBrand.name} />} {/* Используйте name или другое поле, представляющее имя бренда */}
        <FixMenu cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default BrandPage;
