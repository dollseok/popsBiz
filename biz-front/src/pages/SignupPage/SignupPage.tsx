import { useEmailSignup } from '@/apis/User/Mutations/useEmailSignup';
import { Box } from '@/components/atoms/Box/Box.styles';
import Button from '@/components/atoms/Button/Button';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { GoBackNavComp } from '@/components/molecules/SignupPage/GoBackNavComp';
import { SignupComp } from '@/components/organisms/SignupPage/SignupComp';
import { UserdataComp } from '@/components/organisms/SignupPage/UserdataComp';
import {
  agreeErrorState,
  agreementState,
  emailCertState,
  emailErrorState,
  imageErrorState,
  nicknameErrorState,
  nicknamePassState,
  passwordErrorState,
  signupInfoState,
  timerState,
} from '@/states/User';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';

const SignupPage = () => {
  const signupInfo = useRecoilValue(signupInfoState); // 회원가입에 요구되는 데이터
  const agreement = useRecoilValue(agreementState); // 필수 동의 데이터

  const [emailError, setEmailError] = useRecoilState(emailErrorState);
  const [passwordError, setPasswordError] = useRecoilState(passwordErrorState);
  const [imageError, setImageError] = useRecoilState(imageErrorState);
  const [nicknameError, setNicknameError] = useRecoilState(nicknameErrorState);
  const [agreeError, setAgreeError] = useRecoilState(agreeErrorState);

  const resetEmailCertState = useResetRecoilState(emailCertState);
  const resetTimerState = useResetRecoilState(timerState);
  const resetAgreementState = useResetRecoilState(agreementState);
  const resetNicknamePassState = useResetRecoilState(nicknamePassState);
  const resetSignupInfo = useResetRecoilState(signupInfoState);

  const EmailSignup = useEmailSignup();

  // 페이지 렌더링 되었을 때 errorstate 전부 true로 -> 그래야 아무것도 아닐 때 회원가입 못하게 막음
  useEffect(() => {
    // 돌아왔을 때 데이터 리셋
    resetSignupInfo();

    // recoil 리셋
    resetEmailCertState();
    resetTimerState();
    resetAgreementState();
    resetNicknamePassState();

    // errorstate 설정
    setEmailError(prev => ({ ...prev, state: true }));
    setPasswordError(prev => ({ ...prev, state: true }));
    setImageError(prev => ({ ...prev, state: true }));
    setNicknameError(prev => ({ ...prev, state: true }));
    setAgreeError(prev => ({ ...prev, state: true }));
  }, []);

  const handleSignupClick = async () => {
    if (agreement) {
      if (
        !emailError.state &&
        !passwordError.state &&
        !imageError.state &&
        !nicknameError.state &&
        !agreeError.state
      ) {
        // 이메일 회원가입
        EmailSignup.mutate(signupInfo);
      }
      //데이터 부족한거 에러표시 넣어야함
      else {
        // 이메일에 문제
        if (emailError.state) {
          setEmailError(prev => ({
            ...prev,
            message: '이메일을 인증해야 회원가입이 가능합니다.',
          }));
        }
        // 비밀번호에 문제
        if (passwordError.state) {
          setPasswordError(prev => ({
            ...prev,
            message: '비밀번호를 정상적으로 입력해야 회원가입이 가능합니다.',
          }));
        }
        // 이미지에 문제
        if (imageError.state) {
          setImageError(prev => ({
            ...prev,
            message: '이미지를 정상적으로 등록해야 회원가입이 가능합니다.',
          }));
        }
        // 닉네임에 문제
        if (nicknameError.state) {
          setNicknameError(prev => ({
            ...prev,
            message: '닉네임을 정상적으로 입력해야 회원가입이 가능합니다.',
          }));
        }
        window.scrollTo(0, 0);
      }
    }
    // 필수 동의 안했을 때
    else {
      setAgreeError({
        state: true,
        message: '필수 약관에 동의하셔야 회원으로 가입할 수 있습니다.',
      });
    }
  };

  return (
    <>
      <Wrapper $size="Signup" option="Center">
        <GoBackNavComp />
        <SignupComp />
        <Box $option="greyLine"></Box>
        <UserdataComp />
        <Button onClick={handleSignupClick} $marginBottom="70px">
          회원 가입
        </Button>
      </Wrapper>
    </>
  );
};

export default SignupPage;
