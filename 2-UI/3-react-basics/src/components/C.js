import React, { Component } from 'react';
import ValueContext from './ValueContext'
class C extends Component {
    render() {
        return (
            <div>
                <div className="card card-default">
                    <div className="card-body">
                        <span className="badge badge-dark">C component</span>
                        <ValueContext.Consumer>
                            {value => <span>{value}</span>}
                        </ValueContext.Consumer>
                    </div>
                </div>
            </div>
        );
    }
}

export default C;