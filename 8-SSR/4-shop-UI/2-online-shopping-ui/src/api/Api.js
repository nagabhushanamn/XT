
import axios from 'axios'

const apiURl = "http://localhost:8080/api/products";

const Api = {
    addToCart(item, qty) {
        return Promise.resolve({ item, qty })
    },
    loadCart(user) {
        return Promise.resolve()
    },
    loadProducts(type, size) {
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