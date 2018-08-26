import React from 'react';
import { Row, Col } from 'reactstrap';

import TableComponent from '../Components/Table';

import { data1, data2 } from '../data';

const DataPage = () => {
  // console.log('data1: ', data1)
  // console.log('data2: ', data2)

  return (
    <React.Fragment>
      <section>
        <Row>
          <Col xs="12">
            <TableComponent {...data1} />
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          <Col xs="12">
            <TableComponent {...data2} />
          </Col>
        </Row>
      </section>
    </React.Fragment>
  );
};

export default DataPage;
