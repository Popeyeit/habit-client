import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loader from './loader/slice';
import error from './error/slice';
import user from './user/slice';
import habits from './habits/slice';
import currentDate from './current-date/CurrentDate';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
  thunk: true,
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, user),
    loader,
    error,
    habits,
    currentDate,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
