// ProductsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const { brandName } = useParams();
  const products = []; 

  return (
    <div>
      <h2>{`Товар на букву ${brandName}`}</h2>
      {/* Отобразите товары для выбранного бренда */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <img src={product.url} alt={product.title} />
            </div>
            <div>
              <p>{product.title}</p>
              <p>{product.description}</p>
              <p>{`Price: $${product.price}`}</p>
              <p>{`Quantity: ${product.quantity}`}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductsPage.propTypes = {
  // brand: PropTypes.object.isRequired, // Уберите это, так как теперь мы используем useParams
};

export default ProductsPage;


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import Products from "../Products/Products"
// import  css from'./Pages.module.css'

// const ProductsPage = ({ items, addToCart }) => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const openModal = (item) => {
//     setSelectedItem(item);
//   };

//   const closeModal = () => {
//     setSelectedItem(null);
//   };

//   const handleAddToCart = (item) => {
//     addToCart(item);
//     closeModal();
//   };
//   return (
//     <div>
//       <ul className={css.productlist}>
//         {items.map((item) => (
//             <li key={item.id} className={css.productitem} onClick={() => openModal(item)}>
//                    <Products
//                     url={item.url}
//                     title={item.title}
//                     price={item.price}
//                     quontity={item.quantity}
//                 />
//           </li>
//         ))}
//       </ul>

//       {selectedItem && (
//         <div className={css.modal}>
//             <div className={css.modalcontent}>
//             <img src={selectedItem.url} alt={selectedItem.title} />
//             <p>{selectedItem.title}</p>
//             <p>{selectedItem.description}</p>
//             <p>{selectedItem.price}</p>
//             <p>{selectedItem.quantity}</p>
//              <button onClick={() => handleAddToCart(selectedItem)}>Добавить в корзину </button>
//             <button onClick={closeModal}>Закрыть</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// ProductsPage.propTypes = {
//   // brand: PropTypes.object.isRequired, // Уберите это, так как теперь мы используем useParams
// };

// export default ProductsPage;
