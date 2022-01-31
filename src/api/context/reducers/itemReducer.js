/* eslint-disable import/no-anonymous-default-export */
import actions from './actions';

export default (state, action) => {
  switch (action.type) {
    case actions.ITEM_DETAILS:
      return {
        ...state,
        itemDetailsObj: action.payload,
      };
    case actions.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
