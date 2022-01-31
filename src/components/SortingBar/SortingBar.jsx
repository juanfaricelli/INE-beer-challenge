import React, { useState, useEffect, useContext } from 'react';

import { ItemsContext } from '../../api/context/itemContext';

import './styles.scss';

const SortingBar = ({ collection, setItemList, setSortedList }) => {
  const { itemsCollection, itemsCollectionArr } = useContext(ItemsContext);
  const [sortedLetterAsc, setSortLetterAsc] = useState(false);
  const [sortedIbuAsc, setSortIbuAsc] = useState(false);
  const [sortedAbvAsc, setSortAbvAsc] = useState(false);

  const sortByIBUHandler = () => {
    setItemList(collection.sort((objA, objB) => {
      if (sortedIbuAsc) {
        // DESC
        if (objA.ibu < objB.ibu) {
          return 1;
        }
        if (objA.ibu > objB.ibu) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }
      // ASC
      if (objA.ibu > objB.ibu) {
        return 1;
      }
      if (objA.ibu < objB.ibu) {
        return -1;
      }
      // a must be equal to b
      return 0;
    }));
    setSortIbuAsc(!sortedIbuAsc);
    setSortedList(true);
  };

  const sortByLetterHandler = () => {
    setItemList(collection.sort((objA, objB) => {
      if (sortedLetterAsc) {
        // DESC
        if (objA.name < objB.name) {
          return 1;
        }
        if (objA.name > objB.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }
      // ASC
      if (objA.name > objB.name) {
        return 1;
      }
      if (objA.name < objB.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    }));
    setSortLetterAsc(!sortedLetterAsc);
    setSortedList(true);
  };

  const sortByAbvHandler = () => {
    setItemList(collection.sort((objA, objB) => {
      if (sortedAbvAsc) {
        // DESC
        if (objA.abv < objB.abv) {
          return 1;
        }
        if (objA.abv > objB.abv) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }
      // ASC
      if (objA.abv > objB.abv) {
        return 1;
      }
      if (objA.abv < objB.abv) {
        return -1;
      }
      // a must be equal to b
      return 0;
    }));
    setSortAbvAsc(!sortedAbvAsc);
    setSortedList(true);
  };

  return (
    <div className="sorting-bar__container">
      <button type="button" onClick={() => sortByLetterHandler()}>
        Sort By Letter
      </button> • 
      <button type="button" onClick={() => sortByIBUHandler()}>
        Sort By IBU
      </button> • 
      <button type="button" onClick={() => sortByAbvHandler()}>
        Sort By ABV
      </button>
    </div>
  );
};

export default SortingBar;
