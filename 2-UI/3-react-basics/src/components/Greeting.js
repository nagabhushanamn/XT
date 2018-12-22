

import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Greeting extends Component {
    constructor(props) {
        super(props)
        console.log("Greeting :: constructor");
    }
    render() {
        console.log("Greeting :: render");
        return (
            <div>
                <div className="alert alert-info" ref="greet">
                    <p>{this.props.message}</p>
                    <hr />
                    <p>{new Date().toLocaleTimeString()}</p>
                </div>
            </div>
        );
    }
    componentDidMount() {
        console.log("Greeting :: componentDidMount");
        this.interval = setInterval(() => {
            this.forceUpdate();
        }, 1000)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Greeting :: shouldComponentUpdate");
        return this.props.message !== nextProps.message;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Greeting :: componentDidUpdate");
    }
    componentWillUnmount() {
        clearInterval(this.interval)
        console.log("Greeting :: componentWillUnmount");
    }

}
Greeting.defaultProps = {
    message: 'hello..'
}
Greeting.propType = {
    message: PropTypes.string,
}

export default Greeting;