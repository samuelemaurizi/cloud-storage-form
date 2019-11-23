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
        <div>
          <label htmlFor='cardNumber'>Card Number</label>
          <input
            name='cardNumber'
            type='number'
            placeholder='Card Number'
            value={values.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='cardExpDate'>Card Expiration Date</label>
          <input
            name='cardExpDate'
            type='date'
            placeholder='dd/mm/yyyy'
            value={values.cardExpDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='cardSecCode'>Card Security</label>
          <input
            name='cardSecCode'
            type='number'
            placeholder='CVC'
            value={values.cardSecCode}
            onChange={handleChange}
          />
        </div>
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
