/* eslint-disable object-curly-newline */
import React, { useState, useEffect, useContext } from 'react';
import { arrayOf, object } from 'prop-types';

import Item from '../Item';
import ItemDetailsModal from '../ItemDetailsModal';
import { ItemsContext } from '../../api/context/itemContext';

import './styles.scss';

const ItemsContainer = ({ itemList }) => {
  const { itemsCollection } = useContext(ItemsContext);
  const [showModal, setShowModal] = useState(false);
  const [itemsList, setItemsList] = useState(itemList || []);

  useEffect(() => {
    setItemsList(itemList);
    itemsCollection(itemList);
  }, [itemList]);

  return (
    <div className="items-container" data-testid="items-container">
      {itemsList.map(
        (item) => <Item key={item.id} itemData={item} setShowModal={setShowModal} />,
      )}
      <ItemDetailsModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

ItemsContainer.propTypes = {
  itemList: arrayOf([object]).isRequired,
};

export default ItemsContainer;
