import React, { Component } from 'react';
import C from './C'
class B extends Component {
    render() {
        return (
            <div>
                <div className="card card-default">
                    <div className="card-body">
                        <span className="badge badge-dark">B component</span>
                        <C />
                    </div>
                </div>
            </div>
        );
    }
}

export default B;