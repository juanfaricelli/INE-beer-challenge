/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ItemsContext } from '../../api/context/itemContext';
import Component from './ItemsContainer';
import mockedItem from '../Item/item.json';

const testId = 'items-container';
let props = {
};

const customRender = (ui) => {
  const providerProps = {
    itemsCollection: jest.fn(),
  };

  return render(
    <ItemsContext.Provider value={{
      ...providerProps,
    }}
    >
      {ui}
    </ItemsContext.Provider>,
  );
};

beforeAll(() => {
  props = {
    itemList: [mockedItem, mockedItem],
  };
});

test('renders header', () => {
  customRender(<Component itemList={props.itemList} />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('items-container');
  const items = screen.queryAllByTestId('item');
  expect(items).toHaveLength(props.itemList.length);
});
