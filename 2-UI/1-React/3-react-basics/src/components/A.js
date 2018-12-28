import React, { Component } from 'react';
import B from './B'
import ValueContext from './ValueContext'
class A extends Component {
    render() {
        return (
            <div className="card card-default">
                <div className="card-body">
                    <span className="badge badge-dark">A component</span>
                    &mdash;{this.props.value}
                    <ValueContext.Provider value={this.props.value}>
                        <B />
                    </ValueContext.Provider>
                    <ValueContext.Provider value={100}>
                        <B />
                    </ValueContext.Provider>
                </div>
            </div>
        );
    }
}

export default A;