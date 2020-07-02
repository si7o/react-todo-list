import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders default todo', () => {
  const { getByText } = render(<App />);
  const todoElement = getByText(/Have breakfast/i);
  expect(todoElement).toBeInTheDocument();
});
