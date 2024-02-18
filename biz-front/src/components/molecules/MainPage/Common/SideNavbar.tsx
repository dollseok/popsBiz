import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';

const SideNavBar = () => {
  return (
    <Wrapper option="Column" $size="SideNav">
      <Text>회원 정보 관리</Text>
      <Text>프로필 관리</Text>
      <Text>결제 정보 관리</Text>
      <Text>팝업 목록</Text>
      <Text>팝업 등록</Text>
      <Text>팝업 관리</Text>
      <Text>공지사항</Text>
      <Text>1:1 문의</Text>
    </Wrapper>
  );
};

export { SideNavBar };
