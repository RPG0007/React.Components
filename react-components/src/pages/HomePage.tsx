import React from 'react';
import { SearchBar } from '../components/SearchBar';
import Cards from '../components/Cards';
import Loader from '../components/Loader';
import { useSearch } from 'hooks/useSearch';
import { useCardId } from 'hooks/useCardId';
import Modal from 'components/ModalPopup';
import { useGetCardsQuery } from 'store/api/cards.api';

export const HomePage = () => {
  const search = useSearch();
  const { isLoading, data: cards } = useGetCardsQuery({ search });
  const cardId = useCardId();
  return (
    <div className="container_home">
      <h2 data-testid="homepage-h1">Store</h2>
      <SearchBar />
      {isLoading ? <Loader /> : <Cards data={cards.products} />}
      {cardId && <Modal />}
    </div>
  );
};
