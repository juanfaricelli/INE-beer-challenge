import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './styles.scss';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  const API_URL = 'https://app.fakejson.com/q';
  // const token = 'jH3uRHo3RB_Y543bo6WJvA';
  const LOADING_MESSAGE = 'Loading...';
  const ERROR_MESSAGE = 'Error getting data from server, please try again later...';

  const HomePage = () => (
    <h3>
      INE Beer Challenge 🍺
    </h3>
  );

  return (
    <Router>
      <div className="app__container" data-testid="app">
        <h1>
          ⭐ Create React App Without CRA ⭐
        </h1>
        <Route path="/" render={HomePage} />
      </div>
    </Router>
  );
};

export default App;
