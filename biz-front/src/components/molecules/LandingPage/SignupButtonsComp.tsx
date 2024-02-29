import Button from '@/components/atoms/Button/Button';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router';

const SignupButtonsComp = () => {
  const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000/sociallogin';

  const navigate = useNavigate();

  const handleRouter = (url: string): void => {
    navigate(url);
  };

  const handleGooglelogin = () => {
    const googleOAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&scope=email&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = googleOAuthUrl;
  };

  return (
    <>
      <Wrapper option="Row" $width="363px">
        <Wrapper $marginLeft="auto" option="Row">
          <Button
            size="extraSmall"
            option="textButton"
            onClick={() => {
              handleRouter(PATH.SIGNUP);
            }}
          >
            회원가입
          </Button>
          <Button size="extraSmall" option="textButton">
            비밀번호 찾기
          </Button>
        </Wrapper>
      </Wrapper>

      <Button
        option="border"
        $marginBottom="10px"
        $marginTop="38px"
        onClick={() => {
          handleGooglelogin();
        }}
      >
        구글 이메일로 시작하기
      </Button>
      <Button option="border">페이스북으로 시작하기</Button>
    </>
  );
};

export { SignupButtonsComp };
