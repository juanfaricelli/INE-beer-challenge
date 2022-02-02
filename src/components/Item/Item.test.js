/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ItemsContext } from '../../api/context/itemContext';
import Component from './Item';
import mockedItem from './item.json';

const testId = 'item';
let props = {};
let showModalStateMocked = false;

const customRender = (ui) => {
  const providerProps = {
    itemDetails: jest.fn(),
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
    itemData: mockedItem,
    setShowModal: jest.fn(() => { showModalStateMocked = !showModalStateMocked; }),
  };
});

test('renders Item', () => {
  render(<Component {...props} />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('item');
  expect(element).toContainElement(screen.getByAltText(mockedItem.name));
  expect(element.children[1].classList).toContain('item__details');
});

test('Item - set showModal true', () => {
  customRender(<Component {...props} />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();

  const beerDetailsButton = screen.getByRole('button');
  fireEvent.click(beerDetailsButton);
  expect(showModalStateMocked).toBe(true);
});
