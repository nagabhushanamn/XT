import React, { Component } from 'react';
import './ActionButton.css'

class ActionButton extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    increment() {
        // this.state.count++; // dont do like
        let { count } = this.state;
        let { value } = this.props;
        count += 1
        this.setState({ count }, () => {
            setTimeout(() => {
                let { onAction } = this.props;
                if (onAction) {
                    onAction({ value: count * value });
                }
            }, 100);
        })
    }
    render() {
        console.log("ActionButton :: render")
        let { value } = this.props; // de-structuring
        let { count } = this.state;
        let className = `btn ${value < 0 ? 'btn-info' : 'btn-warning'}`
        return (
            <div className="action-button">
                <div className="card card-default">
                    <div className="card-body">
                        <button onClick={e => this.increment()} className={className}>{value}</button>
                        &nbsp;&mdash;&nbsp;
                        <span className="badge badge-danger">{count}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActionButton;