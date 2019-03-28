
import React, { Component } from 'react';

class Magic extends Component {
    constructor() {
        super();
        this.state = {
            num: 0
        }
    }
    doMagic() {
        this.setState({ num: Math.random() })
    }
    render() {
        let { num } = this.state;
        return (
            <div>
                <button onClick={e => this.doMagic()}>magic</button>
                <hr />
                {num}
            </div>
        );
    }
}

export default Magic;