
import { LOAD_PRODUCTS } from '../constants'


export function loadProducts(type, size) {

    let products = [
        {
            id: 111,
            name: 'Laptop',
            price: 198000.00,
            canBuy: true,
            image: 'images/Laptop.png',
            description: 'New Mac pro'
        },
        {
            id: 222,
            name: 'Mobile',
            price: 18000.00,
            canBuy: true,
            image: 'images/Mobile.png',
            description: 'New Mac pro'
        },

    ];
    return { type: LOAD_PRODUCTS, products }
}