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

  addToCart(item, qty) {
    let { cart } = this.state;
    cart.push(item);
    this.setState({ cart })
  }

  renderProducts() {
    let { products } = this.state;
    return products.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <Product item={item} onBuy={(item, qty) => this.addToCart(item, qty)} />
        </div>
      )
    })
  }
  render() {
    let { cart } = this.state;
    return (
      <div className="container">
        <Navbar title="online-shop" />
        <hr />
        <i className="fa fa-shopping-cart"></i> &nbsp;
        <span className="badge badge-danger">{cart.length} </span> item(s) in cart
        <hr />
        <CartView cart={cart} />
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
