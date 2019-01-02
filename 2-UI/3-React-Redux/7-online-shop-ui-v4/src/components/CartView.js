
import React from 'react';
import store from '../store'

import { buy } from '../actions/cart'

function increment(item) {
    let action = buy(item, 1)
    store.dispatch(action);
}

function renderCartItems(cart) {
    return cart.map((item, idx) => {
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{"qty"}</td>
                <td>{"total"}</td>
                <td><i onClick={e => increment(item)} className="fa fa-plus"></i></td>
            </tr>
        )
    })
}

const CartView = (props) => {
    let cart = store.getState().cart;
    return (
        <div className="card card-default">
            <div className="card-header">Item(s) in cart</div>
            <div className="card-body">
                <table className="table table-bordered table-sm">
                    <tbody>
                        {renderCartItems(cart)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartView;