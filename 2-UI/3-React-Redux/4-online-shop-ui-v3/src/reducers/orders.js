


export function ordersReducer(state = [], action) {

    switch (action.type) {
        case 'NEW_ORDER': {
            let { order } = action;
            return [...state, order]
        }
        default:
            return state;
    }

}