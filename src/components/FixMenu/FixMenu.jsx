import React, { Component } from 'react'
import Cart from '..//Header/Cart/Cart';
import basket from 'images/basket.png'
import css from './FixMenu.module.css'




class FixMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCartOpen: false,
    };
  }
 
   openCart = () => {
    this.setState((prevState) => ({ isCartOpen: !prevState.isCartOpen }));
};

closeCart = () => {
    this.setState({ isCartOpen: false }, () => {
        console.log('Значение isCartOpen:', this.state.isCartOpen);
    });
};

    render() {
        const { cartItems, removeFromCart } = this.props;

        return (

            <div className={css.altmenu}>
                <center>
                    <ul>
                        <li><span className={css.altmenuItem}></span></li>
                        <li><span className={css.altmenuItem}></span></li>
                        <li><span className={css.altmenuItem}></span></li>
                        <li><button className={css.basket} onClick={this.openCart}>
                            <img src={basket} alt="корзина" width={30} height={30} />
                            <span className={css.cartCounter}>{cartItems.length}</span>
                        </button>

                            {this.state.isCartOpen && (
                                <Cart items={cartItems} closeCart={this.closeCart} removeFromCart={removeFromCart} />
              
                            )}</li>
                    </ul>
                </center>
            </div>
        )
    }
}

export default FixMenu