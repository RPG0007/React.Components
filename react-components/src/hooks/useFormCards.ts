import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { CrdForm } from 'date/form.card';

export const useFormCards = () => {
  const cards = useSelector<RootState, CrdForm[]>((state) => state.form);

  return cards;
};
