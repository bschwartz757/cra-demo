import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form } from 'reactstrap';

import CardComponent from '../Card';
import ButtonComponent from '../Button';
import InputComponent from './FormInput';

class FormComponent extends Component {
  // keep track of selected checkboxes as "local state." We can use this
  // to update the global state (managed by Redux) on button click. That
  // allows us to update the Alert component programmatically.
  state = {
    A: '',
    B: '',
    C: ''
  };

  updateSelected = obj => {
    if (obj.checked) {
      const clone = { ...this.state };
      clone[obj.ref] = obj.value;
      this.setState(clone);
    }
  };

  render() {
    const cards = this.props.questions.map((prop, index) => {
      return (
        <CardComponent columns={'col-4'} key={index} title={prop.question}>
          {prop.options.map((el, idx) => {
            return (
              <InputComponent
                key={idx}
                text={el}
                data={{ ref: prop.answer, value: el }}
                change={event => {
                  this.updateSelected({
                    ref: event.target.dataset.ref,
                    value: event.target.dataset.value,
                    checked: event.target.checked
                  });
                }}
              />
            );
          })}
          <ButtonComponent
            click={event => {
              this.props.updateTestAnswer(this.state);
            }}
          />
        </CardComponent>
      );
    });

    return <Form className="d-flex">{cards}</Form>;
  }
}

const mapStateToProps = state => {
  return {
    tests: state.updateTestAnswer.tests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTestAnswer: obj => {
      dispatch({
        type: 'UPDATE_TEST_ANSWER',
        value: obj
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);
