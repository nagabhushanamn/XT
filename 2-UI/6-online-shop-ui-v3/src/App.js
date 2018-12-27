import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import CartView from './components/CartView';
import Home from './components/Home'
import NotFound from './components/NotFound'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProductList from './components/ProductList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  addToCart(item, qty) {
    let { cart } = this.state;
    cart.push(item);
    this.setState({ cart })
  }

  renderCart() {
    let { cart } = this.state;
    return <CartView cart={cart} />
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
        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/products/elec">View-elec-products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products/other">View-other-products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">View-cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#">View orders</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route path={"/"} exact={true} component={Home} />
              <Route path={"/products/:type"} component={ProductList} />
              <Route path={"/cart"} render={() => this.renderCart()} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
