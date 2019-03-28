import React, { Component } from 'react';


import { Provider } from 'react-redux';
import store from '../redux/store'
import TopicList from '../components/TopicList';


class topics extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <TopicList />
                </Provider>
            </div>
        );
    }
}

export default topics;