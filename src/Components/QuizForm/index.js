import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import CardComponent from '../Card';
import ButtonComponent from '../Button';

const FormComponent = props => {
  const cards = props.questions.map((prop, index) => {
    const inputs = prop.options.map((el, idx) => {
      return (
        <FormGroup key={idx} check>
          <Label check>
            <Input type="checkbox" />
            {el}
          </Label>
        </FormGroup>
      );
    });

    return (
      <CardComponent columns={'col-4'} key={index} title={prop.question}>
        {inputs}
        <ButtonComponent />
      </CardComponent>
    );
  });

  return <Form className="d-flex">{cards}</Form>;
};

export default FormComponent;
