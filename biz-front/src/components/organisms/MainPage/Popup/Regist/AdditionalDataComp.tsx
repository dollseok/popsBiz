import AdmissionInfoComp from '@/components/molecules/MainPage/Popup/PopupRegist/AddtionalData/AdmissionInfoComp';
import EventInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/AddtionalData/EventInputComp';
import HashtagInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/AddtionalData/HashtagInputComp';
import PopupNoticeInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/AddtionalData/PopupNoticeInputComp';
import ReserveLinkInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/AddtionalData/ReserveLinkInputComp';
import SiteInputComp from '@/components/molecules/MainPage/Popup/PopupRegist/AddtionalData/SiteInputComp';

const AddtionalDataComp = () => {
  return (
    <>
      {/* 입장 정보 */}
      <AdmissionInfoComp />
      {/* 대표 예약 링크 */}
      <ReserveLinkInputComp />
      {/* 해시태그 */}
      <HashtagInputComp />
      {/* SNS/Website */}
      <SiteInputComp />
      {/* 이벤트 */}
      <EventInputComp />
      {/* 공지사항 */}
      <PopupNoticeInputComp />
    </>
  );
};

export default AddtionalDataComp;
