import React from 'react';
import Brands from "../BrandList/Brands"
import  css from'./BrandList.module.css'

const BrandList = ({ items, selectedFilter }) => {
  const filteredItems = selectedFilter === 'ALL'
    ? items
    : items.filter(item => item.title[0] === selectedFilter);

  return (
    <div>
      <ul className={css.Brandlist}>
        {filteredItems && filteredItems.map((item) => (
          <li key={item.brand} className={css.Branditem}>
            <Brands
                    url={item.url}
                    title={item.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default BrandList;
