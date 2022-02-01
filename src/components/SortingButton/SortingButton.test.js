/* eslint-disable no-undef */
const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom/extend-expect');

const Component = require('./index');

const testId = 'icon-component';

beforeAll(() => {
  props = {};
});

test('Icon - ArrowLeft24 content', () => {
  render(<Component {...props} />);
  expect(screen.getByTestId(testId)).toBeDefined();
});
