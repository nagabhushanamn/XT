


import { BUY } from '../constants'

import Api from '../api/Api'

export function buy(item, qty) {
    // return function (dispatch) {
    //     Api.addToCart(item, qty)
    //     dispatch({ type: 'BUY_ASYNC', item, qty })
    // }
    return { type: 'BUY_ASYNC', item, qty }
}

export function loadCart(user) {
    // return function (dispatch) {
    //     let cart = Api.loadCart();
    //     dispatch({ type: 'LOAD_CART', cart })
    // }
    return { type: { type: 'LOAD_CART', cart: {} } }
}
