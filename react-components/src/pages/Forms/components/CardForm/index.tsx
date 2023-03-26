import React, { Component } from 'react';
import './index.scss';

class CardForm extends Component {
  render() {
    return (
      <div className="form-card">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
          className="form-card__img"
        ></img>
        <div className="form-card__title">Product</div>
        <div className="form-card__birth birth">
          <p className="birth__title">Valid:</p>
          <p className="birth__text">21.12.2024</p>
        </div>
        <div className="form-card__description">
          <span className="form-card__span">Description:</span> very very long discription very very
          long discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription very very long
          discription very very long discription very very long discription
        </div>
        <div className="form-card__info">
          <div className="form-card__ingredient item">
            <p className="item__title">10</p>
            <p className="item__text">Rating</p>
          </div>
          <div className="form-card__cost item">
            <p className="item__title">9999 &#667;</p>
            <p className="item__text">Cost</p>
          </div>
          <div className="form-card__house item">
            <p className="item__title">Furniture</p>
            <p className="item__text">Product Type</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardForm;
