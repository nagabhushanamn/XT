



import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants'

/*

{
    productId1:[
        {},{}
    ],
     productId2:[
        {},{}
    ]
}


*/

export function reviewsReducer(state = {}, action) {
    // console.log("-reviews-reducer-");
    switch (action.type) {
        case LOAD_REVIEWS: {
            let { productId, reviews } = action;
            let existingReviews = state[productId] || [];
            reviews = [...existingReviews, ...reviews]
            return Object.assign({}, state, { [productId]: reviews })
        }
        case ADD_NEW_REVIEW: {
            let { productId, review } = action;
            let existingReviews = state[productId];
            let reviews = [...existingReviews, review]
            return Object.assign({}, state, { [productId]: reviews })
        }
        default:
            return state;
    }
}