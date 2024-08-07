import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { addLogin } from '../userAPI';
import { UserLoginInfoType } from '@/types/user';
import { currentUserState, loginErrorState, loginState } from '@/states/User';
import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { useState } from 'react';

const useAddLogin = (redirectPath: string) => {
  const [tmpUser, setTmpUser] = useState<UserLoginInfoType>();
  const setUser = useSetRecoilState(currentUserState);
  const setLoginError = useSetRecoilState(loginErrorState);
  const resetLoginError = useResetRecoilState(loginErrorState);
  const setLogin = useSetRecoilState(loginState);
  const navigate = useNavigate();

  return useMutation<apiSuccessType, apiErrorType, UserLoginInfoType>({
    mutationFn: (user: UserLoginInfoType) => {
      setTmpUser(user);
      return addLogin(user);
    },
    onSuccess: data => {
      const successData = data.payload;
      localStorage.setItem('accessToken', successData.accessToken);
      localStorage.setItem('nickname', successData.nickname);
      localStorage.setItem('profileImage', successData.profileImage);
      setUser(successData); // 현재 유저의 데이터 accessToken, profileImage, nickname
      setLogin(true); // 로그인 상태 설정
      resetLoginError();
      navigate(redirectPath); //리 랜더링
    },
    onError: error => {
      const errorResponse = error.response.data;
      console.log('로그인 api의 오류입니다.');
      // 파라미터 오류
      if (errorResponse.errorCode === 'COM_001') {
        if (tmpUser?.password === '') {
          setLoginError({
            state: true,
            message: '비밀번호를 입력하세요.',
          });
        } else if (tmpUser?.email === '') {
          setLoginError({
            state: true,
            message: '가입한 이메일을 입력하세요.',
          });
        } else {
          setLoginError({
            state: true,
            message: '이메일 형태에 맞게 입력하세요.',
          });
        }
      }
      // 데이터 오류
      else if (errorResponse.errorCode === 'EBA_001') {
        setLoginError({
          state: true,
          message: '이메일 또는 비밀번호가 틀립니다. 다시 입력해주세요.',
        });
      }
    },
  });
};

export { useAddLogin };
