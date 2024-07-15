import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { useMutation } from '@tanstack/react-query';
import { CheckNickname } from '../userAPI';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import {
  profileNameErrorState,
  profileNamePassState,
  signupInfoState,
  signupModeState,
  socialSignupInfoState,
} from '@/states/User';
import { useState } from 'react';

const useCheckNickname = () => {
  const [tmpProfileName, setTmpProfileName] = useState<string>('');

  // recoil
  const setSignupInfo = useSetRecoilState(signupInfoState);
  const setSocialSignupInfo = useSetRecoilState(socialSignupInfoState);
  const setProfileNameError = useSetRecoilState(profileNameErrorState);
  const setProfileNamePass = useSetRecoilState(profileNamePassState);
  const resetProfileNameError = useResetRecoilState(profileNameErrorState);

  const signupMode = useRecoilValue(signupModeState);

  return useMutation<apiSuccessType, apiErrorType, string>({
    mutationFn: (profileName: string) => {
      setTmpProfileName(profileName);
      return CheckNickname(profileName);
    },
    onSuccess: data => {
      console.log(data);
      if (data.result === 'error') {
        setProfileNameError({
          state: true,
          message: '중복된 닉네임입니다. 다른 닉네임을 입력해주세요.',
        });
      } else {
        resetProfileNameError();
        setProfileNamePass(true);
        if (signupMode === 'basic') {
          setSignupInfo(prev => ({ ...prev, nickname: tmpProfileName }));
        } else if (signupMode === 'social') {
          setSocialSignupInfo(prev => ({ ...prev, nickname: tmpProfileName }));
        }
      }
    },
    onError: () => {},
  });
};

export { useCheckNickname };
