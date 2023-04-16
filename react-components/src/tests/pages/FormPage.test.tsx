import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import CardForm from '../../pages/Forms/components/CardForm';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Forms } from '../../pages/Forms';
import FormData from '../../pages/Forms/components/FormData';
import { store } from '../../store/store';

describe('Forms', () => {
  it('renders Forms component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/forms']}>
          <Routes>
            <Route path="/forms" element={<Forms />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Product Title/)).toBeInTheDocument();
  });
});

describe('CardForm', () => {
  it('renders Forms component', () => {
    render(<CardForm cards={[]} />);
    const text = screen.getByText('Cards not found');
    expect(text).toBeInTheDocument();
  });

  it('renders CardForm component with expected value', () => {
    const expectedValue = [
      {
        id: 1,
        image: 'as',
        title: 'iPhone',
        valid: 'string',
        description: '',
        ingredient: 'string',
        cost: 'string',
        type: 'string',
        checkbox: true,
      },
    ];

    render(<CardForm cards={expectedValue} />);
    const text = screen.getByText(expectedValue[0].title);
    expect(text).toBeInTheDocument();
  });
});

describe('FormData', () => {
  it('renders Forms component', () => {
    render(<FormData handleCard={() => {}} cards={0} />);
    const name = screen.getByPlaceholderText('Product Title');
    expect(name.className).toBe('forms__input name');
  });

  it('renders FormData component with expected value', async () => {
    const expectedValue = 'Crimson';
    render(<FormData handleCard={() => {}} cards={0} />);
    const name = screen.getByPlaceholderText('Product Title');
    fireEvent.change(name, { target: { value: expectedValue } });
    expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
    const submit = await screen.getByRole('submitbtn');
    fireEvent.click(submit);
    expect(screen.getByText('Rating')).toBeInTheDocument();
  });
});
