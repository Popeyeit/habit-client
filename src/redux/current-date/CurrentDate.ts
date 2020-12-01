import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');
export const momentFormat = 'dddd.DD.MMMM.YYYY';

const initialState = moment().format(momentFormat);

const currentDate = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setCurrentDate: (state, { payload }: PayloadAction<string>) => payload,
  },
});

const { actions, reducer } = currentDate;
export const { setCurrentDate } = actions;
export default reducer;
