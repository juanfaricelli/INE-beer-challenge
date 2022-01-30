/* eslint-disable object-curly-newline */
import React from 'react';

import './styles.scss';
import mockData from './item.json';

import ItemDetailsShort from '../ItemDetailsShort';

const Item = () => {
  const { image_url: imageUrl, name, tagline, ibu, target_og: targetOg, abv } = mockData;

  return (
    <div className="item" data-testid="item">
      <img src={imageUrl} alt={name} />
      <div className="item__details">
        <div className="item__name">{name}</div>
        <ItemDetailsShort {...{ ibu, targetOg, abv }} />
        <div className="item__tagline">{tagline}</div>
        <div className="button">Beer Detail</div>
      </div>
    </div>
  );
};

export default Item;
