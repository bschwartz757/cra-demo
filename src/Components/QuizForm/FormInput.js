import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const InputComponent = props => {
  // console.log('props: ', props)

  return (
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
};

export default InputComponent;
