import React, { Component } from 'react';
import Card from './../Card/Card';

export default class HomeCard extends Component {
  state = {
    userName: ' Panda',
  };
  render() {
    return (
      <>
        <Card firstName={this.state.userName} />
      </>
    );
  }
}
