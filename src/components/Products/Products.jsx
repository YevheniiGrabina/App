import React from 'react';
import PropTypes from 'prop-types';
import css from './Products.module.css';

const Product = ({
  url,
  title,
  description,
  price,
  variants,
  onSelectVariant
}) => {
  const handleVariantClick = (variant) => {
    onSelectVariant(variant);
  };

  return (
    <div className={css.product}>
      <img className={css.productimg} src={url} alt={title} width='100px' />
      <p className={css.productprice}>{price} ₴</p>
      <p className={css.productTitle}>{title}</p>
      <p className={css.productdesc}>{description}</p>
    
      
      {/* <p className={css.productquan}>
        {quantity < 10 ? 'заканчивается' : 'есть в наличии'}
      </p> */}

      {variants && variants.length > 0 && (
        <div className={css.variants}>
          <p>Выберите вариант:</p>
          <ul>
            {variants.map((variant) => (
              <li key={variant.id} onClick={() => handleVariantClick(variant)}>
                {variant.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Product.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  variants: PropTypes.array,
  onSelectVariant: PropTypes.func
};

export default Product;
