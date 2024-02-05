import { ImageInput } from '@/components/molecules/SignupPage/ImageInput';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { NicknameInput } from './NicknameInput';
import { SignupAgreement } from './SignupAgreement';

const UserdataComp = () => {
  return (
    <>
      <Wrapper option="Column" $width="40rem" $marginBottom="100px">
        <Text size="body2">프로필 이미지</Text>
        <ImageInput />
        <NicknameInput />
        <SignupAgreement />
      </Wrapper>
    </>
  );
};

export { UserdataComp };
