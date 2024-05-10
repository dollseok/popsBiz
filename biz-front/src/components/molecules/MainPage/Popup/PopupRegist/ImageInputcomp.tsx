import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

const ImageInputComp = () => {
  return (
    <>
      <Wrapper>
        <Text size="body1" $fontWeight="bold">
          상세 이미지 (Image)
        </Text>
        <Text size="body4" $color="grey1">
          소비자들에게 보여주고 싶은 이미지(사진 또는 포스터)를 업로드해보세요.
        </Text>
        <Button></Button>
      </Wrapper>
    </>
  );
};

export default ImageInputComp;
