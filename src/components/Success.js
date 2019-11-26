import React from 'react';
import bravoGif from '../img/unnamed.gif';

const Success = () => {
  return (
    <div className='card__success'>
      <img src={bravoGif} alt='bravo gif' />
      <h1>Your form has been successfully submitted</h1>
    </div>
  );
};

export default Success;
