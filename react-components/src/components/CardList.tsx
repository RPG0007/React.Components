import React from 'react';
import { changedateProducts } from '../date/date';
import { Card } from './Card';

export const CardList = () => {
  return (
    <div className="container_cards">
      {changedateProducts.map((dateproduct) => (
        <Card product={dateproduct} key={dateproduct.id} />
      ))}
    </div>
  );
};
