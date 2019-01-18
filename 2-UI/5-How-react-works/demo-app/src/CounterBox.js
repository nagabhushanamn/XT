import React, { Component } from 'react'

export default class CounterBox extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        let { count } = this.state;
        // console.log("CounterBox::render()");
        return (
            <div>
                <div className="card card-default">
                    <div className="card-header">Counter Box</div>
                    <div className="card-body">
                        current count : <span className="badge badge-dark">{count}</span>
                        <hr />
                        <button onClick={e => this.setState({ count: count + 1 })} className="btn btn-primary">+1</button>
                        &nbsp;
                        <button onClick={e => this.setState({ count: count - 1 })} className="btn btn-danger">-1</button>
                    </div>
                </div>
            </div>
        )
    }
}
