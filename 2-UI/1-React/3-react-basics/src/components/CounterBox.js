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
    incrementTotalCount(e) {
        let { totalCount } = this.state;
        totalCount += e.value
        this.setState({ totalCount })
    }
    rennderActionButtons() {
        let numbers = [1, 2, 3, 4, 5, -1, -2, -3, -4]
        return numbers.map((n, idx) => <ActionButton key={idx} onAction={e => this.incrementTotalCount(e)} value={n} />)
    }
    render() {
        console.log("CounterBox :: render");
        let { totalCount } = this.state;
        return (
            <div className="card card-default">
                <div className="card-header">counter box : <span className="badge badge-warning">{totalCount}</span></div>
                <div className="card-body">
                    {
                        /*
                        <ActionButton onAction={e => this.incrementTotalCount(e)} value={1} />
                        <ActionButton onAction={e => this.incrementTotalCount(e)} value={-10} /> 
                        */
                    }
                    {
                        this.rennderActionButtons()
                    }
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