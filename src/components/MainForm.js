import React, { Component } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

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
    termsAgreement: false
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
    const { name, value } = e.target;
    const {
      subscriptionParams,
      userData,
      cardData,
      termsAgreement
    } = this.state;
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
      termsAgreement
    });
  };

  render() {
    const { step } = this.state;
    const { termsAgreement } = this.state;
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
      termsAgreement
    };

    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Step2
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Step3
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Step4
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            checked={termsAgreement}
          />
        );
      default:
        return <h1>Success</h1>;
    }
  }
}

export default MainForm;
