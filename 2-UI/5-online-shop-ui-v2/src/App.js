import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import Product from './components/Product';
import CartView from './components/CartView';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isCartOpen: false,
      cart: [],
      products: [
        {
          id: 111,
          name: 'Laptop',
          price: 198000.00,
          canBuy: true,
          image: 'images/Laptop.png',
          description: 'New Mac pro'
        },
        {
          id: 222,
          name: 'Mobile',
          price: 18000.00,
          canBuy: true,
          image: 'images/Mobile.png',
          description: 'New Mac pro'
        },
      ]
    }
  }

  toggleCartView() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }

  addToCart(item, qty) {
    let { cart } = this.state;
    cart.push(item);
    this.setState({ cart })
  }

  renderProducts() {
    let { products, isCartOpen } = this.state;
    if (!isCartOpen)
      return products.map((item, idx) => {
        return (
          <div key={idx} className="list-group-item">
            <Product item={item} onBuy={(item, qty) => this.addToCart(item, qty)} />
          </div>
        )
      })
    else return null;
  }
  renderCart() {
    let { isCartOpen, cart } = this.state;
    if (isCartOpen) return <CartView cart={cart} />
    return null;
  }
  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <Navbar title="online-shop" />
        <hr />
        <i className="fa fa-shopping-cart"></i> &nbsp;
        <span className="badge badge-danger">{cart.length} </span> item(s) in cart
        <hr />
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a onClick={e => this.toggleCartView()} className="nav-link" href="/#">View {isCartOpen ? 'products' : 'cart'}</a>
          </li>
        </ul>
        <hr />
        {this.renderCart()}
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
