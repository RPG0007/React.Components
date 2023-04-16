import React from 'react';
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types';
import { FormCard, CrdForm } from '../../../../date/form.card';
import './index.scss';
import InputText from '../InputText';
import { resolver } from './resolver';

interface FormDataProps {
  handleCard: (card: CrdForm) => void;
  cards: number;
}

const FormData = ({ handleCard, cards }: FormDataProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver, mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<FormCard> = (data) => {
    handleCard({
      id: cards,
      ...data,
      image: URL.createObjectURL(data.image[0]),
    });
    reset();
  };

  const ingredients = ['1-3', '4-6', '7-9', '10'];

  return (
    <>
      <form className="forms" onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputText
          register={{
            ...register('title'),
          }}
          name="name"
          label="Product Title"
          errors={errors?.title?.message}
          placeholder="Product Title"
        />
        <InputText
          register={{
            ...register('description'),
          }}
          name="description"
          label="Description"
          errors={errors?.description?.message}
          placeholder="Product Description"
        />
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label" htmlFor="date">
              Valid Until
            </label>
            {errors && <div className="input__error">{errors.valid?.message}</div>}
          </div>
          <input
            {...register('valid')}
            type="date"
            className={'forms__input date'}
            id="date"
          ></input>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label">Rating</label>
            {errors.ingredient && <p className="input__error">{errors.ingredient?.message}</p>}
          </div>
          <div>
            {ingredients.map((ingredient) => {
              return (
                <label className="radio__label" key={ingredient}>
                  <input {...register('ingredient')} type="radio" value={ingredient} />
                  {ingredient}
                </label>
              );
            })}
          </div>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label" htmlFor="cost">
              Cost
            </label>
            {errors && <div className="input__error">{errors.cost?.message}</div>}
          </div>
          <input
            {...register('cost')}
            type="number"
            placeholder="1000"
            className="forms__input cost"
            id="cost"
          ></input>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label">Select Proudct Type</label>
            {errors.type && <p className="input__error">{errors.type?.message}</p>}
          </div>
          <select {...register('type')} className="forms__input house">
            <option hidden value="">
              Product Type
            </option>
            <option>Clothing</option>
            <option>Furniture</option>
            <option>Electronics</option>
            <option>Other</option>
          </select>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="input__file">
              <input
                {...register('image')}
                type="file"
                accept="image/jpeg,image/png,image/gif"
              ></input>
              <span>Choose File</span>
            </label>
            {errors.image && <p className="input__error">{errors.image?.message}</p>}
          </div>
        </div>
        <div className="input__wrapper">
          <div className="input__label-wrapper">
            <label className="forms__label">
              <input {...register('checkbox')} type="checkbox"></input>
              I&rsquo;m sure i want to create this Product
            </label>
            {errors.checkbox && <p className="input__error">{errors.checkbox?.message}</p>}
          </div>
        </div>
        <button className="forms__button" type="submit" role="submitbtn">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormData;
