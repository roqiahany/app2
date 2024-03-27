import React, { Component } from 'react';
import { Child } from './../Child/Child';
import Navbar from './../Navbar/Navbar';

export default class parent extends Component {
  state = {
    persons: [
      { id: 1, count: 12, userName: 'Roqa', userAge: 20, onSale: true },
      { id: 2, count: 2, userName: 'roro', userAge: 20, onSale: false },
      { id: 3, count: 44, userName: 'Ayat', userAge: 20, onSale: true },
      { id: 4, count: 23, userName: 'Roqa', userAge: 20, onSale: false },
      { id: 5, count: 1, userName: 'roro', userAge: 20, onSale: true },
      { id: 6, count: 7, userName: 'Ayat', userAge: 20, onSale: true },
    ],
  };
  delElement = (id) => {
    console.log('delete...', id);
    const newAllPerson = [...this.state.persons];

    const res = newAllPerson.filter(function (person) {
      return person.id !== id;
    });

    this.setState({ persons: res });
  };
  update = (obj) => {
    console.log(obj);

    let indexObj = this.state.persons.indexOf(obj);
    const newCopy = [...this.state.persons];
    newCopy[indexObj].count++;
    this.setState({ persons: newCopy });
  };
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* <Child person={this.state.person[0]} />;
        <Child person={this.state.person[1]} />;
        <Child person={this.state.person[2]} />; */}

        <div className="container">
          <div className="row">
            {this.state.persons.map((person, idx) => {
              return (
                <Child
                  upd={this.update}
                  del={this.delElement}
                  key={idx}
                  person={person}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
