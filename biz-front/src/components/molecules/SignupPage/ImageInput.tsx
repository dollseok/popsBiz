import { useRef, useState } from 'react';

import { Wrapper } from '../../atoms/Wrapper/Wrapper';
import { Text } from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import { Box } from '../../atoms/Box/Box';
import { Image } from '../../atoms/Image/Image';
import defaultImage from '@/assets/images/default_image.png';

const ImageInput = () => {
  const imageInput = useRef<HTMLInputElement | null>(null);
  const [profileImageUrl, setProfileImageUrl] = useState<string>(defaultImage);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleImageInput = () => {
    imageInput.current?.click();
  };

  const imageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();

    // 파일이 아무 것도 없으면 리턴
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];

    if (file) {
      let imageUrl = window.URL.createObjectURL(file);
      setProfileImageUrl(imageUrl);
      setProfileImage(file);
      console.log(file, 'file');
    }
  };

  return (
    <>
      <Wrapper option="RowSideEnd">
        <Wrapper option="Column">
          <Box $option="InputBox">
            {profileImage ? profileImage.name : '파일 없음'}
          </Box>
          <Wrapper option="RowSideEnd" $width="423.99px">
            <Wrapper option="Column">
              <Text size="body4" $color="grey1">
                * 이미지는 png,jpeg만 사용 가능합니다.
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

      {/* 보이지 않는 파트 */}
      <input
        type="file"
        accept=".png, .jpeg"
        style={{ display: 'none' }}
        ref={imageInput}
        onChange={imageUpload}
      ></input>
    </>
  );
};
export { ImageInput };
