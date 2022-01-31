/* eslint-disable object-curly-newline */
import React, { useState, useEffect, useContext } from 'react';

import Item from '../Item';
import ItemDetailsModal from '../ItemDetailsModal';
import SortingBar from '../SortingBar';
import { ItemsContext } from '../../api/context/itemContext';

import './styles.scss';

const ItemsContainer = ({ itemList }) => {
  const [showModal, setShowModal] = useState(false);
  const [itemsList, setItemList] = useState(itemList || []);
  const [sortedList, setSortedList] = useState(false);

  useEffect(() => {
    setItemList(itemList);
    setSortedList(false);
  }, [itemList, sortedList]);

  return (
    <>
      <SortingBar collection={itemsList} setItemList={setItemList} setSortedList={setSortedList} />
      <div className="items-container" data-testid="items-container">
        {itemsList.map(
          (item) => <Item key={item.id} itemData={item} setShowModal={setShowModal} />
        )}
        <ItemDetailsModal {...{ showModal, setShowModal }} />
      </div>
    </>
  );
};

export default ItemsContainer;
