import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form } from 'reactstrap';

import CardComponent from '../Card';
import ButtonComponent from '../Button';
import InputComponent from './FormInput';

class FormComponent extends Component {
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
    console.log('state: ', this.state);

    // const FormComponent = props => {
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
            data={prop.answer}
            click={event => {
              this.props.updateTestAnswer(
                Object.assign({}, this.state, {
                  buttonRef: event.target.dataset.quiz
                })
              );
            }}
          />
        </CardComponent>
      );
    });

    return <Form className="d-flex">{cards}</Form>;
  }
}

const mapStateToProps = state => {
  console.log('state: ', state);
  return {
    tests: state.updateTestAnswer.tests
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTestAnswer: obj => {
      console.log('update: ', obj);
      dispatch({
        type: 'UPDATE_REQUIRED_PARAMS',
        value: obj
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent);
