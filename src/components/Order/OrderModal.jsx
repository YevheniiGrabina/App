// OrderModal.js
import React from 'react';
import css from './OrderModal.module.css';

const OrderModal = ({ items, itemCounts, totalCost, onClose, closeCart }) => {
  return (
    <div className={css.OrderModal}>
      <div className={css.OrderHeader}>
        <h2>Детали заказа</h2>
        <button onClick={onClose}>Закрыть</button>
      </div>
      <div className={css.OrderItems}>
        {items.map((item, index) => (
          <div key={item.id} className={css.OrderItem}>
            <img src={item.url} alt={item.title} />
            <div className={css.ItemDetails}>
              <p className={css.ItemTitle}>{item.title}</p>
              <p>Количество: {itemCounts[index]}</p>
              <p>Цена: {item.price} Грн.</p>
              <p>Сумма: {item.price * itemCounts[index]} Грн.</p>
            </div>
          </div>
        ))}
      </div>
      <div className={css.OrderTotal}>
        <p>Всього: {totalCost} Грн.</p>
        {/* Добавьте дополнительные поля для ввода информации о заказе, если необходимо */}
        {/* Например: имя, адрес, телефон и т. д. */}
      </div>
    </div>
  );
};

export default OrderModal;
