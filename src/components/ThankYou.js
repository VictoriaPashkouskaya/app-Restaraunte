import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  const { name, date, time } = location.state || {};

  return (
    <div>
      <h1>Thank you for your reservation, {name}!</h1>
      {date && time ? (
        <p>Your table has been reserved for {date} at {time}.</p>
      ) : (
        <p>Sorry, we couldn't retrieve your reservation details.</p>
      )}
    </div>
  );
};

export default ThankYou;
