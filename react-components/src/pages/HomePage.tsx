import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
//import { Card as ICard } from '../date/card';
//import Pagination from '../components/Pagination';
import Cards from '../components/Cards';
import Loader from '../components/Loader';
import ModalWindow from '../components/ModalWindow/ModalWindow';
//import fetch from 'node-fetch';
import { useSearch } from 'hooks/useSearch';
import { useCardId } from 'hooks/useCardId';
import Modal from 'components/ModalPopup';
import { useGetCardsQuery } from 'store/api/cards.api';

export const HomePage = () => {
  /*const [cards, setCards] = useState<ICard[]>([]);
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
        if (card.title.toLowerCase().includes(local.toLocaleLowerCase())) render = true;
        return render;
      });
      setCards(filteredCards);
      return filteredCards;
    },
    [local]
  );

  useEffect(() => {
    setLoad(true);
    fetch(
      nameParams.length > 0
        ? `https://dummyjson.com/products/search?q=${nameParams}&limit=${limit.current}&skip=${
            (pageParams - 1) * limit.current
          }`
        : `https://dummyjson.com/products/?limit=${limit.current}&skip=${
            (pageParams - 1) * limit.current
          }`
    )
      .then((res) => {
        const totalApiPages = Number(30 || 1);
        setTotalPages(Math.ceil(totalApiPages / limit.current));
        return res.json();
      })
      .then((data) => {
        setCards(nameParams ? filterCards(data.products) : data.products);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [pageParams, nameParams, filterCards]);

  useEffect(() => {
    setLoadCard(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCard(data);
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
  };*/
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
