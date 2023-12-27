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
      <button className={css.closePageBtn} type="button" onClick={closePage}>
       Назад
      </button>
      <h2>{`Products for ${brandName}`}</h2>
      {filteredProducts.length > 0 ? (
        <ul className={css.productlist}>
          {filteredProducts.map((item) => (
            <li key={item.id} className={css.productitem} onClick={() => openModal(item)}>
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
            <button className={css.closemodalbtn} onClick={closeModal}>X</button>
            <img className={css.modalimg} src={selectedItem.url} alt={selectedItem.title} />
            <p className={css.modaltitle}>{selectedItem.title}</p>
             <p className={css.modalprice}>Ціна:{selectedItem.price}₴</p>
            <p className={css.modaldesc}>{selectedItem.description}</p>
            <button  className={css.modalbtn} onClick={() => handleAddToCart(selectedItem)}>Добавить в корзину</button>
            
          </div>
        </div>
      )}
       <FixMenu cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ProductsPage;
