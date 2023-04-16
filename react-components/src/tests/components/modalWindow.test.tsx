import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Card', () => {
  it('render Card component', () => {
    const card = {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: '...',
      images: ['...', '...', '...'],
    };

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<ModalWindow modalData={card} loading={false} />}></Route>
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(card.title)).toBeInTheDocument();
  });
});
