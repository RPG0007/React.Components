import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { HomePage } from '../../pages/HomePage';

describe('Main', () => {
  it('main is render', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    await waitFor(async () => {
      const name = await screen.findByText('Store');
      expect(name).toBeInTheDocument();
    });
  });
});
