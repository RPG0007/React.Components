import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('App', () => {
  test('renders home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('This is the 404 page')).toBeInTheDocument();
  });

  test('renders about page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('This is the 404 page')).toBeInTheDocument();
  });

  test('renders not found page', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('This is the 404 page')).toBeInTheDocument();
  });
  test('renders forms page', () => {
    render(
      <MemoryRouter initialEntries={['/React.Components/forms']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
  });
  test('renders forms page2', () => {
    render(
      <MemoryRouter initialEntries={['/React.Components/forms']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Cards not found')).toBeInTheDocument();
  });
});
