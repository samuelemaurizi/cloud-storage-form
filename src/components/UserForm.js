import React, { Component, Fragment } from 'react';
import { TextField, Button } from '@material-ui/core';

export class UserForm extends Component {
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
        <form noValidate>
          <h2>User Data</h2>
          <div className='form__container-userdata'>
            <div className='text-field'>
              <TextField
                id='standard-basic'
                label='Last Name'
                name='lName'
                type='text'
                value={values.lName}
                onChange={handleChange}
              />
              <p>
                <small>{values.lNameError}</small>
              </p>
            </div>
            <div className='text-field'>
              <TextField
                id='standard-basic'
                label='First Name'
                name='fName'
                type='text'
                value={values.fName}
                onChange={handleChange}
              />
              <p>
                <small>{values.fNameError}</small>
              </p>
            </div>
            <div className='text-field'>
              <TextField
                id='standard-basic'
                label='Email Name'
                name='email'
                type='email'
                value={values.email}
                onChange={handleChange}
              />
              <p>
                <small>{values.emailError}</small>
              </p>
            </div>
            <div className='text-field'>
              <TextField
                id='standard-basic'
                label='Street Address'
                name='streetAddress'
                type='text'
                placeholder='street address'
                value={values.streetAddress}
                onChange={handleChange}
              />
              <p>
                <small>{values.streetAddressError}</small>
              </p>
            </div>
          </div>
          <div className='form__btns'>
            <Button
              variant='contained'
              color='light'
              type='button'
              onClick={prevStep}
            >
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

export default UserForm;
