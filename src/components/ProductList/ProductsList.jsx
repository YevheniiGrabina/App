import React, { useState } from 'react';
import Products from "../Products/Products"
import  css from'./ProductList.module.css'

const ProductsList = ({ items, addToCart }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [variantModalOpen, setVariantModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setSelectedVariant(item.variants ? item.variants : null);
    setVariantModalOpen(false); // Скрыть окно с вариантом при открытии основного окна
  };

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedVariant(null);
    setVariantModalOpen(false);
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      addToCart({
        ...selectedItem,
      });
      closeModal();
    }
  };

  const handleAddVariantToCart = () => {
    if (selectedItem && selectedVariant) {
      addToCart({
        ...selectedItem,
        selectedVariant,
      });
      closeModal();
    }
  };

  const closeVariantModal = () => {
    setVariantModalOpen(true);
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
              <button className={css.closemodalbtn} onClick={closeModal}>Х</button>
            <img className={css.modalimg} src={selectedItem.url} alt={selectedItem.title} />
            <p className={css.modaltitle}>{selectedItem.title}</p>
            <p className={css.modaldesc}>{selectedItem.description}</p>
            <p className={css.modalprice}>Ціна:{selectedItem.price}₴</p>
            <p className={css.modalquantity}>{selectedItem.quantity}</p>
           
            <button className={css.modalbtn} onClick={handleAddToCart}>Добавить в корзину</button>
           
          </div>
        </div>
      )}

      {selectedVariant && variantModalOpen && (
        <div className={css.variantModal}>
          <div className={css.modalcontent}>
            <img src={selectedVariant.url} alt={selectedVariant.title} />
            <p>{selectedVariant.title}</p>
            <p>{selectedVariant.description}</p>
            <button onClick={handleAddVariantToCart}>Добавить в корзину</button>
            <button onClick={closeVariantModal}>Х</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;