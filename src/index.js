import React from 'react';
import { render } from 'react-dom';
// import { ConnectedRouter } from 'connected-react-router';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import createHistory from 'history/createBrowserHistory';
// FontAwesome - svg icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
// Reactstrap doesn't include Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// This adds all icons from the free-solid set, so we can use them anywhere in the app
library.add(fas, fab);
// Make store & router history available
// const history = createHistory();

// render(
//     <ConnectedRouter history={history}>
//       <div>
//         <App />
//       </div>
//     </ConnectedRouter>,
//   document.getElementById('root')
// );

render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
