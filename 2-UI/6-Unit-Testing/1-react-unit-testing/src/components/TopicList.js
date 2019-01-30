

import React, { Component } from 'react';

class TopicList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topics: [
                'JavaScript',
                'React',
                'Redux',
            ]
        };
    }
    render() {
        let { topics } = this.state;
        let { onTopicSelect } = this.props;
        let topicElements = topics.map((topic, idx) => <div onClick={(e) => { onTopicSelect(topic) }} key={topic} className="list-group-item">{topic}</div>);
        return (
            <div className="card card-default">
                <div className="card-heading">All Topics</div>
                <h1></h1>
                <div className="card-body">
                    <div className="list-group">
                        {topicElements}
                    </div>
                </div>
            </div>

        );
    }
}

export default TopicList;