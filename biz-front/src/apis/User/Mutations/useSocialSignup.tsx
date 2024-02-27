import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { SocialSignupUserType } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { SignupSocial } from '../userAPI';
import { useNavigate } from 'react-router';
import { PATH } from '@/constants/path';

const useSocialSignup = () => {
  const navigate = useNavigate();
  const handleRouter = (url: string): void => {
    navigate(url);
  };

  return useMutation<apiSuccessType, apiErrorType, SocialSignupUserType>({
    mutationFn: data => {
      return SignupSocial(data);
    },
    onSuccess: data => {
      console.log('회원가입 완료');
      handleRouter(PATH.ROOT);
    },
    onError: () => {},
  });
};

export { useSocialSignup };
