


export function reqStatusReducer(state = {}, action) {
    switch (action.type) {
        case 'REQUEST_BEGIN':
        case 'REQUEST_FINISH':
        case 'REQUEST_ERROR': {
            return Object.assign({}, state, { message: action.message })
        }
        default:
            return state;
    }
}