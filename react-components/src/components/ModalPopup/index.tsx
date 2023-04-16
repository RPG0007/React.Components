import React from 'react';
import { useGetCardQuery } from '../../store/api/cards.api';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import { useCardId } from 'hooks/useCardId';

const Modal = () => {
  const cardId = useCardId();
  const { isLoading, data: card } = useGetCardQuery(cardId);
  return <>{cardId && <ModalWindow modalData={card} loading={isLoading} />}</>;
};

export default Modal;
