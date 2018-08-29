import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const InputComponent = props => (
  <FormGroup check>
    <Label check>
      <Input
        type="checkbox"
        data-ref={props.data.ref}
        data-value={props.data.value}
        onChange={props.change}
      />
      {props.text}
    </Label>
  </FormGroup>
);

export default InputComponent;
