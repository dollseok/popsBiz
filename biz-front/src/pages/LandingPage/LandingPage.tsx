import { Wrapper } from '@/components/atoms/Wrapper/Wrapper.styles';
import { LoginComp } from '@/components/molecules/LandingPage/LoginComp';
import { SignupButtonsComp } from '@/components/molecules/LandingPage/SignupButtonsComp';

const LandingPage = () => {
  return (
    <Wrapper $marginLeft="220px" $marginRight="220px">
      <Wrapper $size="Login" option="Center" $marginLeft="auto">
        <LoginComp />
        <SignupButtonsComp />
      </Wrapper>
    </Wrapper>
  );
};

export default LandingPage;
