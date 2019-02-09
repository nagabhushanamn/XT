


import axios from 'axios';
import { LOAD_PRODUCTS } from '../constants'

let api = "http://localhost:3000/api/products";

export function loadProducts(size) {
    return function (dispatch) {
        axios.get(api)
            .then(response => {
                dispatch({ type: LOAD_PRODUCTS, products: response.data })
            })
    }
}