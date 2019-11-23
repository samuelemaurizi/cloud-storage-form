import React, { Component, Fragment } from 'react';

export class SubscriptionForm extends Component {
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
        <h3>Step Two</h3>
        <div>
          <label htmlFor='lName'>Last Name</label>
          <input
            name='lName'
            type='text'
            placeholder='Last Name'
            value={values.lName}
            onChange={handleChange}
          />
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

export default SubscriptionForm;
