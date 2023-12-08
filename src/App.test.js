import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/dom';
import App from './App';

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
  const updatedCellElement = cellElement[5];
  // get child element of updatedCellElement
  const updatedChildElement = updatedCellElement.firstChild;
  expect(updatedChildElement).toHaveClass('player-1');
});

test('clicking on reset button resets the board', () => {
  render(<App />);
  const cellElement = screen.getAllByTestId(/cell/);
  act(() => {
    fireEvent.click(cellElement[0]);
  });
  const resetButton = screen.getByText(/reset/i);
  act(() => {
    fireEvent.click(resetButton);
  });
  const updatedCellElement = cellElement[5];
  // cell should not have child element
  expect(updatedCellElement.firstChild).toBeNull();
});

test('clicking on reverse button reverses the column', () => {
  render(<App />);
  const cellElement = screen.getAllByTestId(/cell/);
  act(() => {
    fireEvent.click(cellElement[0]);
  });
  act(() => {
    fireEvent.click(cellElement[0]);
  });
  const cellElement1 = cellElement[5];
  const cellElement2 = cellElement[4];
  let childElement1 = cellElement1.firstChild;
  let childElement2 = cellElement2.firstChild;

  expect(childElement1).toHaveClass('player-1');
  expect(childElement2).toHaveClass('player-2');

  const reverseButton = screen.getAllByTestId(/button-reverse/)[0];

  act(() => {
    fireEvent.click(reverseButton);
  });

  childElement1 = cellElement1.firstChild;
  childElement2 = cellElement2.firstChild;

  expect(childElement1).toHaveClass('player-2');
  expect(childElement2).toHaveClass('player-1');

});
