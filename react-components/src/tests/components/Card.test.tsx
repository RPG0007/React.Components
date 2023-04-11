import { render, screen } from '@testing-library/react';
import { HomePage } from '../../pages/HomePage';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Cards', () => {
  it('show cards after render', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </MemoryRouter>
      );
    });
    const someCard = await screen.findByRole('Loader');
    expect(someCard).toBeInTheDocument();
  });
});
