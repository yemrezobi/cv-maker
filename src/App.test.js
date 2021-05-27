import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

it('renders template selector placeholder', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/template selector placeholder/i);
  expect(linkElement).toBeInTheDocument();
});
