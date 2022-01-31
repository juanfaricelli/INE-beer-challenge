import React, { useState, useEffect } from 'react';

import BeersAPI from '../../api/beersApi';
import Header from '../Header';
import ItemsContainer from '../ItemsContainer';
import ItemsProvider from '../../api/context/itemContext';

import './styles.scss';

const App = () => {
  const [beersList, setBeersList] = useState([]);

  useEffect(() => {
    BeersAPI.getAllBeers()
      .then((res) => {
        setBeersList(res);
      })
      .catch((error) => {
        console.log(`BeersAPI.getAllBeers Request Failed. ERROR: ${JSON.stringify(error)}`);
      });
  }, []);

  return (
    <ItemsProvider>
      <div className="app__container" data-testid="app">
        <Header />
        <ItemsContainer itemList={beersList} />
      </div>
    </ItemsProvider>
  );
};

export default App;
