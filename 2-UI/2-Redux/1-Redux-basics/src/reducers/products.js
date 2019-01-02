
import { LOAD_PRODUCTS, BUY } from '../constants'

export function productsReducer(state = [], action) {
    //
    console.log("-products-reducer-");
    switch (action.type) {
        case LOAD_PRODUCTS: {
            let { products } = action
            return [...state, ...products]
        }
        case BUY: {
            let { item, qty } = action;
            return state.splice(0, state.length - 1);
        }
        default:
            return state;
    }
}