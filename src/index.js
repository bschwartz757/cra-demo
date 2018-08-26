import React from 'react';
import { render } from 'react-dom';
// Set up Redux & React-Router
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
// FontAwesome - svg icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import registerServiceWorker from './registerServiceWorker';
// Reactstrap doesn't include Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// Make store & router history available
import createStore, { history } from './Store/CreateStore';
import './index.css';
import App from './App';
// This adds all icons from the free-solid set, so we can use them anywhere in the app
library.add(fas, fab);

render(
  <Provider store={createStore}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
