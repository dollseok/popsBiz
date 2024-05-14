import Button from '@/components/atoms/Button/Button';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import BrandInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/BrandInputComp';
import DateTimeInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/DateTimeInputComp';
import DescriptInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/DescriptInputComp';
import ImagesInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/ImagesInputcomp';
import LocationInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/LocationInputComp';
import TitleInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/TitleInputComp';

const BasicDataComp = () => {
  return (
    <>
      {/* 제목 Input */}
      <TitleInputComp />
      {/* 브랜드명 Input */}
      <BrandInputComp />
      {/* 기간 시간 input */}
      <DateTimeInputComp />
      {/* 장소 input */}
      <LocationInputComp />
      {/* 간단 설명 input */}
      <DescriptInputComp />
      {/* 이미지 input */}
      <ImagesInputComp />
      {/* 다음 버튼 */}
      <Wrapper option="Flex" $marginTop="50px">
        <Button size="small" $marginLeft="auto">
          다음
        </Button>
      </Wrapper>
    </>
  );
};

export default BasicDataComp;
