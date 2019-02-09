import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <hr />
        <h1> PM - ui</h1>
        <hr />

        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/ui/products">View All</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ui/product-form">Add New</Link>
              </li>
            </ul>
            <hr />
            <Route path={"/ui/products"} component={ProductList} />
            <Route path={"/ui/product-form"} render={(props) => <ProductForm {...props} />} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
