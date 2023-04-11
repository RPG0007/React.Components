import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import FormData from '../../pages/Forms/components/FormData';

describe('Search', () => {
  it('renders Forms component', () => {
    render(<FormData handleCard={() => {}} cards={0} />);
    const name = screen.getByPlaceholderText('Product Title');
    expect(name.className).toBe('forms__input name');
  });

  it('renders FormData component with expected value', () => {
    const expectedValue = 'Crimson';
    render(<FormData handleCard={() => {}} cards={0} />);
    const name = screen.getByPlaceholderText('Product Title');
    fireEvent.change(name, { target: { value: expectedValue } });
    expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
  });
});

describe('Form Page', () => {
  it('renders form page', () => {
    render(<FormData handleCard={() => {}} cards={0} />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});

describe('Search', () => {
  it('should display required error when value is invalid', async () => {
    render(<FormData handleCard={() => {}} cards={0} />);
    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByText('Required field')).not.toHaveLength(0);
  });
});
