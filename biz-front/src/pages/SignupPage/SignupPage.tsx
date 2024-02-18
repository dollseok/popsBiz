import { useSignupEmail } from '@/apis/User/Mutations/useSignupEmail';
import { Box } from '@/components/atoms/Box/Box.styles';
import Button from '@/components/atoms/Button/Button';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { GoBackNavComp } from '@/components/molecules/SignupPage/GoBackNavComp';
import { SignupComp } from '@/components/organisms/SignupPage/SignupComp';
import { UserdataComp } from '@/components/organisms/SignupPage/UserdataComp';
import { agreementState, signupInfoState } from '@/states/User';
import { useRecoilValue } from 'recoil';

const SignupPage = () => {
  const signupInfo = useRecoilValue(signupInfoState); // 회원가입에 요구되는 데이터
  const agreement = useRecoilValue(agreementState); // 필수 동의 데이터

  const signupEmailMutation = useSignupEmail();

  const handleSignupClick = () => {
    console.log(signupInfo);
    console.log(agreement);
    if (agreement) {
      signupEmailMutation.mutate(signupInfo);
    }
  };

  return (
    <>
      <Wrapper $size="Signup" option="Center">
        <GoBackNavComp />
        <SignupComp />
        <Box $option="greyLine"></Box>
        <UserdataComp />
        <Button onClick={handleSignupClick}>회원 가입</Button>
      </Wrapper>
    </>
  );
};

export default SignupPage;
