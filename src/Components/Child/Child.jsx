import React, { Component } from 'react';

export class Child extends Component {
  render() {
    // let name = this.props.person.userName;
    // let age = this.props.person.userAge;
    const { userAge: myAge, userName, onSale, id, count } = this.props.person;
    const delFun = this.props.del;
    const updFun = this.props.upd;
    return (
      <>
        <div className="col-md-4 gy-4 ">
          <div className="bg-danger rounded-3 p-2 position-relative">
            <h5>{id}</h5>
            <h2>name:{userName}</h2>
            <h5>age:{myAge}</h5>
            <h5>{count}</h5>
            {onSale === true ? (
              <div className="bg-success position-absolute top-0 end-0 p-2 m-2 rounded-2">
                sale
              </div>
            ) : (
              ''
            )}
            <button
              onClick={function () {
                delFun(id);
              }}
              className=" btn btn-outline-info w-100"
            >
              delete
            </button>
            <button
              onClick={() => {
                updFun(this.props.person);
              }}
              className="btn btn-outline-dark w-100"
            >
              +
            </button>
          </div>
        </div>
      </>
    );
  }
}
