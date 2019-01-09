
import React from 'react';


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { buy } from '../actions/cart'
import { createNewOrder } from '../actions/orders'

function increment(item, actions) {
    actions.buy(item, 1)
}

function renderCartItems(cart, actions) {
    let keys = Object.keys(cart);
    return keys.map((key, idx) => {
        let itemLine = cart[key];
        let { item, qty } = itemLine
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{qty}</td>
                <td>&#8377;{qty * item.price}</td>
                <td><i onClick={e => increment(item, actions)} className="fa fa-plus"></i></td>
            </tr>
        )
    })
}

function handleCheckout(userId, cart, actions, history) {
    actions.createNewOrder('Nag', cart)
    history.push('/orders')
}

const CartView = (props) => {
    let { cart, actions, history } = props;
    if (Object.keys(cart).length === 0)
        return <span> No Items in cart</span>
    else
        return (
            <div className="card card-default">
                <div className="card-header">Item(s) in cart</div>
                <div className="card-body">
                    <table className="table table-bordered table-sm">
                        <tbody>
                            {renderCartItems(cart, actions)}
                        </tbody>
                    </table>
                    <hr />
                    <button className="btn btn-danger" onClick={e => handleCheckout('Nag', cart, actions, history)}>checkout</button>
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
    actions: bindActionCreators({ buy, createNewOrder }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connectToStore(CartView);
