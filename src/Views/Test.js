import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import { test1 } from '../data';

import CardComponent from '../Components/Card';
import FormComponent from '../Components/QuizForm';
import AlertComponent from '../Components/Alert';

const TestPage = props => {
  let { title, ...rest } = test1;
  return (
    <React.Fragment>
      <section>
        <Row>
          <Col xs="12">
            <CardComponent title={title}>
              <FormComponent {...rest} />
            </CardComponent>
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          <Col xs="12">
            <AlertComponent {...props.tests} />
          </Col>
        </Row>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    tests: state.updateTestAnswer.tests
  };
};

export default connect(
  mapStateToProps,
  null
)(TestPage);
