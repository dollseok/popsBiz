import { CurrentUserType, SignupUserType } from '@/types/user';
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

// 상태 관련

export const emailCertState = atom<boolean>({
  key: 'emailCertState',
  default: false,
});

export const emailCertFailState = atom<boolean>({
  key: 'emailCertFailState',
  default: false,
});

export const timerStartState = atom<boolean>({
  key: 'timerStartState',
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

// 에러 상태

export const nicknameErrorState = atom<string>({
  key: 'nicknameErrorState',
  default: '',
});
