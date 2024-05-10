import { Text } from '@/components/atoms/Text/Text';
import { Wrapper } from '@/components/atoms/Wrapper/Wrapper';
import BrandInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/BrandInputComp';
import DateTimeInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/DateTimeInputComp';
import HashtagInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/HashtagInputComp';
import ImageInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/ImageInputcomp';
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
      <HashtagInputComp />
      {/* 이미지 input */}
      <ImageInputComp />
      {/* 다음 버튼 */}
    </>
  );
};

export default BasicDataComp;
