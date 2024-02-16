import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { CertEmailInfo } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { CertEmail } from '../userAPI';
import { useSetRecoilState } from 'recoil';
import {
  emailCertState,
  emailErrorMentionState,
  signupInfoState,
  timerState,
} from '@/states/User';
import { useState } from 'react';

const useCertEmail = () => {
  const [targetEmail, setTargetEmail] = useState<string>('');
  const setCertEmail = useSetRecoilState(emailCertState);
  const setSignupInfo = useSetRecoilState(signupInfoState);
  const setTimerStart = useSetRecoilState(timerState);
  const setEmailMention = useSetRecoilState(emailErrorMentionState);

  return useMutation<apiSuccessType, apiErrorType, CertEmailInfo>({
    mutationFn: (data: CertEmailInfo) => {
      setTargetEmail(data.targetEmail);
      return CertEmail(data);
    },
    onSuccess: data => {
      console.log(data);
      // 이메일 인증 성공
      if (data.result === 'success') {
        setCertEmail(true);
        setTimerStart(false);
        setEmailMention('');
        setSignupInfo(prev => ({ ...prev, email: targetEmail }));
      }
      // 이메일 인증 실패
      else if (data.result === 'error') {
        if (data.errorCode === 'COM_002') {
          setEmailMention('인증 코드가 올바르지 않습니다. 다시 입력해주세요.');
        }
        //TODO: 인증 코드 만료 시 코드
        // else if (data.errorCode === '??') {
        //   setEmailMention('만료된 인증 코드입니다. 인증 메일을 다시 전송해주세요.');
        // }
      }
    },
    onError: () => {},
  });
};

export { useCertEmail };
