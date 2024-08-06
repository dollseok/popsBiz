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
      resetProfileNameError();
      setProfileNamePass(true);
      if (signupMode === 'basic') {
        setSignupInfo(prev => ({ ...prev, profileName: tmpProfileName }));
      } else if (signupMode === 'social') {
        setSocialSignupInfo(prev => ({ ...prev, profileName: tmpProfileName }));
      }
    },

    onError: error => {
      const errorResponse = error.response.data;
      if (errorResponse.errorCode === 'COM_005') {
        setProfileNameError({
          state: true,
          message: errorResponse.errorMessage,
        });
      }
      if (errorResponse.errorCode === 'COM_001') {
        setProfileNameError({
          state: true,
          message: errorResponse.errorMessage,
        });
      }
    },
  });
};

export { useCheckNickname };
