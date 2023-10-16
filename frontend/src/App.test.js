/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Components/AddSuplier';

test('renders Home component with "Home" text', () => {
  render(<Home />);
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders Home component with the correct CSS class', () => {
  render(<Home />);
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toHaveClass('home');
});

test('renders Home component without "About" text', () => {
  render(<Home />);
  const aboutElement = screen.queryByText(/About/i);
  expect(aboutElement).not.toBeInTheDocument();
});
