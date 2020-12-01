import { Dispatch } from 'redux';
import { getHabits, createHabit, TInitState, changeHabit } from './slice';
import { setLoader, unsetLoader } from '../loader/slice';
import { store } from '../store';
import Api from '../../api/api';

const state = store.getState();
type IStore = typeof state;

interface IGet {
  type: string;
  payload: TInitState | string | undefined;
}

export const getHabitsOperation = (currentDate: string) => async (
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
    const res = await Api.getAxiosHabits<string>(currentDate);
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
  payload: string | undefined | TInitState;
}

export const createHabitOperation = (
  body: IBody,
  closeModal: () => void,
) => async (dispatch: Dispatch<ICreate>) => {
  try {
    dispatch(setLoader());
    const res = await Api.createAxiosHabit<IBody>(body);
    console.log(res);
    dispatch(createHabit(res.data));
    closeModal();
  } catch (error) {
  } finally {
    dispatch(unsetLoader());
  }
};

export interface IChangeBody {
  isDone: 'true' | 'false' | 'null';
  idHabit: string;
  idDate: string;
}

interface IChangeD {
  type: string;
  payload: undefined | IChangeBody | TInitState;
}

export const changeHabitOperation = (body: IChangeBody) => async (
  dispatch: Dispatch<IChangeD>,
) => {
  try {
    dispatch(changeHabit(body));
    await Api.changeAxiosHabit(body);
  } catch (error) {
  } finally {
  }
};
