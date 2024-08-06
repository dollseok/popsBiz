import { useMutation } from '@tanstack/react-query';
import { sendEmail } from '../userAPI';
import { SendEmailInfo } from '@/types/user';
import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { emailErrorState, emailSentState } from '@/states/User';
import { useState } from 'react';

const useSendEmail = () => {
  const [emailInput, setEmailInput] = useState<string>('');

  // const setTimer = useSetRecoilState(timerState);
  const setEmailSent = useSetRecoilState(emailSentState);
  const setEmailError = useSetRecoilState(emailErrorState);
  const resetEmailError = useResetRecoilState(emailErrorState);

  return useMutation<apiSuccessType, apiErrorType, SendEmailInfo>({
    mutationFn: (data: SendEmailInfo) => {
      setEmailInput(data.email);
      return sendEmail(data);
    },
    onSuccess: data => {
      console.log(data);
      // 이메일 전송 성공
      resetEmailError();
      setEmailSent(true);
      sessionStorage.setItem('emailMessageId', data.payload.messageId);
    },
    onError: error => {
      const errorResponse = error.response.data;
      if (errorResponse.errorCode === 'COM_005') {
        setEmailError({
          state: true,
          message: errorResponse.errorMessage,
        });
      }
    },
  });
};

export { useSendEmail };
