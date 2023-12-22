import React from 'react';
import { Link } from 'react-router-dom';
import Brands from "../BrandList/Brands";
import css from './BrandList.module.css';

const BrandList = ({ items, selectedFilter, onBrandClick }) => {
  const filteredItems = selectedFilter === 'ALL'
    ? items
    : items.filter(item => item.title[0] === selectedFilter);

  return (
    <div>
      <ul className={css.Brandlist}>
        {filteredItems && filteredItems.map((item) => (
          <li key={item.brand} className={css.Branditem}>
            {/* Используйте Link для перехода на страницу с товарами выбранного бренда */}
            <Link to={`/brands/${item.title}`} onClick={() => onBrandClick(item)}>
              <Brands
                url={item.url}
                title={item.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandList;
