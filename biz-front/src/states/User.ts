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
