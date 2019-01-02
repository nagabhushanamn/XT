
import { LOAD_PRODUCTS } from '../constants'


export function loadProducts(type, size) {

    let products = [{}, {}];
    return { type: LOAD_PRODUCTS, products }
}