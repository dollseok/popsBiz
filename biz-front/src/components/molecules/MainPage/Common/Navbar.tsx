import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

const Navbar = () => {
  return (
    <Wrapper $size="Nav" option="RowSideEnd">
      <Wrapper>
        <Text>로고</Text>
        <Text>비즈 웹 사이트</Text>
      </Wrapper>
      <Text>유저 프로필</Text>
    </Wrapper>
  );
};

export { Navbar };
