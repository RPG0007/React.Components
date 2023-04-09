import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { Card as ICard } from 'date/card';
import Pagination from 'components/Pagination';
import Cards from 'components/Cards';
import Loader from 'components/Loader';
import ModalWindow from 'components/ModalWindow/ModalWindow';

export const HomePage = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [card, setCard] = useState<ICard | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [load, setLoad] = useState(false);
  const [loadCard, setLoadCard] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = useRef(4);
  const pageParams = Number(searchParams.get('page') || 1);
  const nameParams = searchParams.get('name') || '';
  const id = searchParams.get('id') || '';
  const local = localStorage.getItem('searchInput') || '';

  const filterCards = useCallback(
    (data: ICard[]) => {
      const filteredCards = data.filter((card) => {
        let render = false;
        if (card.title.toLowerCase().includes(local.toLowerCase())) render = true;
        return render;
      });
      return filteredCards;
    },
    [local]
  );

  useEffect(() => {
    setLoad(true);
    fetch(`https://fakestoreapi.com/products?limit=${limit.current}`)
      .then((res) => {
        const totalApiPages = Number(20 || 1);
        setTotalPages(Math.ceil(totalApiPages / limit.current));
        return res.json();
      })
      .then((data) => {
        setCards(nameParams ? filterCards(data) : data);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [pageParams, nameParams, filterCards]);

  useEffect(() => {
    setLoadCard(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCard(data[0]);
      })
      .finally(() => {
        setLoadCard(false);
      });
  }, [id]);

  const handlePageChange = (selected: number) => {
    const page = selected + 1;
    if (page != 1) searchParams.set('page', page.toString());
    else searchParams.delete('page');
    setSearchParams(searchParams);
  };
  return (
    <div className="container_home">
      <h2 data-testid="homepage-h1">Store</h2>
      <SearchBar />
      <Pagination pageCount={totalPages} initialPage={pageParams - 1} onChange={handlePageChange} />
      {load ? <Loader /> : <Cards data={cards} />}
      {id && <ModalWindow data={card} loading={loadCard} />}
    </div>
  );
};
