import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export class SubscriptionForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, nextStep } = this.props;

    return (
      <Container>
        <Form>
          <h3>Select subscription parameters</h3>
          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <select
              className='custom-select'
              name='duration'
              value={values.duration}
              onChange={handleChange}
            >
              <option value='3'>3</option>
              <option value='6'>6</option>
              <option value='12'>12</option>
            </select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Gigabytes</Form.Label>
            <select
              className='custom-select'
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
          </Form.Group>
          <Form.Group>
            <Form.Label>Upfront Payment</Form.Label>
            <select
              className='custom-select'
              name='payment'
              value={values.payment}
              onChange={handleChange}
            >
              <option value='no'>No</option>
              <option value='yes'>Yes</option>
            </select>
          </Form.Group>

          <Button
            variant='primary'
            className='mt-4'
            type='button'
            onClick={nextStep}
          >
            Next
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SubscriptionForm;
