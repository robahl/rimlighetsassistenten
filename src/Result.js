import React from 'react';

function Result(props) {
  let message = '';

  if (props.rimligLon) {
    message = 'Lönen är rimlig';
  } else if (props.rimligLon === null) {
    message = 'Fyll i alla fält';
  } else {
    message = 'Lönen är helt orimlig';
  }

  return <p>{message}</p>;
}

export default Result;
