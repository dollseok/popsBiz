import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { GoBackNavComp } from '@/components/molecules/SignupPage/GoBackNavComp';
import { UserdataComp } from '@/components/organisms/SignupPage/UserdataComp';
import {
  agreementState,
  signupInfoState,
  signupModeState,
  socialSignupInfoState,
} from '@/states/User';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const SocialSignupPage = () => {
  const socialSignupInfo = useRecoilValue(socialSignupInfoState); // 회원가입에 요구되는 데이터
  const agreement = useRecoilValue(agreementState); // 필수 동의 데이터

  const setSignupMode = useSetRecoilState(signupModeState);

  const handleSignupClick = async () => {
    if (agreement) {
      if (
        socialSignupInfo.googleIdToken !== '' &&
        socialSignupInfo.nickname !== '' &&
        socialSignupInfo.profileKey !== ''
      )
        console.log('통과요');
      // signupEmail.mutate(signupInfo); // signup Social 만들어야함
    }
  };

  useEffect(() => {
    console.log('여기는 소셜 로그인 모드');
    setSignupMode('social');
  }, []);

  return (
    <>
      <Wrapper $size="Signup" option="Center">
        <GoBackNavComp />
        <Wrapper option="Column" $width="40rem">
          <Text
            size="heading"
            $marginBottom="57px"
            $marginRight="auto"
            $fontWeight="bold"
          >
            회원가입
          </Text>
        </Wrapper>
        <UserdataComp />
        <Button onClick={handleSignupClick}>회원 가입</Button>
      </Wrapper>
    </>
  );
};

export default SocialSignupPage;
