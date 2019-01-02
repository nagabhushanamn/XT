import React, { Component } from 'react';
import Product from './Product';
import { loadProducts } from '../actions/products'
import store from '../store'

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            let products = store.getState().products;
            this.setState({ products })
        })
        let action = loadProducts('elec', 2)
        setTimeout(() => {
            store.dispatch(action)
        }, 1000)

    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    componentDidUpdate() {
        // let { match } = this.props;
        // console.log("loading " + match.params.type + " products");
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
            <div>
                {this.renderProducts()}
                {/* <hr /> */}
                {/* <button className="btn btn-link" onClick={e => this.props.history.goBack()}>back</button> */}
            </div>
        );
    }
}

export default ProductList;