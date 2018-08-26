import { combineReducers } from 'redux';
import * as Actions from '../Actions';

const initialState = {
  formLayout: 'DefaultForm',
  requiredFieldsQueryParams: '',
  optionalFieldsQueryParams: '',
  espVarStyle: '%%VARIABLE%%',
  linksOutput: '',
  htmlOutput: ''
};

const changeTemplate = (state = initialState, action) => {
  if (action.type === 'CHANGE_LAYOUT') {
    return {
      ...state,
      formLayout: action.value
    };
  }
  return state;
};

const updateRequiredParams = (state = initialState, action) => {
  if (action.type === 'UPDATE_REQUIRED_PARAMS') {
    return {
      ...state,
      requiredFieldsQueryParams: action.value
    };
  }
  return state;
};

const updateOptionalParams = (state = initialState, action) => {
  if (action.type === 'UPDATE_OPTIONAL_PARAMS') {
    return {
      ...state,
      optionalFieldsQueryParams: action.value
    };
  }
  return state;
};

const updateEspVarStyle = (state = initialState, action) => {
  if (action.type === 'UPDATE_ESPVAR_STYLE') {
    return {
      ...state,
      espVarStyle: action.value
    };
  }
  return state;
};

const updateLinksOutput = (state = initialState, action) => {
  if (action.type === 'UPDATE_LINKS_OUTPUT') {
    return {
      ...state,
      linksOutput: action.value
    };
  }
  return state;
};

const updateHtmlOutput = (state = initialState, action) => {
  if (action.type === 'UPDATE_HTML_OUTPUT') {
    return {
      ...state,
      htmlOutput: action.value
    };
  }
  return state;
};

const rootReducer = combineReducers({
  changeTemplate,
  updateRequiredParams,
  updateEspVarStyle,
  updateOptionalParams,
  updateLinksOutput,
  updateHtmlOutput
});

export default rootReducer;
