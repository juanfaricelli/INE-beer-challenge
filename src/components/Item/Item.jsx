/* eslint-disable object-curly-newline */
import React, { useContext } from 'react';
import { oneOfType, string, number, shape, func } from 'prop-types';

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

Item.propTypes = {
  itemData: shape({
    image_url: string.isRequired,
    name: string.isRequired,
    tagline: string.isRequired,
    ibu: oneOfType([string, number]).isRequired,
    target_og: oneOfType([string, number]).isRequired,
    abv: oneOfType([string, number]).isRequired,
  }).isRequired,
  setShowModal: func.isRequired,
};

export default Item;
