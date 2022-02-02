/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-curly-newline */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ItemsContext } from '../../api/context/itemContext';
import Component from './SortingButton';

const testId = 'sorting-button';
const itemsCollectionObj = [
  { ibu: 40, name: 'Lela' },
  { ibu: 36, name: 'Callie' },
  { ibu: 31, name: 'Key' },
  { ibu: 45, name: 'Mosley' },
];

const customRender = (ui) => {
  const providerProps = {
    itemsCollectionObj,
    itemsCollection: jest.fn((collection) => collection),
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

const props = {
  label: 'LabelText',
  sortBy: 'ibu',
};

test('render SortingButton', () => {
  customRender(<Component {...props} />);
  const element = screen.getByTestId(testId);
  expect(element).toHaveTextContent(props.label);
});

test('SortingButton test sorting object by sortBy prop key', () => {
  customRender(<Component {...props} />);
  const sortingButtonRendered = screen.getByRole('button');
  fireEvent.click(sortingButtonRendered);
  expect(itemsCollectionObj).toBe(itemsCollectionObj.sort((a, b) => a.ibu - b.ibu));
});

test('SortingButton test sorting object by sortBy(text) prop key', () => {
  props.sortBy = 'name';
  customRender(<Component {...props} />);

  const sortingButtonRendered = screen.getByRole('button');
  fireEvent.click(sortingButtonRendered);
  expect(itemsCollectionObj).toBe(itemsCollectionObj.sort((a, b) => a.name - b.name));
});
