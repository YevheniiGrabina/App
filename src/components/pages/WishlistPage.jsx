import React from 'react';

const WishlistPage = ({ wishlistItems }) => {
  console.log("Wishlist items on WishlistPage:", wishlistItems);
  return (
    <div>
      <h2>Список желаемого</h2>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id}>
            <p>{item.title}</p>
            {/* Дополнительная информация о товаре, если необходимо */}
          </li>
        ))}
          </ul>
          
    </div>
  );
};

export default WishlistPage;