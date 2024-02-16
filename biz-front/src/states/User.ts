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

export const nicknameErrorState = atom<string>({
  key: 'nicknameErrorState',
  default: '',
});

export const loginErrorState = atom<string>({
  key: 'loginErrorState',
  default: '',
});

export const emailErrorMentionState = atom<string>({
  key: 'emailErrorMentionState',
  default: '',
});
