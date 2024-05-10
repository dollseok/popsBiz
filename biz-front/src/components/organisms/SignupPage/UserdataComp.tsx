import { ProfileImageInput } from '@/components/molecules/SignupPage/ProfileImageInput';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { NicknameInput } from '../../molecules/SignupPage/NicknameInput';
import { SignupAgreement } from './SignupAgreement';

const UserdataComp = () => {
  return (
    <>
      <Wrapper option="Column" $width="40rem" $marginBottom="100px">
        <Text size="body2">프로필 이미지</Text>
        <ProfileImageInput />
        <NicknameInput />
        <SignupAgreement />
      </Wrapper>
    </>
  );
};

export { UserdataComp };
