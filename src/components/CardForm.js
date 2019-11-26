import React, { Component, Fragment } from 'react';

export class CardForm extends Component {
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
        <form>
          <h3>Credit Card Data</h3>
          <div>
            <label htmlFor='cardNumber'>Card Number</label>
            <input
              name='cardNumber'
              type='number'
              placeholder='Card Number'
              value={values.cardNumber}
              onChange={handleChange}
            />
            <span>
              <small>{values.cardNumberError}</small>
            </span>
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
            <span>
              <small>{values.cardExpDateError}</small>
            </span>
          </div>
          <div>
            <label htmlFor='cardSecCode'>Card Security</label>
            <input
              name='cardSecCode'
              type='number'
              placeholder='CVV'
              value={values.cardSecCode}
              onChange={handleChange}
            />
            <span>
              <small>{values.cardSecCodeError}</small>
            </span>
          </div>
          <button variant='light' type='button' onClick={prevStep}>
            Back
          </button>
          <button variant='primary' type='button' onClick={nextStep}>
            Next
          </button>
        </form>
      </Fragment>
    );
  }
}

export default CardForm;
