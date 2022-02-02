/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Component from './SortingBar';

const testId = 'sorting-bar';

test('Sorting Bar content', () => {
  render(<Component />);
  expect(screen.getByTestId(testId)).toBeDefined();
});
