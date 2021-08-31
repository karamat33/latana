import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Knowledge Center', () => {
  render(<App />);
  const linkElement = screen.getByText(/Knowledge Center/i);
  expect(linkElement).toBeInTheDocument();
});
