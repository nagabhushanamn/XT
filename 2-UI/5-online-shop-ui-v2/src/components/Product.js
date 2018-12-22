import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review';

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 1,
            reviews: [
                { stars: 5, author: 'who@mail.com', body: 'sample-review-1' },
                { stars: 1, author: 'who@mail.com', body: 'sample-review-2' }
            ]
        }
    }
    changeTab(tabIndex) {
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                //..
            }
        })
    }
    renderBuyBtn(product) {
        if (product.canBuy) return <button className="btn btn-sm btn-primary">buy</button>
        else return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((item, idx) => {
            return <Review key={idx} item={item} />
        });
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
                panel = (<div>{this.renderReviews()}</div>)
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