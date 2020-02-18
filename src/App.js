import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div className="App" data-test="component-app">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Counter Test</h2>
          <h3 data-test="counter-display">The count is: {this.state.count}</h3>
          <button data-test="increment-button" onClick={() => this.setState({ count: this.state.count + 1})}>Increment</button>
          <button data-test="decrement-button" onClick={() => this.setState({ count: this.state.count - 1})}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
