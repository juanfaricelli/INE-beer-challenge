/* eslint-disable object-curly-newline */
import React, { useState } from 'react';

import './styles.scss';

import Item from '../Item';
import ItemDetailsModal from '../ItemDetailsModal';

const ItemsContainer = ({ itemList }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="items-container" data-testid="items-container">
      {itemList.map((item) => <Item key={item.id} itemData={item} setShowModal={setShowModal} />)}
      <ItemDetailsModal {...{ showModal, setShowModal }} />
    </div>
  );
};

export default ItemsContainer;
