/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Component from './EBCColor';

const testId = 'ebc-color';

test('renders EBCColor Component', () => {
  render(<Component />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('ebc-color__display');
});

test('renders EBCColor Component with a number value', () => {
  render(<Component colorNumber={14} />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('ebc-color__display');
  expect(element.children[1])
    .toHaveClass('ebc-color__display-color ebc-color__display-color--14');
});
