import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './styles.scss';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  const LOADING_MESSAGE = 'Loading...';
  const ERROR_MESSAGE = 'Error getting data from server, please try again later...';

  return (
    <Router>
      <div className="app__container" data-testid="app">
        ...
      </div>
    </Router>
  );
};

export default App;
