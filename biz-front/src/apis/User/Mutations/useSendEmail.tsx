import { useMutation } from '@tanstack/react-query';
import { sendEmail } from '../userAPI';
import { SendEmailInfo } from '@/types/user';
import { apiSuccessType } from '@/types/apiResponse';
import { useSetRecoilState } from 'recoil';
import { emailErrorMentionState, timerState } from '@/states/User';
import { useState } from 'react';

const useSendEmail = () => {
  const [emailInput, setEmailInput] = useState<string>('');

  const setTimer = useSetRecoilState(timerState);
  const setEmailMention = useSetRecoilState(emailErrorMentionState);

  return useMutation<apiSuccessType, unknown, SendEmailInfo>({
    mutationFn: (data: SendEmailInfo) => {
      setEmailInput(data.targetEmail);
      return sendEmail(data);
    },
    onSuccess: data => {
      console.log(data);
      // 이메일 전송 성공
      if (data.result === 'success') {
        setEmailMention('');
        setTimer(true);
        sessionStorage.setItem('sendId', data.payload.sendId);
      }
      // 이메일 전송 실패
      else if (data.result === 'error') {
        if (data.errorCode === 'COM_001') {
          // 이메일 형식 오류
          if (emailInput === '') setEmailMention('이메일을 입력해주세요.');
          else setEmailMention('이메일 형식이 올바르지 않습니다.');
        }
        //TODO: 이메일 중복확인 코드
        // else if (data.errorCode ==='??') {
        //   setEmailMention('이미 가입한 이메일입니다.')
        // }
      }
    },
    onError: () => {},
  });
};

export { useSendEmail };
