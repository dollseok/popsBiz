import Button from '@/components/atoms/Button/Button';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { GoBackNavComp } from '@/components/molecules/SignupPage/GoBackNavComp';
import { SignupComp } from '@/components/organisms/SignupPage/SignupComp';
import { UserdataComp } from '@/components/organisms/SignupPage/UserdataComp';
import { signupInfoState } from '@/states/User';
import { useRecoilValue } from 'recoil';

const SignupPage = () => {
  const signupInfo = useRecoilValue(signupInfoState);

  const handleSignupClick = () => {
    console.log(signupInfo);
  };

  return (
    <>
      <Wrapper $size="Signup" option="Center">
        <GoBackNavComp />
        <SignupComp />
        <UserdataComp />
        <Button onClick={handleSignupClick}>회원 가입</Button>
      </Wrapper>
    </>
  );
};

export default SignupPage;
