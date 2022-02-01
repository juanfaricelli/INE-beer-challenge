/* eslint-disable no-undef */
const React = require('react');
const { render, screen } = require('@testing-library/react');
require('@testing-library/jest-dom/extend-expect');

const Component = require('./SortingBar');

const testId = 'sorting-bar';

// beforeAll(() => {
//   props = {};
// });

test('Sorting Bar content', () => {
  render(<Component />);
  expect(screen.getByTestId(testId)).toBeDefined();
});
