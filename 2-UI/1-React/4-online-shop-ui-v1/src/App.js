import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import classNames from 'classnames'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 1,
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
  changeTab(tabIndex) {
    this.setState({ currentTab: tabIndex })
  }
  renderBuyBtn(product) {
    if (product.canBuy) return <button className="btn btn-sm btn-primary">buy</button>
    else return null;
  }
  renderTabPanel(item) {
    let { currentTab } = this.state;
    let panel;
    switch (currentTab) {
      case 1: {
        panel = (<div>{item.description}</div>)
        break;
      }
      case 2: {
        panel = (<div>Not Yet</div>)
        break;
      }
      case 3: {
        panel = (<div>None Yet</div>)
        break;
      }
      default: panel = null;
    }
    return panel;
  }
  renderProducts() {
    let { products, currentTab } = this.state;
    return products.map((item, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={item.image} className="img-fluid" alt={item.name} />
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{item.name}</h5>
              <h6>&#8377;{item.price}</h6>
              {this.renderBuyBtn(item)}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a onClick={e => this.changeTab(1)} className={classNames('nav-link', { active: currentTab === 1 })} href="#/">Description</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(2)} className={classNames('nav-link', { active: currentTab === 2 })} href="#/">Specifcation</a>
                </li>
                <li className="nav-item">
                  <a onClick={e => this.changeTab(3)} className={classNames('nav-link', { active: currentTab === 3 })} href="#/">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(item)}
            </div>
          </div>
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
