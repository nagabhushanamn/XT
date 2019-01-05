
import { LOAD_PRODUCTS } from '../constants'
import Api from '../api/Api'

export function loadProducts(type, size) {


    //let products = [];
    //return { type: LOAD_PRODUCTS, products }  // sync action

    // thunk
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Products..' })
        Api.loadProducts(type, size)
            .then(response => response.data)
            .then(products => {
                // log
                dispatch({ type: 'REQUEST_FINISH', message: '' })
                dispatch({ type: LOAD_PRODUCTS, products }) // async action
            })
            .catch(error => {
                dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading products' })
            })
    }

}