import { UserLoginInfoType } from '@/states/UserInfoAtoms';
import { instance } from '../instance';

const addLogin = async (data: UserLoginInfoType) => {
  try {
    const response = await instance.post('/biz-web/v1/auth/login/email', data);
    return response.data.payload;
  } catch {
    new Error('login error');
  }
};

export { addLogin };
