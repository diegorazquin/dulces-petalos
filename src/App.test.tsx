import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Home', () => {
  it('muestra el titulo de la tienda', () => {
    render(<App />);
    expect(screen.getByText(/Dulces pétalos/i)).toBeInTheDocument();
  })
  it('muestra una flor', () => {
    render(<App/>);
    expect(screen.getByText(/Rosa/i)).toBeInTheDocument();
  });
})
