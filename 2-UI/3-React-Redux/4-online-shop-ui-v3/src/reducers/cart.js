


import { BUY } from '../constants'

/*

{
    111:{item,qty}
}

*/

export function cartReducer(state = {}, action) {
    // console.log("-cart-reducer-");
    switch (action.type) {
        case 'LOAD_CART': {
            let { cart } = action;
            return cart;
        }
        case 'NEW_ORDER':
        case 'CLEAR_CART':
            {
                return {};
            }
        case BUY: {
            let { item, qty } = action;
            let { id } = item;
            if (state[id]) {
                let itemLine = state[id];
                return Object.assign({}, state, { [id]: { item, qty: itemLine.qty + qty } })
            } else {
                return Object.assign({}, state, { [id]: { item, qty } })
            }
        }
        default:
            return state;
    }
}