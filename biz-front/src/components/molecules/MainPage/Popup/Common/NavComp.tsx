import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { PATH } from '@/constants/path';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const NavComp = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>('');

  const handleRouter = (url: string): void => {
    setSelected(url);
    navigate(url);
  };

  useEffect(() => {
    setSelected('');
  }, []);

  return (
    <>
      <Wrapper
        option="RowSideEnd"
        $width="500px"
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
          <Text
            size="subtitle"
            $fontWeight={selected === '' ? 'bold' : 'regular'}
            $color={selected === '' ? 'black1' : 'grey1'}
          >
            기본 정보(필수)
          </Text>
          <Text $color="red1" $fontWeight="bold">
            *
          </Text>
        </Button>
        <Button
          size="textSize"
          option="textButton"
          onClick={() => {
            handleRouter(PATH.ADDITIONALDATA);
          }}
        >
          <Text
            size="subtitle"
            $fontWeight={selected === 'additional' ? 'bold' : 'regular'}
            $color={selected === 'additional' ? 'black1' : 'grey1'}
          >
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
          <Text
            size="subtitle"
            $fontWeight={selected === 'ticket' ? 'bold' : 'regular'}
            $color={selected === 'ticket' ? 'black1' : 'grey1'}
          >
            티켓 정보
          </Text>
        </Button>
      </Wrapper>
    </>
  );
};

export default NavComp;
