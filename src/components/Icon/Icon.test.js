/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Component from './Icon';

const testId = 'icon-component';

test('renders Icon', () => {
  render(<Component icon="brewdoglogo" />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('icon-component__brewdoglogo');
});

test('renders Icon - no icon', () => {
  render(<Component />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element.children[1]).not.toBeDefined();
});
