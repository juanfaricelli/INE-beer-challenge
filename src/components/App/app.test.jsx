/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import {
  render, screen, fireEvent, waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Component from './app.component';

const testId = 'app';
const LOADING_MESSAGE = 'Loading...';
const ERROR_MESSAGE = 'Error getting data from server, please try again later...';
const HOME_TEXT = 'INE Beer Challenge';

test('App - Home content', () => {
  render(<Component />);
  expect(screen.getByTestId(testId)).toBeDefined();
  expect(screen.getByTestId(testId)).toHaveTextContent(HOME_TEXT);
});
