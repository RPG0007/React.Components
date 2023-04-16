import React, { useEffect, useState } from 'react';
import './index.scss';
import FormData from './components/FormData/index';
import CardForm from './components/CardForm';
import Popup from './../../components/Popup/index';
import { CrdForm } from 'date/form.card';
import { useFormCards } from 'hooks/useFormCards';
import { useActions } from 'hooks/useAction';

export const Forms = () => {
  const [popup, setPopup] = useState(false);
  const { addCard } = useActions();
  const cards = useFormCards();
  const handleCard = (card: CrdForm) => {
    addCard(card);
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
