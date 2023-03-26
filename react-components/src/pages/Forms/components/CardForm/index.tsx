import React, { Component } from 'react';
import { Card } from '../../../../date/form.card';
import './index.scss';

interface CardFormProps {
  cards: Card[];
}

class CardForm extends Component<CardFormProps> {
  render() {
    if (this.props.cards.length === 0) {
      return (
        <div className="cards__error">
          <p className="error__text">Cards not found</p>
        </div>
      );
    }
    return this.props.cards.map((card) => {
      return (
        <div className="form-card" key={card.id}>
          <img src={card.image} alt={card.title} className="form-card__img"></img>
          <div className="form-card__title">{card.title}</div>
          <div className="form-card__birth birth">
            <p className="birth__title">Valid:</p>
            <p className="birth__text">{card.valid}</p>
          </div>
          <div className="form-card__description">
            <span className="form-card__span">Description:</span> {card.description}
          </div>
          <div className="form-card__info">
            <div className="form-card__ingredient item">
              <p className="item__title">{card.ingredient}</p>
              <p className="item__text">Rating</p>
            </div>
            <div className="form-card__cost item">
              <p className="item__title">{card.cost}$;</p>
              <p className="item__text">Cost</p>
            </div>
            <div className="form-card__house item">
              <p className="item__title">{card.house}</p>
              <p className="item__text">Type</p>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default CardForm;
