import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export class UserForm extends Component {
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
          <h3>User Data</h3>
          <Form.Group>
            <label htmlFor='lName'>Last Name</label>
            <Form.Control
              name='lName'
              type='text'
              placeholder='Last Name'
              value={values.lName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor='fName'>First Name</label>
            <Form.Control
              name='fName'
              type='text'
              placeholder='First Name'
              value={values.fName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor='email'>Email</label>
            <Form.Control
              name='email'
              type='email'
              placeholder='email'
              value={values.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor='streetAddress'>Street Address</label>
            <Form.Control
              name='streetAddress'
              type='text'
              placeholder='street address'
              value={values.streetAddress}
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

export default UserForm;
