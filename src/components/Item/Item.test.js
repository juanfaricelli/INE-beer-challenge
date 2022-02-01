/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Component from './Item';
import mockedItem from './item.json';

const testId = 'item';
let props = {};

beforeAll(() => {
  props = {
    itemData: mockedItem,
    setShowModal: jest.fn(),
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
