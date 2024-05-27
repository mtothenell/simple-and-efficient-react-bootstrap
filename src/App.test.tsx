import React from 'react';
import { render, screen } from '@testing-library/react';
import App_oldest from './App_oldest';

test('renders learn react link', () => {
  render(<App_oldest />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
