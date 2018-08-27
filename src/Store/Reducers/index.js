import { combineReducers } from 'redux';
import * as Actions from '../Actions';

const initialState = {
  tests: []
};

const updateTestAnswer = (state = initialState, action) => {
  if (action.type === 'UPDATE_TEST_ANSWER') {
    return {
      ...state,
      tests: action.value
    };
  }
  return state;
};

const rootReducer = combineReducers({
  updateTestAnswer
});

export default rootReducer;
