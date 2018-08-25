import React, { Component } from 'react';
import './App.css';

import Main from './Layout/Main';
import NavComponent from './Layout/NavComponent';

class App extends Component {
  render() {
    return (
      <React.Fragment>
		<NavComponent />
		<main>
			<Main />
		</main>
      </React.Fragment>
    );
  }
}

export default App;
