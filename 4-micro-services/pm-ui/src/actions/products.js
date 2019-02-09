


import axios from 'axios';
import { LOAD_PRODUCTS, SAVE_PRODUCT, DELETE_PRODUCT } from '../constants'

let api = "http://localhost:3000/api/products";

export function loadProducts(size) {
    return function (dispatch) {
        axios.get(api)
            .then(response => {
                dispatch({ type: LOAD_PRODUCTS, products: response.data })
            })
    }
}

export function saveProduct(product) {
    return function (dispatch) {
        axios.post(api, product)
            .then(response => {
                dispatch({ type: SAVE_PRODUCT, product: response.data })
            })
    }
}
export function deleteProduct(productId) {
    return function (dispatch) {
        axios.delete(api + "/" + productId)
            .then(response => {
                dispatch({ type: DELETE_PRODUCT, productId })
            })
    }
}