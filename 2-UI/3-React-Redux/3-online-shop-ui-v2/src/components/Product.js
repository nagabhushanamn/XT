import React, { Component } from 'react';
import classNames from 'classnames'
import Review from './Review';
import ReviewForm from './ReviewForm_v2';

import { loadReviews, addNewReview } from '../actions/reviews'
import { buy } from '../actions/cart'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 1,
        }
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }

    changeTab(tabIndex) {
        this.setState({ currentTab: tabIndex }, () => {
            if (tabIndex === 3) {
                let { item, actions } = this.props;
                actions.loadReviews(item.id)
            }
        })
    }
    handleBuy() {
        let { item, actions } = this.props;
        let qty = this.refs.qty.value
        actions.buy(item, qty)
    }
    renderBuyBtn(product) {
        if (product.canBuy)
            return (
                <div>
                    <button onClick={e => this.handleBuy()} className="btn btn-sm btn-primary">buy</button>
                    &nbsp;
                    <input min="2" max="3" type="number" ref="qty" />
                </div>
            )
        else return null;
    }
    renderReviews() {
        let { reviews } = this.props;
        return reviews.map((item, idx) => {
            return <Review key={idx} item={item} />
        });
    }
    addNewReview(review) {
        let { item, actions } = this.props;
        actions.addNewReview(item.id, review)
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
                panel = (
                    <div>
                        {this.renderReviews()}
                        <ReviewForm onNewReview={review => this.addNewReview(review)} />
                    </div>)
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
                        <img src={"/" + item.image} className="img-fluid" alt={item.name} />
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




const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    reviews: state.reviews[ownProps.item.id] || []
})

const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ loadReviews, addNewReview, buy }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(Product);
