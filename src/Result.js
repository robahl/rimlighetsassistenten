import React from 'react';
import './Result.scss';

function Result(props) {
  let message = '';
  let alertClass = 'alert-primary';

  if (props.rimligLon) {
    message = 'Lönen är rimlig';
    alertClass = 'alert-success';
  } else if (props.rimligLon === null) {
    message = 'Fyll i alla fält';
    alertClass = 'alert-primary';
  } else {
    message = 'Lönen är helt orimlig';
    alertClass = 'alert-danger';
  }

  return (
    <div className="Result row">
      <div className="col">
        <h4 className={'alert ' + alertClass}>{message}</h4>
      </div>
    </div>
  );
}

export default Result;
