import { render, screen } from '@testing-library/react';
import App from './App';

test('header name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dog Gallery/);
  expect(linkElement).toBeInTheDocument();
});

test("custom search button name",()=>{
  render(<App/>);
  const linkElement = screen.getByText(/Custom Search/i);
  expect(linkElement).toBeInTheDocument();
});
test("custom search button",()=>{
  render(<App/>);
  const linkElement = screen.getByText(/Custom Search/i);
  expect(linkElement.tagName).toBe('BUTTON');
});