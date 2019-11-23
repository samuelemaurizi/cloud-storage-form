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
        <label htmlFor='email'>email</label>
        <input
          name='email'
          type='text'
          placeholder='email'
          value={values.email}
          onChange={handleChange}
        />
        <input
          name='street'
          type='text'
          placeholder='Street'
          value={values.street}
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

export default SubscriptionForm;
