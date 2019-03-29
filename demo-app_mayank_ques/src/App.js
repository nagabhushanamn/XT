import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.handler3 = this.handler3.bind(this)
  }

  handler1(e) {
    console.log(e);
    console.log(this);
  }
  handler2(e) {
    console.log(e);
    console.log(this);
  }
  handler3(e) {
    console.log(e);
    console.log(this);
  }

  handler4(e) {
    console.log(e);
    console.log(this);
  }

  render() {
    console.log(this)
    this.handler1();
    return (
      <div className="App">
        <button onClick={this.handler1}>button-1</button>
        <button onClick={this.handler2.bind(this)}>button-2</button>
        <button onClick={this.handler3}>button-3</button>
        <button onClick={(e) => { console.log(e); console.log(this) }}>button-4</button>
        <button onClick={(e) => { this.handler4(e) }}>button-5</button>
      </div>
    );
  }
}

export default App;
