import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('logs in successfully and renders the dashboard', () => {
  render(<App />);
  const loginButton = screen.getByRole('button', { name: /dashboard/i });
  fireEvent.click(loginButton);
  expect(screen.getByText('Stock Market Dashboard')).toBeInTheDocument();
});
