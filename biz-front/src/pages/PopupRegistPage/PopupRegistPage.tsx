import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import NavComp from '@/components/molecules/MainPage/Popup/Common/NavComp';
import { Outlet } from 'react-router';

const PopupRegistPage = () => {
  return (
    <>
      <Wrapper
        $paddingLeft="62px"
        $paddingRight="62px"
        $paddingTop="45px"
        $paddingBottom="45px"
      >
        <Text size="heading" $fontWeight="bold">
          팝업 등록
        </Text>
        <NavComp />
        <Outlet></Outlet>
      </Wrapper>
    </>
  );
};

export default PopupRegistPage;
