import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router';

const SideNavBar = () => {
  const navigate = useNavigate();

  const handleRouter = (url: string): void => {
    navigate(url);
  };

  return (
    <Wrapper option="Column" $size="SideNav">
      <Button option="SideNavMainButton">
        <Text>회원 정보 관리</Text>
      </Button>
      <Button
        option="SideNavButton"
        onClick={() => handleRouter(PATH.USERPROFILE)}
      >
        프로필 관리
      </Button>
      <Button
        option="SideNavButton"
        onClick={() => handleRouter(PATH.USERPAYMENT)}
      >
        결제 정보 관리
      </Button>

      <Button option="SideNavMainButton" $marginTop="20px">
        <Text>팝업 정보 관리</Text>
      </Button>
      <Button
        option="SideNavButton"
        onClick={() => handleRouter(PATH.POPUPLIST)}
      >
        팝업 목록
      </Button>
      <Button
        option="SideNavButton"
        onClick={() => handleRouter(PATH.POPUPREGIST)}
      >
        팝업 등록
      </Button>
      <Button
        option="SideNavButton"
        onClick={() => handleRouter(PATH.POPUPTICKET)}
      >
        티켓 관리
      </Button>

      <Button
        option="SideNavMainButton"
        $marginTop="20px"
        onClick={() => handleRouter(PATH.NOTICE)}
      >
        <Text>공지 사항</Text>
      </Button>

      <Button
        option="SideNavMainButton"
        $marginTop="20px"
        onClick={() => handleRouter(PATH.INQUIRY)}
      >
        <Text>1:1 문의</Text>
      </Button>
    </Wrapper>
  );
};

export { SideNavBar };
