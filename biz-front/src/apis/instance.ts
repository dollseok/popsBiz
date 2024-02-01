import { PATH } from '@/constants/path';
import axios, { Axios, AxiosError, AxiosResponse } from 'axios';

const instance: Axios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config: any) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    };
    return config;
  },
  (error: AxiosError | Error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    console.log(error.response?.status);
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = PATH.ROOT;
    }
    return Promise.reject(error);
  }
);

export { instance };
