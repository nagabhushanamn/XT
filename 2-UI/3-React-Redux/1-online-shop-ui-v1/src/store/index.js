


import { createStore } from 'redux';
import rootReducer from '../reducers'

import { composeWithDevTools } from 'redux-devtools-extension';

const intialState = {
    products: [],
    reviews: {},
    cart: []
}

const store = createStore(rootReducer, intialState, composeWithDevTools(
    //..
))


export default store;