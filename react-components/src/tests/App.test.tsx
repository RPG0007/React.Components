import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import App from '../index';
import { Provider } from 'react-redux';
import { store } from '../store/store';

describe('App', () => {
  it('renders Forms component on navigate', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const main = await screen.getByText(/Online Store/i);
    expect(main).toBeInTheDocument();
    const link = screen.getByText('About');
    await fireEvent(link, new Event('click'));

    waitFor(async () => {
      const forms = await screen.findByText(/This is the ABOUT page/i);
      expect(forms).toBeInTheDocument();
    });
  });
});
