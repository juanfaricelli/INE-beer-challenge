/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Component from './Header';
import { ItemsContext } from '../../api/context/itemContext';

const testId = 'header';
const customRender = (ui) => {
  const providerProps = {

  };
  return render(
    <ItemsContext.Provider value={{
      ...providerProps,
    }}
    >
      {ui}
    </ItemsContext.Provider>,
  );
};

test('renders header', () => {
  render(<Component />);
  const element = screen.getByTestId(testId);
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('header');
  expect(element).toContainElement(screen.getByText('Beers List'));
});
