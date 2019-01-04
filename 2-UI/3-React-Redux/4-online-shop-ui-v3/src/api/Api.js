
import axios from 'axios'

const apiURl = "http://localhost:8080/api/products";

const Api = {
    loadProducts(type, size) {
        //
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