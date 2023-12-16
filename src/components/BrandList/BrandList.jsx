import React from 'react';
import Brands from "../BrandList/Brands"
import  css from'./BrandList.module.css'

const BrandList = ({ items }) => {
  return (
    <div>
      <ul className={css.Brandlist}>
        {items && items.map((item) => (
          <li key={item.brand} className={css.Branditem}>
            <Brands
              url={item.url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandList;
