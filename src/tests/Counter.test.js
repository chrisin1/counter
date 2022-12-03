// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';
import '@testing-library/jest-dom';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const welcomeMessage = screen.getByText(/Welcome to the Counter App!/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByText(/0/i)
  expect(count).toBeInTheDocument()
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByRole('button', {name: /\+/i})
  userEvent.click(button)
  const count = screen.getByText(/1/i)
  expect(count).toBeInTheDocument()
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByRole('button', {name: /-/i})
  userEvent.click(button)
  const count = screen.getByText(/-1/i)
  expect(count).toBeInTheDocument()
});
