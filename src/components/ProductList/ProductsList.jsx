import React, { useState } from 'react';
import Products from '../Products/Products';
import css from './ProductList.module.css';

const ProductsList = ({ items, addToCart }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedVariantModalOpen, setSelectedVariantModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setSelectedVariant(item.variants ? item.variants[0] : null);
    setSelectedVariantModalOpen(false);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedVariant(null);
    setSelectedVariantModalOpen(false); // Закрывает модальное окно для варианта
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
            <button className={css.closemodalbtn} onClick={closeModal}>
              Х
            </button>
            <img className={css.modalimg} src={selectedItem.url} alt={selectedItem.title} />
            <p className={css.modaltitle}>{selectedItem.title}</p>
            <p className={css.modaldesc}>{selectedItem.description}</p>
            <p className={css.modalprice}>Ціна:{selectedItem.price}₴</p>
            <button className={css.modalbtn} onClick={handleAddToCart}>
              Добавить в корзину
            </button>
            {selectedItem.variants && (
              <div className={css.customDropdown}>
                <select
                  value={selectedVariant ? selectedVariant.id : ''}
                  onChange={(event) => {
                    const selectedVariantId = event.target.value;
                    const variant = selectedItem.variants.find((v) => v.id === selectedVariantId);
                    setSelectedVariant(variant);
                    setSelectedVariantModalOpen(true); // Автоматически открывает модальное окно для выбранного варианта
                  }}
                >
                  {selectedItem.variants.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {variant.title}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      )}

      {selectedVariant && selectedVariantModalOpen && (
        <div className={css.modal}>
          <div className={css.modalcontent}>
            {/* Добавлен выпадающий список внутри модального окна варианта */}
            {selectedItem.variants && (
              <div className={css.customDropdown}>
                <select
                  value={selectedVariant ? selectedVariant.id : ''}
                  onChange={(event) => {
                    const selectedVariantId = event.target.value;
                    const variant = selectedItem.variants.find((v) => v.id === selectedVariantId);
                    setSelectedVariant(variant);
                  }}
                >
                  {selectedItem.variants.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {variant.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <img className={css.modalimg} src={selectedVariant.url} alt={selectedVariant.title} />
            <p className={css.modaltitle}>{selectedVariant.title}</p>
            <p className={css.modaldesc}>{selectedVariant.description}</p>
              <p className={css.modalprice}>Ціна:{selectedItem.price}₴</p>
            <button onClick={handleAddVariantToCart}>Добавить в корзину</button>
            <button onClick={closeModal}>Х</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
