import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'reactstrap';

const ButtonComponent = props => {
  return (
    <Button
      className="mt-3"
      onClick={props.click}
      outline
      color="info"
      data-quiz={props.data}
    >
      <FontAwesomeIcon icon={['fas', 'check']} className="mr-2" />
      Submit!
    </Button>
  );
};

export default ButtonComponent;
