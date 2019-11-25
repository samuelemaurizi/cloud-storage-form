import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export class Confirmation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  total = (a, b) => {
    const calculation = a * b;
    if (this.props.values.payment === 'yes') {
      return calculation - (calculation / 100) * 10;
    } else {
      return calculation;
    }
  };

  render() {
    const { handleChange, prevStep, handleSubmit } = this.props;
    const {
      values: {
        duration,
        amountGigas,
        payment,
        lName,
        fName,
        email,
        streetAddress,
        cardNumber,
        cardExpDate,
        cardSecCode,
        acceptedAgreement
      }
    } = this.props;

    return (
      <Container>
        <h3>Confirmation</h3>
        <ul>
          <li>Duration: {duration} </li>
          <li>Gigabytes: {amountGigas} </li>
          <li>First Name: {fName} </li>
          <li>Last Name: {lName} </li>
          <li>Email: {email} </li>
          <li>Street: {streetAddress} </li>
          <li>Card Number {cardNumber} </li>
          <li>Card Exp {cardExpDate} </li>
          <li>CVV {cardSecCode} </li>
          <li>Upfront payment: {payment} </li>
          <li>Total: {this.total(duration, 2)} $</li>
        </ul>
        <Form onSubmit={handleSubmit}>
          <div>
            <label>
              To continue, you must agree to the CloudStorage Terms of Service
              and Privacy Policy.{' '}
            </label>
            <input
              name='acceptedAgreement'
              type='checkbox'
              checked={acceptedAgreement}
              onChange={handleChange}
            />
          </div>
          <Button variant='light' type='button' onClick={prevStep}>
            Back
          </Button>
          <Button variant='primary' type='submit' disabled={!acceptedAgreement}>
            Send
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Confirmation;
