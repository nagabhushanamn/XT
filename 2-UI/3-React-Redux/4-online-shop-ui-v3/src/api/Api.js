
import axios from 'axios'

const apiURl = "http://localhost:8080/api/products";

const Api = {
    addToCart(item, qty) {
        let cart = localStorage.getItem('user-cart') || "{}"
        cart = JSON.parse(cart);
        if (cart) {
            let { id } = item;
            if (cart[id]) {
                let itemLine = cart[id];
                const newCart = Object.assign({}, cart, { [id]: { item, qty: itemLine.qty + qty } })
                localStorage.setItem('user-cart', JSON.stringify(newCart))
            } else {
                let { id } = item;
                const newCart = Object.assign({}, cart, { [id]: { item, qty } })
                localStorage.setItem('user-cart', JSON.stringify(newCart))
            }
        }
    },
    loadCart(user) {
        let cart = localStorage.getItem('user-cart')
        if (!cart)
            return {};
        else
            return JSON.parse(cart)
    },
    loadProducts(type, size) {
        // XHR / Fetch API
        return axios.get(apiURl)
    },
    loadReviews(productId, size) {
        return axios.get(apiURl + `/${productId}/reviews`)
    },
    postReview(productId, review) {
        return axios
            .post(apiURl + `/${productId}/reviews`, review)
    }

}

export default Api;