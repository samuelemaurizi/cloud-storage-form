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
        <form>
          <div className='input-field'>
            <label>Duration</label>
            <select
              name='duration'
              value={values.duration}
              onChange={handleChange}
            >
              <option value='3'>3</option>
              <option value='6'>6</option>
              <option value='12'>12</option>
            </select>
          </div>
          <div>
            <label>Gigabytes</label>
            <select
              name='amountGigas'
              value={values.amountGigas}
              onChange={handleChange}
            >
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
            <select
              name='payment'
              value={values.payment}
              onChange={handleChange}
            >
              <option value='no'>No</option>
              <option value='yes'>Yes</option>
            </select>
          </div>
          <button
            className='waves-effect waves-light btn'
            type='button'
            onClick={nextStep}
          >
            Next
          </button>
        </form>
      </Fragment>
    );
  }
}

export default SubscriptionForm;
