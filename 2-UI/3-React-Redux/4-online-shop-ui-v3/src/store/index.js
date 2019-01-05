


import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

const intialState = {
    products: [],
    reviews: {},
    cart: {}
}

const store = createStore(rootReducer, intialState, composeWithDevTools(
    //..
   applyMiddleware(thunk)
))


export default store;