import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id: 111,
                    name: 'Laptop',
                    price: 198000.00,
                    canBuy: true,
                    image: '/images/Laptop.png',
                    description: 'New Mac pro'
                },
                {
                    id: 222,
                    name: 'Mobile',
                    price: 18000.00,
                    canBuy: true,
                    image: '/images/Mobile.png',
                    description: 'New Mac pro'
                },
            ]
        }
    }

    componentDidUpdate() {
        let { match } = this.props;
        console.log("loading " + match.params.type + " products");
    }

    renderProducts() {
        let { products } = this.state;
        return products.map((item, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    <Product item={item} onBuy={(item, qty) => this.addToCart(item, qty)} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderProducts()}
                <hr />
                <button className="btn btn-link" onClick={e => this.props.history.goBack()}>back</button>
            </div>
        );
    }
}

export default ProductList;