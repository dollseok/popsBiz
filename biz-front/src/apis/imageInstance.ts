import { PATH } from '@/constants/path';
import axios, { Axios, AxiosError, AxiosResponse } from 'axios';

const imageInstance: Axios = axios.create({
  baseURL: ``,

  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

// 응답 인터셉터
imageInstance.interceptors.response.use(
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

export { imageInstance };
