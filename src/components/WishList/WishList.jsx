import React from 'react';
 import { toast } from 'react-toastify';
import { Modal } from 'react-bootstrap';
import css from './WishList.module.css';

const WishList = ({ wishlistItems, closeWishList, removeFromWishList }) => {
  console.log("Wishlist items on WishlistPage:", wishlistItems);

  const handleRemoveFromWishlist = (itemId) => {
    removeFromWishList(itemId);
     toast.error("Видалено з вподабань", {
        position: "top-right"
      });
  };

  return (
    <Modal show={true} onHide={closeWishList} dialogClassName={css.cartmodal}>
      <Modal.Header closeButton>
        <Modal.Title className={css.wishlisttitle}>Вподобання</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {wishlistItems && wishlistItems.length > 0 ? (
          <div>
            <ul className={css.wslist}>
              {wishlistItems.map((item) => (
                <li key={item.id} className={css.wishlistitem}>
                  <button
                    className={css.itemclosebtn}
                    onClick={() => handleRemoveFromWishlist(item.id)}
                  >
                    х
                  </button>
                  <img className={css.wsimg} src={item.url} alt={item.title} />
                  <p className={css.wstitle}>{item.title}</p>
                  <p className={css.wsprice}>Ціна: {item.price}₴</p>
                  
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
