

import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants'


export function loadReviews(productId, size) {
    //..
    let reviews = [{}, {}]
    return { type: LOAD_REVIEWS, productId, reviews }
}

export function addNewReview(productId, review) {
    //..
    return { type: ADD_NEW_REVIEW, productId, review }
}