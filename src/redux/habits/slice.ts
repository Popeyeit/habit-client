import { createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit';

interface IObfOfDates {
  _id: string;
  date: string;
  isDone: 'null' | 'true' | 'false';
}

export interface IObjOfHabit {
  dates: IObfOfDates[];
  title: string;
  owner: string;
  _id: string;
}

export type TInitState = IObjOfHabit[];

const initialState: TInitState = [];

const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    getHabits: (state, { payload }: PayloadAction<TInitState>) => payload,
    createHabit: (state, { payload }: PayloadAction<IObjOfHabit>) => [
      ...state,
      payload,
    ],
    deleteHabit: (state, { payload }: PayloadAction<string>) =>
      state.filter(el => el._id !== payload),
    changeHabit: () => initialState,
  },
});

const { actions, reducer } = habitSlice;
export const { getHabits, createHabit, deleteHabit, changeHabit } = actions;
export default reducer;
