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
        <div>
          <label>Duration</label>
          <select value={values.duration} onChange={handleChange}>
            <option value='3'>3</option>
            <option value='6'>6</option>
            <option value='12'>12</option>
          </select>
        </div>
        <div>
          <label>Gigabytes</label>
          <select value={values.amountGigas} onChange={handleChange}>
            <option value='3'>3</option>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='30'>30</option>
            <option value='50'>50</option>
          </select>
        </div>
        <div>
          <label>Upfront Payment</label>
          <select value={values.payment} onChange={handleChange}>
            <option value='no'>No</option>
            <option value='yes'>Yes</option>
          </select>
        </div>
        <button type='button' onClick={nextStep}>
          Next
        </button>
      </Fragment>
    );
  }
}

export default SubscriptionForm;
