import React, { Component, Fragment } from 'react';

export class SubscriptionForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, nextStep } = this.props;

    return (
      <Fragment>
        <h3>Step One</h3>
        <label htmlFor='firstName'>First Name</label>
        <input
          name='firstName'
          type='text'
          placeholder='John'
          value={values.firstName}
          onChange={handleChange}
        />
        <label htmlFor='lastNae'>Last Name</label>
        <input
          name='lastName'
          type='text'
          placeholder='Doe'
          value={values.lastName}
          onChange={handleChange}
        />
        <button type='button' onClick={nextStep}>
          Next
        </button>
      </Fragment>
    );
  }
}

export default SubscriptionForm;
