import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { SignupUserType } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { SignupEmail, uploadProfileImage } from '../userAPI';
import { useNavigate } from 'react-router';
import { PATH } from '@/constants/path';
import { useRecoilValue } from 'recoil';
import { profileImageState } from '@/states/User';

const useEmailSignup = () => {
  const navigate = useNavigate();

  const profileImage = useRecoilValue(profileImageState);

  const handleRouter = (url: string): void => {
    navigate(url);
  };

  return useMutation<apiSuccessType, apiErrorType, SignupUserType>({
    mutationFn: data => {
      return SignupEmail(data);
    },
    onSuccess: data => {
      // 성공에 따른 리턴
      console.log(data);
      // 프로필 이미지 저장
      if (profileImage) {
        console.log('이미지 저장 url', data.payload.url);
        uploadProfileImage({ url: data.payload.url, blob: profileImage });
      }
      // TODO: 자동 로그인? 할거인지
      handleRouter(PATH.ROOT);
    },
    onError: error => {
      const errorResponse = error.response.data;
      console.log(errorResponse);
      if (errorResponse.errorCode === 'COM_001') {
        console.log(errorResponse.errorMessage);
      }
      if (errorResponse.errorCode === 'COM_004') {
        console.log(errorResponse.errorMessage);
      }
    },
  });
};

export { useEmailSignup };
