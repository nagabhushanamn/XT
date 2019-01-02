


import { productsReducer } from './products'
import { reviewsReducer } from './reviews'
import { cartReducer } from './cart'


import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    cart: cartReducer
});


export default rootReducer;

