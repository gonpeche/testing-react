import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      negative: false
    }
  }

  increment = () => {
    const { count } = this.state;
    if (count >= 0) {
      this.setState({
        negative: false
      })
    }
    this.setState({
      count: count + 1
    })
  }

  decrement = () => {
    const { count } = this.state

    if (count === 0) {
      this.setState({
        negative: true
      })
    }
    if (count > 0) {
      this.setState({
        count: count - 1
      })      
    }
  }

  render() {
    const { count, negative } = this.state
    return (
      <div className="App" data-test="component-app">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Counter Test</h2>
          <h3 data-test="counter-display">The count is: {count}</h3>
          <div>
            {negative && <h1 data-test="negative-message" className="negative">Number can't be negative</h1>}
            <button data-test="increment-button" onClick={() => this.increment()}>Increment</button>
            <button data-test="decrement-button" onClick={() => this.decrement()}>Decrement</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
