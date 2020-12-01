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

type ITypeLogOut = (dispatch: Dispatch<IAction>) => void;

export const registerOperation = (
  user: IRegister,
  onCloseAuth: () => void,
) => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch(setLoader());

    const res = await Api.requestAxiosAuth<IRegister, IResponseReg>(
      'users/register',
      user,
    );

    dispatch(register(res.data));
    setTimeout(() => {
      onCloseAuth();
    }, 1000);
  } catch (error) {
    // dispatch(setError(error));
  } finally {
    dispatch(unsetLoader());
  }
};

export const loginOperation = (user: ILogin, onCloseAuth: () => void) => async (
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
    setTimeout(() => {
      onCloseAuth();
    }, 1000);
  } catch (error) {
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

  try {
    dispatch(setLoader());
    Api.setToken(hasToken);
    const res = await Api.requestAxiosCurrentUser<IResponseReg>();

    dispatch(current(res.data));
  } catch (error) {
    if (error.response.status === 401) {
      Api.unsetToken();
      dispatch(logout());
      dispatch(unsetToken());
    }
    // dispatch(setError(error))
  } finally {
    dispatch(unsetLoader());
  }
};

export const logoutOperation = () => async (dispatch: Dispatch<IAction>) => {
  try {
    dispatch(setLoader());
    await Api.logoutAxiosUser();

    Api.unsetToken();
    dispatch(logout());
    dispatch(unsetToken());
  } catch (error) {
    // dispatch(setError(error))
  } finally {
    dispatch(unsetLoader());
  }
};
