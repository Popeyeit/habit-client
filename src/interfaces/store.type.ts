import { store } from '../redux/store';
const state = store.getState();
export type IStore = typeof state;
