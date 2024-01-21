import React from 'react';
import { Modal } from 'react-bootstrap';
import css from './WishList.module.css';

const WishList = ({ wishlistItems, closeWishList, removeFromWishList }) => {
  console.log("Wishlist items on WishlistPage:", wishlistItems);

  const handleRemoveFromWishlist = (itemId) => {
    removeFromWishList(itemId);
  };

  return (
    <Modal show={true} onHide={closeWishList} dialogClassName={css.cartmodal}>
      <Modal.Header closeButton>
        <Modal.Title className={css.wishlisttitle}>Вподобання</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {wishlistItems && wishlistItems.length > 0 ? (
          <div>
            <ul className={css.productlist}>
              {wishlistItems.map((item) => (
                <li key={item.id} className={css.productitem}>
                  <button
                    className={css.itemclosebtn}
                    onClick={() => handleRemoveFromWishlist(item.id)}
                  >
                    х
                  </button>
                  <img className={css.wsimg} src={item.url} alt={item.title} />
                  <p className={css.wsprice}>Ціна: {item.price}₴</p>
                  <p className={css.wstitle}>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className={css.emptyMessage}>Список вподобань порожній</p>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default WishList;
