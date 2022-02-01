/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Component from './App';

const testId = 'app';

test('App - Home content', () => {
  render(<Component />);
  expect(screen.getByTestId(testId)).toBeDefined();
  expect(screen.getByTestId(testId)).toHaveClass('app__container');
  expect(screen.getByTestId('header')).toBeDefined();
  expect(screen.getByTestId('sorting-bar')).toBeDefined();
  expect(screen.getByTestId('items-container')).toBeDefined();
});
