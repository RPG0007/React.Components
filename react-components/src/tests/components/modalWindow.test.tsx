import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

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
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<ModalWindow data={card} loading={false} />}></Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(card.title)).toBeInTheDocument();
  });
});
