import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { CertInfo } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { CertEmail } from '../userAPI';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import {
  emailCertState,
  emailErrorState,
  emailSentState,
  signupInfoState,
} from '@/states/User';
import { useState } from 'react';

const useCertEmail = () => {
  const [targetEmail, setTargetEmail] = useState<string>('');

  const setCertEmail = useSetRecoilState(emailCertState);
  // const setTimerStart = useSetRecoilState(timerState);
  const setTimerState = useSetRecoilState(emailSentState);
  const setEmailError = useSetRecoilState(emailErrorState);
  const resetEmailError = useResetRecoilState(emailErrorState);
  const setSignupInfo = useSetRecoilState(signupInfoState);

  return useMutation<apiSuccessType, apiErrorType, CertInfo>({
    mutationFn: (data: CertInfo) => {
      setTargetEmail(data.info);
      console.log(data);
      return CertEmail(data);
    },
    onSuccess: data => {
      console.log(data);
      // 이메일 인증 성공
      setCertEmail(true);
      setTimerState(false);
      resetEmailError();
      setSignupInfo(prev => ({ ...prev, email: targetEmail }));
    },
    onError: error => {
      const errorResponse = error.response.data;
      if (errorResponse.error === 'AuthenticationException') {
        setEmailError({
          state: true,
          message: '인증 코드가 올바르지 않습니다. 다시 입력해주세요.',
        });
      }
      if (errorResponse.error === 'expired_email') {
        setEmailError({
          state: true,
          message: '인증시간이 지났습니다. 이메일 인증을 재시도 해주세요.',
        });
      }
    },
  });
};

export { useCertEmail };
