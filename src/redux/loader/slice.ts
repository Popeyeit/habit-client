import { createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

const loader = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoader: () => true,
    unsetLoader: () => false,
  },
});

const { reducer, actions } = loader;

export const { setLoader, unsetLoader } = actions;
export default reducer;
