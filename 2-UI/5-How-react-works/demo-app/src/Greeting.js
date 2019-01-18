import React, { Component } from 'react'

export default class Greeting extends Component {
    render() {
        // console.log("Greeting::render()");
        return (
            <div className="alert alert-info">
                <p>good morning</p>
                <p>{new Date().toLocaleTimeString()}</p>
                <button onClick={e => this.forceUpdate()}>reload</button>
            </div>
        )
    }
    componentDidUpdate() {
        // console.log("Greeting::componentDidUpdate()");
    }
}
