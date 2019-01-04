


import { productsReducer } from './products'
import { reviewsReducer } from './reviews'
import { cartReducer } from './cart'
import { reqStatusReducer } from './req-status'


import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer,
    reqStatus: reqStatusReducer
});


export default rootReducer;

