export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';
export const UPDATE_REQUIRED_PARAMS = 'UPDATE_REQUIRED_PARAMS';
export const UPDATE_OPTIONAL_PARAMS = 'UPDATE_OPTIONAL_PARAMS';
export const UPDATE_ESPVAR_STYLE = 'UPDATE_ESPVAR_STYLE';
export const UPDATE_LINKS_OUTPUT = 'UPDATE_LINKS_OUTPUT';
export const UPDATE_HTML_OUTPUT = 'UPDATE_HTML_OUTPUT';

export const changeTemplate = formLayout => ({
  type: CHANGE_LAYOUT,
  formLayout
});

export const updateRequiredParams = params => ({
  type: UPDATE_REQUIRED_PARAMS,
  params
});

export const updateOptionalParams = params => ({
  type: UPDATE_OPTIONAL_PARAMS,
  params
});

export const updateEspVarStyle = params => ({
  type: UPDATE_ESPVAR_STYLE,
  params
});

export const updateLinksOutput = params => ({
  type: UPDATE_LINKS_OUTPUT,
  params
});

export const updateHtmlOutput = params => ({
  type: UPDATE_HTML_OUTPUT,
  params
});
