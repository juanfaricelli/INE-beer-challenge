/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Accordion from './Accordion';

const testId = 'accordion';

const ComponentEmpty = () => <Accordion />;
const ComponentNotEmpty = () => (
  <Accordion>
    <Accordion.Item>
      <Accordion.Header>
        First Item Title
      </Accordion.Header>
      <Accordion.Content>
        First Item Content
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Header>
        Second Item Title
      </Accordion.Header>
      <Accordion.Content>
        Second Item Content
      </Accordion.Content>
    </Accordion.Item>
  </Accordion>
);

test('renders Accordion container with no children', () => {
  render(<ComponentEmpty />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('accordion__container');
});

test('renders Accordion container with children', () => {
  render(<ComponentNotEmpty />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('accordion__container');
  expect(screen.getAllByTestId(`${testId}-item`).length).toBe(2);
  expect(screen.getAllByTestId(`${testId}-header`).length).toBe(2);
  expect(screen.getAllByTestId(`${testId}-content`).length).toBe(2);
});

test('renders Accordion container with children. Classes validation', () => {
  render(<ComponentNotEmpty />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('accordion__container');

  expect(screen.getAllByTestId(`${testId}-content`).length).toBe(2);
  expect(screen.getAllByTestId(`${testId}-content`)[0]).toHaveClass('panel--active');
  expect(screen.getAllByTestId(`${testId}-content`)[1]).not.toHaveClass('panel--active');
});

test('renders Accordion container with children. Toggle classes validation', () => {
  render(<ComponentNotEmpty />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('accordion__container');
  const accordionHeader = screen.getAllByTestId('accordion-header');
  fireEvent.click(accordionHeader[1].firstChild);

  expect(screen.getAllByTestId(`${testId}-content`)[0]).not.toHaveClass('panel--active');
  expect(screen.getAllByTestId(`${testId}-content`)[1]).toHaveClass('panel--active');
});
