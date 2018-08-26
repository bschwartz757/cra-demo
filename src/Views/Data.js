import React from 'react';
import { Row, Col } from 'reactstrap';

import TableComponent from '../Components/Table';

import { data1, data2 } from '../data';

const Data = () => (
  <section>
    <Row>
      <Col xs="6">
        <TableComponent {...data1} />
      </Col>
      <Col xs="6">
        <TableComponent {...data2} />
      </Col>
    </Row>
  </section>
);

export default Data;
