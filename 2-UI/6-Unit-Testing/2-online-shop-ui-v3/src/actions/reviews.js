

import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants'

import Api from '../api/Api'

export function loadReviews(productId, size) {
    //..
    //let reviews = [{ stars: 1, author: "Nag", body: 'sample-review' }]
    //return { type: LOAD_REVIEWS, productId, reviews }

    // thunk
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Reviews..' })
        Api.loadReviews(productId, size)
            .then(response => response.data)
            .then(reviews => {
                dispatch({ type: 'REQUEST_FINISH', message: '' })
                dispatch({ type: LOAD_REVIEWS, productId, reviews }) // async action
            })
    }
}

export function addNewReview(productId, review) {
    //..
    //return { type: ADD_NEW_REVIEW, productId, review }

    return function (dispatch) {
        Api.postReview(productId, review)
            .then(response => response.data)
            .then(rev => {
                dispatch({ type: ADD_NEW_REVIEW, productId, review: rev }) // async action
            })
    }
}