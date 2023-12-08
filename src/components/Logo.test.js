import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('renders the individual letters of the logo correctly', () => {
    render(<Logo />);

    // Check if all the individual letters are rendered correctly
    const letters = screen.getAllByText((content, element) => {
        return element.tagName.toLowerCase() === 'span' && element.className === 'letter';
    });

    expect(letters).toHaveLength(16);
});

test('renders the triangle element of the logo correctly', () => {
  render(<Logo />);

  // Check if the triangle element is rendered
  const triangleElement = screen.getByTestId('logo-triangle');
  expect(triangleElement).toBeInTheDocument();
});