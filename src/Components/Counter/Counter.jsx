import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    counter: 0,
  };
  changeCounter = () => {
    let newCounter = this.state.counter;
    // newCounter = Math.random();
    newCounter++;
    this.setState({ counter: newCounter });
  };

  render() {
    return (
      <>
        <h2>Hi from counter Class</h2>
        <h2>counter: {this.state.counter}</h2>
        <button onClick={this.changeCounter} className="btn btn-danger">
          {' '}
          change
        </button>
      </>
    );
  }
}
