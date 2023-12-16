import React from 'react';
import PropTypes from 'prop-types';
import css from './BrandList.module.css';


const Brand = ({
    url,
    title,
    
}) => {
    return (
        <div className={css.brand}>
            <img className={css.brandtimg} src={url} alt={1} width='100px' />
            <p className={css.brandTitle}> {title} </p>
        </div>
    );
};

Brand.propTypes = {
    url: PropTypes.string,
   
}

    export default Brand