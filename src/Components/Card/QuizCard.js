import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const CardComponent = props => {
  const classes = props.columns
    ? `${props.columns} text-center`
    : 'text-center';

  return (
    <Card body className={classes}>
      <CardTitle>{props.title}</CardTitle>
      <CardText tag={'div'}>{props.children}</CardText>
    </Card>
  );
};

export default CardComponent;
