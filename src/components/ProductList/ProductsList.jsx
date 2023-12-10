import React, { useState } from 'react';
import Products from "../Products/Products"
import  css from'./ProductList.module.css'

const ProductsList = ({ items, addToCart }) => {
  const [selectedItem, setSelectedItem] = useState(null);

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
  

  return (
    <div>
      <ul className={css.productlist}>
        {items.map((item) => (
            <li key={item.id} className={css.productitem} onClick={() => openModal(item)}>
                   <Products
                    url={item.url}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    quontity={item.quantity}
                />
          </li>
        ))}
      </ul>

      {selectedItem && (
        <div className={css.modal}>
            <div className={css.modalcontent}>
            <img src={selectedItem.url} alt={selectedItem.title} />
            <p>{selectedItem.title}</p>
            <p>{selectedItem.description}</p>
            <p>{selectedItem.price}</p>
            <p>{selectedItem.quantity}</p>
             <button onClick={() => handleAddToCart(selectedItem)}>Добавить в корзину </button>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;