// api
export interface UserLoginInfoType {
  email: string;
  password: string;
}

export interface SendEmailInfo {
  targetEmail: string;
}

export type CertEmailInfo = {
  targetEmail: string;
  authCode: string;
  sendId: string | null;
};

export interface AgreeDataType {
  checkBoxId: string;
  mention: string;
  detailContent: string;
  checked: boolean;
}

export interface uploadImageType {
  url: string;
  blob: Blob;
}

export interface googleLoginInfoType {
  email: string;
  idToken: string;
}

export interface getGoogleAccessTokenInfoType {
  code: string;
  client_id: string | undefined;
  client_secret: string | undefined;
  redirect_uri: string;
  grant_type: string;
}

// recoil type

export interface SignupUserType {
  email: string;
  password: string;
  nickname: string;
  profileKey: string;
  allowEmailMarketing: boolean;
}

export interface CurrentUserType {
  accessToken: string;
  profileImage: string;
  nickname: string;
}

export interface SocialSignupUserType {
  googleIdToken: string;
  nickname: string;
  profileKey: string;
  AllowEmailMarketing: boolean;
}

// error state type

export interface ErrorStateType {
  state: boolean;
  message: string;
}
