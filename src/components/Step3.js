import React, { Component, Fragment } from 'react';

export class Step3 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, nextStep, prevStep } = this.props;

    return (
      <Fragment>
        <h3>Step Three</h3>
        <label htmlFor='cardNumber'>Card Number</label>
        <input
          name='cardNumber'
          type='number'
          placeholder='Credit Card number'
          value={values.cardNumber}
          onChange={handleChange}
        />
        <button type='button' onClick={prevStep}>
          Prev
        </button>
        <button type='button' onClick={nextStep}>
          Next
        </button>
      </Fragment>
    );
  }
}

export default Step3;
