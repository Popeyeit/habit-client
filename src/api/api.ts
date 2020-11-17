import axios, { AxiosResponse } from 'axios';
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
};

export default Api;
