import { createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit';

interface IObfOfDates {
  _id: string;
  date: string;
  isDone: 'null' | 'true' | 'false';
}

export interface IObjOfHabit {
  date: IObfOfDates[];
  title: string;
  _id: string;
  totalHabitDone: number;
  idDate?: string;
  idHabit?: string;
  isDone?: string;
}

interface IChangeHabit {
  isDone: 'true' | 'false' | 'null';
  idHabit: string;
  idDate: string;
}

export type TInitState = IObjOfHabit[];

const initialState: TInitState = [];

const habitSlice = createSlice({
  name: 'habit',
  initialState,
  reducers: {
    getHabits: (state, { payload }: PayloadAction<TInitState>) => payload,
    createHabit: (state, { payload }: PayloadAction<TInitState>) => [
      ...state,
      ...payload,
    ],
    deleteHabit: (state, { payload }: PayloadAction<string>) =>
      state.filter(el => el._id !== payload),
    changeHabit: (state, { payload }: PayloadAction<IChangeHabit>) =>
      state.map(el => {
        let totalHabitDone = el.totalHabitDone;

        if (payload.isDone === 'true' && totalHabitDone < 100) {
          totalHabitDone += 2.5;
        }
        if (payload.isDone === 'false' && totalHabitDone > 0) {
          totalHabitDone -= 2.5;
        }

        return el._id === payload.idHabit
          ? {
              ...el,
              date: [{ ...el.date[0], isDone: payload.isDone }],
              totalHabitDone,
            }
          : el;
      }),
  },
});

const { actions, reducer } = habitSlice;
export const { getHabits, createHabit, deleteHabit, changeHabit } = actions;
export default reducer;
