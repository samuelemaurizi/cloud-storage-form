import React, { Component, Fragment } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@material-ui/core';

export class SubscriptionForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, nextStep } = this.props;

    return (
      <Fragment>
        <form className='form__container' noValidate>
          <h2>Select subscription parameters</h2>
          <div className='form__container-subsciption'>
            <FormControl>
              <InputLabel>Duration</InputLabel>
              <Select
                name='duration'
                value={values.duration}
                onChange={handleChange}
              >
                <MenuItem value='3'>3</MenuItem>
                <MenuItem value='6'>6</MenuItem>
                <MenuItem value='12'>12</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Gigabytes</InputLabel>
              <Select
                name='amountGigas'
                value={values.amountGigas}
                onChange={handleChange}
              >
                <MenuItem value='3'>3</MenuItem>
                <MenuItem value='5'>5</MenuItem>
                <MenuItem value='10'>10</MenuItem>
                <MenuItem value='20'>20</MenuItem>
                <MenuItem value='30'>30</MenuItem>
                <MenuItem value='50'>50</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Prepayment</InputLabel>
              <Select
                name='payment'
                value={values.payment}
                onChange={handleChange}
              >
                <MenuItem value='no'>No</MenuItem>
                <MenuItem value='yes'>Yes</MenuItem>
              </Select>
            </FormControl>
          </div>
          <p className='txt-discount'>
            <small>Get a 10% discount when paying upfront</small>
          </p>

          <Button
            variant='contained'
            color='primary'
            type='button'
            onClick={nextStep}
          >
            Next
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default SubscriptionForm;
