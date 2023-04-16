import React from 'react';
import './index.scss';
import { CardPreview } from 'date/card';
import { useActions } from 'hooks/useAction';

interface CardProps {
  data: CardPreview;
}

const Card = ({ data }: CardProps) => {
  const { changeCardId } = useActions();

  const showModalWindow = (id: string) => {
    changeCardId(id);
  };

  return (
    <>
      <div
        className="preview"
        onClick={() => {
          showModalWindow(data.id.toString());
        }}
      >
        <img
          src={data.thumbnail}
          alt={data.title}
          className="preview__img"
          width={'250px'}
          height={'250px'}
        ></img>
        <div className="preview__title">{data.title}</div>
      </div>
    </>
  );
};

export default Card;
