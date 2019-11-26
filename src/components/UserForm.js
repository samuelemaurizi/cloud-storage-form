import React, { Component, Fragment } from 'react';

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
        <form>
          <h3>User Data</h3>
          <div>
            <label htmlFor='lName'>Last Name</label>
            <input
              name='lName'
              type='text'
              placeholder='Last Name'
              value={values.lName}
              onChange={handleChange}
            />
            <span>
              <small>{values.lNameError}</small>
            </span>
          </div>
          <div>
            <label htmlFor='fName'>First Name</label>
            <input
              name='fName'
              type='text'
              placeholder='First Name'
              value={values.fName}
              onChange={handleChange}
            />
            <span>
              <small>{values.fNameError}</small>
            </span>
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='email'
              placeholder='email'
              value={values.email}
              onChange={handleChange}
            />
            <span>
              <small>{values.emailError}</small>
            </span>
          </div>
          <div>
            <label htmlFor='streetAddress'>Street Address</label>
            <input
              name='streetAddress'
              type='text'
              placeholder='street address'
              value={values.streetAddress}
              onChange={handleChange}
            />
            <span>
              <small>{values.streetAddressError}</small>
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

export default UserForm;
