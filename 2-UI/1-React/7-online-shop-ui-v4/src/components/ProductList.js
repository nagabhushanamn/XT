import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        let apiUrl = "http://0.0.0.0:8080/api/products";
        fetch(apiUrl)
            .then(response => response.json())
            .then(products => {
                this.setState({ products })
            })
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
                    <Product item={item} onBuy={(item, qty) => this.props.onBuy(item, qty)} />
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