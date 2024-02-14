import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { CertEmailInfo } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { CertEmail } from '../userAPI';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  emailCertFailState,
  emailCertState,
  signupInfoState,
  timerStartState,
} from '@/states/User';
import { useState } from 'react';

const useCertEmail = () => {
  const [targetEmail, setTargetEmail] = useState<string>('');
  const setCertEmail = useSetRecoilState(emailCertState);
  const setSignupInfo = useSetRecoilState(signupInfoState);
  const [timerStart, setTimerStart] = useRecoilState(timerStartState);
  const [emailCertFail, setEmailCertFail] = useRecoilState(emailCertFailState);

  return useMutation<apiSuccessType, apiErrorType, CertEmailInfo>({
    mutationFn: (data: CertEmailInfo) => {
      setTargetEmail(data.targetEmail);
      return CertEmail(data);
    },
    onSuccess: data => {
      console.log(data);
      if (data.result === 'success') {
        setCertEmail(true);
        setTimerStart(!timerStart);
        setEmailCertFail(false);
        setSignupInfo(prev => ({ ...prev, email: targetEmail }));
      } else if (data.result === 'error') {
        setEmailCertFail(true);
      }
    },
    onError: () => {},
  });
};

export { useCertEmail };
