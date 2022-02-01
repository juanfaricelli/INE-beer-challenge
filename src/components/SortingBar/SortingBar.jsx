import React from 'react';

import SortingButton from '../SortingButton';

import './styles.scss';

const SortingBar = () => (
  <div className="sorting-bar__container">
    <SortingButton label="Sort By Name" sortBy="name" />
    <SortingButton label="Sort By IBU" sortBy="ibu" />
    <SortingButton label="Sort By ABV" sortBy="abv" />
  </div>
);

export default SortingBar;
