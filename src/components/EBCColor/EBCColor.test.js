import { render, screen } from '@testing-library/react';
import EBCColor from './EBCColor';

test('renders EBCColor component', () => {
  render(<EBCColor />);
  const component = screen.getByTestId('ebc-color');
  expect(component).toBeInTheDocument();
});
