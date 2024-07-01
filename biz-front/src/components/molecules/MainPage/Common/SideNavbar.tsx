import Button from '@/components/atoms/Button/Button';
import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import { PATH } from '@/constants/path';
import { useNavigate } from 'react-router';
import { AiOutlineShop, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineArticle, MdKeyboardArrowDown } from 'react-icons/md';

const SideNavBar = () => {
  const navigate = useNavigate();

  const handleRouter = (url: string): void => {
    navigate(url);
  };

  return (
    <Wrapper $size="SideNav">
      <Wrapper $marginLeft="20px">
        <Button option="SideNavMainButton" size="none">
          <AiOutlineUser size={23} />
          <Text $marginLeft="7px" $marginRight="35px">
            회원 정보 관리
          </Text>
          <MdKeyboardArrowDown size={23} />
        </Button>
        <Button
          option="SideNavButton"
          size="none"
          onClick={() => handleRouter(PATH.USERPROFILE)}
        >
          프로필 관리
        </Button>
        <Button
          option="SideNavButton"
          size="none"
          onClick={() => handleRouter(PATH.USERPAYMENT)}
        >
          결제 정보 관리
        </Button>
      </Wrapper>

      <Wrapper $marginLeft="20px">
        <Button option="SideNavMainButton" size="none">
          <AiOutlineShop size={23} />
          <Text $marginLeft="7px" $marginRight="35px">
            팝업 정보 관리
          </Text>
          <MdKeyboardArrowDown size={23} />
        </Button>
        <Button
          option="SideNavButton"
          size="none"
          onClick={() => handleRouter(PATH.POPUPLIST)}
        >
          팝업 목록
        </Button>
        <Button
          option="SideNavButton"
          size="none"
          onClick={() => handleRouter(PATH.POPUPTICKET)}
        >
          티켓 관리
        </Button>
      </Wrapper>

      <Wrapper $marginLeft="20px">
        <Button
          option="SideNavMainButton"
          size="none"
          onClick={() => handleRouter(PATH.NOTICE)}
        >
          <MdOutlineArticle size={23} />
          <Text $marginLeft="7px">공지 사항</Text>
        </Button>
      </Wrapper>

      <Wrapper $marginLeft="20px">
        <Button
          option="SideNavMainButton"
          size="none"
          onClick={() => handleRouter(PATH.INQUIRY)}
        >
          <MdOutlineArticle size={23} />
          <Text $marginLeft="7px">1:1 문의</Text>
        </Button>
      </Wrapper>

      <Wrapper option="Center" $marginTop="83px">
        <Button
          option="blueBorderTextButton"
          onClick={() => handleRouter(PATH.POPUPREGIST)}
        >
          팝업 등록
        </Button>
      </Wrapper>
    </Wrapper>
  );
};

export { SideNavBar };
