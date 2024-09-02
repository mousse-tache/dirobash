import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title link', () => {
  render(<App />);
  const linkElement = screen.getByText(/DIRO bash/i);
  expect(linkElement).toBeInTheDocument();
});
