import { useGetGoogleAccessToken } from '@/apis/User/Mutations/useGetGoogleAccessToken';
import { useGoogleLogin } from '@/apis/User/Mutations/useGoogleLogin';
import Button from '@/components/atoms/Button/Button';
import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const SocialLoginPage = () => {
  const location = useLocation();
  const param = new URLSearchParams(location.search);

  const getGoogleAccessToken = useGetGoogleAccessToken();

  useEffect(() => {
    const code = param.get('code');
    const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const client_secret = process.env.REACT_APP_GOOGLE_CLIENT_SECRET;
    const redirect_uri = 'http://localhost:3000/sociallogin';
    const grant_type = 'authorization_code';

    if (code) {
      // 구글의 Access Token 요청
      getGoogleAccessToken.mutate({
        code: code,
        client_id: client_id,
        client_secret: client_secret,
        redirect_uri: redirect_uri,
        grant_type: grant_type,
      });
    }
  }, []);

  return <>임시페이지입니다.</>;
};
export default SocialLoginPage;
