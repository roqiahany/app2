import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';

export default class Projects extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link to="angular">Angular</Link>
              <br />
              <Link to="react">React</Link>
              <br />
              <Link to="iphone">Iphone</Link>
              <br />
              <Link to="android">Android</Link>
            </div>
            <div className="col-md-9">
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  }
}
