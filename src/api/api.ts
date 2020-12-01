import axios, { AxiosResponse } from 'axios';
import { TInitState } from '../redux/habits/slice';
import { IChangeBody } from '../redux/habits/operation';

axios.defaults.baseURL = 'https://make-it-habit-server.herokuapp.com/api/';

const Api = {
  setToken(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unsetToken() {
    axios.defaults.headers.common.Authorization = '';
  },
  async requestAxiosAuth<D, T>(url: string, data: D) {
    const res: AxiosResponse<T> = await axios.post(url, data);
    return res;
  },
  async requestAxiosCurrentUser<T>() {
    const res: AxiosResponse<T> = await axios.get('users/current');
    return res;
  },
  async logoutAxiosUser() {
    const res = await axios.post('users/logout');
    return res;
  },
  async getAxiosHabits<T>(currentDate: T) {
    const res: AxiosResponse<TInitState> = await axios.get(
      `habits?currentDate=${currentDate}`,
    );
    return res;
  },
  async createAxiosHabit<T>(body: T) {
    const res: AxiosResponse<TInitState> = await axios.post('habits', body);
    return res;
  },

  async changeAxiosHabit(body: IChangeBody) {
    const res: AxiosResponse<TInitState> = await axios.patch(
      `habits/${body.idHabit}/${body.idDate}`,
      { status: body.isDone },
    );
    return res;
  },
};

export default Api;
