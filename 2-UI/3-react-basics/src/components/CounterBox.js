import React, { Component } from 'react';
import ActionButton from './ActionButton';
import TotalCountDisplay from './TotalCountDisplay';


class CounterBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            totalCount: 0
        }
    }
    incrementTotalCount() {
        let { totalCount } = this.state;
        totalCount += 1
        this.setState({ totalCount })
    }
    render() {
        console.log("CounterBox :: render");
        let { totalCount } = this.state;
        return (
            <div className="card card-default">
                <div className="card-header">counter box : <span className="badge badge-warning">{totalCount}</span></div>
                <div className="card-body">
                    <ActionButton onAction={e => this.incrementTotalCount()} value={1} />
                    <ActionButton onAction={e => this.incrementTotalCount()} value={10} />
                    <div style={{ clear: 'both' }}>
                        <hr />
                        <TotalCountDisplay value={totalCount} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterBox;