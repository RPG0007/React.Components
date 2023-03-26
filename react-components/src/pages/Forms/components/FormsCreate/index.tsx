import React, { Component } from 'react';
import './index.scss';

class FormsCreate extends Component {
  render() {
    return (
      <div className="forms">
        <div className="input__wrapper">
          <label className="forms__label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="forms__input name"
            id="name"
          ></input>
        </div>
        <div className="input__wrapper">
          <label className="forms__label" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            placeholder="Product Description"
            className="forms__input description"
            id="description"
          ></input>
        </div>
        <div className="input__wrapper">
          <label className="forms__label" htmlFor="date">
            Valid Until
          </label>
          <input type="date" className="forms__input date" id="date"></input>
        </div>
        <div className="input__wrapper">
          <label className="forms__label">Rating</label>
          <div>
            <label className="radio__label">
              <input type="radio" name="ingridient"></input>
              1-3
            </label>
            <label className="radio__label">
              <input type="radio" name="ingridient"></input>
              4-6
            </label>
            <label className="radio__label">
              <input type="radio" name="ingridient"></input>
              7-9
            </label>
            <label className="radio__label">
              <input type="radio" name="ingridient"></input>
              10
            </label>
          </div>
        </div>
        <div className="input__wrapper">
          <label className="forms__label" htmlFor="cost">
            Product cost
          </label>
          <input type="number" className="forms__input cost" id="cost"></input>
        </div>
        <div className="input__wrapper">
          <label className="forms__label">Select Product Type</label>
          <select className="forms__input house">
            <option>Clothing</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Other</option>
          </select>
        </div>

        <label className="input-file">
          <input type="file" accept="image/jpeg,image/png,image/gif"></input>
          <span>Сhoose File</span>
        </label>
        <div className="input__wrapper">
          <label>
            <input type="checkbox"></input>
            I&rsquo;m sure i want to create the Product
          </label>
        </div>
        <button className="forms__button">Submit</button>
      </div>
    );
  }
}

export default FormsCreate;
