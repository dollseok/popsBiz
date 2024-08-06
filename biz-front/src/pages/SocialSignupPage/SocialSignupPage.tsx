import { useSocialSignup } from '@/apis/User/Mutations/useSocialSignup';
import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { GoBackNavComp } from '@/components/molecules/SignupPage/GoBackNavComp';
import { UserdataComp } from '@/components/organisms/SignupPage/UserdataComp';
import {
  agreeErrorState,
  agreementState,
  imageErrorState,
  profileNameErrorState,
  signupModeState,
  socialSignupInfoState,
} from '@/states/User';
import { useEffect } from 'react';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';

const SocialSignupPage = () => {
  const socialSignupInfo = useRecoilValue(socialSignupInfoState); // 회원가입에 요구되는 데이터
  const agreement = useRecoilValue(agreementState); // 필수 동의 데이터

  const setSignupMode = useSetRecoilState(signupModeState);
  const [imageError, setImageError] = useRecoilState(imageErrorState);
  const [profileNameError, setProfileNameError] = useRecoilState(
    profileNameErrorState
  );
  const [agreeError, setAgreeError] = useRecoilState(agreeErrorState);

  const resetSocialSignupInfo = useResetRecoilState(socialSignupInfoState);

  const socialSignup = useSocialSignup();

  const handleSignupClick = async () => {
    if (agreement) {
      if (!imageError && !profileNameError && !agreeError) {
        // 소셜 로그인 진행
        socialSignup.mutate(socialSignupInfo);
      }
      // 데이터 부족한 것 에러 보여줘야 함
      else {
        // 이미지에 문제
        if (imageError.state) {
          setImageError(prev => ({
            ...prev,
            message: '이미지를 정상적으로 등록해야 회원가입이 가능합니다.',
          }));
        }
        // 닉네임에 문제
        if (profileNameError.state) {
          setProfileNameError(prev => ({
            ...prev,
            message: '닉네임을 정상적으로 입력해야 회원가입이 가능합니다.',
          }));
        }
        window.scrollTo(0, 0);
        console.log(socialSignupInfo);
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

  // 페이지 렌더링 시 소셜 로그인임을 체크
  useEffect(() => {
    setSignupMode('social');
  }, []);

  // 페이지 렌더링 되었을 때 errorstate 전부 true로 -> 그래야 아무것도 아닐 때 회원가입 못하게 막음
  useEffect(() => {
    resetSocialSignupInfo();

    setImageError(prev => ({ ...prev, state: true }));
    setProfileNameError(prev => ({ ...prev, state: true }));
    setAgreeError(prev => ({ ...prev, state: true }));
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
        <Button onClick={handleSignupClick} $marginBottom="70px">
          회원 가입
        </Button>
      </Wrapper>
    </>
  );
};

export default SocialSignupPage;
