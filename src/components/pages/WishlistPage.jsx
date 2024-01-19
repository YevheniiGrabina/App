import React from 'react';
import css from './Pages.module.css'

const WishlistPage = ({ wishlistItems }) => {
  console.log("Wishlist items on WishlistPage:", wishlistItems);
  return (
    <div>
      <h2>Вподобання</h2>
      <ul className={css.productlist}>
        {wishlistItems.map((item) => (
          <li key={item.id} className={css.productitem}>
            <img className={css.wsimg} src={item.url} alt={item.title} />
            <p className={css.wsprice}>Ціна: {item.price}₴</p>
              <p className={css.wstitle}>{item.title}</p>
              
          </li>
        ))}
          </ul>
          
    </div>
  );
};

export default WishlistPage;