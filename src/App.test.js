import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Header todo', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Todo list/i);
  expect(headerElement).toBeInTheDocument();
});
