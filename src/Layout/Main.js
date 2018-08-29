import React from 'react';
import { Route } from 'react-router-dom';

import { Container, Col } from 'reactstrap';

import HomePage from '../Views/Home';
import AboutPage from '../Views/About';
import DataPage from '../Views/Data';
import TestPage from '../Views/Test';

const Main = () => (
  <Container
    className="clearfix"
    style={{
      marginTop: '5rem'
    }}
  >
    <Col xs="12">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/data" component={DataPage} />
      <Route exact path="/test" component={TestPage} />
    </Col>
  </Container>
);

export default Main;
