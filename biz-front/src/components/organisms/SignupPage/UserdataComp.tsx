import { ProfileImageInput } from '@/components/molecules/SignupPage/ProfileImageInput';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { NicknameInput } from '../../molecules/SignupPage/NicknameInput';
import { SignupAgreement } from './SignupAgreement';
import PhoneNumberInput from '@/components/molecules/SignupPage/PhoneNumberInput';

const UserdataComp = () => {
  return (
    <>
      <Wrapper option="Column" $width="40rem" $marginBottom="100px">
        <ProfileImageInput />
        <NicknameInput />
        <PhoneNumberInput />
        <SignupAgreement />
      </Wrapper>
    </>
  );
};

export { UserdataComp };
