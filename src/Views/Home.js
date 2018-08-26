import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    changePage: () => dispatch(push('/about'))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Home);
