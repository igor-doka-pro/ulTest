import { render, screen } from '@testing-library/react';
import App from './App';


describe("TEST APP", () => {
  test('Router test', () => {
    render(<App />);
    const mainLink = screen.getByTestId('main-link');
  })


})

