import React, { Component } from 'react';
import Navbar from './../Navbar/Navbar';

export default class Home extends Component {
  state = {
    userName: 'Roqa Hany',
    cls: 'bg-warning',
    cls2: ' text-center',
  };
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <h2 className="bg-danger">
          <i className="fa-solid fa-home"></i>
          hi from Home
        </h2>
        <h2>hi from Home {this.state.userName}</h2>
        <h2 className={this.state.cls + this.state.cls2}>hi from Home</h2>
        <h2 className={this.state.cls + ' text-center'}>hi from Home</h2>
      </>
    );
  }
}
