import React, { Component } from 'react';
import axios from 'axios';

import SubscriptionForm from './SubscriptionForm';
import UserForm from './UserForm';
import CardForm from './CardForm';
import Confirmation from './Confirmation';

export class MainForm extends Component {
  state = {
    step: 1,
    subscriptionParams: {
      duration: 12,
      amountGigas: 5,
      payment: 'no'
    },
    userData: {
      lName: '',
      fName: '',
      email: '',
      streetAddress: ''
    },
    cardData: {
      cardNumber: '',
      cardExpDate: '',
      cardSecCode: ''
    },
    acceptedAgreement: false
  };

  // Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Prev Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Field Change
  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };
  handleChange = e => {
    const acceptedAgreement = e.target.checked;
    const { name, value } = e.target;
    const { subscriptionParams, userData, cardData } = this.state;
    this.setState({
      subscriptionParams: {
        ...subscriptionParams,
        [name]: value
      },
      userData: {
        ...userData,
        [name]: value
      },
      cardData: {
        ...cardData,
        [name]: value
      },
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
    } = this.state.subscriptionParams;

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
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    const { step } = this.state;
    const { acceptedAgreement } = this.state;
    const { duration, amountGigas, payment } = this.state.subscriptionParams;
    const { lName, fName, email, streetAddress } = this.state.userData;
    const { cardNumber, cardExpDate, cardSecCode } = this.state.cardData;
    const values = {
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
      default:
        return <h1>Success</h1>;
    }
  }
}

export default MainForm;
