import React from 'react';
import { useState } from 'react';

export default function Functional() {
  let [counter, setCounter] = useState(0);
  let [firstName, setfirstName] = useState('roqa');
  function changeCounter() {
    let newCounter = counter++;
    setCounter(newCounter);
  }

  return (
    <>
      <h2>hi from function</h2>
      <h2>counter : {counter}</h2>
      <button onClick={changeCounter} className="btn btn-info">
        change
      </button>
      <h2>name : {firstName}</h2>
      <button
        onClick={() => {
          setfirstName('student');
        }}
        className="btn btn-info"
      >
        change
      </button>
    </>
  );
}
