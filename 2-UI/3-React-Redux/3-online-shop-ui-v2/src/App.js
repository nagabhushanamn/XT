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

import { connect } from 'react-redux'

class App extends Component {

  renderCart() {
    return <CartView />
  }
  render() {
    let { cart } = this.props;
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
                <Link className="nav-link" to="/cart">View-cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/#">View orders</Link>
              </li>
            </ul>
            <hr />
            <Switch>
              <Route path={"/"} exact={true} component={Home} />
              <Route path={"/products/:type"} render={(props) => <ProductList {...props} />} />
              <Route path={"/cart"} render={() => this.renderCart()} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  cart: state.cart
})


// export default App;
export default connect(mapStateToProps, null)(App)
