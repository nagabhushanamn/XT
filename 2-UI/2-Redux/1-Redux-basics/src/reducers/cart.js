


import { BUY } from '../constants'


export function cartReducer(state = [], action) {
    console.log("-cart-reducer-");
    switch (action.type) {
        case BUY: {
            let { item, qty } = action;
            return [...state, item]
        }
        default:
            return state;
    }
}