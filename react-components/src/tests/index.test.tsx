import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const user = userEvent.setup();
    await user.click(link);

    waitFor(async () => {
      const forms = await screen.findByText(/Product Title/i);
      expect(forms).toBeInTheDocument();
    });
  });
});
