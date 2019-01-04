
import React from 'react';


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { buy } from '../actions/cart'

function increment(item, actions) {
    actions.buy(item, 1)
}

function renderCartItems(cart, actions) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{"qty"}</td>
                <td>{"total"}</td>
                <td><i onClick={e => increment(item, actions)} className="fa fa-plus"></i></td>
            </tr>
        )
    })
}

const CartView = (props) => {
    let { cart, actions } = props;
    return (
        <div className="card card-default">
            <div className="card-header">Item(s) in cart</div>
            <div className="card-body">
                <table className="table table-bordered table-sm">
                    <tbody>
                        {renderCartItems(cart, actions)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    cart: state.cart
})

const mapDispatchToProps = dispatch => ({
    // ... normally is an object full of action creators
    actions: bindActionCreators({ buy }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(CartView);
