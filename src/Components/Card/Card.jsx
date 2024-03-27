import React, { Component } from 'react';
import './Card.css';
export default class Card extends Component {
  render() {
    console.log(this.props.firstName);
    return (
      <>
        <div className="border border-3 border-black p-3 text-center myCard">
          <img
            src="assets/400046700956_161359.jpg"
            alt="card"
            className="img-fluid w-25"
          />
          <h2>my name is{this.props.firstName}</h2>
          <div className="d-flex justify-content-between">
            <p>card 1</p>
            <span>
              <i className="fa-solid fa-home"></i>
            </span>
          </div>
        </div>
      </>
    );
  }
}
