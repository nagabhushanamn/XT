

import React, { Component } from 'react'
import Item from './Item';

export default class Tree extends Component {

    constructor() {
        super()
        this.state = {
            items: ["One", "Two", "Three"],
            root: 'ul'
        }
    }

    renderItems() {
        let { items } = this.state;
        items = items.map((item, idx) => {
            return (
                <Item value={item} key={idx} />
            )
        })

        let { root } = this.state;
        if (root === 'ul') {
            return (
                <ul>
                    {items}
                </ul>
            )
        }
        if (root === 'ol') {
            return (
                <ol>
                    {items}
                </ol>
            )
        }

    }
    toggleTree() {
        let { root } = this.state;
        this.setState({ root: root === 'ul' ? 'ol' : 'ul' })
    }

    render() {
        return (
            <div>
                {this.renderItems()}
                <button className="btn btn-primary" onClick={e => this.toggleTree()}>Toggle Tree</button>
            </div>
        )
    }
}
