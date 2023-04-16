import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import App from '../index';

describe('App', () => {
  it('renders Forms component on navigate', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const main = screen.getByText(/Online Store/i);
    expect(main).toBeInTheDocument();
    const link = screen.getByText('Forms');
    await fireEvent(link, new Event('click'));

    waitFor(async () => {
      const forms = await screen.findByText(/Product Title/i);
      expect(forms).toBeInTheDocument();
    });
  });
});
