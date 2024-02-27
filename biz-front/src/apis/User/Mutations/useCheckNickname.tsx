import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { useMutation } from '@tanstack/react-query';
import { CheckNickname } from '../userAPI';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  nicknameErrorState,
  nicknamePassState,
  signupInfoState,
  signupModeState,
  socialSignupInfoState,
} from '@/states/User';
import { useState } from 'react';

const useCheckNickname = () => {
  const setNicknameError = useSetRecoilState(nicknameErrorState);
  const setSignupInfo = useSetRecoilState(signupInfoState);
  const setSocialSignupInfo = useSetRecoilState(socialSignupInfoState);
  const signupMode = useRecoilValue(signupModeState);

  const setNicknamePass = useSetRecoilState(nicknamePassState);
  const [tmpNickname, setTmpNickname] = useState<string>('');

  return useMutation<apiSuccessType, apiErrorType, string>({
    mutationFn: (nickname: string) => {
      setTmpNickname(nickname);
      return CheckNickname(nickname);
    },
    onSuccess: data => {
      console.log(data);
      if (data.result === 'error') {
        setNicknameError('중복된 닉네임입니다. 다른 닉네임을 입력해주세요.');
      } else {
        setNicknamePass(true);
        if (signupMode === 'basic') {
          setSignupInfo(prev => ({ ...prev, nickname: tmpNickname }));
        } else if (signupMode === 'social') {
          setSocialSignupInfo(prev => ({ ...prev, nickname: tmpNickname }));
        }
      }
    },
    onError: () => {},
  });
};

export { useCheckNickname };
