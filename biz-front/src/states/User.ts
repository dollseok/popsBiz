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
    profileName: '',
    hasProfileImage: false,
    allowEmailMarketing: false,
    phoneNumber: '',
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

export const profileImageState = atom<Blob | null>({
  key: 'profileImageState',
  default: null,
});

// 상태 관련

export const emailCertState = atom<boolean>({
  key: 'emailCertState',
  default: false,
});

export const emailSentState = atom<boolean>({
  key: 'emailSentState',
  default: false,
});

export const messageSentState = atom<boolean>({
  key: 'messageSentState',
  default: false,
});

export const agreementState = atom<boolean>({
  key: 'agreementState',
  default: false,
});

export const profileNamePassState = atom<boolean>({
  key: 'profileNamePassState',
  default: false,
});

export const phoneNumberState = atom<boolean>({
  key: 'phoneNumberState',
  default: false,
});

export const loginState = atom<boolean>({
  key: 'loginState',
  default: true,
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

export const profileNameErrorState = atom<ErrorStateType>({
  key: 'profileNameErrorState',
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

export const phoneNumberErrorState = atom<ErrorStateType>({
  key: 'phoneNumberErrorState',
  default: {
    state: false,
    message: '',
  },
});
