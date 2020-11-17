import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const error = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, { payload }: PayloadAction<string>) => payload,
    unsetError: () => '',
  },
});

const { actions, reducer } = error;
export const { setError, unsetError } = actions;
export default reducer;
