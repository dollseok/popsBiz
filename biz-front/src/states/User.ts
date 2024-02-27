import {
  CurrentUserType,
  ErrorStateType,
  SignupUserType,
  SocialSignupUserType,
} from '@/types/user';
import { atom } from 'recoil';

export const currentUserState = atom<CurrentUserType>({
  key: 'user',
  default: {
    accessToken: '',
    profileImage: '',
    nickname: '',
  },
});

export const signupInfoState = atom<SignupUserType>({
  key: 'signupInfoState',
  default: {
    email: '',
    password: '',
    nickname: '',
    profileKey: '',
    allowEmailMarketing: false,
  },
});

export const socialSignupInfoState = atom<SocialSignupUserType>({
  key: 'socialSignupInfoState',
  default: {
    googleIdToken: '',
    nickname: '',
    profileKey: '',
    AllowEmailMarketing: false,
  },
});

export const signupModeState = atom<string>({
  key: 'signupModeState',
  default: 'basic',
});

// 상태 관련

export const emailCertState = atom<boolean>({
  key: 'emailCertState',
  default: false,
});

export const timerState = atom<boolean>({
  key: 'timerState',
  default: false,
});

export const agreementState = atom<boolean>({
  key: 'agreementState',
  default: false,
});

export const nicknamePassState = atom<boolean>({
  key: 'nicknamePassState',
  default: false,
});

export const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
});

// 에러 상태

export const loginErrorState = atom<ErrorStateType>({
  key: 'loginErrorState',
  default: {
    state: false,
    message: '',
  },
});

export const emailErrorState = atom<ErrorStateType>({
  key: 'emailErrorState',
  default: {
    state: false,
    message: '',
  },
});

export const passwordErrorState = atom<ErrorStateType>({
  key: 'passwordErrorState',
  default: {
    state: false,
    message: '',
  },
});

export const imageErrorState = atom<ErrorStateType>({
  key: 'imageErrorState',
  default: {
    state: false,
    message: '',
  },
});

export const nicknameErrorState = atom<ErrorStateType>({
  key: 'nicknameErrorState',
  default: {
    state: false,
    message: '',
  },
});

export const agreeErrorState = atom<ErrorStateType>({
  key: 'agreeErrorState',
  default: {
    state: false,
    message: '',
  },
});
