import React from 'react';
import { Alert } from 'reactstrap';

const AlertComponent = props => (
  <Alert id={props.id} color={props.color}>
    {props.results}
  </Alert>
);

export default AlertComponent;
