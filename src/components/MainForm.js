import React, { Component } from 'react';
import axios from 'axios';

import SubscriptionForm from './SubscriptionForm';
import UserForm from './UserForm';
import CardForm from './CardForm';
import Confirmation from './Confirmation';
import Success from './Success';
import ErrorPage from './ErrorPage';

export class MainForm extends Component {
  state = {
    step: 1,
    duration: 12,
    amountGigas: 5,
    payment: 'no',
    lName: '',
    lNameError: '',
    fName: '',
    fNameError: '',
    email: '',
    emailError: '',
    streetAddress: '',
    streetAddressError: '',
    cardNumber: '',
    cardNumberError: '',
    cardExpDate: '',
    cardExpDateError: '',
    cardSecCode: '',
    cardSecCodeError: '',
    acceptedAgreement: false
  };

  // Validate
  validate = () => {
    let isError = false;
    const errors = {
      lNameError: '',
      fNameError: '',
      emailError: '',
      streetAddressError: '',
      cardNumberError: '',
      cardExpDateError: '',
      cardSecCodeError: ''
    };

    const {
      step,
      lName,
      fName,
      email,
      streetAddress,
      cardNumber,
      cardExpDate,
      cardSecCode
    } = this.state;

    if (step > 1) {
      if (lName.length < 1) {
        isError = true;
        errors.lNameError = 'Last name is required';
      }
      if (fName.length < 1) {
        isError = true;
        errors.fNameError = 'First name is required';
      }
      if (email.length < 1) {
        isError = true;
        errors.emailError = 'Email is required';
      }
      if (streetAddress.length < 1) {
        isError = true;
        errors.streetAddressError = 'Street is required';
      }
    }

    if (step > 2) {
      if (cardNumber.length < 1) {
        isError = true;
        errors.cardNumberError = 'Card number is required';
      }
      if (cardExpDate.length < 1) {
        isError = true;
        errors.cardExpDateError = 'Expiration date is required';
      }
      if (cardSecCode.length < 1) {
        isError = true;
        errors.cardSecCodeError = 'CVV is required';
      }
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  // Next Step
  nextStep = () => {
    const err = this.validate();
    const { step } = this.state;
    if (!err) {
      this.setState({
        step: step + 1,
        lNameError: '',
        fNameError: '',
        emailError: '',
        streetAddressError: '',
        cardNumberError: '',
        cardExpDateError: '',
        cardSecCodeError: ''
      });
    }
  };

  // Prev Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Success Step
  successStep = res => {
    console.log(res);
    this.setState({
      step: 5
    });
  };

  // Submission Error Step
  errorStep = err => {
    console.log(err);
    this.setState({
      step: 6
    });
  };

  handleChange = e => {
    const acceptedAgreement = e.target.checked;
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      acceptedAgreement
    });
  };

  // On Submit
  handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted!');
    const {
      duration,
      amountGigas,
      payment,
      lName,
      fName,
      email,
      streetAddress,
      cardNumber,
      cardExpDate,
      cardSecCode
    } = this.state;

    axios
      .post('http://httpbin.org/post', {
        duration,
        amountGigas,
        payment,
        lName,
        fName,
        email,
        streetAddress,
        cardNumber,
        cardExpDate,
        cardSecCode
      })
      .then(res => {
        this.successStep(res);
      })
      .catch(err => {
        this.errorStep(err);
      });
  };

  render() {
    const { step } = this.state;
    const { acceptedAgreement } = this.state;
    const {
      duration,
      amountGigas,
      payment,
      lName,
      lNameError,
      fName,
      fNameError,
      email,
      emailError,
      streetAddress,
      streetAddressError,
      cardNumber,
      cardNumberError,
      cardExpDate,
      cardExpDateError,
      cardSecCode,
      cardSecCodeError
    } = this.state;

    const values = {
      duration,
      amountGigas,
      payment,
      lName,
      lNameError,
      fName,
      fNameError,
      email,
      emailError,
      streetAddress,
      streetAddressError,
      cardNumber,
      cardNumberError,
      cardExpDate,
      cardExpDateError,
      cardSecCode,
      cardSecCodeError,
      acceptedAgreement
    };

    switch (step) {
      case 1:
        return (
          <SubscriptionForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserForm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <CardForm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirmation
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            checked={acceptedAgreement}
            handleSubmit={this.handleSubmit}
          />
        );
      case 5:
        return <Success />;
      case 6:
        return <ErrorPage prevStep={this.prevStep} />;
      default:
        return null;
    }
  }
}

export default MainForm;
