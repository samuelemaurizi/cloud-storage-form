import React, { Component, Fragment } from 'react';
import { TextField, Button } from '@material-ui/core';

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
        <form className='form__container' noValidate>
          <h2>Credit Card Data</h2>
          <div className='form__container-userdata'>
            <div className='text-field'>
              <TextField
                id='standard-basic'
                label='Card Number'
                name='cardNumber'
                type='number'
                value={values.cardNumber}
                onChange={handleChange}
              />
              <p>
                <small>{values.cardNumberError}</small>
              </p>
            </div>
            <div className='text-field'>
              <TextField
                id='date'
                label='Card Expires'
                name='cardExpDate'
                type='date'
                value={values.cardExpDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <p>
                <small>{values.cardExpDateError}</small>
              </p>
            </div>
            <div className='text-field'>
              <TextField
                id='standard-basic'
                label='CVV'
                name='cardSecCode'
                type='number'
                value={values.cardSecCode}
                onChange={handleChange}
              />
              <p>
                <small>{values.cardSecCodeError}</small>
              </p>
            </div>
          </div>
          <div className='form__btns'>
            <Button variant='contained' type='button' onClick={prevStep}>
              Back
            </Button>
            <Button
              variant='contained'
              color='primary'
              type='button'
              onClick={nextStep}
            >
              Next
            </Button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default CardForm;
