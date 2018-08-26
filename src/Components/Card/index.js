import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const CardComponent = props => (
  <Card body className="text-center">
    <CardTitle>{props.title}</CardTitle>
    <CardText tag={'div'}>{props.children}</CardText>
  </Card>
);

export default CardComponent;
