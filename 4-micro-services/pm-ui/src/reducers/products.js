
import { LOAD_PRODUCTS, SAVE_PRODUCT, DELETE_PRODUCT } from '../constants'

export function productsReducer(state = [], action) {
    switch (action.type) {
        case LOAD_PRODUCTS: {
            return [...action.products]
        }
        case SAVE_PRODUCT: {
            return [action.product, ...state]
        }
        case DELETE_PRODUCT: {
            return state.filter(p => p._id !== action.productId)
        }
        default:
            return state;
    }
}