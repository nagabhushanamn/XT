import React, { Component } from 'react';
import Home from './Home';
import Navbar from './Navbar';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <hr />
                <Home />
                <hr />
            </div>
        );
    }
}

export default App;