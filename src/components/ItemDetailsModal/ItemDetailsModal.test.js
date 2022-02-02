/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ItemsContext } from '../../api/context/itemContext';
import Component from './ItemDetailsModal';
import mockedItem from '../Item/item.json';

const testId = 'item-details-modal';
let props = {
};

const customRender = (ui) => {
  const providerProps = {
    itemDetailsObj: mockedItem,
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
    showModal: true,
    setShowModal: jest.fn(),
  };
});

test('renders ItemDetailsModal', () => {
  customRender(<Component showModal />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
});

test('close ItemDetailsModal', () => {
  const setShowModal = () => { props.showModal = false; };
  customRender(<Component showModal setShowModal={setShowModal} />);
  const closeButtonElement = screen.getByTestId('item-details-modal-button-close');
  fireEvent.click(closeButtonElement);
  expect(props.showModal).toBe(false);
  expect(props.showModal).toBe(false);
});
