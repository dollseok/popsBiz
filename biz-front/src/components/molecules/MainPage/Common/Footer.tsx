import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

const Footer = () => {
  return (
    <Wrapper $size="Footer" option="Center">
      <Text>온팝컴퍼니 | 사업자등록번호 616-87-02217 | 대표 하민태</Text>
      <Text>
        주소 : 서울특별시 용산구 한강대로 366 패스트파이브 (동자동, 트윈시티
        남산)
      </Text>
      <Text>이메일 : pops_contact@onpop.co.kr</Text>
      <Wrapper option="Row">
        <Text>서비스 이용약관</Text>
        <Text>개인 정보 처리 방침</Text>
      </Wrapper>
      <Text>COPYRIGHTⓒ 2022 ONPOP COMPANY INC. ALL RIGHTS RESERVED</Text>
    </Wrapper>
  );
};

export { Footer };
