import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем стили Bootstrap
import { Button, Modal } from 'react-bootstrap'; // Импортируем нужные компоненты Bootstrap
import Header from '../Header/Header';
import burgerclose from 'images/burderclose.png';
import hearth from '..//../images/hearth.png';
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
       <img className={css.burgerClose} src={burgerclose} alt="меню" width={350} height={30}/>
      </button>
      <h2>{`Products for ${brandName}`}</h2>
      {filteredProducts.length > 0 ? (
        <ul className={css.productlist}>
          {filteredProducts.map((item) => (
            <li key={item.id} className={css.productitem} onClick={() => openModal(item)}>
              <button className={css.hearth}>
              <img className={css.hearthimg} src={hearth} alt="корзина" width={25} height={25} />
            </button>
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
       <Modal show={!!selectedItem} onHide={closeModal}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img className={css.modalimg} src={selectedItem?.url} alt={selectedItem?.title} />
           <p className={css.modaltitle}>{selectedItem?.title}</p>
          <p className={css.modalprice}>Ціна: {selectedItem?.price}₴</p>
          <p className={css.modaldesc}>{selectedItem?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleAddToCart}>
            У кошик
          </Button>
        </Modal.Footer>
      </Modal>
       <FixMenu cartItems={cartItems} removeFromCart={removeFromCart} />
    </div >

  );
};

export default ProductsPage;
