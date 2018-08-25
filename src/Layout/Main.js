import React, { Component } from 'react';

import { Container, Col } from 'reactstrap';

class Main extends Component {
  state = {

  };

  render() {
    return (
      <Container
        fluid
        className="clearfix"
        style={{
          marginTop: '5rem'
        }}
      >
        <Col xs="12" lg="6" className="float-left">
          <div
            className="float-right d-flex align-items-baseline"
            style={{
              width: '25%'
            }}
          >

          </div>

        </Col>
        <Col
          xs="12"
          lg="6"
          className="align-self-start float-right"
          style={{
            position: 'sticky',
            top: '5rem',
            zIndex: 1020
          }}
        >
        </Col>
	  </Container>
    );
  }
}

export default Main;
