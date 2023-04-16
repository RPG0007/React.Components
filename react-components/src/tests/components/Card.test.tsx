import { render, screen } from '@testing-library/react';
import { HomePage } from '../../pages/HomePage';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Cards', () => {
  it('show cards after render', async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
            </Routes>
          </MemoryRouter>
        </Provider>
      );
    });
    const someCard = await screen.findByText('Store');
    expect(someCard).toBeInTheDocument();
  });
});
