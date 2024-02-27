import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { googleLoginInfoType } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { googleLogin } from '../userAPI';
import { useSetRecoilState } from 'recoil';
import { socialSignupInfoState } from '@/states/User';
import { useNavigate } from 'react-router';
import { PATH } from '@/constants/path';

const useGoogleLogin = () => {
  const setSocialSignupInfoState = useSetRecoilState(socialSignupInfoState);

  const navigate = useNavigate();

  const handleRouter = (url: string): void => {
    navigate(url);
  };

  return useMutation<apiSuccessType, apiErrorType, googleLoginInfoType>({
    mutationFn: (data: googleLoginInfoType) => {
      return googleLogin(data);
    },
    onSuccess: data => {
      console.log('useGoogleLogin 최종:', data);
      setSocialSignupInfoState(prev => ({
        ...prev,
        googleIdToken: data.payload.googleAccessToken,
      }));
      console.log(data.payload.googleAccessToken);
      // 이미 멤버일 때
      if (data.payload.isMember) {
        // 엑세스 토큰 저장
        // handleRouter(PATH.ROOT)
        console.log('이미 멤버');
      }
      // 멤버가 아니였을 때
      else {
        // 소셜 회원 가입 페이지 이동
        handleRouter(PATH.SOCIALSIGNUP);
      }
    },
    onError: () => {},
  });
};

export { useGoogleLogin };
