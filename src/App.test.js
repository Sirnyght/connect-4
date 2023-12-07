import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/dom';
import App from './App';

test('renders app logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/logo/);
  expect(logoElement).toBeInTheDocument();
});

test('renders board & cells', () => {
  render(<App />);
  const cellElement = screen.getAllByTestId(/cell/);
  expect(cellElement).toHaveLength(42);
});

test('clicking on a cell updates the board', () => {
  render(<App />);
  const cellElement = screen.getAllByTestId(/cell/);
  act(() => {
    fireEvent.click(cellElement[0]);
  });
  // check if the lowest cell in the first column has been updated
  const updatedCellElement = cellElement[35];
  expect(updatedCellElement).toHaveClass('player-1');
});