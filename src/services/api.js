import axios from 'axios';
import { API_SERVER_URL } from '../config';

const instance = axios.create({
  baseURL: API_SERVER_URL,
});

export const applyToken = (token) => {
  // console.log('token: ', token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default instance;