import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar';

describe('Search', () => {
  describe('Search', () => {
    it('renders Search component', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<SearchBar />}></Route>
          </Routes>
        </MemoryRouter>
      );
      const search = screen.getByRole('textbox');
      expect(search.className).toBe('search__input');
    });
  });

  it('renders Search component with expected value', () => {
    const expectedValue = '123';
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<SearchBar />}></Route>
        </Routes>
      </MemoryRouter>
    );
    const search = screen.getByRole('textbox');
    fireEvent.change(search, { target: { value: expectedValue } });
    expect(screen.getByDisplayValue(expectedValue)).toBeInTheDocument();
  });
});
