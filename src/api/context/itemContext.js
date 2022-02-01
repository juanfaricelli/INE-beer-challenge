/* eslint-disable object-curly-newline */
import React, { createContext, useReducer } from 'react';
import ItemsReducer from './reducers/itemReducer';
import actions from './reducers/actions';

// Initial State
const initialState = {
  itemsDetails: {},
};

// Create context
export const ItemsContext = createContext(initialState);

// Provider component
const ItemsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemsReducer, initialState);

  // Actions
  const itemDetails = (itemData = false) => {
    try {
      dispatch({
        type: actions.ITEM_DETAILS,
        payload: itemData,
      });
    } catch (error) {
      dispatch({
        type: actions.ERROR,
        payload: error.response.data.error,
      });
    }
  };

  const itemsCollection = (collection = []) => {
    try {
      dispatch({
        type: actions.ITEMS_COLLECTION,
        payload: collection,
      });
    } catch (error) {
      dispatch({
        type: actions.ERROR,
        payload: error.response.data.error,
      });
    }
  };

  return (
    <ItemsContext.Provider value={{
      ...state,
      itemDetails,
      itemsCollection,
    }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
export default ItemsProvider;
