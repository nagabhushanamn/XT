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
import { loadCart } from './actions/cart'

import { bindActionCreators } from 'redux'
import OrderView from './components/OrderView';

class App extends Component {

  renderReqStatus() {
    let { message } = this.props.reqStatus
    if (message)
      return (
        <div className="bg bg-info">{this.props.reqStatus.message}</div>
      )
    else return null;
  }

  componentDidMount() {
    let { actions } = this.props;
    actions.loadCart('Nag')
  }
  render() {
    let { cart } = this.props;
    return (
      <div className="container">
        <Navbar title="online-shop" />
        <hr />
        <i className="fa fa-shopping-cart"></i> &nbsp;
        <span className="badge badge-danger">{Object.keys(cart).length} </span> item(s) in cart
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
                <Link className="nav-link" to="/orders">View orders</Link>
              </li>
            </ul>
            <hr />
            {this.renderReqStatus()}
            <hr />
            <Switch>
              <Route path={"/"} exact={true} component={Home} />
              <Route path={"/products/:type"} render={(props) => <ProductList {...props} />} />
              <Route path={"/cart"} component={CartView} />
              <Route path={"/orders"} component={OrderView} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  cart: state.cart,
  reqStatus: state.reqStatus
})

const mapDispatchToProps = dispatch => ({
  // ... normally is an object full of action creators
  actions: bindActionCreators({ loadCart }, dispatch)
})



// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)
