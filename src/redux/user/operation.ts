import { Dispatch } from 'redux';
import { store } from '../store';
import {
  register,
  login,
  setToken,
  current,
  logout,
  unsetToken,
} from './slice';
import { setLoader, unsetLoader } from '../loader/slice';
import Api from '../../api/api';
const state = store.getState();
type IStore = typeof state;
interface IError {
  response: object;
}

interface IRegister {
  password: string;
  email: string;
  nickName: string;
}
interface ILogin {
  password: string;
  email: string;
}

interface IResponseReg {
  email: string;
  nickName: string;
}
interface IResponseLog {
  user: {
    email: string;
    nickName: string;
  };
  token: string;
}

interface IAction {
  type: string;
  payload: IResponseReg | string | undefined | IResponseLog;
}

export const registerOperation = (user: IRegister) => async (
  dispatch: Dispatch<IAction>,
) => {
  try {
    dispatch(setLoader());

    const res = await Api.requestAxiosAuth<IRegister, IResponseReg>(
      'users/register',
      user,
    );

    dispatch(register(res.data));
    console.log(res.data);
  } catch (error) {
    console.dir(error);
    // dispatch(setError(error));
  } finally {
    dispatch(unsetLoader());
  }
};

export const loginOperation = (user: ILogin) => async (
  dispatch: Dispatch<IAction>,
) => {
  try {
    dispatch(setLoader());
    const res = await Api.requestAxiosAuth<ILogin, IResponseLog>(
      'users/login',
      user,
    );
    Api.setToken(res.data.token);
    dispatch(login(res.data.user));
    dispatch(setToken(res.data.token));
  } catch (error) {
    console.dir(error);
    // dispatch(setError(error))
  } finally {
    dispatch(unsetLoader());
  }
};

export const getCurrentUserOperation = () => async (
  dispatch: Dispatch<IAction>,
  getState: () => IStore,
) => {
  const {
    auth: { token: hasToken },
  } = getState();
  if (!hasToken) {
    return;
  }
  console.log(hasToken);

  try {
    dispatch(setLoader());
    Api.setToken(hasToken);
    const res = await Api.requestAxiosCurrentUser<IResponseReg>();

    dispatch(current(res.data));
  } catch (error) {
    console.dir(error);
    // dispatch(setError(error))
  } finally {
    dispatch(unsetLoader());
  }
};

export const logoutOperation = () => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch(setLoader());
    const res = await Api.logoutAxiosUser();
    console.log(res);
    Api.unsetToken();
    dispatch(logout());
    dispatch(unsetToken());
  } catch (error) {
    console.dir(error);
    // dispatch(setError(error))
  } finally {
    dispatch(unsetLoader());
  }
};
