/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const Icon = require('./index');

const testId = 'icon-component';

test('Icon - BrewdogLogo content', () => {
  render(<Icon icon="brewdoglogo" />);
  expect(screen.getByTestId(testId)).toBeDefined();
});
