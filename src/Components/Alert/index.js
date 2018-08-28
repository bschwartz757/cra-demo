import React from 'react';
import { Alert } from 'reactstrap';

const AlertComponent = props => {
  let alerts = [];

  for (let [k, v] of Object.entries(props)) {
    if (v) {
      alerts.push(
        <Alert color={v && k === v ? 'success' : 'danger'} key={k}>
          <p>{`You answered: ${v}. The question was: which letter is ${k}?`}</p>
        </Alert>
      );
    }
  }

  return (
    <div>
      {alerts.length ? (
        <Alert color="light" className="text-center">
          <h1>Quiz Results</h1>
          {alerts}
        </Alert>
      ) : (
        ''
      )}
    </div>
  );
};

export default AlertComponent;
