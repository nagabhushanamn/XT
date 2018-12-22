import React, { Component } from 'react';
import classNames from 'classnames'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 1,
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
    render() {
        let { item } = this.props;
        let { currentTab } = this.state;
        return (
            <div>
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
        );
    }
}

export default Product;