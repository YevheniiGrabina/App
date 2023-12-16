import React from 'react';
import PropTypes from 'prop-types';
import css from './BrandList.module.css';


const Brand = ({
    url
    
}) => {
    return (
        <div className={css.brand}>
            <img className={css.brandtimg} src={url} alt={1} width='100px' />
        </div>
    );
};

Brand.propTypes = {
    url: PropTypes.string,
   
}

    export default Brand