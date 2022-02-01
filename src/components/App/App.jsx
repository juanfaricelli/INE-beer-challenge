import React, { useState, useEffect } from 'react';

import BeersAPI from '../../api/beersApi';
import Header from '../Header';
import SortingBar from '../SortingBar';
import ItemsContainer from '../ItemsContainer';
import ItemsProvider from '../../api/context/itemContext';

import './styles.scss';

const App = () => {
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    BeersAPI.getAllBeers()
      .then((res) => {
        setItemsList(res);
      })
      .catch((error) => {
        console.log(`BeersAPI.getAllBeers Request Failed. ERROR: ${JSON.stringify(error)}`);
      });
  }, []);

  return (
    <ItemsProvider>
      <div className="app__container" data-testid="app">
        <Header />
        <SortingBar collection={itemsList}/>
        <ItemsContainer itemList={itemsList} />
      </div>
    </ItemsProvider>
  );
};

export default App;
