import React, { Component } from 'react';

class TotalCountDisplay extends Component {
    render() {
        let { value } = this.props;
        return (
            <div className="alert alert-warning">
                Total coun : {value}
            </div>
        );
    }
}

export default TotalCountDisplay;