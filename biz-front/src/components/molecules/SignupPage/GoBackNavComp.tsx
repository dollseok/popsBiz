import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

const GoBackNavComp = () => {
  const navigate = useNavigate();

  const handleGoback = () => {
    navigate(-1);
  };

  return (
    <>
      <Wrapper $width="80vw" $marginBottom="85px">
        <Button size="small" option="textButton" onClick={handleGoback}>
          <FaArrowLeft />
          <Text $marginLeft="10px">뒤로가기</Text>
        </Button>
      </Wrapper>
    </>
  );
};

export { GoBackNavComp };
