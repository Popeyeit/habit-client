import { createSlice, PayloadAction, combineReducers } from '@reduxjs/toolkit';

export interface IState {
  email: string;
  nickName: string;
}

const initialState: IState = {
  email: '',
  nickName: '',
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, { payload }: PayloadAction<IState>) => payload,
    login: (state, { payload }: PayloadAction<IState>) => payload,
    current: (state, { payload }: PayloadAction<IState>) => payload,
    logout: () => initialState,
  },
});

const token = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    setToken: (state, { payload }: PayloadAction<string>) => payload,
    unsetToken: () => '',
  },
});

export const { setToken, unsetToken } = token.actions;
const { actions, reducer } = authSlice;
export const { register, login, current, logout } = actions;

export default combineReducers({ user: reducer, token: token.reducer });
