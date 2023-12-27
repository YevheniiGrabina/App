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

  const handleAddToCart = () => {
    if (selectedItem) {
      addToCart({
        ...selectedItem,
      });
      closeModal();
    }
  };

  return (
    <div>
      <ul className={css.productlist}>
        {items.map((item) => (
          <li key={item ? item.id : 'default'} className={css.productitem} onClick={() => openModal(item)}>
            {item && (
              <Products
                url={item.url}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            )}
          </li>
        ))}
      </ul>

      {selectedItem && (
        <div className={css.modal}>
          <div className={css.modalcontent}>
            <button className={css.closemodalbtn} onClick={closeModal}>X</button>
            <img className={css.modalimg} src={selectedItem.url} alt={selectedItem.title} />
            <p className={css.modaltitle}>{selectedItem.title}</p>
            <p className={css.modalprice}>Ціна:{selectedItem.price}₴</p>
            <p className={css.modaldesc}>{selectedItem.description}</p>
             <button className={css.modalbtn} onClick={handleAddToCart}>Добавить в корзину</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;