import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import MobileMenu from './MobileMenu/MobileMenu';
import SearchModal from './SearchModal/SearchModal';
import Cart from '../Header/Cart/Cart';
import menuicon from 'images/menuicon.png';
import basket from 'images/basket.png';
import search from 'images/search.png';
import logo from 'images/Logo.jpg';
import css from './Header.module.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileMenuOpen: false,
      isSearchOpen: false,
      isCartOpen: false,
    };
  }

  handleBrandsClick = () => {
    // Ваш код здесь
  };

  openMobileMenu = () => {
    this.setState({ isMobileMenuOpen: true });
  };

  closeMobileMenu = () => {
    this.setState({ isMobileMenuOpen: false });
  };

  openSearch = () => {
    this.setState({ isSearchOpen: true });
  };

  closeSearch = () => {
    this.setState({ isSearchOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true }, () => {
      console.log('isCartOpen value:', this.state.isCartOpen);
    });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false }, () => {
      console.log('isCartOpen value:', this.state.isCartOpen);
    });
  };

  addToCart = (item) => {
    // Логика добавления товара в корзину
    this.props.addToCart(item);
  };

  render() {
    const { cartItems, removeFromCart } = this.props;

    return (
      <div className={css.header}>
      <div className={css.navcontainer}>
        <button type='button' className={css.burger} onClick={this.openMobileMenu}>
          <img src={menuicon} alt="меню" width={30} height={30} />
        </button>

        {this.state.isMobileMenuOpen && <MobileMenu closeMobileMenu={this.closeMobileMenu} />}

        <div className={css.logo}>
          <img className={css.logoimg} src={logo} alt="логотип" />
        </div>

        <div className={css.navsection}>
          <Navbar expand="lg">
            <Nav.Link as={Link} to="/App" className={`mr-3 ${css.navLink}`} >Головна</Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/" className={`mr-3 ${css.navLink}`}>Про нас</Nav.Link>
                <NavDropdown title="Магазин" id="basic-nav-dropdown" className={`mr-3 ${css.navLink}`}>
                  <NavDropdown.Item as={Link} to="/brands">Бренди</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/" className={`mr-3 ${css.navLink}`}>Контакти</Nav.Link>
                <Nav.Link href="/" className={`mr-3 ${css.navLink}`}>Доставка і оплата</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div className={css.navright}>
          <button className={css.mobilesearch} href="#" onClick={this.openSearch}>
            <img
              src={search}
              alt="search"
            />
          </button>

          {this.state.isSearchOpen && (
            <SearchModal isSearchOpen={this.closeSearch} addToCart={this.addToCart} />
          )}

          <div>
            <button className={css.basket} onClick={this.openCart}>
              <img src={basket} alt="корзина" width={30} height={30} />
              <span className={css.cartCounter}>{cartItems.length}</span>
            </button>
          </div>

          {this.state.isCartOpen && (
            <Cart items={cartItems} closeCart={this.closeCart} removeFromCart={removeFromCart} />
          )}
        </div>
        </div>
        </div>
    );
  }
}

export default Header;
