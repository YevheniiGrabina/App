import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import FixMenu from '../FixMenu/FixMenu';
import Products from '../Products/Products';  // Предполагаем, что у вас есть компонент ProductItem
import products from '../data/product.json';
import css from './Pages.module.css';

const ProductsPage = ({ cartItems, addToCart, removeFromCart }) => {
  const { brandName } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    closeModal();
  };

  const closePage = () => {
    setSelectedItem(null);
    navigate('/brands');
  };

  // Фильтруем продукты по бренду
  const filteredProducts = products.filter((product) => product.brand === brandName);

  return (
    <div>
      <Header cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
      <h2>{`Products for ${brandName}`}</h2>
      {filteredProducts.length > 0 ? (
        <ul className={css.productlist}>
          {filteredProducts.map((item) => (
            <li key={item.id}  onClick={() => openModal(item)}>
              <Products
                url={item.url}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
               
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found for {brandName}.</p>
      )}
      {selectedItem && (
        <div className={css.modal}>
          <div className={css.modalcontent}>
            <img src={selectedItem.url} alt={selectedItem.title} />
            <p>{selectedItem.title}</p>
            <p>{selectedItem.description}</p>
            <p>{selectedItem.price}</p>
            <p>{selectedItem.quantity}</p>
            <button onClick={() => handleAddToCart(selectedItem)}>Добавить в корзину</button>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}

      <button className={css.closePageBtn} type="button" onClick={closePage}>
        До брендів
      </button>
       <FixMenu cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ProductsPage;
