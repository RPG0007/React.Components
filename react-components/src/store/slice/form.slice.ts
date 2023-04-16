import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CrdForm } from 'date/form.card';

const initialState: CrdForm[] = [];

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard: (state, { payload }: PayloadAction<CrdForm>) => {
      state.push(payload);
    },
  },
});

export const { actions, reducer } = formSlice;
