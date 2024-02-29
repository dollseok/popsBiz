import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router';

const NavComp = () => {
  const navigate = useNavigate();

  const handleRouter = (url: string): void => {
    navigate(url);
  };

  return (
    <>
      <Wrapper
        option="RowSideEnd"
        $width="442px"
        $marginTop="45px"
        $marginBottom="45px"
      >
        <Button
          size="textSize"
          option="textButton"
          onClick={() => {
            handleRouter(PATH.BASICDATA);
          }}
        >
          <Text size="subtitle" $fontWeight="bold">
            기본 정보
          </Text>
        </Button>
        <Button
          size="textSize"
          option="textButton"
          onClick={() => {
            handleRouter(PATH.ADDITIONALDATA);
          }}
        >
          <Text size="subtitle" $fontWeight="bold">
            추가 정보
          </Text>
        </Button>
        <Button
          size="textSize"
          option="textButton"
          onClick={() => {
            handleRouter(PATH.TICKETDATA);
          }}
        >
          <Text size="subtitle" $fontWeight="bold">
            티켓 정보
          </Text>
        </Button>
      </Wrapper>
    </>
  );
};

export default NavComp;
