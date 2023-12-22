import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsList from '../ProductList/ProductsList';
import products from '../data/product.json';

const ProductsPage = () => {
  const { brandName } = useParams();

  // Фильтруем продукты по бренду
  const filteredProducts = products.filter((product) => product.brand === brandName);

  return (
    <div>
      <h2>{`Products for ${brandName}`}</h2>
      {filteredProducts.length > 0 ? (
        <ProductsList items={filteredProducts} addToCart={(item) => {}} />
      ) : (
        <p>No products found for {brandName}.</p>
      )}
    </div>
  );
};

export default ProductsPage
