import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

import logoImage from '@/assets/images/logo.png';
import { useNavigate } from 'react-router';
import Button from '@/components/atoms/Button/Button';
import { PATH } from '@/constants/path';

const Navbar = () => {
  const navigate = useNavigate();

  const handleRouter = (url: string): void => {
    navigate(url);
  };

  return (
    <Wrapper $size="Nav" option="RowSideEnd">
      <Wrapper option="Row">
        <Button
          $width="220px"
          option="none"
          size="none"
          $marginRight="20px"
          onClick={() => handleRouter(PATH.ROOT)}
        >
          <Image width={120} height={27.45} $unit="px" src={logoImage} />
        </Button>

        <Text>비즈 웹 사이트</Text>
      </Wrapper>
      <Text>유저 프로필</Text>
    </Wrapper>
  );
};

export { Navbar };
