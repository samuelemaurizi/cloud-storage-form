import React from 'react';

const ErrorPage = () => {
  const { prevStep } = this.props;

  return (
    <div>
      <h1>Something went wrong :(</h1>
      <button variant='light' type='button' onClick={prevStep}>
        Back
      </button>
    </div>
  );
};

export default ErrorPage;
