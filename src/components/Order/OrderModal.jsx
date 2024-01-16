import React, { useState } from 'react';
import css from './OrderModal.module.css';

const OrderModal = ({ items, itemCounts, onClose, closeCart }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const calculateTotalCost = () => {
    return items.reduce((acc, item, index) => {
      return acc + item.price * itemCounts[index];
    }, 0);
  };

  const totalCost = calculateTotalCost();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className={css.OrderModal}>
      <div className={css.OrderHeader}>
        <h2>Оформлення замовлення</h2>
        <button onClick={onClose}>x</button>
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
        <p>Всего: {totalCost} Грн.</p>
        <label htmlFor="firstName">Имя:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />

        <label htmlFor="lastName">Фамилия:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />

        <label htmlFor="phoneNumber">Номер телефона:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
    </div>
  );
};

export default OrderModal;
