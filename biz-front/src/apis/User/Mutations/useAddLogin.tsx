import { PATH } from '@/constants/path';
import {
  CurrentUserType,
  UserLoginInfoType,
  userState,
} from '@/states/UserInfoAtoms';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { addLogin } from '../userAPI';

const useAddLogin = (redirectPath = PATH.ROOT) => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  return useMutation<CurrentUserType, unknown, UserLoginInfoType>({
    mutationFn: (user: UserLoginInfoType) => addLogin(user),
    onSuccess: data => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('nickname', data.nickname);
      localStorage.setItem('profileImage', data.profileImage);
      setUser(data);
      navigate(redirectPath);
    },
    onError: () => {
      console.log('로그인에 실패했습니다.');
    },
  });
};

export { useAddLogin };
