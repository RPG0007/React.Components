import Loader from '../Loader';
import { Card as ICard } from 'date/card';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './index.scss';

interface ModalWindowProps {
  data: ICard | null;
  loading: boolean;
}

const ModalWindow = ({ data, loading }: ModalWindowProps) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const close = () => {
    searchParams.delete('id');
    setSearchParams(searchParams);
  };

  return (
    <>
      <div onClick={(e) => e.currentTarget === e.target && close()} className={'modal'}>
        <div className={'modal__wrapper'}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div onClick={close} className="modal__close"></div>
              <div className="modal__card card">
                <div className="card__header">
                  <img
                    src={data?.thumbnail}
                    alt={data?.title}
                    className="card__img"
                    width={'180px'}
                    height={'180px'}
                  ></img>
                  <div>
                    <div className="card__title">{data?.title}</div>
                    <div className="card__description">
                      <span className="card__span">Description:</span> {data?.description}
                    </div>
                  </div>
                </div>
                <div className="card__category">
                  <span className="card__span">Category:</span> {data?.category}
                </div>
                <div className="card__cost">
                  <span className="card__span">Cost:</span> {data?.price} $
                </div>
                <div className="card__rating">
                  <span className="card__span">Rating:</span> {data?.rating}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalWindow;
