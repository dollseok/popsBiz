import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { addLogin } from '../userAPI';
import { UserLoginInfoType } from '@/types/user';
import { currentUserState, loginErrorState, loginState } from '@/states/User';
import { apiErrorType, apiSuccessType } from '@/types/apiResponse';
import { useState } from 'react';

const useAddLogin = (redirectPath: string) => {
  const [tmpUser, setTmpUser] = useState<UserLoginInfoType>();
  const setUser = useSetRecoilState(currentUserState);
  const setLoginError = useSetRecoilState(loginErrorState);
  const setLogin = useSetRecoilState(loginState);
  const navigate = useNavigate();

  return useMutation<apiSuccessType, apiErrorType, UserLoginInfoType>({
    mutationFn: (user: UserLoginInfoType) => {
      setTmpUser(user);
      console.log(user);
      return addLogin(user);
    },
    onSuccess: data => {
      // 로그인 성공
      if (data.result === 'success') {
        const successData = data.payload;
        localStorage.setItem('accessToken', successData.accessToken);
        localStorage.setItem('nickname', successData.nickname);
        localStorage.setItem('profileImage', successData.profileImage);
        setUser(successData); // 현재 유저의 데이터 accessToken, profileImage, nickname
        setLogin(true); // 로그인 상태 설정
        setLoginError(''); // 로그인 에러 상태 설정
        navigate(redirectPath); //리 랜더링
      }
      // 로그인 실패
      else if (data.result === 'error') {
        // 파라미터 오류
        if (data.errorCode === 'COM_001') {
          if (tmpUser?.email === '') {
            setLoginError('가입한 이메일을 입력하세요.');
          } else if (tmpUser?.password === '') {
            setLoginError('비밀번호를 입력하세요.');
          }
        }
        // 데이터 오류
        else if (data.errorCode === 'EBA_001') {
          setLoginError('이메일 또는 비밀번호가 틀립니다. 다시 입력해주세요.');
        }
      }
    },
    onError: () => {
      console.log('로그인 api의 오류입니다.');
    },
  });
};

export { useAddLogin };
