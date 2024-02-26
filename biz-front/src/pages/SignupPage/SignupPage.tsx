import { useSignupEmail } from '@/apis/User/Mutations/useSignupEmail';
import { useUploadProfileImage } from '@/apis/User/Mutations/useUploadProfileImage';
import { Box } from '@/components/atoms/Box/Box.styles';
import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { GoBackNavComp } from '@/components/molecules/SignupPage/GoBackNavComp';
import { SignupComp } from '@/components/organisms/SignupPage/SignupComp';
import { UserdataComp } from '@/components/organisms/SignupPage/UserdataComp';
import { agreementState, imageFileState, signupInfoState } from '@/states/User';
import { useRecoilValue } from 'recoil';

const SignupPage = () => {
  const signupInfo = useRecoilValue(signupInfoState); // 회원가입에 요구되는 데이터
  const agreement = useRecoilValue(agreementState); // 필수 동의 데이터
  const imageFile = useRecoilValue(imageFileState);

  const uploadProfileImage = useUploadProfileImage();
  const signupEmail = useSignupEmail();

  const handleUploadImage = () => {
    if (imageFile) {
      const blob = new Blob([imageFile], { type: 'image/jpeg' });
      console.log('blob Image :', imageFile);
      uploadProfileImage.mutate({ url: '', blob: blob }); // 이미지 업로드하는 api호출, 타입 맞추기 위해 url: ''을 보냄
    }
  };

  const handleSignupClick = async () => {
    if (agreement) {
      handleUploadImage(); // 동의하고 난 후에는 회원가입 절차니 이미지 S3 업로드
      signupEmail.mutate(signupInfo);
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
