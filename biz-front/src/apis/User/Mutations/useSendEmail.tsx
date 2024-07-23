import { useMutation } from '@tanstack/react-query';
import { sendEmail } from '../userAPI';
import { SendEmailInfo } from '@/types/user';
import { apiSuccessType } from '@/types/apiResponse';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { emailErrorState, emailSentState } from '@/states/User';
import { useState } from 'react';

const useSendEmail = () => {
  const [emailInput, setEmailInput] = useState<string>('');

  // const setTimer = useSetRecoilState(timerState);
  const setEmailSent = useSetRecoilState(emailSentState);
  const setEmailError = useSetRecoilState(emailErrorState);
  const resetEmailError = useResetRecoilState(emailErrorState);

  return useMutation<apiSuccessType, unknown, SendEmailInfo>({
    mutationFn: (data: SendEmailInfo) => {
      setEmailInput(data.email);
      return sendEmail(data);
    },
    onSuccess: data => {
      console.log(data);
      // 이메일 전송 성공
      if (data.result === 'success') {
        resetEmailError();
        setEmailSent(true);
        sessionStorage.setItem('emailMessageId', data.payload.messageId);
      }
      // 이메일 전송 실패
      else if (data.result === 'error') {
        // 이메일 형식 오류
        if (data.errorCode === 'COM_001') {
          // 이메일 미입력
          if (emailInput === '') {
            setEmailError({ state: true, message: '이메일을 입력해주세요.' });
          }
          // 이메일 형석 오류
          else {
            setEmailError({
              state: true,
              message: '이메일 형식이 올바르지 않습니다.',
            });
          }
        }
      }
    },
    onError: () => {},
  });
};

export { useSendEmail };
