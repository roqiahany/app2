import React from 'react';
import Functional from './../functional/Functional';
import Counter from './../Counter/Counter';
import Navbar from './../Navbar/Navbar';

export default function Comparason() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Functional />
          </div>
          <div className="col-md-6">
            <Counter />
          </div>
        </div>
      </div>
    </>
  );
}
