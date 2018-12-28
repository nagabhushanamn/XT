import React, { Component } from 'react';

class Layout extends Component {
    renderChildren() {
        let { children } = this.props;
        children = children || []
        return children.map((child, idx) => {
            return (
                <li className="list-group-item">{child}</li>
            )
        })
    }
    render() {
        return (
            <div className="jumbotron">
                <ul className="list-group">
                    {this.renderChildren()}
                </ul>
            </div>
        );
    }
}

export default Layout;