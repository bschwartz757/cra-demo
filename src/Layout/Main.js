import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Container, Col } from 'reactstrap';

import Home from '../Views/Home';
import About from '../Views/About';
import Data from '../Views/Data';
import Test from '../Views/Test';
class Main extends Component {
  state = {};

  render() {
    return (
      <Container
        className="clearfix"
        style={{
          marginTop: '5rem'
        }}
      >
        <Col xs="12">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/data" component={Data} />
          <Route exact path="/test" component={Test} />
        </Col>
      </Container>
    );
  }
}

export default Main;
