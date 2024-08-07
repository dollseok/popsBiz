import { useEffect, useRef, useState } from 'react';

import { Wrapper } from '../../atoms/Wrapper/Wrapper';
import { Text } from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import { Box } from '../../atoms/Box/Box';
import { Image } from '../../atoms/Image/Image';
import defaultImage from '@/assets/images/default_image.png';
import { useUploadProfileImage } from '@/apis/User/Mutations/useUploadProfileImage';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  imageErrorState,
  profileImageState,
  signupInfoState,
} from '@/states/User';

const ProfileImageInput = () => {
  const LIMITED_SIZE = 10 * 1024 ** 2; // 10MB

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string>(defaultImage);

  const setSignupInfo = useSetRecoilState(signupInfoState); // 회원가입에 요구되는 데이터
  const [profileImage, setProfileImage] = useRecoilState(profileImageState);
  const [imageError, setImageError] = useRecoilState(imageErrorState);

  // const uploadProfileImage = useUploadProfileImage();

  const handleImageInput = () => {
    imageInputRef.current?.click();
  };

  const imageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    // 파일이 아무 것도 없으면 리턴
    if (!e.target.files) {
      setImageError({
        state: true,
        message: '이미지를 등록해야 회원으로 가입이 할 수 있습니다.',
      });

      return;
    }

    // 파일이 있을 때 이미지 설정
    const file = e.target.files[0];
    if (file) {
      if (file.size <= LIMITED_SIZE) {
        // 용량 설정
        let imageUrl = window.URL.createObjectURL(file);
        setImageError({
          state: false,
          message: '',
        });
        setProfileImageUrl(imageUrl); // 이미지 미리보기
        setImageFile(file); // 이미지 파일 자체 변수 설정
      } else {
        setImageError({
          state: true,
          message: '이미지 크기는 10MB 이하만 등록할 수 있습니다.',
        });
      }
    }
  };

  const handleUploadImage = () => {
    if (imageFile) {
      const blob = new Blob([imageFile], { type: 'image/jpeg' });
      setProfileImage(blob);
      setSignupInfo(prev => ({ ...prev, hasProfileImage: true }));
      // uploadProfileImage.mutate({ url: '', blob: blob }); // 이미지 업로드하는 api호출, 타입 맞추기 위해 url: ''을 보냄
    }
  };

  useEffect(() => {
    handleUploadImage();
  }, [imageFile]);

  return (
    <>
      <Wrapper option="Column" $marginBottom="10px">
        <Text size="body2">프로필 이미지</Text>
        <Wrapper option="RowSideEnd" $marginBottom="10px">
          <Wrapper option="Column">
            <Box $option="InputBox">
              {imageFile ? imageFile.name : '파일 없음'}
            </Box>
            <Wrapper option="RowSideEnd" $width="423.99px">
              <Wrapper option="Column">
                <Text size="body4" $color="grey1">
                  * 이미지는 png, jpeg, jpg만 사용 가능합니다.
                  <br />* 이미지 크기는 10MB 이하만 사용 가능합니다.
                </Text>
              </Wrapper>
              <Button
                size="extraSmall"
                $backgroundColor="grey1"
                onClick={handleImageInput}
              >
                파일 선택
              </Button>
            </Wrapper>
          </Wrapper>
          <Image
            src={profileImageUrl}
            width={118}
            height={118}
            $borderRadius={56}
          />
        </Wrapper>
        <Text $color="danger" size="body4" $marginLeft="10px">
          {imageError.message}
        </Text>
      </Wrapper>
      {/* 보이지 않는 파트 */}
      <input
        type="file"
        accept=".png, .jpeg, .jpg"
        style={{ display: 'none' }}
        ref={imageInputRef}
        onChange={imageUpload}
      ></input>
    </>
  );
};
export { ProfileImageInput };
