import { atom } from 'recoil';

export interface UserLoginInfoType {
  userId: string;
  password: string;
}

export interface CurrentUserType {
  accessToken: string;
  profileImage: string;
  nickname: string;
}

export const userState = atom<CurrentUserType>({
  key: 'user',
  default: {
    accessToken: '',
    profileImage: '',
    nickname: '',
  },
});
