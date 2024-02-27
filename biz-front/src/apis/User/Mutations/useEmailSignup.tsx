import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { SignupUserType } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { SignupEmail } from '../userAPI';
import { useNavigate } from 'react-router';
import { PATH } from '@/constants/path';
import { signupInfoState } from '@/states/User';
import { useRecoilValue } from 'recoil';

const useEmailSignup = () => {
  const navigate = useNavigate();
  const signupInfo = useRecoilValue(signupInfoState); // 회원가입에 요구되는 데이터

  return useMutation<apiSuccessType, apiErrorType, SignupUserType>({
    mutationFn: data => {
      console.log(signupInfo);
      console.log('이메일로 회원가입 데이터', data);
      return SignupEmail(data);
    },
    onSuccess: data => {
      console.log(data);
      // 에러에 따른 리턴
      if (data.result === 'error') {
        console.log('회원 가입 실패');
      }
      // 성공에 따른 리턴
      else {
        console.log('회원 가입 성공');
        // TODO: 자동 로그인? 할거인지
        // navigate(PATH.ROOT);
      }
    },
    onError: () => {},
  });
};

export { useEmailSignup };
