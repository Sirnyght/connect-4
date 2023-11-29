import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/dom';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Connect 4/);
  expect(titleElement).toBeInTheDocument();
});

test('renders board', () => {
  render(<App />);
  const boardElement = screen.getByText(/Board/);
  expect(boardElement).toBeInTheDocument();
});

test('renders cells', () => {
  render(<App />);
  const cellElement = screen.getAllByText(/0/);
  expect(cellElement).toHaveLength(42);
});

test('clicking on a cell updates the board', () => {
  render(<App />);
  const cellElement = screen.getAllByText(/0/);
  act(() => {
    fireEvent.click(cellElement[0]);
  });
  // check if the lowest cell in the first column has been updated
  const updatedCellElement = cellElement[35];
  expect(updatedCellElement).toHaveTextContent('1');
});

