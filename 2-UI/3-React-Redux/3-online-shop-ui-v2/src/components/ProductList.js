import React, { Component } from 'react';
import Product from './Product';
import { loadProducts } from '../actions/products'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ProductList extends Component {

    componentDidMount() {
        let { actions } = this.props;
        setTimeout(() => {
            actions.loadProducts('elec', 2)
        }, 1000)

    }
    componentWillUnmount() {
        //..
    }
    componentDidUpdate() {
        // let { match } = this.props;
        // console.log("loading " + match.params.type + " products");
    }

    renderProducts() {
        let { products } = this.props;
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
            <div>
                {this.renderProducts()}
                {/* <hr /> */}
                {/* <button className="btn btn-link" onClick={e => this.props.history.goBack()}>back</button> */}
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ loadProducts }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(ProductList);