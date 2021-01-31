import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders app name', () => {
  render(<Header />);
  
  const linkElement = screen.getByText('TOMO');
  expect(linkElement).toBeInTheDocument();
});

test('renders under construction', () => {
  render(<Header />);
  const linkElement = screen.getByText('Under construction');
  expect(linkElement).toBeInTheDocument();
});

test('renders under construction in Japanese', () => {
  render(<Header />);
  const linkElement = screen.getByText('工事中');
  expect(linkElement).toBeInTheDocument();
});

