import React from 'react';
import './index.scss';

import { useSearchParams } from 'react-router-dom';
import { CardPreview } from 'date/card';
import { useActions } from 'hooks/useAction';

interface CardProps {
  data: CardPreview;
}

const Card = ({ data }: CardProps) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const { changeCardId } = useActions();
  // const cardId = useCardId();

  const showModalWindow = (id: string) => {
    changeCardId(id);
    // console.log(id);

    // searchParams.set('id', id);
    // setSearchParams(searchParams);
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
