import React, { useState } from 'react';
import { Product } from '../date/types_date';
import { ImageLike } from './ImageLike';

export const Card = (productItem: { product: Product }) => {
  const [show, setShow] = useState({ isActive: false });

  const handleClickShow = () => {
    setShow({ isActive: !show.isActive });
  };

  const product = productItem.product;
  const isActive = show.isActive;
  return (
    <div data-testid="card" className="card">
      <div className="card-description">
        <img className="image-product" src={product.image} alt="image product" />
        <p className="price-product">$ {product.price}</p>
        <div className="total-description-product">
          <h4 className="title-product">{product.title}</h4>
          <div data-testid="rating-product" className="rating-product">
            {isActive && (
              <p data-testid="rate-product" className="rate-product">
                Rating: {product.rating.rate}
              </p>
            )}
            {isActive && (
              <p data-testid="count-product" className="count-product">
                Count: {product.rating.count}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="wrapper-like">
        <div data-testid="show-details" className="show-details" onClick={handleClickShow}>
          {isActive ? 'Hide details' : 'Show details'}
        </div>
        <ImageLike id={product.id} />
      </div>
    </div>
  );
};
