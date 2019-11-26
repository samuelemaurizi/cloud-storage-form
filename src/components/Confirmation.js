import React, { Component, Fragment } from 'react';
import { FormControlLabel, Checkbox, Button } from '@material-ui/core';

export class Confirmation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  total = (a, b) => {
    const calculation = a * b;
    if (this.props.values.payment === 'yes') {
      return calculation - (calculation / 100) * 10;
    } else {
      return calculation;
    }
  };

  render() {
    const { handleChange, prevStep, handleSubmit } = this.props;
    const {
      values: {
        duration,
        amountGigas,
        payment,
        lName,
        fName,
        email,
        streetAddress,
        cardNumber,
        cardExpDate,
        cardSecCode,
        acceptedAgreement
      }
    } = this.props;

    return (
      <Fragment>
        <div className='card'>
          <div className='card__list-container'>
            <h2>Confirmation</h2>
            <ul className='card__list'>
              <li>Duration: {duration} </li>
              <li>Gigabytes: {amountGigas} </li>
              <li>First Name: {fName} </li>
              <li>Last Name: {lName} </li>
              <li>Email: {email} </li>
              <li>Street: {streetAddress} </li>
              <li>Card Number {cardNumber} </li>
              <li>Card Exp {cardExpDate} </li>
              <li>CVV {cardSecCode} </li>
              <li>Upfront payment: {payment} </li>
              <li>Total: ${this.total(duration, 2)}</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            {/* <div className='terms'>
              <label>
                To continue, you must agree to the CloudStorage Terms of Service
                and Privacy Policy.{' '}
              </label>
              <input
                name='acceptedAgreement'
                type='checkbox'
                checked={acceptedAgreement}
                onChange={handleChange}
              />
            </div> */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={acceptedAgreement}
                  onChange={handleChange}
                  value='checkedB'
                  color='primary'
                />
              }
              label='Terms of service Agreement.'
            />
            <div className='form__btns'>
              <Button variant='contained' type='button' onClick={prevStep}>
                Back
              </Button>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                disabled={!acceptedAgreement}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Confirmation;
