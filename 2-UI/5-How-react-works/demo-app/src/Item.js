import React, { Component } from 'react'

export default class Item extends Component {
    componentDidMount() {
        // console.log('Item::componentDidMount');
    }
    componentWillUnmount() {
        // console.log('Item::componentWillUnmount');
    }
    render() {
        // console.log("Item::render()");
        let { value } = this.props
        return (
            <li>
                {value}
            </li>
        )
    }
}
