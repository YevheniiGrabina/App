import React, { useState } from 'react';
import Product from "../Products/Products"
import  css from'./ProductList.module.css'

const ProductsList = ({ items, addToCart }) => {
  const [selectedItems, setSelectedItems ] = useState(items);

  const openModal = (item) => {
    setSelectedItems([item]);
  };

  const closeModal = () => {
    setSelectedItems(items);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    closeModal();
  };

  return (
    <div>
      <ul className={css.productlist}>
        {selectedItems.map((item) => (
            <li key={item.id} className={css.productitem} onClick={() => openModal(item)}>
                   <Product
                    url={item.url}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                />
          </li>
        ))}
      </ul>

      {selectedItems.length === 1 && (
        <div className={css.modal}>
            <div className={css.modalcontent}>
            <img src={selectedItems[0].url} alt={selectedItems[0].title} />
            <p>{selectedItems[0].title}</p>
            <p>{selectedItems[0].description}</p>
            <p>{selectedItems[0].price}</p>
            <p>{selectedItems[0].quantity}</p>
             <button onClick={() => handleAddToCart(selectedItems[0])}>Добавить в корзину </button>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
