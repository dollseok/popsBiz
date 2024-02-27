import { apiErrorType, googleSuccessType } from '@/types/apiResponse';
import { getGoogleAccessTokenInfoType } from '@/types/user';
import { useMutation } from '@tanstack/react-query';
import { getGoogleAccessToken } from '../userAPI';
import { useGoogleLogin } from './useGoogleLogin';
import { jwtDecode } from 'jwt-decode';

interface decodeType {
  at_hash: string;
  aud: string;
  azp: string;
  email: string;
  email_verified: boolean;
  exp: number;
  iat: number;
  iss: string;
  sub: string;
}

const useGetGoogleAccessToken = () => {
  const googleLogin = useGoogleLogin();

  return useMutation<
    googleSuccessType,
    apiErrorType,
    getGoogleAccessTokenInfoType
  >({
    mutationFn: (data: getGoogleAccessTokenInfoType) => {
      return getGoogleAccessToken(data);
    },
    onSuccess: async (data: googleSuccessType) => {
      const accessToken = data.id_token;
      const decoded: decodeType = jwtDecode(accessToken);
      // 구글 로그인 진행
      if (decoded.email && accessToken) {
        googleLogin.mutate({ email: decoded.email, idToken: accessToken });
      }
    },
    onError: () => {},
  });
};

export { useGetGoogleAccessToken };
