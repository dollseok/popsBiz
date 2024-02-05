import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { FaArrowLeft } from 'react-icons/fa6';

const GoBackNavComp = () => {
  return (
    <>
      <Wrapper $width="80vw" $marginBottom="85px">
        <Button size="small" option="textButton">
          <FaArrowLeft />
          <Text $marginLeft="10px">뒤로가기</Text>
        </Button>
      </Wrapper>
    </>
  );
};

export { GoBackNavComp };
