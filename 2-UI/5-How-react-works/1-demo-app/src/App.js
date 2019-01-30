import React, { Component } from 'react';
import Text from './Text';
import CounterBox from './CounterBox';
import Tree from './Tree';
import Greeting from './Greeting';
import TodoApp from './TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
        <hr />
        <Greeting />
        <hr />
        <Tree />
        <hr />
        <CounterBox />
        <hr />
        <Text />

      </div>
    );
  }
}

export default App;
