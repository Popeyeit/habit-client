import { Dispatch } from 'redux';
import { getHabits, createHabit, TInitState, IObjOfHabit } from './slice';
import { setLoader, unsetLoader } from '../loader/slice';
import { store } from '../store';
import Api from '../../api/api';

const state = store.getState();
type IStore = typeof state;

interface IGet {
  type: string;
  payload: TInitState | string | undefined;
}

export const getHabitsOperation = () => async (
  dispatch: Dispatch<IGet>,
  getState: () => IStore,
) => {
  const {
    auth: { token: hasToken },
  } = getState();
  if (!hasToken) {
    return;
  }

  try {
    dispatch(setLoader());
    Api.setToken(hasToken);
    const res = await Api.getAxiosHabits();
    console.log(res.data);
    dispatch(getHabits(res.data));
  } catch (error) {
  } finally {
    dispatch(unsetLoader());
  }
};

interface IBody {
  startDate: string;
  title: string;
  repeats: string[];
}

interface ICreate {
  type: string;
  payload: string | undefined | IObjOfHabit;
}

export const createHabitOperation = (body: IBody) => async (
  dispatch: Dispatch<ICreate>,
) => {
  try {
    dispatch(setLoader());
    const res = await Api.createAxiosHabit<IBody>(body);
    console.log(res.data);
    dispatch(createHabit(res.data));
  } catch (error) {
  } finally {
    dispatch(unsetLoader());
  }
};
