import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { EmailInput } from '@/components/molecules/SignupPage/EmailInput';
import { PasswordInput } from '@/components/molecules/SignupPage/PasswordInput';

const SignupComp = () => {
  return (
    <>
      <Wrapper option="Column" $width="40rem">
        <EmailInput />
        <PasswordInput />
      </Wrapper>
    </>
  );
};

export { SignupComp };
