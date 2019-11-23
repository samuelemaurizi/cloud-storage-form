import React, { Component } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

export class MainForm extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    street: ''
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
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, cardNumber, street } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      cardNumber,
      street
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
          />
        );
      default:
        return <h1>Success</h1>;
    }
  }
}

export default MainForm;
