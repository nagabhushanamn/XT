import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'

import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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

  renderProducts() {
    let { products } = this.state;
    return products.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <Product item={item} />
        </div>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <Navbar title="online-shop" />
        <hr />
        <hr />

        {this.renderProducts()}

      </div>
    );
  }
}

export default App;
