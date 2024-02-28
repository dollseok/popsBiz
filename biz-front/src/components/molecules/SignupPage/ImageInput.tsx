import { useEffect, useRef, useState } from 'react';

import { Wrapper } from '../../atoms/Wrapper/Wrapper';
import { Text } from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import { Box } from '../../atoms/Box/Box';
import { Image } from '../../atoms/Image/Image';
import defaultImage from '@/assets/images/default_image.png';
import { useUploadProfileImage } from '@/apis/User/Mutations/useUploadProfileImage';
import { useRecoilState } from 'recoil';
import { imageErrorState } from '@/states/User';

const ImageInput = () => {
  const LIMITED_SIZE = 10 * 1024 ** 2; // 10MB

  const imageInput = useRef<HTMLInputElement | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string>(defaultImage);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [imageError, setImageError] = useRecoilState(imageErrorState);

  const uploadProfileImage = useUploadProfileImage();

  const handleImageInput = () => {
    imageInput.current?.click();
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

    const file = e.target.files[0];

    if (file) {
      if (file.size <= LIMITED_SIZE) {
        // 용량 설정
        let imageUrl = window.URL.createObjectURL(file);
        setImageError({
          state: false,
          message: '',
        });
        setProfileImageUrl(imageUrl);
        setImageFile(file);
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
      uploadProfileImage.mutate({ url: '', blob: blob }); // 이미지 업로드하는 api호출, 타입 맞추기 위해 url: ''을 보냄
    }
  };

  useEffect(() => {
    handleUploadImage();
  }, [imageFile]);

  return (
    <>
      <Wrapper option="Column" $marginBottom="10px">
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
        ref={imageInput}
        onChange={imageUpload}
      ></input>
    </>
  );
};
export { ImageInput };
