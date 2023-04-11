import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import 'jest';
import { HomePage } from '../../pages/HomePage';

describe('Main', () => {
  it('main is render', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </MemoryRouter>
    );

    const name = await screen.findByText('Store');
    expect(name).toBeInTheDocument();
  });
});
