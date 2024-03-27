import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';

export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />

        <div className="d-flex">
          <aside className="w-25 text-center bg-info">
            <h2>side bar</h2>

            <h2>side bar</h2>

            <h2>side bar</h2>

            <h2>side bar</h2>
          </aside>
          <section className="w-75">
            <Outlet />
          </section>
        </div>

        <footer className="p-4 bg-dark text-white text-center fixed-bottom">
          <h2> Footer...</h2>
        </footer>
      </>
    );
  }
}
