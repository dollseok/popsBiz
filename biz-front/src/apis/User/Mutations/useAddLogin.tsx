import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { useRecoilState } from 'recoil';
import { addLogin } from '../userAPI';
import { CurrentUserType, UserLoginInfoType } from '@/types/user';
import { currentUserState } from '@/states/User';

const useAddLogin = (redirectPath: string) => {
  const [user, setUser] = useRecoilState(currentUserState);
  const navigate = useNavigate();

  return useMutation<CurrentUserType, unknown, UserLoginInfoType>({
    mutationFn: (user: UserLoginInfoType) => {
      return addLogin(user);
    },
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
