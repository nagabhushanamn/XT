import React, { Component } from 'react';

import { connect } from 'react-redux'

class TopicList extends Component {
    render() {
        let { topics } = this.props;
        return (
            <div>
                {topics.map((topic, idx) => {
                    return (
                        <div className="">{topic}</div>
                    )
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        topics: state.topics
    }
}

export default connect(mapStateToProps)(TopicList);