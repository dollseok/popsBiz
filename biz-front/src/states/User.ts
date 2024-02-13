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
