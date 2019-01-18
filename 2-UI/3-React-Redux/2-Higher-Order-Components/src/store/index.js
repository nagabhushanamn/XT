

// like redux

// state

const store = {
    subscribe() {
        //..
    },
    unsubscribe() {
        //..
    },
    getState() {
        return {
            topics: [
                'java',
                'js',
                'scala',
                'pyhton'
            ],
            comments: [
                'java is my life',
                'js is my new friend',
                'scala is new partner',
                'python is new baby'
            ],
        }
    }
};

export default store;