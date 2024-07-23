import { instance } from '../instance';
import { imageInstance } from '../imageInstance';

import {
  CertInfo,
  SendEmailInfo,
  SendTextInfoType,
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
  } catch (error) {
    console.log('login error');
    throw error;
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
  } catch (error) {
    console.log('send email error');
    throw error;
  }
};

// 인증 코드 메일 인증
const CertEmail = async (data: CertInfo) => {
  try {
    const response = await instance.post(
      '/biz-web/v1/auth/cert/email/code',
      data
    );
    return response.data;
  } catch (error) {
    console.log('certificate email Error');
    throw error;
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
  } catch (error) {
    console.log('sign up with email Error');
    throw error;
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
  } catch (error) {
    console.log('sign up with Social error');
    throw error;
  }
};

// 닉네임 중복검사
const CheckNickname = async (nickname: string) => {
  try {
    const response = await instance.get(
      `/biz-web/v1/user/check/profileName/${nickname}`
    );
    return response.data;
  } catch (error) {
    console.log('nickname double check Error');
    throw error;
  }
};

// 이미지를 업로드 하기 위한 presigned url 생성
const getPresignedUrl = async () => {
  try {
    const response = await instance.get(
      `/biz-web/v1/file/upload/url?type=profile&count=1`
    );
    return response.data.payload;
  } catch (error) {
    console.log('get Presigned URL Error');
    throw error;
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
  } catch (error) {
    console.log('upload Image error');
    throw error;
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
  } catch (error) {
    console.log('google Login error');
    throw error;
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
  } catch (error) {
    console.log('get google access Token error');
    throw error;
  }
};

// 핸드폰 번호 전송
const sendText = async (data: SendTextInfoType) => {
  try {
    const response = await instance.post('/biz-web/v1/sms/auth-code', data);
    return response.data;
  } catch (error) {
    console.log('send Text message Error');
    throw error;
  }
};

// 핸드폰 인증
const CertPhoneNum = async (data: CertInfo) => {
  try {
    const response = await instance.post(
      '/biz-web/v1/auth/cert/phone/code',
      data
    );
    return response.data;
  } catch (error) {
    console.log('certification PhoneNumber Error');
    throw error;
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
  sendText,
  CertPhoneNum,
};
