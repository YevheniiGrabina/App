import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Products from "../Products/Products"
import  css from'./ProductList.module.css'

const ProductsList = ({ items, addToCart }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [variantModalOpen, setVariantModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setSelectedVariant(item.variants ? item.variants[0] : null);
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
            <img src={selectedItem.url} alt={selectedItem.title} />
            <p>{selectedItem.title}</p>
            <p>{selectedItem.description}</p>
            <p>{selectedItem.price}</p>
            <p>{selectedItem.quantity}</p>
             <button onClick={closeModal}>Закрыть</button>
            <button onClick={handleAddToCart}>Добавить в корзину</button>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Аромати</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {selectedItem.variants && (
                    <span>
                      {selectedItem.variants.map((variant) => (
                        <span key={variant.id}>
                          <button onClick={() => openModal(variant)}>
                            <p>{variant.title}</p>
                          </button>
                        </span>
                      ))}
                    </span>
                  )}
                </Typography>
              </AccordionDetails>
            </Accordion>
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
            <button onClick={closeVariantModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;