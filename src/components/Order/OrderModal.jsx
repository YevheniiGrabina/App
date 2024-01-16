import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
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

  const handleOrderSubmit = () => {
    // Ваша логика обработки заказа
    // Закрываем модальное окно после успешного оформления заказа
    onClose();
    // Закрываем корзину (если это необходимо)
    closeCart();
  };

  return (
    <Modal show={true} onHide={onClose} dialogClassName={css.OrderModal}>
      <Modal.Header closeButton>
        <Modal.Title>Оформлення замовлення</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>Имя:</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Фамилия:</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </Form.Group>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Номер телефона:</Form.Label>
              <Form.Control
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleOrderSubmit}>
          Оформить заказ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderModal;
