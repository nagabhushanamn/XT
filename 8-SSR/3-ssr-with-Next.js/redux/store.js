


import { createStore, combineReducers } from 'redux'


function topicsReducer(state = [], action) {
    let { type } = action;
    switch (type) {
        case 'LOAD_TOPICS': {
            let { topics } = action;
            return [...state, ...topics]
        }
        default: {
            return state;
        }
    }
}

const rootReducer = combineReducers({
    topics: topicsReducer
})

const preLoadedState = {
    topics: [
        'topic-1'
    ]
}
const store = createStore(rootReducer, preLoadedState)


export default store;
