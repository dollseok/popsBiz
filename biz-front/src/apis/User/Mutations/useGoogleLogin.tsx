import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { googleLoginInfoType } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { googleLogin } from '../userAPI';
import { useSetRecoilState } from 'recoil';
import { socialSignupInfoState } from '@/states/User';
import { useNavigate } from 'react-router';
import { PATH } from '@/constants/path';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';

const useGoogleLogin = () => {
  const setSocialSignupInfoState = useSetRecoilState(socialSignupInfoState);
  const [googleIdToken, setGoogleIdToken] = useState<string>('');

  const navigate = useNavigate();

  const handleRouter = (url: string): void => {
    navigate(url);
  };

  return useMutation<apiSuccessType, apiErrorType, googleLoginInfoType>({
    mutationFn: (data: googleLoginInfoType) => {
      setGoogleIdToken(data.idToken);
      return googleLogin(data);
    },
    onSuccess: data => {
      console.log('useGoogleLogin 최종:', data);
      setSocialSignupInfoState(prev => ({
        ...prev,
        googleIdToken: googleIdToken,
      }));
      // 이미 멤버일 때
      if (data.payload.isMember) {
        console.log('이미 멤버');
        localStorage.setItem('accessToken', data.payload.accessToken);
        localStorage.setItem('nickname', data.payload.nickname);
        localStorage.setItem('profileImage', data.payload.profileImage);
        handleRouter(PATH.ROOT);
      }
      // 멤버가 아니였을 때
      else {
        handleRouter(PATH.SOCIALSIGNUP);
      }
    },
    onError: () => {},
  });
};

export { useGoogleLogin };
