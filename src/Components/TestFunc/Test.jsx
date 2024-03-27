import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './../Navbar/Navbar';

export default function Test() {
  const [name, setname] = useState('');

  // useEffect(function () {
  //   console.log('function did mount');

  //   return function () {
  //     console.log('will un mount');
  //   };
  // }, []);
  // useEffect(
  //   function () {
  //     if (name == '') {
  //       console.log('function did mount');
  //     } else {
  //       console.log('update');
  //     }
  //   },
  //   [name]
  // );

  // function setClick() {
  //   console.log('clicked');
  // }
  // useEffect(() => {
  //   document.addEventListener('click', setClick);

  //   return () => {
  //     document.removeEventListener('click', setClick);
  //   };
  // }, []);

  useEffect(() => {
    const id = setInterval(() => {
      console.log('hi');
    }, 500);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      {/* {console.log('render')} */}
      <h2>hi from test function {name}</h2>
      <button
        onClick={function () {
          setname('Roqa');
        }}
      >
        changeName
      </button>
    </>
  );
}
