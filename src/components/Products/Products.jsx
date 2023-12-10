import React from 'react';
import PropTypes from 'prop-types';
import css from './Products.module.css';

const Product = ({
        url,
        title,
        description,
        price,
        quantity
   }) => {
    return (
        <div className={css.product}>
            <img src={url} alt={1} width='100px' />
            <p> {title} </p>
            <p>{description} </p>
            <p>{price} Грн  </p>
            <p>{quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
        </div>
    );
};

Product.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    quantity:PropTypes.number,

}

export default Product