import { instance } from '../instance';
import { imageInstance } from '../imageInstance';

import {
  CertEmailInfo,
  SendEmailInfo,
  SignupUserType,
  SocialSignupUserType,
  UserLoginInfoType,
  getGoogleAccessTokenInfoType,
  googleLoginInfoType,
  uploadImageType,
} from '@/types/user';

const addLogin = async (data: UserLoginInfoType) => {
  try {
    const response = await instance.post('/biz-web/v1/auth/login/email', data);
    return response.data;
  } catch {
    new Error('login error');
  }
};

// 인증 코드 메일 발송
const sendEmail = async (data: SendEmailInfo) => {
  try {
    const response = await instance.post(
      '/biz-web/v1/mail/auth-code',
      data // target Email
    );
    return response.data;
  } catch {
    new Error('send email error');
  }
};

// 인증 코드 메일 인증
const CertEmail = async (data: CertEmailInfo) => {
  try {
    const response = await instance.post(
      '/biz-web/v1/auth/cert/email/code',
      data
    );
    return response.data;
  } catch {
    new Error('certificate email error');
  }
};

// 이메일로 회원 가입

const SignupEmail = async (data: SignupUserType) => {
  try {
    const response = await instance.post(
      '/biz-web/v1/auth/sign-up/email',
      data
    );
    return response.data;
  } catch {
    new Error('sign up with email error');
  }
};

// 소셜 회원 가입
const SignupSocial = async (data: SocialSignupUserType) => {
  try {
    const response = await instance.post(
      '/biz-web/v1/auth/sign-up/google',
      data
    );
    return response.data;
  } catch {
    new Error('sign up with Social error');
  }
};

// 닉네임 중복검사
const CheckNickname = async (nickname: string) => {
  const response = await instance.get(
    `/biz-web/v1/va/check/nickname/${nickname}`
  );
  return response.data;
};

// 이미지를 업로드 하기 위한 presigned url 생성
const getPresignedUrl = async () => {
  try {
    const response = await instance.get(
      `/biz-web/v1/common/upload/url?type=profile&count=1`
    );
    return response.data.payload;
  } catch {
    new Error('get Presigned URL Error');
  }
};

const uploadProfileImage = async (
  data: uploadImageType
): Promise<number | undefined> => {
  try {
    console.log(data.url);
    console.log(data.blob);
    const response = await imageInstance.put(data.url, data.blob);
    return response.status;
  } catch {
    new Error('upload Image error');
  }
};

// 비밀번호 재설정 이메일 발송
// 비밀번호 재설정 페이지 진입 전 체크
// 비밀번호 변경 요청

// 구글로 로그인 요청
const googleLogin = async (data: googleLoginInfoType) => {
  try {
    const response = await instance.post('/biz-web/v1/auth/login/google', data);
    return response.data;
  } catch {
    new Error('google Login error');
  }
};

// 구글로 회원가입 정보 저장 요청

// 구글
const getGoogleAccessToken = async (data: getGoogleAccessTokenInfoType) => {
  try {
    const response = await instance.post(
      'https://oauth2.googleapis.com/token',
      data
    );
    return response.data;
  } catch {
    new Error('get google access Token error');
  }
};

export {
  addLogin,
  sendEmail,
  CertEmail,
  CheckNickname,
  SignupEmail,
  SignupSocial,
  getPresignedUrl,
  uploadProfileImage,
  googleLogin,
  getGoogleAccessToken,
};
