import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

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
      <Container>
        <Form>
          <h3>Credit Card Data</h3>
          <Form.Group>
            <label htmlFor='cardNumber'>Card Number</label>
            <Form.Control
              name='cardNumber'
              type='number'
              placeholder='Card Number'
              value={values.cardNumber}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor='cardExpDate'>Card Expiration Date</label>
            <Form.Control
              name='cardExpDate'
              type='date'
              placeholder='dd/mm/yyyy'
              value={values.cardExpDate}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor='cardSecCode'>Card Security</label>
            <Form.Control
              name='cardSecCode'
              type='number'
              placeholder='CVV'
              value={values.cardSecCode}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant='light' type='button' onClick={prevStep}>
            Back
          </Button>
          <Button variant='primary' type='button' onClick={nextStep}>
            Next
          </Button>
        </Form>
      </Container>
    );
  }
}

export default CardForm;
