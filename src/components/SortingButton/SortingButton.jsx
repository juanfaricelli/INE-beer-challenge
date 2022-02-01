import React, { useState, useContext } from 'react';
import { string } from 'prop-types';

import { ItemsContext } from '../../api/context/itemContext';

import './styles.scss';

const SortingButton = ({ label, sortBy }) => {
  const { itemsCollectionObj, itemsCollection } = useContext(ItemsContext);
  const [isAsc, setIsAsc] = useState(false);

  const sortClickHandler = () => {
    itemsCollection(itemsCollectionObj.sort((objA, objB) => {
      const objAValue = objA[sortBy];
      const objBValue = objB[sortBy];
      if (isAsc) {
        // DESC
        if (objAValue < objBValue) return 1;
        if (objAValue > objBValue) return -1;
        return 0;
      }
      // ASC
      if (objAValue > objBValue) return 1;
      if (objAValue < objBValue) return -1;
      return 0;
    }));
    setIsAsc(!isAsc);
  };

  return (
    <div className="sorting-button__container" data-testid="sorting-button">
      <button type="button" onClick={() => sortClickHandler()}>
        <span className="sorting-button__label">{label}</span>
        <span className="sorting-button__direction">{isAsc ? '▲' : '▼'}</span>
      </button>
    </div>
  );
};

SortingButton.propTypes = {
  label: string.isRequired,
  sortBy: string.isRequired,
};

export default SortingButton;
