import { useSignupEmail } from '@/apis/User/Mutations/useSignupEmail';
import { useUploadProfileImage } from '@/apis/User/Mutations/useUploadProfileImage';
import { useGetPresignedUrl } from '@/apis/User/Queries/useGetPresignedUrl';
import { uploadProfileImage } from '@/apis/User/userAPI';
import { Box } from '@/components/atoms/Box/Box.styles';
import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { GoBackNavComp } from '@/components/molecules/SignupPage/GoBackNavComp';
import { SignupComp } from '@/components/organisms/SignupPage/SignupComp';
import { UserdataComp } from '@/components/organisms/SignupPage/UserdataComp';
import { agreementState, imageFileState, signupInfoState } from '@/states/User';
import { extractIdFromUrl } from '@/utils/extractIdFromUrl';
import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

const SignupPage = () => {
  const [signupInfo, setSignupInfo] = useRecoilState(signupInfoState); // 회원가입에 요구되는 데이터
  const agreement = useRecoilValue(agreementState); // 필수 동의 데이터
  const imageFile = useRecoilValue(imageFileState);

  const uploadProfileImage = useUploadProfileImage();
  const signupEmail = useSignupEmail();
  const getPresignedUrl = useGetPresignedUrl(); // 이미지 업데이트 해줄 url

  const handleUploadImage = (url: string) => {
    const formData = new FormData(); // 이미지 보내줄 때는 FormData에 담아 보내줘야함
    if (imageFile) {
      formData.append('file', imageFile);
      uploadProfileImage.mutate({ url, formData }); // 이미지 업로드하는 api호출;
    }
  };

  const [imageurl, setImageurl] = useState<string>('');

  const handleSignupClick = () => {
    // signupInfo에 profileKey 저장
    const url = getPresignedUrl.data.urls[0]; // S3 Bucket url
    console.log(url);
    console.log(extractIdFromUrl(url));
    const profileKey = 'biz/admin/profiles/' + extractIdFromUrl(url);
    console.log(profileKey);
    setSignupInfo(prev => ({ ...prev, profileKey: profileKey }));
    console.log(imageurl);

    setImageurl(process.env.REACT_APP_S3_DOMAIN + profileKey);

    if (agreement) {
      handleUploadImage(url); // 동의하고 난 후에는 회원가입 절차니 이미지 S3 업로드
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
        <Image src={imageurl}></Image>
      </Wrapper>
    </>
  );
};

export default SignupPage;
