import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { SignupEmailInfo } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { SignupEmail } from '../userAPI';
import { useNavigate } from 'react-router';
import { PATH } from '@/constants/path';

const useSignupEmail = () => {
  const navigate = useNavigate();

  return useMutation<apiSuccessType, apiErrorType, SignupEmailInfo>({
    mutationFn: data => {
      return SignupEmail(data);
    },
    onSuccess: data => {
      console.log(data);
      // 에러에 따른 리턴
      if (data.result === 'error') {
        console.log('에러');
      }
      // 성공에 따른 리턴
      else {
        console.log('성공');
        // TODO: 자동 로그인? 할거인지
        navigate(PATH.ROOT);
      }
    },
    onError: () => {},
  });
};

export { useSignupEmail };
