/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';

import { ItemsContext } from '../../api/context/itemContext';
import ItemDetailsShort from '../ItemDetailsShort';

import './styles.scss';

const Item = ({ itemData, setShowModal }) => {
  const { itemDetails } = useContext(ItemsContext);
  const { image_url: imageUrl, name, tagline, ibu, target_og: targetOg, abv } = itemData;

  const showBeerInformatinModal = () => {
    itemDetails(itemData);
    setShowModal(true);
  };

  return (
    <div className="item" data-testid="item">
      <img src={imageUrl} alt={name} />
      <div className="item__details">
        <div className="item__name">{name}</div>
        <ItemDetailsShort {...{ ibu, targetOg, abv }} />
        <div className="item__tagline">{tagline}</div>
        <button className="button" type="button" onClick={() => showBeerInformatinModal()}>Beer Detail</button>
      </div>
    </div>
  );
};

export default Item;
