import React, { Component, Fragment } from 'react';

export class Step4 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, street, cardNumber },
      prevStep
    } = this.props;

    return (
      <Fragment>
        <h3>Step Four</h3>
        <ul>
          <li>First Name: {firstName} </li>
          <li>Last Name: {lastName} </li>
          <li>Email: {email} </li>
          <li>Street: {street} </li>
          <li>Card Number {cardNumber} </li>
        </ul>
        <button type='button' onClick={prevStep}>
          Prev
        </button>
        <button type='button'>Send</button>
      </Fragment>
    );
  }
}

export default Step4;
