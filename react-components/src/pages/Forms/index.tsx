import React, { useEffect, useState } from 'react';
import './index.scss';
import FormData from './components/FormData/index';
import CardForm from './components/CardForm';
import Popup from './../../components/Popup/index';
import { CrdForm } from 'date/form.card';

export const Forms = () => {
  const [cards, setCards] = useState<CrdForm[]>([]);
  const [popup, setPopup] = useState(false);

  const handleCard = (card: CrdForm) => {
    setCards([...cards, card]);
    setPopup(true);
  };

  useEffect(() => {
    popup &&
      setTimeout(() => {
        setPopup(false);
      }, 3000);
  }, [popup]);

  return (
    <div className="main__container">
      <FormData handleCard={handleCard} cards={cards.length} />
      <div className="forms__cards">
        <CardForm cards={cards} />
      </div>
      <Popup showPopup={popup} />
    </div>
  );
};
