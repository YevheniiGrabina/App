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
            <img className={css.productimg} src={url} alt={1} width='100px' />
            <p className={css.productTitle}> {title} </p>
            <p className={css.productdesc}>{description} </p>
            <p className={css.productprice}>{price} ₴ </p>
            <p className={css.productquan}>{quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
        </div>
    );
};

Product.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number,
    quantity:PropTypes.number,

}

export default Product