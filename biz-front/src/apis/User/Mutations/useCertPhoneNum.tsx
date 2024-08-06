import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { CertInfo } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { CertPhoneNum } from '../userAPI';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import {
  messageSentState,
  phoneNumberErrorState,
  phoneNumberState,
  signupInfoState,
} from '@/states/User';
import { useState } from 'react';

const useCertPhoneNum = () => {
  const [targetPhoneNum, setTargetPhoneNum] = useState<string>('');

  const setPhoneNumberCert = useSetRecoilState(phoneNumberState);
  const setTimerState = useSetRecoilState(messageSentState);
  const setPhoneNumberError = useSetRecoilState(phoneNumberErrorState);
  const resetPhoneNumCertError = useResetRecoilState(phoneNumberErrorState);
  const setSignupInfo = useSetRecoilState(signupInfoState);

  return useMutation<apiSuccessType, apiErrorType, CertInfo>({
    mutationFn: (data: CertInfo) => {
      setTargetPhoneNum(data.info);
      return CertPhoneNum(data);
    },
    onSuccess: data => {
      console.log('성공', data);

      setPhoneNumberCert(true);
      setTimerState(false);
      resetPhoneNumCertError();
      setSignupInfo(prev => ({ ...prev, phoneNumber: targetPhoneNum }));
    },
    onError: error => {
      const errorResponse = error.response.data;
      console.log('에러', errorResponse);
      if (errorResponse.error === '') {
        setPhoneNumberError({
          state: true,
          message: '인증 코드가 올바르지 않습니다. 다시 입력해주세요.',
        });
      }
    },
  });
};

export default useCertPhoneNum;
